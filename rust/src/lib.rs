//! Nexa Icons — 650 stroke-only SVG icons on a 24x24 grid, derived from
//! [Lucide 1.70](https://lucide.dev/license) (ISC, with the Feather MIT
//! derivation notice), plus semantic animation and swap metadata.
//!
//! The rendered markup (attribute set, order and values) matches the JavaScript
//! reference implementation in `js/index.mjs`, so the same icon produced by any
//! Nexa package is structurally identical. Icons are stroke-only, painted with
//! `currentColor`, and contain no hard-coded colors.
//!
//! The icon and swap tables ([`ICONS`], [`pairs`]) are generated from
//! `data/icons.json` + `data/swaps.json` by `scripts/generate-rust.mjs`; this
//! module is the hand-written API.
//!
//! # Quick start
//!
//! ```
//! use nexa_icons::{get, SvgOptions};
//!
//! let bell = get("bell").expect("Bell is in the set"); // case-insensitive
//! let svg = bell.svg(SvgOptions::new().size(20).label("Alerts"));
//! assert!(svg.contains("width=\"20\""));
//! assert!(svg.contains("stroke-width=\"1.75\"")); // size-derived Nexa rule
//! assert!(svg.contains("aria-label=\"Alerts\""));
//! assert!(svg.contains("class=\"nexa-icon\""));
//!
//! // Animated and titled: motion is CSS, the SVG carries the data contract.
//! let animated = bell.svg(SvgOptions::new().title("Notifications").anim("ring").active(true));
//! assert!(animated.contains("<title>Notifications</title>"));
//! assert!(animated.contains("data-nexa-anim=\"ring\""));
//! assert!(animated.contains("data-nexa-trigger=\"hover\""));
//! assert!(animated.contains("data-nexa-active=\"true\""));
//! ```

mod icons_gen;

pub use icons_gen::{CATEGORIES, ICONS, VERSION};

/// One Nexa icon definition.
///
/// `inner` is ready-to-embed SVG child markup. `preset`/`trigger` are the
/// semantic animation defaults from the dataset, `aliases` contains the
/// accepted alternative names (always including `name`), and `keywords` the
/// search terms.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct Icon {
    pub name: &'static str,
    pub kebab: &'static str,
    pub preset: &'static str,
    pub trigger: &'static str,
    pub aliases: &'static [&'static str],
    pub keywords: &'static [&'static str],
    pub inner: &'static str,
}

/// One directed edge of the semantic swap table.
///
/// `from`/`to` are canonical icon names and `mode` is the CSS transition
/// (`mirror`, `flip`, `rotate`, `slide` or `fade`).
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct SwapPair {
    pub from: &'static str,
    pub to: &'static str,
    pub mode: &'static str,
}

impl Icon {
    /// Reports whether `query` names this icon. Comparison is case-insensitive
    /// and strips every space/underscore/hyphen, exactly like the JavaScript
    /// `compact()` normalization: "TriangleAlert", "Triangle Alert",
    /// "triangle_alert" and "Alert-Triangle" all match.
    fn matches(&self, query: &str) -> bool {
        compact_eq(self.name, query)
            || compact_eq(self.kebab, query)
            || self.aliases.iter().any(|alias| compact_eq(alias, query))
    }

    /// Renders this icon as a standalone, well-formed `<svg>` string.
    ///
    /// Defaults to a 24px square with the Nexa size-derived stroke width
    /// (16 => 2, 20 => 1.75, 24+ => 1.5), `class="nexa-icon"`,
    /// `data-nexa-icon` and `aria-hidden="true"`. Use [`SvgOptions`] to size it,
    /// label/title it, add classes or attach the animation contract. Every
    /// dynamic attribute value is XML-escaped.
    pub fn svg(&self, opts: SvgOptions) -> String {
        let size = if opts.size == 0 { 24 } else { opts.size };
        let stroke_width = match opts.stroke_width {
            Some(width) if width.is_finite() && width > 0.0 => width,
            _ => stroke_for_size(size),
        };
        let preset = opts.anim.as_deref().filter(|value| !value.is_empty());
        let trigger = opts
            .trigger
            .as_deref()
            .filter(|value| !value.is_empty())
            .unwrap_or(self.trigger);
        let label = opts.label.as_deref().filter(|value| !value.is_empty());
        let title = opts.title.as_deref().filter(|value| !value.is_empty());
        let labelled = label.is_some() || title.is_some();

        let mut classes = String::from("nexa-icon");
        if let Some(class) = opts.class.as_deref().filter(|value| !value.is_empty()) {
            classes.push(' ');
            classes.push_str(class);
        }

        let mut out = String::with_capacity(self.inner.len() + 384);
        out.push_str("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"");
        out.push_str(&size.to_string());
        out.push_str("\" height=\"");
        out.push_str(&size.to_string());
        out.push_str(
            "\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"",
        );
        out.push_str(&stroke_width.to_string());
        out.push_str("\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"");
        out.push_str(&escape_attr(&classes));
        out.push('"');

        if labelled {
            out.push_str(" role=\"img\"");
            if let Some(label) = label {
                out.push_str(" aria-label=\"");
                out.push_str(&escape_attr(label));
                out.push('"');
            }
        } else {
            out.push_str(" aria-hidden=\"true\"");
        }

        out.push_str(" focusable=\"false\" data-nexa-icon=\"");
        out.push_str(self.kebab);
        out.push('"');

        if let Some(preset) = preset {
            out.push_str(" data-nexa-anim=\"");
            out.push_str(&escape_attr(preset));
            out.push_str("\" data-nexa-trigger=\"");
            out.push_str(&escape_attr(trigger));
            out.push('"');
            if opts.active {
                out.push_str(" data-nexa-active=\"true\"");
            }
        }

        out.push('>');
        if let Some(title) = title {
            out.push_str("<title>");
            out.push_str(&escape_attr(title));
            out.push_str("</title>");
        }
        out.push_str(self.inner);
        out.push_str("</svg>");
        out
    }

    /// Renders this icon as an SVG `<symbol>` for the shared sprite, matching
    /// JS `symbol(name)` and Go `Symbol(name)`:
    ///
    /// ```text
    /// <symbol id="nexa-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    ///         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    /// ```
    ///
    /// Sprite symbols use a fixed stroke width of 2; inline icons rendered by
    /// [`Icon::svg`] are size-aware instead.
    pub fn symbol(&self) -> String {
        self.symbol_with(2.0)
    }

    /// [`Icon::symbol`] with an explicit stroke width (the sprite convention is
    /// 2; pass 1.75/1.5 to match the Nexa optical size rule).
    pub fn symbol_with(&self, stroke_width: f32) -> String {
        let mut out = String::with_capacity(self.inner.len() + 192);
        out.push_str("<symbol id=\"nexa-");
        out.push_str(self.kebab);
        out.push_str(
            "\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"",
        );
        out.push_str(&stroke_width.to_string());
        out.push_str("\" stroke-linecap=\"round\" stroke-linejoin=\"round\">");
        out.push_str(self.inner);
        out.push_str("</symbol>");
        out
    }
}

/// Resolves an icon by canonical name, kebab-case name or alias. The lookup is
/// case-insensitive, ignores surrounding whitespace, and strips
/// spaces/underscores/hyphens between words.
///
/// ```
/// use nexa_icons::get;
///
/// assert_eq!(get("XIcon").unwrap().name, "X");
/// assert_eq!(get("trianglealert").unwrap().name, "AlertTriangle");
/// assert_eq!(get("Triangle Alert").unwrap().name, "AlertTriangle");
/// assert_eq!(get("Alert-Triangle").unwrap().name, "AlertTriangle");
/// assert_eq!(get("RotateCcwClock").unwrap().name, "History");
/// assert!(get("alert-triangle").is_some());
/// assert!(get("Nope").is_none());
/// ```
pub fn get(name: &str) -> Option<&'static Icon> {
    resolve(name)
}

/// Normalizes a query once and resolves it to an icon record. Shared by
/// [`get`], [`pair`] and [`swap_mode`] so every lookup behaves identically.
fn resolve(name: &str) -> Option<&'static Icon> {
    let query = name.trim();
    if query.is_empty() {
        return None;
    }
    ICONS.iter().find(|icon| icon.matches(query))
}

/// Returns every canonical icon name in lexicographic order.
///
/// The result is a fresh `Vec` on every call; callers may modify it freely.
pub fn names() -> Vec<&'static str> {
    let mut names: Vec<&'static str> = ICONS.iter().map(|icon| icon.name).collect();
    names.sort_unstable();
    names
}

/// Renders all icons as a single inline SVG sprite of `<symbol>` elements.
///
/// Inline it once per page and reference symbols with
/// `<svg class="nexa-icon"><use href="#nexa-bell"/></svg>`. Sprite symbols use a
/// fixed stroke width of 2 (matching JS `sprite()` and the canonical
/// `sprite.svg`); inline icons rendered by [`Icon::svg`] are size-aware.
pub fn sprite() -> String {
    sprite_with(2.0)
}

/// [`sprite`] with an explicit symbol stroke width (sprite convention is 2).
pub fn sprite_with(stroke_width: f32) -> String {
    let symbols_capacity: usize = ICONS
        .iter()
        .map(|icon| icon.inner.len() + icon.kebab.len() + 192)
        .sum();
    let mut out = String::with_capacity(symbols_capacity + 64);
    out.push_str(
        "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" style=\"display:none\">",
    );
    for icon in ICONS {
        out.push_str(&icon.symbol_with(stroke_width));
    }
    out.push_str("</svg>");
    out
}

// ---------------------------------------------------------------------------
// Swap / morph pairs and renderer.
//
// `data/swaps.json` declares 26 semantic click-swap pairs ([from, to, mode]).
// Reverse edges are implied unless the reverse source already owns a pair, so
// the generated table holds 49 directed edges — the same edges, in the same
// order, as the JavaScript and React packages. Motion is CSS-only; the markup
// just carries data-mode and data-nexa-active.
// ---------------------------------------------------------------------------

/// Returns the semantic counterpart for `name`, using the same case-insensitive,
/// alias- and kebab-aware normalization as [`get`].
///
/// ```
/// use nexa_icons::pair;
///
/// let arrow = pair("arrow-left").unwrap();
/// assert_eq!((arrow.from, arrow.to, arrow.mode), ("ArrowLeft", "ArrowRight", "mirror"));
/// assert_eq!(pair("ArrowLeft").unwrap().mode, "mirror");
/// assert!(pair("Bell").is_none()); // Bell has no semantic pair
/// ```
pub fn pair(name: &str) -> Option<SwapPair> {
    let icon = resolve(name)?;
    icons_gen::SWAP_PAIRS
        .iter()
        .find(|pair| pair.from == icon.name)
        .copied()
}

/// Every directed swap pair (49 edges: 26 declared plus implied reverses), in
/// `data/swaps.json` expansion order, including the source icon — the same
/// `[from, to, mode]` table as JS `SWAP_PAIRS`.
pub fn pairs() -> &'static [SwapPair] {
    icons_gen::SWAP_PAIRS
}

/// Returns the transition mode for `name`'s semantic pair, falling back to
/// `"fade"` when the icon is unknown or has no pair.
pub fn swap_mode(name: &str) -> &'static str {
    match pair(name) {
        Some(pair) => pair.mode,
        None => "fade",
    }
}

/// Options for [`Icon::svg`], built with the fluent builder methods.
///
/// ```
/// use nexa_icons::{get, SvgOptions};
///
/// let opts = SvgOptions::new()
///     .size(32)
///     .stroke_width(1.5)
///     .class("hero")
///     .label("Saved");
/// assert_eq!(opts.size, 32);
/// let svg = get("Bell").unwrap().svg(opts);
/// assert!(svg.contains("aria-label=\"Saved\""));
/// ```
#[derive(Debug, Clone, PartialEq)]
pub struct SvgOptions {
    /// Square width/height in pixels. Defaults to 24; 0 falls back to 24.
    pub size: u32,
    /// Explicit stroke width. `None` (default) derives it from the size using
    /// the Nexa rule: 16 => 2, 20 => 1.75, 24+ => 1.5.
    pub stroke_width: Option<f32>,
    /// Extra class name(s) appended after the mandatory `nexa-icon` class.
    pub class: Option<String>,
    /// Accessible name: renders `role="img" aria-label="…"`.
    pub label: Option<String>,
    /// Accessible `<title>` element: renders `role="img"` plus a `<title>`
    /// child. Label and Title may be combined.
    pub title: Option<String>,
    /// Animation preset: emits `data-nexa-anim` and `data-nexa-trigger`.
    pub anim: Option<String>,
    /// Trigger override for `data-nexa-trigger` when `anim` is set (defaults to
    /// the icon's own semantic trigger, e.g. "hover").
    pub trigger: Option<String>,
    /// Emits `data-nexa-active="true"` when `anim` is also set (matching JS).
    pub active: bool,
}

impl Default for SvgOptions {
    fn default() -> Self {
        Self {
            size: 24,
            stroke_width: None,
            class: None,
            label: None,
            title: None,
            anim: None,
            trigger: None,
            active: false,
        }
    }
}

impl SvgOptions {
    /// Creates the documented defaults: size 24, derived stroke width,
    /// decorative, no extra class, no animation.
    pub fn new() -> Self {
        Self::default()
    }

    /// Sets the square width/height in pixels.
    pub fn size(mut self, size: u32) -> Self {
        self.size = size;
        self
    }

    /// Sets an explicit stroke width (skips the size-derived Nexa rule).
    pub fn stroke_width(mut self, stroke_width: f32) -> Self {
        self.stroke_width = Some(stroke_width);
        self
    }

    /// Adds a class name after `nexa-icon`.
    pub fn class<S: Into<String>>(mut self, class: S) -> Self {
        self.class = Some(class.into());
        self
    }

    /// Sets the accessible name, switching the SVG to `role="img"`.
    pub fn label<S: Into<String>>(mut self, label: S) -> Self {
        self.label = Some(label.into());
        self
    }

    /// Adds an accessible `<title>` element.
    pub fn title<S: Into<String>>(mut self, title: S) -> Self {
        self.title = Some(title.into());
        self
    }

    /// Attaches an Nexa animation preset (e.g. `"pulse"`, `"ring"`, `"spin"`).
    pub fn anim<S: Into<String>>(mut self, anim: S) -> Self {
        self.anim = Some(anim.into());
        self
    }

    /// Overrides the `data-nexa-trigger` value when `anim` is set.
    pub fn trigger<S: Into<String>>(mut self, trigger: S) -> Self {
        self.trigger = Some(trigger.into());
        self
    }

    /// Marks the animated icon active (`data-nexa-active="true"`).
    pub fn active(mut self, active: bool) -> Self {
        self.active = active;
        self
    }
}

/// Options for [`swap_svg`], built with the fluent builder methods.
///
/// ```
/// use nexa_icons::{swap_svg, SwapOptions};
///
/// let markup = swap_svg(
///     "ArrowLeft",
///     "ArrowRight",
///     SwapOptions::new().active(true).duration(400).label("Toggle sidebar"),
/// )
/// .expect("both icons exist");
/// assert!(markup.contains("data-nexa-active=\"true\""));
/// ```
#[derive(Debug, Clone, PartialEq)]
pub struct SwapOptions {
    /// Whether the second layer is shown (`data-nexa-active`, default false).
    pub active: bool,
    /// Transition duration in milliseconds (default 260).
    pub duration: u32,
    /// Transition override. `None` (default) resolves the pair's semantic mode;
    /// `Some("auto")` does the same, matching the JS/React option.
    pub mode: Option<String>,
    /// Accessible name for the whole swap group. When set, the wrapper gets
    /// `role="img" aria-label`; otherwise it is `aria-hidden="true"`.
    pub label: Option<String>,
    /// Extra class name(s) for the wrapper, appended after `nexa-swap`.
    pub class: Option<String>,
    /// Square size of both inner icons in pixels (default 24; 0 falls back).
    pub size: u32,
    /// Explicit stroke width for both inner icons. `None` (default) derives it
    /// from the size using the Nexa rule.
    pub stroke_width: Option<f32>,
}

impl Default for SwapOptions {
    fn default() -> Self {
        Self {
            active: false,
            duration: 260,
            mode: None,
            label: None,
            class: None,
            size: 24,
            stroke_width: None,
        }
    }
}

impl SwapOptions {
    /// Creates the documented defaults: not active, 260 ms, auto mode, 24 px,
    /// derived stroke weight, decorative.
    pub fn new() -> Self {
        Self::default()
    }

    /// Sets the visible layer (`true` shows the second icon).
    pub fn active(mut self, active: bool) -> Self {
        self.active = active;
        self
    }

    /// Sets the transition duration in milliseconds.
    pub fn duration(mut self, duration: u32) -> Self {
        self.duration = duration;
        self
    }

    /// Overrides the transition mode (`mirror|flip|rotate|slide|fade`).
    /// `"auto"` resolves the pair's semantic mode.
    pub fn mode<S: Into<String>>(mut self, mode: S) -> Self {
        self.mode = Some(mode.into());
        self
    }

    /// Sets the accessible name for the swap group.
    pub fn label<S: Into<String>>(mut self, label: S) -> Self {
        self.label = Some(label.into());
        self
    }

    /// Adds a class name to the wrapper.
    pub fn class<S: Into<String>>(mut self, class: S) -> Self {
        self.class = Some(class.into());
        self
    }

    /// Sets the square size of both inner icons.
    pub fn size(mut self, size: u32) -> Self {
        self.size = size;
        self
    }

    /// Sets an explicit stroke width for both inner icons.
    pub fn stroke_width(mut self, stroke_width: f32) -> Self {
        self.stroke_width = Some(stroke_width);
        self
    }
}

/// Renders a two-layer swap/morph widget matching the JavaScript and React
/// markup contract exactly:
///
/// ```text
/// <span class="nexa-swap" data-mode="mirror" data-nexa-active="false"
///       style="--nexa-swap-dur:260ms" aria-hidden="true">
///   <span class="nexa-swap__a" aria-hidden="true"><svg …/></span>
///   <span class="nexa-swap__b" aria-hidden="true"><svg …/></span>
/// </span>
/// ```
///
/// Flip `data-nexa-active` (for example from a click handler) to animate. The
/// mode comes from the semantic pair table by default; override it with
/// [`SwapOptions::mode`]. Both icons accept aliases, kebab-case names and are
/// case-insensitive. Returns `None` when either icon is unknown.
///
/// ```
/// use nexa_icons::{swap_svg, SwapOptions};
///
/// let markup = swap_svg("Sun", "Moon", SwapOptions::new()).unwrap();
/// assert!(markup.contains("data-mode=\"rotate\"")); // auto from the pair table
/// assert!(swap_svg("Bell", "Nope", SwapOptions::new()).is_none());
/// ```
pub fn swap_svg(from: &str, to: &str, opts: SwapOptions) -> Option<String> {
    let from_icon = resolve(from)?;
    let to_icon = resolve(to)?;

    let requested_mode = opts
        .mode
        .as_deref()
        .map(str::trim)
        .filter(|mode| !mode.is_empty() && !mode.eq_ignore_ascii_case("auto"));
    let mode = match requested_mode {
        Some(mode) => escape_attr(mode),
        None => swap_mode(from_icon.name).to_string(),
    };

    let inner_options = || {
        let mut options = SvgOptions::new().size(opts.size);
        if let Some(stroke_width) = opts.stroke_width {
            options = options.stroke_width(stroke_width);
        }
        options
    };
    let a = from_icon.svg(inner_options());
    let b = to_icon.svg(inner_options());

    let mut out = String::with_capacity(a.len() + b.len() + 480);
    out.push_str("<span class=\"nexa-swap");
    if let Some(class) = opts.class.as_deref().filter(|class| !class.is_empty()) {
        out.push(' ');
        out.push_str(&escape_attr(class));
    }
    out.push_str("\" data-mode=\"");
    out.push_str(&mode);
    out.push_str("\" data-nexa-active=\"");
    out.push_str(if opts.active { "true" } else { "false" });
    out.push_str("\" style=\"--nexa-swap-dur:");
    out.push_str(&opts.duration.to_string());
    out.push_str("ms\"");

    match opts.label.as_deref().filter(|label| !label.is_empty()) {
        Some(label) => {
            out.push_str(" role=\"img\" aria-label=\"");
            out.push_str(&escape_attr(label));
            out.push('"');
        }
        None => out.push_str(" aria-hidden=\"true\""),
    }

    out.push_str("><span class=\"nexa-swap__a\" aria-hidden=\"true\">");
    out.push_str(&a);
    out.push_str("</span><span class=\"nexa-swap__b\" aria-hidden=\"true\">");
    out.push_str(&b);
    out.push_str("</span></span>");
    Some(out)
}

// ---------------------------------------------------------------------------
// Internals.
// ---------------------------------------------------------------------------

/// Nexa stroke weight for a pixel size, mirroring the JavaScript/React packages:
/// 16px => 2, 20px => 1.75, 24px and up => 1.5.
fn stroke_for_size(px: u32) -> f32 {
    if px <= 16 {
        2.0
    } else if px <= 20 {
        1.75
    } else {
        1.5
    }
}

/// Case-insensitive comparison that removes spaces, underscores and hyphens,
/// matching `compact()` in js/index.mjs.
fn compact_eq(left: &str, right: &str) -> bool {
    compact_chars(left).eq(compact_chars(right))
}

fn compact_chars(value: &str) -> impl Iterator<Item = char> + '_ {
    value
        .chars()
        .filter(|character| !matches!(character, ' ' | '\t' | '\n' | '\r' | '_' | '-'))
        .flat_map(char::to_lowercase)
}

/// Escapes a value for XML attributes and text exactly like js/index.mjs `esc()`.
fn escape_attr(value: &str) -> String {
    let mut out = String::with_capacity(value.len());
    for character in value.chars() {
        match character {
            '&' => out.push_str("&amp;"),
            '<' => out.push_str("&lt;"),
            '>' => out.push_str("&gt;"),
            '"' => out.push_str("&quot;"),
            '\'' => out.push_str("&#39;"),
            _ => out.push(character),
        }
    }
    out
}

// ---------------------------------------------------------------------------
// Categories (data/categories.json, mapped to canonical display names)
// ---------------------------------------------------------------------------

/// A curated group of icons, e.g. `communication` or `finance`.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Category {
    pub id: &'static str,
    pub label: &'static str,
    pub description: &'static str,
    pub icons: &'static [&'static str],
}

/// Every category in catalog order.
pub fn categories() -> &'static [Category] {
    crate::icons_gen::CATEGORIES
}

/// Find a category by id (kebab-case, e.g. `"communication"`).
pub fn by_category(id: &str) -> Option<&'static Category> {
    let key = id.trim().to_lowercase().replace([' ', '_', '-'], "");
    categories().iter().find(|category| {
        category
            .id
            .trim()
            .to_lowercase()
            .replace([' ', '_', '-'], "")
            == key
    })
}

/// Resolved icons for a category id (empty when the id is unknown).
pub fn category_icons(id: &str) -> Vec<&'static Icon> {
    by_category(id)
        .map(|category| category.icons.iter().filter_map(|name| get(name)).collect())
        .unwrap_or_default()
}
