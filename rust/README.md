# nexa-icons (Rust)

Dependency-free Rust crate for the **Nexa Icons** set: **650** stroke-only icons
on a 24x24 grid, derived from [Lucide 1.70](https://lucide.dev/license) (ISC,
with the Feather MIT derivation notice) and shipped with Nexa animation and swap
metadata.

Every inline icon renders as SVG with `fill="none"`, `stroke="currentColor"`,
round caps/joins and no hard-coded colors, so it inherits the surrounding text
color in light and dark themes. The rendered markup (attribute set, order and
values) matches the JavaScript reference implementation in `js/index.mjs`.

## Install

```toml
[dependencies]
nexa-icons = "1.0"
```

The library target is named `nexa_icons`:

```rust
use nexa_icons::{get, sprite, SvgOptions};
```

## Quick start

```rust
use nexa_icons::{get, sprite, SvgOptions};

fn main() {
    let bell = get("bell").expect("Bell is in the set"); // case-insensitive

    // Inline SVG at the Nexa "button" size; stroke follows the size rule.
    println!("{}", bell.svg(SvgOptions::new().size(20).label("Alerts")));

    // Animated + titled + active: motion is CSS, the SVG carries the data contract.
    println!(
        "{}",
        bell.svg(
            SvgOptions::new()
                .anim(bell.preset)
                .trigger("focus")
                .active(true)
                .title("Notifications")
        )
    );

    // Sprite helpers (fixed 2px stroke symbols).
    println!("{}", bell.symbol()); // one <symbol id="nexa-bell">…
    println!("{}", sprite());      // inline once, then <use href="#nexa-bell"/>
}
```

## API

### Icons and lookup

| Item | Description |
| --- | --- |
| `pub struct Icon { pub name, kebab, preset, trigger: &'static str, pub aliases, keywords: &'static [&'static str], pub inner: &'static str }` | One icon record from `data/icons.json`. `inner` is ready-to-embed SVG child markup. |
| `pub const ICONS: &[Icon]` | All 650 icons in dataset order. |
| `pub fn get(name: &str) -> Option<&'static Icon>` | Case-insensitive lookup by canonical name, kebab or alias. |
| `pub fn names() -> Vec<&'static str>` | All canonical names, sorted, deterministic. |
| `pub const VERSION: &str` | Dataset version from `data/icons.json`. |

`get` uses the same normalization as the JavaScript package: it lower-cases and
strips every space, underscore and hyphen. All of these resolve to
`AlertTriangle`: `AlertTriangle`, `triangle-exclamation-point`,
`TRIANGLE-EXCLAMATION-POINT`, `Triangle Alert`, `Alert Triangle`,
`Alert-Triangle`, `triangle_exclamation_point`. `XIcon` resolves to `X`;
`RotateCcwClock` resolves to `History` (via its kebab).

### Inline SVG

| Item | Description |
| --- | --- |
| `pub fn Icon::svg(&self, opts: SvgOptions) -> String` | Standalone SVG string matching the JS markup contract. |
| `SvgOptions::new()` | Defaults: 24px, derived stroke, decorative, `class="nexa-icon"`. |
| `.size(u32)` | Square width/height; stroke is derived from the size unless overridden. |
| `.stroke_width(f32)` | Explicit stroke width override. |
| `.class(impl Into<String>)` | Extra class added after the mandatory `nexa-icon` class. |
| `.label(impl Into<String>)` | `role="img"` + escaped `aria-label`. |
| `.title(impl Into<String>)` | `role="img"` + `<title>` child. May be combined with `.label`. |
| `.anim(impl Into<String>)` | Adds `data-nexa-anim` and `data-nexa-trigger`. |
| `.trigger(impl Into<String>)` | Overrides `data-nexa-trigger` when `anim` is set (`hover`, `focus`, `manual`, `press`, `inview`, `always`, …). |
| `.active(bool)` | Adds `data-nexa-active="true"` when `anim` is set. |

Defaults: 24px, decorative (`aria-hidden="true"`), `class="nexa-icon"`,
`focusable="false"` and `data-nexa-icon="<kebab>"`. Attribute set/order matches JS:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
     fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
     stroke-linejoin="round" class="nexa-icon" aria-hidden="true" focusable="false"
     data-nexa-icon="bell">…</svg>
```

### Nexa size → stroke rule

| Use | Size | Stroke |
| --- | --- | --- |
| Inline text, table cells, badges | 16px | 2 |
| Buttons, inputs, nav items | 20px | 1.75 |
| Section headers, cards | 24px | 1.5 |
| Feature tiles, empty states | 32-48px | 1.5 |

`Icon::svg` applies this rule automatically from `.size(...)`; pass
`.stroke_width(...)` only to override it.

### Symbols and sprite

| Item | Description |
| --- | --- |
| `pub fn Icon::symbol(&self) -> String` | One `<symbol id="nexa-<kebab>">`, matching JS `symbol(name)`. |
| `pub fn sprite() -> String` | All 650 icons as one inline SVG sprite. |

**Fixed vs size-aware:** sprite symbols are a definition container and use a
fixed stroke width of **2** (matching `sprite.svg` and JS `sprite()`),
independent of how large the `<use>` is. Inline icons rendered by `Icon::svg` are
size-aware (16 => 2, 20 => 1.75, 24+ => 1.5).

### Swap / morph pairs

| Item | Description |
| --- | --- |
| `pub struct SwapPair { pub from, to, mode: &'static str }` | One directed edge: canonical source, counterpart, CSS transition. |
| `pub fn pair(name: &str) -> Option<SwapPair>` | Semantic counterpart for a click toggle; alias/kebab/case-insensitive. |
| `pub fn pairs() -> &'static [SwapPair]` | All 49 directed edges (26 declared + implied reverses), `[from, to, mode]` like JS `SWAP_PAIRS`. |
| `pub fn swap_mode(name: &str) -> &'static str` | Transition mode for a pair; falls back to `"fade"`. |
| `pub fn swap_svg(from, to, opts: SwapOptions) -> Option<String>` | Two-layer swap widget matching JS/React; `None` for unknown icons. |
| `SwapOptions` builder | `.active(bool)`, `.duration(u32)`, `.mode(...)`, `.label(...)`, `.class(...)`, `.size(u32)`, `.stroke_width(f32)`. |

```rust
use nexa_icons::{pair, swap_mode, swap_svg, SwapOptions};

let arrow = pair("ArrowLeft").unwrap();
assert_eq!((arrow.from, arrow.to, arrow.mode), ("ArrowLeft", "ArrowRight", "mirror"));
assert_eq!(swap_mode("Sun"), "rotate");

let markup = swap_svg(
    "ArrowLeft",
    "ArrowRight",
    SwapOptions::new().active(true).label("Toggle sidebar"),
)
.expect("both icons exist");
```

```html
<span class="nexa-swap" data-mode="mirror" data-nexa-active="false"
      style="--nexa-swap-dur:260ms" aria-hidden="true"
><span class="nexa-swap__a" aria-hidden="true"><svg …/></span
><span class="nexa-swap__b" aria-hidden="true"><svg …/></span
></span>
```

The transition itself is CSS-only (flip `data-nexa-active` from a click handler).

### Accessibility

Decorative icons are `aria-hidden="true"` by default. Pass `.label(...)` and/or
`.title(...)` for icon-only controls and standalone illustrations. Never use an
icon alone to convey status; pair it with text.

## Regeneration

`src/icons_gen.rs` is generated from `data/icons.json` + `data/swaps.json`. Do
not edit it by hand (it is marked `#[rustfmt::skip]`, so `cargo fmt` leaves the
data table alone).

```bash
node scripts/generate-rust.mjs   # requires Node; no Rust toolchain needed
cd rust && cargo test && cargo clippy --all-targets -- -D warnings
```

The generator is deterministic: re-running it produces byte-identical output and
fails loudly if counts, kebab-case, aliases, swap modes or color rules drift.

## Notes

- Zero dependencies: `cargo tree` shows only this crate.
- No `unsafe`, no `no_std` requirement.
- Names/aliases/keywords are `&'static str`; rendering allocates one `String`.
- `pair`/`swap_svg` read the generated swap table; all lookups share `get`'s
  compact normalization.
- No hard-coded colors anywhere: icons paint with `currentColor` only.

## License

ISC. Icon geometry from Lucide 1.70 (ISC); a subset derives from
[Feather](https://feathericons.com) (MIT). See the repository `LICENSE`/`NOTICE`.
