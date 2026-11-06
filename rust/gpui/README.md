# nexa-icons-gpui

[GPUI](https://gpui.rs) integration for **Nexa Icons** — Zed's GPU-accelerated
Rust UI framework.

`icon("bell")` returns a GPUI element that paints any catalogue icon as a
stroke-only, current-color SVG. The adapter is a thin, in-memory layer over the
`nexa-icons` crate: no asset files, no network, no image decoding, no extra
icon data.

- **`nexa-icons-gpui` 1.0.0** · edition 2021 · ISC
- **GPUI `0.2.2`** (pre-1.0 — pin it in your app too)
- Renders all catalogue glyphs as they ship in the `nexa-icons` crate (currently
  650 icons in 24 categories; the adapter needs no regeneration when the
  catalogue grows)
- Works on every platform GPUI supports (macOS Metal, Linux Wayland/X11,
  Windows); the adapter itself is platform-agnostic

## Install

```toml
[dependencies]
gpui = "0.2.2"
nexa-icons-gpui = { path = "../rust/gpui" }   # path in this repo; version once published
```

## Register the asset source (required)

GPUI renders SVGs through an app-level `AssetSource`. Nexa's source generates
SVG bytes in memory from the `nexa-icons` crate, so there is nothing to ship:

```rust
use gpui::Application;
use nexa_icons_gpui::NexaIconAssets;

fn main() {
    Application::new()
        .with_assets(NexaIconAssets::new())
        .run(|cx| {
            // open windows and render `icon(...)` elements
            let _ = cx;
        });
}
```

If the app already has an asset source (images, fonts, …), wrap it so Nexa
paths are handled here and everything else falls through:

```rust
use nexa_icons_gpui::NexaIconAssets;

let assets = NexaIconAssets::with_fallback(my_existing_assets);
```

## How it renders (and why not `gpui::Svg` directly)

`gpui 0.2.2`'s `Svg` element only loads assets through the app-level
`AssetSource` by path and bakes one fixed SVG per element. That cannot express
Nexa's size-aware stroke (the stroke changes with the rendered size) without
fixing a size per element. So this crate implements a small custom
`gpui::Element` and paints through the public `Window::paint_svg` API — GPUI's
own SVG rasterizer — with an asset path that encodes `(icon, size, stroke)`.
The bytes are the full SVG produced by `nexa_icons::Icon::svg()`; GPUI converts
it to a monochrome alpha mask and tints it with the element's text color, which
is how `currentColor` inheritance works natively.

## Usage

```rust
use gpui::{div, prelude::*, px, rgb, Context, Render, Window};
use nexa_icons_gpui::{icon, icon_opt};

struct Toolbar;

impl Render for Toolbar {
    fn render(&mut self, _window: &mut Window, _cx: &mut Context<Self>) -> impl IntoElement {
        div()
            .flex()
            .items_center()
            .gap_2()
            .text_color(rgb(0x27272a))          // ancestors set currentColor
            .child(icon("bell"))                 // 24px, stroke 1.5
            .child(icon("Bell").size(px(20.0)))  // 20px, stroke 1.75
            .child(icon("XIcon"))                // aliases work: X
            .child(icon("Triangle Alert"))       // separator-insensitive: AlertTriangle
    }
}
```

Name resolution matches every other Nexa package: canonical names, legacy
aliases (`XIcon`, `TriangleAlert`), kebab ids (`triangle-exclamation-point`),
case-insensitive, and spaces/underscores/hyphens are ignored
(`Triangle Alert`, `Triangle_Alert`, `Alert-Triangle`, `RotateCcwClock`).

Unknown names render nothing; use `icon_opt(name)` when the name is dynamic and
you want to decide what to do instead.

### Sizing and stroke

Size with the normal GPUI style API (`.size()`, `.w()`, `.h()`, flex layout).
The element defaults to **24×24px**, and the stroke follows the Nexa size rule
from the *rendered* size, in 24-grid units:

| Rendered size | Stroke |
| --- | --- |
| ≤ 16px | 2 |
| ≤ 20px | 1.75 |
| > 20px | 1.5 |

```rust
icon("bell").size(px(16.0))               // stroke 2
icon("bell").size(px(20.0))               // stroke 1.75
icon("bell").size(px(40.0))               // stroke 1.5
icon("bell").size(px(20.0)).stroke_width(2.5) // explicit override
```

Because the rule is derived from the painted bounds, a resized/reflowed icon
keeps its optical weight; you never hand-set `width`/`height`/`stroke-width`.

### Theming / color

Color is inherited exactly like CSS `currentColor`: set `.text_color(...)` on
the icon, or on any ancestor, and the icon follows it. That works out of the box
for Nexa light (`#fafafa`), dark (`#0c0c0e`), accent, muted and high-contrast
palettes — there are no hard-coded colors anywhere in the rendering path.

```rust
div()
    .text_color(rgb(0x71717a))  // muted foreground
    .child(icon("eye"))         // same muted tint
```

Element opacity and text color set directly on the icon are applied too.
Icons are rendered monochromatically by GPUI: one tint per icon, like a
single-color SVG. The web-only shape/fill/3D presentation layers are not part of
this adapter.

## Performance notes (icons per frame)

- **Sprite-atlas caching.** GPUI rasterizes each distinct
  `(icon, size, stroke)` asset once per window (at 2× device scale) and caches it
  in its monochrome sprite atlas. After the first paint, every icon costs one
  textured quad per frame, regardless of its path complexity. This is the
  sprite-backed fast path for long grids.
- **Asset generation is cheap and one-off.** Measured in this repo (release,
  Apple-silicon macOS, Ryzen-class Linux will differ): `Icon::svg()` generation
  is **~15 µs/icon** for the full 650-icon catalogue — about **10 ms** to
  generate every glyph once. The adapter also hits a fast exact-kebab lookup
  before the general name resolver.
- **Reuse one size per grid.** The cache key includes the rounded pixel size, so
  a 24px grid of thousands of icons shares 24px atlas entries. Mixing many
  fractional sizes (or animating layout size) creates many atlas variants and
  cache churn — animate `transform`/`opacity` on a container instead.
- **Only visible icons load lazily.** GPUI calls the asset source when an icon is
  first painted in a window, so a 650-icon scroll view does not pay for icons
  that never render.
- **No workspaces/files.** Assets are `String`s generated in memory; there is no
  filesystem access, no image decoding and no network.

## GPUI version constraints

- Built and tested against **`gpui 0.2.2`** (crates.io). GPUI is pre-1.0 and
  releases breaking changes; keep the `gpui` dependency in sync with this crate
  (and pin with `=0.2.2` if you need reproducibility).
- The crate compiles on stable Rust (edition 2021, `rust-version = 1.85`), which
  is what `gpui 0.2.2` itself requires.

## Platform notes

- **macOS:** GPUI uses Metal and needs Xcode / Command Line Tools with the Metal
  toolchain (`xcrun metal`). Verified with Xcode 27 / macOS 26 on arm64.
- **Linux:** follow GPUI's system dependencies (Vulkan/Blade, Wayland/X11, font
  packages); the adapter adds none.
- **Windows:** GPUI supports DirectX; the adapter adds nothing platform
  specific.
- The crate compiles and tests without opening a window; only running the
  example (or your app) needs a display/GPU.

## Example

```bash
CARGO_TARGET_DIR=/tmp/nexa-gpui-target cargo run --example icons
```

A single window, no external assets:

- palette toggle between Nexa light (`#fafafa`) and dark (`#0c0c0e`),
- the size/stroke rule shown on a row of 16/20/24/32/40px icons,
- a wrapped grid of the first 120 catalogue glyphs whose icons inherit the
  ambient text color (the live catalogue keeps growing; the adapter renders
  whatever the crate exposes).

## Development

```bash
cd rust/gpui
CARGO_TARGET_DIR=/tmp/nexa-gpui-target cargo check
CARGO_TARGET_DIR=/tmp/nexa-gpui-target cargo test
CARGO_TARGET_DIR=/tmp/nexa-gpui-target cargo clippy --all-targets -- -D warnings
cargo fmt --check
```

Keep build artefacts out of the repo with `CARGO_TARGET_DIR` as shown (or rely on
the crate's `target/` ignore rule).

Measured build cost on the reference Apple-silicon macOS machine (after the
crates.io download cache is warm, `--offline`):

| What | Result |
| --- | --- |
| Cold `cargo check` (empty target dir) | **47 s** wall / 182 s CPU, **796 MB** target |
| Warm dev target (lib + tests + example built) | **3.9 GB** under `CARGO_TARGET_DIR` |
| Transitive crates (GPUI's tree) | **400** unique; **2** direct (`gpui`, `nexa-icons`) |
| `cargo build --example icons` (incremental) | ~3.4 s |

## Caveats

- Windows/Linux GPUI backends are GPUI's responsibility; only macOS was used for
  the end-to-end window check in this repo.
- The GPUI asset cache is per window: opening many windows re-rasterizes icons
  once per window.
- Web animation presets (`data-nexa-anim`), swap/morph widgets and shape/fill/3D
  layers are web-only; this crate renders the static, stroke-first glyph. GPUI's
  own animation API can animate the element (opacity/transform) around it.

## License

ISC. Icon geometry from Lucide 1.70 (ISC) with Feather (MIT) portions — see the
repository `LICENSE`/`NOTICE`.
