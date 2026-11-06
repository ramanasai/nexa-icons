# Nexa Icons for Rust

Zero-dependency Rust crate generated from `data/icons.json`.

```toml
[dependencies]
nexa-icons = "1.0"
```

```rust
use nexa_icons::{get, names, sprite, SvgOptions, ICONS};
```

Crate name `nexa-icons`, library name `nexa_icons`. Edition 2021, `rust-version`
1.70, **no runtime dependencies** (`cargo tree` is empty).

## Quick start

```rust
use nexa_icons::{get, SvgOptions};

fn main() {
    let bell = get("bell").expect("Bell is in the set"); // case-insensitive

    // Nexa button size: 20px, stroke derived (16 => 2, 20 => 1.75, 24+ => 1.5).
    let svg = bell.svg(SvgOptions::new().size(20));
    println!("{svg}");

    // Labelled (meaningful) icon: role="img" + escaped aria-label.
    let labelled = bell.svg(SvgOptions::new().label("Alerts"));

    // Animated: emits class="nexa-icon" + data-nexa-anim/data-nexa-trigger.
    let animated = bell.svg(SvgOptions::new().anim("ring"));

    assert_eq!(bell.preset, "ring");
    assert_eq!(bell.trigger, "hover");
}
```

Motion requires the shared `animations.css`; the crate only emits the CSS
contract.

## API

| Symbol | Signature | Notes |
|---|---|---|
| `Icon` | struct | `name`, `kebab`, `preset`, `trigger`, `aliases: &'static [&'static str]`, `keywords`, `inner` |
| `ICONS` | `&'static [Icon]` | all 650, dataset order |
| `VERSION` | `&'static str` | dataset version |
| `get(name)` | `Option<&'static Icon>` | canonical name, kebab, alias; case-insensitive; separators ignored |
| `names()` | `Vec<&'static str>` | 650 canonical names, sorted |
| `sprite()` / `sprite_with(w)` | `String` | inline SVG sprite of all `<symbol id="nexa-…">`; stroke 2 by default |
| `Icon::svg(opts)` | `String` | inline SVG (size-aware) |
| `Icon::symbol()` / `symbol_with(w)` | `String` | one `<symbol>`; stroke 2 by default |
| `pair(name)` | `Option<SwapPair>` | `SwapPair { from, to, mode }` |
| `pairs()` | `&'static [SwapPair]` | all 49 directed swap edges, incl. `from` |
| `swap_mode(name)` | `&'static str` | mode for a pair, `"fade"` fallback |
| `swap_svg(from, to, opts)` | `Option<String>` | two-layer `.nexa-swap` widget |
| `categories()` | `&'static [Category]` | all 26 categories, catalog order |
| `by_category(id)` | `Option<&'static Category>` | one category by kebab id |
| `category_icons(id)` | `Vec<&'static Icon>` | resolved icons for a category |

### `SvgOptions` (fluent builder)

| Method | Default | Effect |
|---|---|---|
| `SvgOptions::new()` / `default()` | size 24, stroke derived, decorative | |
| `.size(u32)` | 24 | square width/height; viewBox stays `0 0 24 24` |
| `.stroke_width(f32)` | auto (16→2, 20→1.75, 24+→1.5) | explicit override |
| `.class(impl Into<String>)` | — | appended to the always-present `nexa-icon` |
| `.label(impl Into<String>)` | — | `role="img"` + `aria-label`; omit for `aria-hidden` |
| `.title(impl Into<String>)` | — | `<title>` child; makes the icon labelled |
| `.anim(impl Into<String>)` | — | animation contract (`data-nexa-anim`, `data-nexa-trigger`) |
| `.trigger(impl Into<String>)` | icon's semantic trigger | `data-nexa-trigger` override |
| `.active(bool)` | `false` | `data-nexa-active="true"` when `anim` is set |

Every `Icon::svg` emits `class="nexa-icon"`, `focusable="false"` and
`data-nexa-icon="<kebab>"` — the same contract as React/JS/Go.

Invalid values fall back to defaults (size `0` → 24, non-finite/non-positive
stroke → derived from size, empty strings ignored).

### Swap / morph — `swap_svg`, `SwapOptions`, `pair`

```rust
use nexa_icons::{pair, swap_svg, swap_mode, SwapOptions};

assert_eq!(pair("ArrowLeft").unwrap().to, "ArrowRight");
assert_eq!(pair("ArrowLeft").unwrap().from, "ArrowLeft");
assert_eq!(swap_mode("Sun"), "rotate");

let markup = swap_svg(
    "ArrowLeft",
    "ArrowRight",
    SwapOptions::new().active(false).duration(260).label("Direction").size(20),
)
.expect("both icons exist");
```

`SwapOptions` builder: `.active(bool)`, `.duration(u32 ms)`, `.mode(impl
Into<String>)` (`"auto"` → pair mode), `.label`, `.class`, `.size(u32)`,
`.stroke_width(f32)` (auto size→stroke when unset). `swap_svg` returns `None`
for an unknown icon and emits the same `nexa-swap` markup contract as
React/JS/Go — including `aria-hidden="true"` on both inner layers.

## Lookup rules

`get` matches, case-insensitively: canonical name (`Bell`), kebab (`bell`), or
alias (`TriangleAlert` → `AlertTriangle`, `XIcon` → `X`). Separators are ignored
entirely, matching JS/React: `get("Triangle Alert")`, `get("Alert-Triangle")`
and `get("RotateCcwClock")` all resolve.

```rust
assert_eq!(get("XIcon").unwrap().name, "X");
assert_eq!(get("trianglealert").unwrap().name, "AlertTriangle");
```

## Sprite

```rust
let all = nexa_icons::sprite(); // inline once per page
```

```html
<svg class="nexa-icon" aria-hidden="true"><use href="#nexa-bell"/></svg>
```

Presentation attributes match the canonical `sprite.svg`; symbol ids are
`nexa-<kebab>`. Sprite symbols are fixed at `stroke-width="2"` by default:
override with `Icon::symbol_with(w)` / `sprite_with(w)` (e.g. `sprite_with(1.75)`
for the 20px weight). Inline `Icon::svg` is size-aware.

## Verify

```bash
cd rust
cargo test
```

The integration tests cover the 1,034-icon count, alias data, case-insensitive and
kebab lookup, builder behaviour, sprite/symbol completeness, XML-ish escaping,
and that every icon renders without a hard-coded color. The crate is `#![forbid]`-free
but contains no `unsafe`.

## Categories

```rust
use nexa_icons::{by_category, categories, category_icons};

let all = categories();                          // 26 categories
let communication = by_category("communication"); // Option<&Category>
let icons = category_icons("communication");    // Vec<&Icon>
```

`Category { id, label, description, icons }` is generated from
`data/categories.json`.

## Presentation features and GPUI

Shape containers, fill variants and CSS 3D are **React/vanilla-JS only**; the
crate renders the base stroke icon, sprite, swap and category APIs.

For native UIs, the **`nexa-icons-gpui`** crate renders catalog icons in
[GPUI](https://gpui.rs) windows (Zed's framework). See the full guide:
[GPUI integration](../gpui.md).

```rust
use nexa_icons_gpui::{icon, NexaIconAssets};
// register: Application::new().with_assets(NexaIconAssets::new())
// render:   div().text_color(rgb(0x27272a)).child(icon("bell"))
```

## Notes

- `Icon` is `Copy`; all data is `'static` — no heap allocation for lookups.
- `svg()` builds a fresh `String`; cache the result if you render the same icon
  per frame/request at high volume.
- Theming, animation and accessibility rules are shared with every other
  language: [api.md](../api.md), [animations.md](../animations.md),
  [theming.md](../theming.md).
