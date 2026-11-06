//! Integration tests for the `nexa-icons` crate.
//!
//! Mirrors the Go test suite and the JavaScript reference contract: dataset
//! shape, compact alias/case/kebab lookup, the inline-SVG attribute contract,
//! size→stroke rule, symbols/sprite, swap pairs and the swap markup, plus the
//! "no hard-coded colors" design rule. No dev-dependencies: std only.

use std::collections::{HashMap, HashSet};

use nexa_icons::{
    get, names, pair, pairs, sprite, swap_mode, swap_svg, Icon, SvgOptions, SwapOptions, SwapPair,
    ICONS, VERSION,
};

fn expected_count() -> usize {
    include_str!("../../data/icons.json")
        .matches("\"kebab\":")
        .count()
}

// ---------------------------------------------------------------------------
// Tiny XML well-formedness checker (std-only, so the crate stays dependency
// free). It understands elements, attributes with quoted values, self-closing
// tags and text content.
// ---------------------------------------------------------------------------
fn assert_well_formed(markup: &str) {
    assert!(!markup.is_empty(), "markup is empty");
    let bytes = markup.as_bytes();
    let mut stack: Vec<String> = Vec::new();
    let mut i = 0;
    while i < bytes.len() {
        if bytes[i] != b'<' {
            i += 1;
            continue;
        }
        let start = i + 1;
        let mut j = start;
        let mut quote = 0u8;
        while j < bytes.len() {
            let byte = bytes[j];
            if quote != 0 {
                if byte == quote {
                    quote = 0;
                }
            } else if byte == b'"' || byte == b'\'' {
                quote = byte;
            } else if byte == b'>' {
                break;
            }
            j += 1;
        }
        assert!(j < bytes.len(), "unterminated tag in: {markup}");
        let tag = &markup[start..j];
        assert!(!tag.is_empty(), "empty tag in: {markup}");
        assert!(
            !tag.starts_with('!') && !tag.starts_with('?'),
            "unexpected declaration in: {markup}"
        );
        if let Some(rest) = tag.strip_prefix('/') {
            let name = rest.trim();
            let opened = stack.pop().expect("closing tag without opening tag");
            assert_eq!(
                name, opened,
                "mismatched closing tag </{name}> in: {markup}"
            );
        } else {
            let trimmed = tag.trim_end();
            let name = trimmed
                .split(|c: char| c.is_ascii_whitespace() || c == '/')
                .next()
                .unwrap_or("");
            assert!(!name.is_empty(), "element without a name in: {markup}");
            if !trimmed.ends_with('/') {
                stack.push(name.to_string());
            }
        }
        i = j + 1;
    }
    assert!(stack.is_empty(), "unclosed tags {stack:?} in: {markup}");
}

/// Collects the value of every `fill="…"` / `stroke="…"` attribute.
fn paint_values(markup: &str) -> Vec<String> {
    let mut values = Vec::new();
    for attribute in ["fill=\"", "stroke=\""] {
        for fragment in markup.split(attribute).skip(1) {
            if let Some(value) = fragment.split('"').next() {
                values.push(value.to_string());
            }
        }
    }
    values
}

fn contains_hex_color(markup: &str) -> bool {
    for (index, _) in markup.char_indices() {
        if markup.as_bytes()[index] != b'#' {
            continue;
        }
        let digits: String = markup[index + 1..]
            .chars()
            .take_while(|c| c.is_ascii_hexdigit())
            .collect();
        if matches!(digits.len(), 3 | 4 | 6 | 8) {
            return true;
        }
    }
    false
}

fn assert_no_colors(markup: &str) {
    assert!(
        !contains_hex_color(markup),
        "hard-coded hex color in: {markup}"
    );
    let lower = markup.to_ascii_lowercase();
    for forbidden in ["rgb(", "hsl(", "oklch(", "style=\"color"] {
        assert!(
            !lower.contains(forbidden),
            "forbidden color construct {forbidden} in: {markup}"
        );
    }
    for value in paint_values(markup) {
        assert!(
            value == "currentColor" || value == "none",
            "paint value {value:?} is not currentColor/none in: {markup}"
        );
    }
}

fn assert_kebab(name: &str) {
    assert!(!name.is_empty(), "empty kebab");
    assert!(
        name.split('-').all(|segment| !segment.is_empty()
            && segment
                .chars()
                .all(|c| c.is_ascii_lowercase() || c.is_ascii_digit())),
        "kebab {name:?} is not lower-kebab-case"
    );
}

fn icon(name: &str) -> &'static Icon {
    get(name).unwrap_or_else(|| panic!("missing icon {name}"))
}

// ---------------------------------------------------------------------------
// Dataset shape + lookup
// ---------------------------------------------------------------------------
#[test]
fn dataset_has_166_icons() {
    assert_eq!(ICONS.len(), expected_count());
    assert!(!VERSION.is_empty(), "VERSION is empty");

    let mut icon_names = HashSet::new();
    let mut kebabs = HashSet::new();
    for icon in ICONS {
        assert!(!icon.name.is_empty(), "icon with empty name");
        assert!(!icon.kebab.is_empty(), "icon with empty kebab");
        assert_kebab(icon.kebab);
        assert!(!icon.preset.is_empty(), "{}: missing preset", icon.name);
        assert!(!icon.trigger.is_empty(), "{}: missing trigger", icon.name);
        assert!(
            !icon.inner.is_empty(),
            "{}: missing inner markup",
            icon.name
        );
        assert!(
            icon.inner.starts_with('<'),
            "{}: malformed inner markup",
            icon.name
        );
        assert!(!icon.aliases.is_empty(), "{}: missing aliases", icon.name);
        assert!(
            icon.aliases.contains(&icon.name),
            "{}: aliases must include the canonical name",
            icon.name
        );
        assert!(!icon.keywords.is_empty(), "{}: missing keywords", icon.name);
        assert!(icon_names.insert(icon.name), "duplicate name {}", icon.name);
        assert!(kebabs.insert(icon.kebab), "duplicate kebab {}", icon.kebab);
    }
    assert_eq!(icon_names.len(), expected_count());
    assert!(ICONS.iter().any(|icon| icon.trigger == "always"));
}

#[test]
fn aliases_match_data() {
    assert_eq!(icon("Bell").aliases, &["Bell"][..]);
    assert_eq!(icon("X").aliases, &["X", "XIcon"][..]);
    assert_eq!(
        icon("AlertTriangle").aliases,
        &["AlertTriangle", "TriangleAlert"][..]
    );

    for icon in ICONS {
        for alias in icon.aliases {
            let resolved = get(alias).unwrap_or_else(|| panic!("alias {alias} does not resolve"));
            assert_eq!(
                resolved.name, icon.name,
                "alias {alias} resolved to {} instead of {}",
                resolved.name, icon.name
            );
        }
    }
}

#[test]
fn get_uses_compact_normalization() {
    // Mirrors js/index.mjs compact(): lower case, strip spaces/underscores/hyphens.
    let cases = [
        ("bell", "Bell"),
        ("BELL", "Bell"),
        ("  bElL  ", "Bell"),
        ("xicon", "X"),
        ("XICON", "X"),
        ("TriangleAlert", "AlertTriangle"),
        ("trianglealert", "AlertTriangle"),
        ("triangle-exclamation-point", "AlertTriangle"),
        ("TRIANGLE-EXCLAMATION-POINT", "AlertTriangle"),
        ("Triangle Exclamation Point", "AlertTriangle"),
        ("triangle exclamation point", "AlertTriangle"),
        ("triangle_exclamation_point", "AlertTriangle"),
        ("Triangle Alert", "AlertTriangle"),
        ("Alert Triangle", "AlertTriangle"),
        ("Alert-Triangle", "AlertTriangle"),
        ("alert_triangle", "AlertTriangle"),
        ("RotateCcwClock", "History"),
        ("rotate-ccw-clock", "History"),
        ("Grid3x3", "Grid3x3"),
        ("grid-3x3", "Grid3x3"),
        ("grid 3x3", "Grid3x3"),
        ("funnel", "Filter"),
        ("ImageIcon", "ImageIcon"),
        ("LinkIcon", "LinkIcon"),
    ];
    for (query, expected) in cases {
        assert_eq!(icon(query).name, expected, "get({query:?})");
    }
    for missing in [
        "",
        "   ",
        "Nope",
        "FilterIcon",
        "funnel-icon",
        "ClockIcon",
        "nexa-bell",
        "<script>",
    ] {
        assert!(get(missing).is_none(), "get({missing:?}) should be None");
    }
}

#[test]
fn names_are_sorted_unique_and_deterministic() {
    let all = names();
    assert_eq!(all.len(), expected_count());
    assert!(
        all.windows(2).all(|pair| pair[0] <= pair[1]),
        "names() is not sorted"
    );
    let unique: HashSet<_> = all.iter().copied().collect();
    assert_eq!(unique.len(), expected_count(), "names() has duplicates");
    assert_eq!(all, names(), "names() is not deterministic");
    for name in all {
        assert!(ICONS.iter().any(|icon| icon.name == name));
    }
}

// ---------------------------------------------------------------------------
// Inline SVG contract
// ---------------------------------------------------------------------------
#[test]
fn every_icon_renders_the_js_contract() {
    for icon in ICONS {
        let svg = icon.svg(SvgOptions::new());
        assert_well_formed(&svg);
        assert!(svg.starts_with("<svg "), "{}: not an svg", icon.name);
        assert!(svg.ends_with("</svg>"), "{}: not closed", icon.name);
        assert!(
            svg.contains(icon.inner),
            "{}: rendered inner markup does not match data",
            icon.name
        );
        for expected in [
            "xmlns=\"http://www.w3.org/2000/svg\"",
            "width=\"24\"",
            "height=\"24\"",
            "viewBox=\"0 0 24 24\"",
            "fill=\"none\"",
            "stroke=\"currentColor\"",
            "stroke-width=\"1.5\"",
            "stroke-linecap=\"round\"",
            "stroke-linejoin=\"round\"",
            "class=\"nexa-icon\"",
            "aria-hidden=\"true\"",
            "focusable=\"false\"",
        ] {
            assert!(
                svg.contains(expected),
                "{}: SVG missing {expected}",
                icon.name
            );
        }
        assert!(
            svg.contains(&format!("data-nexa-icon=\"{}\"", icon.kebab)),
            "{}: missing data-nexa-icon",
            icon.name
        );
        assert!(
            !svg.contains("role=\"img\""),
            "{}: decorative SVG has role=img",
            icon.name
        );
        assert!(
            !svg.contains("data-nexa-anim"),
            "{}: decorative SVG has animation data",
            icon.name
        );
        assert_no_colors(icon.inner);
        assert_no_colors(&svg);
        assert_eq!(
            svg,
            icon.svg(SvgOptions::new()),
            "{}: SVG not deterministic",
            icon.name
        );
    }
}

#[test]
fn default_svg_matches_the_js_markup_byte_for_byte() {
    let bell = icon("Bell");
    let expected = format!(
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" \
         fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" \
         stroke-linejoin=\"round\" class=\"nexa-icon\" aria-hidden=\"true\" focusable=\"false\" \
         data-nexa-icon=\"bell\">{}</svg>",
        bell.inner
    );
    assert_eq!(bell.svg(SvgOptions::new()), expected);
}

#[test]
fn size_derives_stroke_width() {
    let bell = icon("Bell");
    let cases: [(SvgOptions, &str, &str); 9] = [
        (SvgOptions::new(), "width=\"24\"", "stroke-width=\"1.5\""),
        (
            SvgOptions::new().size(16),
            "width=\"16\"",
            "stroke-width=\"2\"",
        ),
        (
            SvgOptions::new().size(20),
            "width=\"20\"",
            "stroke-width=\"1.75\"",
        ),
        (
            SvgOptions::new().size(24),
            "width=\"24\"",
            "stroke-width=\"1.5\"",
        ),
        (
            SvgOptions::new().size(40),
            "width=\"40\"",
            "stroke-width=\"1.5\"",
        ),
        (
            SvgOptions::new().size(0),
            "width=\"24\"",
            "stroke-width=\"1.5\"",
        ),
        (
            SvgOptions::new().size(20).stroke_width(2.5),
            "width=\"20\"",
            "stroke-width=\"2.5\"",
        ),
        (
            SvgOptions::new().size(16).stroke_width(1.5),
            "width=\"16\"",
            "stroke-width=\"1.5\"",
        ),
        (
            SvgOptions::new().size(20).stroke_width(-1.0),
            "width=\"20\"",
            "stroke-width=\"1.75\"",
        ),
    ];
    for (options, size, stroke) in cases {
        let svg = bell.svg(options);
        assert!(
            svg.contains(size) && svg.contains(stroke),
            "expected {size} and {stroke} in {svg}"
        );
    }
}

#[test]
fn options_build_the_js_contract() {
    let bell = icon("Bell");

    // Class always merges after nexa-icon.
    let classed = bell.svg(SvgOptions::new().class("hero"));
    assert!(classed.contains("class=\"nexa-icon hero\""), "{classed}");

    // Label / title switch to role=img, escaping like JS esc().
    let labelled = bell.svg(SvgOptions::new().label("Alerts"));
    assert_well_formed(&labelled);
    assert!(labelled.contains("role=\"img\""));
    assert!(labelled.contains("aria-label=\"Alerts\""));
    assert!(!labelled.contains("aria-hidden"));
    let escaped = bell.svg(SvgOptions::new().label("A & B \"quoted\" <tag>"));
    assert_well_formed(&escaped);
    assert!(
        escaped.contains("aria-label=\"A &amp; B &quot;quoted&quot; &lt;tag&gt;\""),
        "{escaped}"
    );

    let titled = bell.svg(SvgOptions::new().title("Notifications"));
    assert_well_formed(&titled);
    assert!(titled.contains("role=\"img\""));
    assert!(!titled.contains("aria-hidden"));
    assert!(!titled.contains("aria-label="));
    assert!(titled.contains("<title>Notifications</title>"), "{titled}");
    let both = bell.svg(SvgOptions::new().label("Alerts").title("Notifications"));
    assert!(both.contains("aria-label=\"Alerts\""));
    assert!(both.contains("<title>Notifications</title>"));
    let escaped_title = bell.svg(SvgOptions::new().title("A & B \"q\" <t>"));
    assert_well_formed(&escaped_title);
    assert!(
        escaped_title.contains("<title>A &amp; B &quot;q&quot; &lt;t&gt;</title>"),
        "{escaped_title}"
    );

    // Animation contract: preset, trigger override, active.
    let animated = bell.svg(SvgOptions::new().anim("ring"));
    assert_well_formed(&animated);
    assert!(animated.contains("data-nexa-anim=\"ring\""));
    assert!(animated.contains("data-nexa-trigger=\"hover\""));
    assert!(!animated.contains("data-nexa-active"));
    let focus = bell.svg(SvgOptions::new().anim("pulse").trigger("focus"));
    assert!(focus.contains("data-nexa-trigger=\"focus\""), "{focus}");
    let manual = bell.svg(SvgOptions::new().anim("ring").trigger("manual"));
    assert!(manual.contains("data-nexa-trigger=\"manual\""), "{manual}");
    let active = bell.svg(SvgOptions::new().anim("ring").active(true));
    assert!(active.contains("data-nexa-active=\"true\""), "{active}");
    assert!(
        !bell
            .svg(SvgOptions::new().active(true))
            .contains("data-nexa-active"),
        "active without anim must not emit data-nexa-active (JS parity)"
    );

    // The "always" trigger comes from data, not a hard-coded hover.
    let always = ICONS
        .iter()
        .find(|icon| icon.trigger == "always")
        .expect("an icon with the always trigger");
    assert!(always
        .svg(SvgOptions::new().anim(always.preset))
        .contains("data-nexa-trigger=\"always\""));
}

// ---------------------------------------------------------------------------
// Symbols and sprite
// ---------------------------------------------------------------------------
#[test]
fn symbols_and_sprite_are_complete() {
    let bell = icon("Bell");
    let symbol = bell.symbol();
    assert_well_formed(&symbol);
    assert_eq!(
        symbol,
        format!(
            "<symbol id=\"nexa-bell\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" \
             stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">{}</symbol>",
            bell.inner
        )
    );
    assert!(icon("XIcon").symbol().contains("id=\"nexa-x\""));

    let markup = sprite();
    assert_well_formed(&markup);
    assert!(markup.starts_with("<svg xmlns=\"http://www.w3.org/2000/svg\""));
    assert!(markup.ends_with("</svg>"));
    assert!(markup.contains("aria-hidden=\"true\""));
    assert_eq!(
        markup.matches("<symbol ").count(),
        expected_count(),
        "sprite symbol count"
    );
    assert_eq!(
        markup.matches("stroke-width=\"2\"").count(),
        expected_count()
    );
    assert_eq!(markup, sprite(), "sprite() is not deterministic");

    for icon in ICONS {
        let id = format!("id=\"nexa-{}\"", icon.kebab);
        assert!(markup.contains(&id), "sprite missing {id}");
        assert_eq!(markup.matches(&id).count(), 1, "duplicate symbol id {id}");
    }
    assert_no_colors(&markup);
}

// ---------------------------------------------------------------------------
// Swap / morph support (data/swaps.json)
// ---------------------------------------------------------------------------

/// Mirrors data/swaps.json: 26 explicit `(from, to, mode)` entries. Reverse
/// edges are implied by the generators; the tests derive them with the same
/// first-declaration-wins rule and compare against the generated table.
const DECLARED_SWAPS: [(&str, &str, &str); 26] = [
    ("ArrowLeft", "ArrowRight", "mirror"),
    ("ArrowUp", "ArrowDown", "flip"),
    ("ChevronLeft", "ChevronRight", "mirror"),
    ("ChevronUp", "ChevronDown", "flip"),
    ("ChevronsLeftRight", "ChevronsUpDown", "rotate"),
    ("PanelLeftClose", "PanelLeftOpen", "fade"),
    ("Plus", "Minus", "fade"),
    ("PlusCircle", "XCircle", "fade"),
    ("Check", "X", "fade"),
    ("CheckCircle", "XCircle", "fade"),
    ("CheckCircle2", "XCircle", "fade"),
    ("Heart", "HeartOff", "fade"),
    ("Eye", "EyeOff", "fade"),
    ("Sun", "Moon", "rotate"),
    ("Upload", "Download", "fade"),
    ("ArrowUpRight", "ArrowDownRight", "flip"),
    ("TrendingUp", "TrendingDown", "flip"),
    ("MoreHorizontal", "MoreVertical", "rotate"),
    ("Lock", "Key", "fade"),
    ("Mail", "MailCheck", "fade"),
    ("Star", "Bookmark", "fade"),
    ("Shield", "ShieldCheck", "fade"),
    ("MessageSquare", "Mail", "slide"),
    ("Filter", "SlidersHorizontal", "slide"),
    ("Square", "Circle", "fade"),
    ("Bold", "Italic", "slide"),
];

const SWAP_MODES: [&str; 5] = ["mirror", "flip", "rotate", "slide", "fade"];

fn valid_swap_mode(mode: &str) -> bool {
    SWAP_MODES.contains(&mode)
}

/// Mirrors the JS/React generators: lowercase, drop spaces/underscores/hyphens.
fn compact_swap_key(value: &str) -> String {
    value
        .to_lowercase()
        .chars()
        .filter(|character| !matches!(character, ' ' | '\t' | '\n' | '\r' | '_' | '-'))
        .collect()
}

fn add_declared_swap(
    keys: &mut HashSet<String>,
    edges: &mut Vec<SwapPair>,
    index: &mut HashMap<&'static str, SwapPair>,
    from_name: &str,
    to_name: &str,
    mode: &'static str,
    only_if_missing: bool,
) {
    let from =
        get(from_name).unwrap_or_else(|| panic!("declared swap source {from_name} is not an icon"));
    let to =
        get(to_name).unwrap_or_else(|| panic!("declared swap target {to_name} is not an icon"));
    assert!(
        valid_swap_mode(mode),
        "declared swap mode {mode:?} is invalid"
    );
    let edge = SwapPair {
        from: from.name,
        to: to.name,
        mode,
    };
    let mut added = false;
    for key in [
        from.name.to_lowercase(),
        compact_swap_key(from.name),
        from.kebab.to_string(),
        compact_swap_key(from.kebab),
    ] {
        if only_if_missing && keys.contains(&key) {
            continue;
        }
        keys.insert(key);
        added = true;
    }
    if added {
        edges.push(edge);
        index.insert(from.name, edge);
    }
}

/// Replays the generators' directed expansion over the declared pairs.
fn expand_swaps() -> (Vec<SwapPair>, HashMap<&'static str, SwapPair>) {
    let mut keys = HashSet::new();
    let mut edges = Vec::new();
    let mut index = HashMap::new();
    for (from, to, mode) in DECLARED_SWAPS {
        add_declared_swap(&mut keys, &mut edges, &mut index, from, to, mode, false);
        add_declared_swap(&mut keys, &mut edges, &mut index, to, from, mode, true);
    }
    (edges, index)
}

#[test]
fn swap_pairs_match_data() {
    assert_eq!(DECLARED_SWAPS.len(), 26);
    let (expected, expected_index) = expand_swaps();
    assert_eq!(expected.len(), 49, "expected 49 directed swap edges");

    assert_eq!(pairs().len(), expected.len());
    assert_eq!(pairs(), expected.as_slice());
    for edge in pairs() {
        assert!(
            !edge.from.is_empty() && !edge.to.is_empty(),
            "pair missing from/to: {edge:?}"
        );
        assert!(valid_swap_mode(edge.mode));
    }

    for (from, want) in &expected_index {
        assert_eq!(pair(from), Some(*want), "pair({from})");
        assert!(
            get(want.to).is_some(),
            "pair target {} is not an icon",
            want.to
        );
        assert!(
            pair(want.to).is_some(),
            "pair target {} has no pair of its own",
            want.to
        );
    }

    // Both directions of every declared pair resolve. The reverse may be an
    // earlier declaration (e.g. XCircle -> PlusCircle wins over CheckCircle).
    for (from_name, to_name, mode) in DECLARED_SWAPS {
        let from = get(from_name).unwrap();
        let to = get(to_name).unwrap();
        assert_eq!(
            pair(from.name),
            Some(SwapPair {
                from: from.name,
                to: to.name,
                mode
            })
        );
        let reverse = pair(to.name).expect("reverse resolves");
        if reverse.to == from.name {
            assert_eq!(
                reverse.mode, mode,
                "reverse mode of {to_name} -> {from_name}"
            );
        } else {
            assert_eq!(
                Some(reverse),
                expected_index.get(to.name).copied(),
                "reverse of {from_name} -> {to_name} must be an earlier declared pair"
            );
        }
    }

    // Compact lookup: case/kebab/alias/space/underscore aware.
    let lookups = [
        (
            "arrow-left",
            SwapPair {
                from: "ArrowLeft",
                to: "ArrowRight",
                mode: "mirror",
            },
        ),
        (
            "ARROWLEFT",
            SwapPair {
                from: "ArrowLeft",
                to: "ArrowRight",
                mode: "mirror",
            },
        ),
        (
            "arrow left",
            SwapPair {
                from: "ArrowLeft",
                to: "ArrowRight",
                mode: "mirror",
            },
        ),
        (
            "xicon",
            SwapPair {
                from: "X",
                to: "Check",
                mode: "fade",
            },
        ),
        (
            "ellipsis",
            SwapPair {
                from: "MoreHorizontal",
                to: "MoreVertical",
                mode: "rotate",
            },
        ),
        (
            "funnel",
            SwapPair {
                from: "Filter",
                to: "SlidersHorizontal",
                mode: "slide",
            },
        ),
        (
            "Chevron Left",
            SwapPair {
                from: "ChevronLeft",
                to: "ChevronRight",
                mode: "mirror",
            },
        ),
    ];
    for (query, want) in lookups {
        assert_eq!(pair(query), Some(want), "pair({query:?})");
    }
    for query in ["", "   ", "Bell", "TriangleAlert", "definitely-not-an-icon"] {
        assert!(pair(query).is_none(), "pair({query:?}) should be None");
    }

    assert_eq!(swap_mode("ArrowLeft"), "mirror");
    assert_eq!(swap_mode("arrow left"), "mirror");
    assert_eq!(swap_mode("Sun"), "rotate");
    assert_eq!(swap_mode("chevron up"), "flip");
    assert_eq!(swap_mode("sliders-horizontal"), "slide");
    assert_eq!(swap_mode("Bell"), "fade");
    assert_eq!(swap_mode("XIcon"), "fade");
    assert_eq!(swap_mode("TriangleAlert"), "fade");
    assert_eq!(swap_mode("definitely-not-an-icon"), "fade");
}

#[test]
fn swap_svg_matches_js_markup_contract() {
    let markup = swap_svg("ArrowLeft", "ArrowRight", SwapOptions::new()).expect("known icons");
    assert_well_formed(&markup);
    assert_eq!(
        swap_svg("ArrowLeft", "ArrowRight", SwapOptions::new()),
        Some(markup.clone())
    );

    assert!(markup.starts_with("<span class=\"nexa-swap\""));
    let open_tag = &markup[..markup.find("><span").expect("wrapper has layers")];
    for expected in [
        "data-mode=\"mirror\"",
        "data-nexa-active=\"false\"",
        "style=\"--nexa-swap-dur:260ms\"",
        "aria-hidden=\"true\"",
    ] {
        assert!(
            open_tag.contains(expected),
            "wrapper missing {expected}: {open_tag}"
        );
    }
    assert!(
        !open_tag.contains("role=\"img\""),
        "decorative wrapper must not be role=img"
    );
    assert_eq!(markup.matches("<svg ").count(), 2, "two inner SVGs");
    assert_eq!(markup.matches("</svg>").count(), 2);
    let a = markup
        .find("<span class=\"nexa-swap__a\" aria-hidden=\"true\">")
        .expect("layer a");
    let b = markup
        .find("<span class=\"nexa-swap__b\" aria-hidden=\"true\">")
        .expect("layer b");
    assert!(a < b, "layer a must come before layer b");
    assert!(markup.ends_with("</span></span>"));
    assert!(markup.contains("class=\"nexa-icon\""));
    assert!(markup.contains("data-nexa-icon=\"arrow-left\""));
    assert!(!contains_hex_color(&markup));
    for value in paint_values(&markup) {
        assert!(
            value == "currentColor" || value == "none",
            "paint value {value:?} is not currentColor/none"
        );
    }

    // Auto modes are semantic per pair, not always fade.
    let auto_modes = [
        (("Sun", "Moon"), "rotate"),
        (("Mail", "MailCheck"), "fade"),
        (("MessageSquare", "Mail"), "slide"),
        (("Bold", "Italic"), "slide"),
        (("Upload", "Download"), "fade"),
        (("ChevronsLeftRight", "ChevronsUpDown"), "rotate"),
    ];
    for ((from, to), mode) in auto_modes {
        let output = swap_svg(from, to, SwapOptions::new()).unwrap();
        assert!(
            output.contains(&format!("data-mode=\"{mode}\"")),
            "swap {from} -> {to} missing auto mode {mode}: {output}"
        );
    }

    // Builder: active, duration, explicit mode, class.
    let options = swap_svg(
        "ArrowLeft",
        "ArrowRight",
        SwapOptions::new()
            .active(true)
            .duration(400)
            .mode("slide")
            .class("hero"),
    )
    .unwrap();
    assert_well_formed(&options);
    for expected in [
        "class=\"nexa-swap hero\"",
        "data-mode=\"slide\"",
        "data-nexa-active=\"true\"",
        "style=\"--nexa-swap-dur:400ms\"",
    ] {
        assert!(
            options.contains(expected),
            "options markup missing {expected}"
        );
    }
    let zero = swap_svg("ArrowLeft", "ArrowRight", SwapOptions::new().duration(0)).unwrap();
    assert!(zero.contains("style=\"--nexa-swap-dur:0ms\""));
    let auto = swap_svg("ArrowLeft", "ArrowRight", SwapOptions::new().mode("auto")).unwrap();
    assert!(
        auto.contains("data-mode=\"mirror\""),
        "\"auto\" resolves the pair mode"
    );
    let bogus = swap_svg("ArrowLeft", "ArrowRight", SwapOptions::new().mode("bogus")).unwrap();
    assert!(bogus.contains("data-mode=\"bogus\""));

    // Labelled wrappers use role=img + escaped aria-label, never aria-hidden.
    let labelled = swap_svg(
        "ArrowLeft",
        "ArrowRight",
        SwapOptions::new().label("Toggle sidebar"),
    )
    .unwrap();
    assert_well_formed(&labelled);
    let label_tag = &labelled[..labelled.find("><span").unwrap()];
    assert!(label_tag.contains("role=\"img\""));
    assert!(label_tag.contains("aria-label=\"Toggle sidebar\""));
    assert!(!label_tag.contains("aria-hidden"));
    let escaped = swap_svg(
        "ArrowLeft",
        "ArrowRight",
        SwapOptions::new().label("a\"b&c<d>e'f"),
    )
    .unwrap();
    assert_well_formed(&escaped);
    assert!(escaped.contains("aria-label=\"a&quot;b&amp;c&lt;d&gt;e&#39;f\""));

    // Size and stroke are forwarded; stroke auto-scales unless overridden.
    let sized = swap_svg("ArrowLeft", "ArrowRight", SwapOptions::new().size(20)).unwrap();
    assert_eq!(sized.matches("width=\"20\"").count(), 2);
    assert_eq!(sized.matches("stroke-width=\"1.75\"").count(), 2);
    let small = swap_svg("ArrowLeft", "ArrowRight", SwapOptions::new().size(16)).unwrap();
    assert_eq!(small.matches("stroke-width=\"2\"").count(), 2);
    let explicit = swap_svg(
        "ArrowLeft",
        "ArrowRight",
        SwapOptions::new().size(20).stroke_width(2.5),
    )
    .unwrap();
    assert_eq!(explicit.matches("stroke-width=\"2.5\"").count(), 2);
    let default_size = swap_svg("ArrowLeft", "ArrowRight", SwapOptions::new()).unwrap();
    assert_eq!(default_size.matches("width=\"24\"").count(), 2);
    assert_eq!(default_size.matches("stroke-width=\"1.5\"").count(), 2);

    // Alias/kebab/case input works for both icons.
    let aliased = swap_svg("arrow-left", "xicon", SwapOptions::new()).unwrap();
    assert!(aliased.contains("data-mode=\"mirror\""));

    // Unknown icons are rejected.
    assert!(swap_svg("Nope", "ArrowRight", SwapOptions::new()).is_none());
    assert!(swap_svg("ArrowLeft", "Nope", SwapOptions::new()).is_none());
    assert!(swap_svg("", "", SwapOptions::new()).is_none());
}
