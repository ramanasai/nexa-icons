// Independent QA probe for the Rust crate.
//
// Node feeds it the canonical dataset as tab-separated lines on stdin and the
// path to sprite.svg as argv[1]; the probe renders through the real public API
// and compares against data/icons.json without modifying rust/.
use std::collections::HashMap;
use std::io::Read;

use nexa_icons::{by_category, categories, category_icons, get, names, pair, pairs, sprite, swap_svg, SwapOptions, SvgOptions, ICONS};

struct Checker {
    checks: usize,
    errors: Vec<String>,
}

impl Checker {
    fn check(&mut self, ok: bool, message: impl Into<String>) {
        self.checks += 1;
        if !ok {
            self.errors.push(message.into());
        }
    }
}

fn main() {
    let mut input = String::new();
    std::io::stdin()
        .read_to_string(&mut input)
        .expect("dataset TSV on stdin");

    let sprite_path = std::env::args().nth(1).expect("sprite.svg path argument");
    let sprite_file = std::fs::read_to_string(&sprite_path).expect("read sprite.svg");

    let mut c = Checker { checks: 0, errors: Vec::new() };

    // --- crate-wide shape ---------------------------------------------------
    let icon_count = input.lines().filter(|line| line.starts_with("ICON\t")).count();
    c.check(icon_count > 0, "dataset TSV is empty");
    c.check(ICONS.len() == icon_count, format!("ICONS.len()={} want {icon_count}", ICONS.len()));
    let mut sorted = names();
    sorted.sort_unstable();
    c.check(names() == sorted, "names() is not sorted");
    c.check(sorted.len() == icon_count, format!("names().len()={} want {icon_count}", sorted.len()));
    c.check(pairs().len() == 49, format!("pairs().len()={} want 49", pairs().len()));

    let rendered_sprite = sprite();
    c.check(
        rendered_sprite == sprite_file.trim_end_matches('\n'),
        "sprite() differs from sprite.svg",
    );
    c.check(
        rendered_sprite.matches("<symbol").count() == icon_count,
        format!("sprite() symbol count {} want {icon_count}", rendered_sprite.matches("<symbol").count()),
    );

    // --- per-icon parity ----------------------------------------------------
    let mut by_name: HashMap<String, &'static nexa_icons::Icon> = HashMap::new();
    for line in input.lines().filter(|l| !l.is_empty()) {
        let f: Vec<&str> = line.split('\t').collect();
        match f[0] {
            "ICON" => {
                let (name, kebab, preset, trigger, aliases, inner) = (f[1], f[2], f[3], f[4], f[5], f[6]);
                let icon = match get(name) {
                    Some(icon) => icon,
                    None => {
                        c.check(false, format!("get({name:?}) returned None"));
                        continue;
                    }
                };
                by_name.insert(name.to_string(), icon);
                c.check(icon.name == name, format!("{name}: name={}", icon.name));
                c.check(icon.kebab == kebab, format!("{name}: kebab={} want {kebab}", icon.kebab));
                c.check(icon.preset == preset, format!("{name}: preset={} want {preset}", icon.preset));
                c.check(icon.trigger == trigger, format!("{name}: trigger={} want {trigger}", icon.trigger));
                c.check(icon.inner == inner, format!("{name}: inner differs from dataset"));
                c.check(icon.aliases.contains(&name), format!("{name}: aliases omit canonical name"));
                c.check(!icon.keywords.is_empty(), format!("{name}: keywords empty"));

                // Lookup contract: kebab, aliases and case variants resolve.
                c.check(get(kebab).map(|i| i.name) == Some(name), format!("{name}: get(kebab)"));
                for alias in aliases.split('|').filter(|a| !a.is_empty()) {
                    c.check(
                        get(alias).map(|i| i.name) == Some(name),
                        format!("{name}: alias {alias:?} does not resolve"),
                    );
                }
                c.check(
                    get(&name.to_ascii_uppercase()).map(|i| i.name) == Some(name),
                    format!("{name}: uppercase lookup"),
                );

                // SVG contract (parity with React/JS/Go).
                let svg = icon.svg(SvgOptions::new());
                c.check(svg.contains(inner), format!("{name}: svg omits geometry"));
                c.check(svg.contains("viewBox=\"0 0 24 24\""), format!("{name}: viewBox"));
                c.check(svg.contains("stroke=\"currentColor\""), format!("{name}: stroke"));
                c.check(svg.contains("aria-hidden=\"true\""), format!("{name}: default aria-hidden"));
                c.check(!svg.contains('#'), format!("{name}: hard-coded colour"));
                c.check(svg.contains("width=\"24\""), format!("{name}: default width 24"));
                c.check(svg.contains("stroke-width=\"1.5\""), format!("{name}: default stroke 1.5"));
                c.check(svg.contains("class=\"nexa-icon\""), format!("{name}: class nexa-icon"));
                c.check(svg.contains("focusable=\"false\""), format!("{name}: focusable"));
                c.check(svg.contains(&format!("data-nexa-icon=\"{kebab}\"")), format!("{name}: data-nexa-icon"));

                let labelled = icon.svg(SvgOptions::new().size(20).label("Alerts"));
                c.check(labelled.contains("role=\"img\""), format!("{name}: labelled role"));
                c.check(labelled.contains("aria-label=\"Alerts\""), format!("{name}: labelled aria-label"));
                c.check(!labelled.contains("aria-hidden"), format!("{name}: labelled must not be aria-hidden"));
                c.check(labelled.contains("width=\"20\""), format!("{name}: SvgOptions::size"));
                c.check(labelled.contains("stroke-width=\"1.75\""), format!("{name}: size 20 auto stroke 1.75"));

                let titled = icon.svg(SvgOptions::new().title("Notifications"));
                c.check(titled.contains("<title>Notifications</title>"), format!("{name}: title element"));
                let animated = icon.svg(SvgOptions::new().anim("pulse").active(true));
                c.check(animated.contains("data-nexa-anim=\"pulse\""), format!("{name}: anim attr"));
                c.check(animated.contains(&format!("data-nexa-trigger=\"{trigger}\"")), format!("{name}: anim trigger"));
                c.check(animated.contains("data-nexa-active=\"true\""), format!("{name}: active attr"));
            }
            "PAIR" => {
                let (from, to, mode) = (f[1], f[2], f[3]);
                let expected = names().contains(&from);
                c.check(expected, format!("pair source {from} is not an icon"));
                match pair(from) {
                    Some(p) => {
                        c.check(p.from == from, format!("pair({from}).from={} want {from}", p.from));
                        c.check(p.to == to, format!("pair({from}).to={} want {to}", p.to));
                        c.check(p.mode == mode, format!("pair({from}).mode={} want {mode}", p.mode));
                    }
                    None => c.check(false, format!("pair({from}) returned None")),
                }
                let a = by_name.get(from).map(|i| i.inner).unwrap_or("");
                let b = by_name.get(to).map(|i| i.inner).unwrap_or("");
                let swap = swap_svg(from, to, SwapOptions::new()).expect("swap_svg");
                c.check(swap.contains(a), format!("{from}->{to}: from glyph missing"));
                c.check(swap.contains(b), format!("{from}->{to}: to glyph missing"));
                c.check(swap.contains(&format!("data-mode=\"{mode}\"")), format!("{from}->{to}: mode"));
                c.check(swap.contains("aria-hidden=\"true\""), format!("{from}->{to}: decorative"));
                c.check(swap.contains("--nexa-swap-dur:260ms"), format!("{from}->{to}: duration"));
                let labelled = swap_svg(from, to, SwapOptions::new().label("Toggle")).expect("labelled swap");
                c.check(labelled.contains("role=\"img\""), format!("{from}->{to}: labelled role"));
                c.check(labelled.contains("aria-label=\"Toggle\""), format!("{from}->{to}: labelled label"));
            }
            "CAT" => {}
            other => c.check(false, format!("unknown TSV record {other}")),
        }
    }

    // --- categories parity ---------------------------------------------------
    let cat_lines: Vec<Vec<&str>> = input.lines().filter(|line| line.starts_with("CAT\t")).map(|line| line.split('\t').collect()).collect();
    c.check(categories().len() == cat_lines.len(), format!("categories().len()={} want {}", categories().len(), cat_lines.len()));
    for line in &cat_lines {
        let (id, label, names) = (line[1], line[2], line[3]);
        match by_category(id) {
            Some(category) => {
                c.check(category.id == id, format!("by_category({id}).id"));
                c.check(category.label == label, format!("by_category({id}).label"));
                let expected: Vec<&str> = names.split('|').collect();
                c.check(category.icons.len() == expected.len(), format!("by_category({id}) icon count"));
                for (index, name) in expected.iter().enumerate() {
                    c.check(category.icons.get(index) == Some(name), format!("by_category({id})[{index}]"));
                }
                let resolved = category_icons(id);
                c.check(resolved.len() == expected.len(), format!("category_icons({id}).len"));
                for (index, icon) in resolved.iter().enumerate() {
                    c.check(Some(icon.name) == expected.get(index).copied(), format!("category_icons({id})[{index}]"));
                }
            }
            None => c.check(false, format!("by_category({id}) returned None")),
        }
    }
    c.check(by_category("not-a-category").is_none(), "by_category(unknown) must be None");

    // --- lookup edge cases / lenient matching ------------------------------
    c.check(get("Nope").is_none(), "get(unknown) returned Some");
    c.check(get("bell").map(|i| i.name) == Some("Bell"), "case-insensitive lookup");
    for query in ["XIcon", "X", "x"] {
        c.check(get(query).map(|i| i.name) == Some("X"), format!("alias lookup {query:?}"));
    }
    for query in ["TriangleAlert", "Triangle Alert", "triangle-alert", "Alert_Triangle"] {
        c.check(
            get(query).map(|i| i.name) == Some("AlertTriangle"),
            format!("lenient lookup {query:?}"),
        );
    }
    c.check(swap_svg("Nope", "Bell", SwapOptions::new()).is_none(), "swap_svg(unknown) must be None");
    c.check(get("Sun").map(|i| i.preset) == Some("spin"), "semantic preset metadata");
    c.check(swap_svg("Sun", "Moon", SwapOptions::new()).is_some(), "sun->moon swap");
    c.check(
        pair("XIcon").map(|p| (p.from, p.to, p.mode)) == Some(("X", "Check", "fade")),
        "pair() alias-aware",
    );
    c.check(swap_svg("XIcon", "Check", SwapOptions::new()).is_some(), "swap_svg alias-aware");

    // --- size => stroke rule / symbol / sprite ------------------------------
    let bell = get("Bell").expect("Bell");
    for (size, stroke) in [(16u32, "2"), (20, "1.75"), (24, "1.5"), (40, "1.5")] {
        let regex_like = format!("stroke-width=\"{stroke}\"");
        c.check(
            bell.svg(SvgOptions::new().size(size)).contains(&regex_like),
            format!("Bell(size {size}) auto stroke {stroke}"),
        );
        c.check(
            bell.svg(SvgOptions::new().size(size)).contains(&format!("width=\"{size}\"")),
            format!("Bell(size {size}) width"),
        );
    }
    c.check(
        bell.svg(SvgOptions::new().size(16).stroke_width(1.25)).contains("stroke-width=\"1.25\""),
        "explicit stroke_width wins",
    );
    let symbol = bell.symbol();
    c.check(symbol.contains("stroke-width=\"2\""), "symbol() default stroke 2");
    c.check(symbol.contains("id=\"nexa-bell\""), "symbol() nexa id");
    c.check(symbol.contains(bell.inner), "symbol() contains geometry");
    let symbol_thin = bell.symbol_with(1.5);
    c.check(symbol_thin.contains("stroke-width=\"1.5\""), "symbol_with(1.5) stroke");
    c.check(symbol_thin.contains(bell.inner), "symbol_with() contains geometry");
    let sprite = nexa_icons::sprite();
    c.check(sprite == sprite_file.trim_end_matches('\n'), "sprite() byte-parity");
    c.check(sprite.matches("<symbol").count() == icon_count, "sprite() symbol count");
    let sprite_thin = nexa_icons::sprite_with(1.75);
    c.check(sprite_thin.contains("stroke-width=\"1.75\""), "sprite_with(1.75) stroke");
    c.check(!sprite_thin.contains("stroke-width=\"2\""), "sprite_with() replaces default stroke");
    c.check(get("Nope").is_none(), "unknown lookup stays None");

    if c.errors.is_empty() {
        println!("OK {} checks", c.checks);
    } else {
        println!("FAIL {} checks, {} errors", c.checks, c.errors.len());
        for error in c.errors.iter().take(40) {
            println!("  - {error}");
        }
        std::process::exit(1);
    }
}
