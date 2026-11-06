# GPUI integration (`nexa-icons-gpui`)

Rust adapter for **GPUI** (Zed's GPU-accelerated UI framework) in
[`rust/gpui/`](../rust/gpui). It renders any catalog icon as a stroke-only,
text-color-tinted SVG in a GPUI window.

| | |
|---|---|
| Package | `nexa-icons-gpui` 1.0.0 |
| Edition / MSRV | 2021 / Rust 1.85 |
| License | ISC (geometry: Lucide ISC + Feather MIT) |
| GPUI | `0.2.2` (pre-1.0 — pin it) |
| Deps | `gpui = "0.2.2"`, `nexa-icons = { path = "../" }` |
| Crate dir | `rust/gpui/` (parent crate excludes this subdir) |

GPUI is **pre-1.0** and breaks between releases. Pin `=0.2.2` and match
`nexa_icons_gpui::gpui` with your app's `gpui` version.

## Install

```toml
[dependencies]
gpui = "0.2.2"
nexa-icons-gpui = { path = "../rust/gpui" } # path in this repo; version once published
```

## Register the asset source (required)

GPUI renders SVGs through an app-level `AssetSource`. Nexa generates the SVG
bytes in memory from `nexa-icons`, so there are no files to ship:

```rust
use gpui::Application;
use nexa_icons_gpui::NexaIconAssets;

fn main() {
    Application::new()
        .with_assets(NexaIconAssets::new())
        .run(|cx| { /* open windows and render icon(...) elements */ });
}
```

If the app already has an asset source (images/fonts), wrap it so Nexa paths are
handled here and everything else falls through:

```rust
let assets = NexaIconAssets::with_fallback(my_existing_assets);
```

Three asset-source forms exist: `NexaIconAssets::new()`,
`NexaIconAssets::with_fallback(existing)`, and the raw helpers
`asset_path` / `parse_asset_path` / `render_asset` / `render_svg` if you build
your own `AssetSource`.

## Render icons

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
            .text_color(rgb(0x27272a))            // ancestors set currentColor
            .child(icon("bell"))                   // 24px, stroke 1.5
            .child(icon("Bell").size(px(20.0)))    // 20px, stroke 1.75
            .child(icon("XIcon"))                  // aliases work
            .child(icon("Triangle Alert"))         // separator-insensitive
    }
}
```

Unknown names render nothing. For dynamic names use `icon_opt(name)` (returns
`Option<IconElement>`) or `resolve_icon(name)` (returns `Option<&'static Icon>`)
and decide what to do instead.

### Public API

| Export | Purpose |
|---|---|
| `icon(name)` | element for a catalog icon; invalid names no-op |
| `icon_opt(name)` | `Option<IconElement>` |
| `resolve_icon(name)` | `Option<&'static nexa_icons::Icon>` |
| `IconElement` | element with `.stroke_width(f32)` + full GPUI `Styled` API |
| `NexaIconAssets` | in-memory `gpui::AssetSource`; `.new()`, `.with_fallback(src)` |
| `asset_path`, `parse_asset_path`, `render_asset`, `render_svg`, `IconAsset`, `ASSET_PREFIX` | asset helpers for custom sources |
| `gpui`, `nexa_icons` re-exports | keep versions aligned |

Name resolution matches every other Nexa package: canonical names, aliases
(`XIcon`, `TriangleAlert`), kebab ids, case-insensitive, and spaces/underscores/
hyphens ignored (`Triangle Alert`, `RotateCcwClock`).

## Sizing, stroke, color

- Size uses the normal GPUI style API (`.size(px(24.0))`, `.w()`, `.h()`, flex,
  layout). Default **24×24px**.
- Stroke derives from the *rendered* size: ≤16px → 2, ≤20px → 1.75, >20px → 1.5.
  Override with `.stroke_width(f32)`.
- Color inherits like CSS `currentColor`: set `.text_color(...)` on the icon or
  an ancestor; element opacity is honored. No hard-coded palette colors.
- GPUI renders SVGs monochromatically (one tint per icon), so shape/fill/3D and
  CSS animation presets from the web packages are not replayed. Animate the
  element with GPUI's own animation API if needed.

## How it renders

`gpui 0.2.2`'s `Svg` element loads assets by path and bakes one fixed SVG per
element, which cannot express Nexa's size-aware stroke. This crate implements a
custom `gpui::Element` that chooses a `(icon, size, stroke)` asset path from the
rendered bounds and paints via the public `Window::paint_svg` API (GPUI's own
SVG rasterizer). The bytes are the full SVG from `nexa_icons::Icon::svg()` — the
same markup the web packages emit — and GPUI tints the rasterized alpha mask
with the element's text color.

Performance characteristics:

- **Sprite-atlas caching** per window: each distinct `(icon, size, stroke)` is
  rasterized once at 2× device scale, then painted as one monochrome sprite per
  frame. Long grids become textured quads regardless of path complexity.
- **Lazy**: the asset source runs when an icon is first painted, so never-rendered
  icons cost nothing.
- **Cheap generation**: `Icon::svg()` is ~15 µs/icon for the full 650-icon
  catalogue (~10 ms for all glyphs once).
- **Reuse one size per grid**: the cache key includes rounded pixel size; mixing
  fractional sizes creates atlas variants. Animate container transform/opacity,
  not layout size.

## Build cost (honest numbers)

GPUI's dependency tree is large; the adapter itself is thin:

| What | Reference result (Apple-silicon macOS) |
|---|---|
| Cold `cargo check` (empty target dir) | **47 s** wall / 182 s CPU, **796 MB** target |
| Warm dev target (lib + tests + example) | **3.9 GB** under `CARGO_TARGET_DIR` |
| Transitive crates | **400** unique; **2** direct (`gpui`, `nexa-icons`) |
| `cargo build --example icons` (incremental) | ~3.4 s |

Use a dedicated `CARGO_TARGET_DIR` (e.g.
`CARGO_TARGET_DIR=/tmp/nexa-gpui-target cargo check`) to keep artifacts out of
the repo.

## Development and verification

```bash
cd rust/gpui
CARGO_TARGET_DIR=/tmp/nexa-gpui-target cargo check
CARGO_TARGET_DIR=/tmp/nexa-gpui-target cargo test
CARGO_TARGET_DIR=/tmp/nexa-gpui-target cargo clippy --all-targets -- -D warnings
cargo fmt --check
```

Verified: `cargo fmt`/`check`/`test` (7 integration + 6 doctests) and `clippy`
clean; the example compiles and links. Running the example opens a real window
(palette toggle + size/stroke row + wrapped grid), which is **not launched in
CI** — it needs a display/GPU.

Platform notes: macOS uses Metal (needs Xcode/Command Line Tools with `xcrun
metal`, verified Xcode 27/macOS 26 arm64); Linux needs GPUI's Vulkan/Wayland/X11
system deps; Windows uses DirectX. The adapter adds no platform-specific code.
Only macOS was used for the end-to-end window check. GPUI has no cross-platform
accessibility tree for the SVG yet — pair icons with GPUI text/tooltips.

## Caveats

- GPUI `0.2.2` is pre-1.0; pin it.
- Monochrome only; no web shape/fill/3D/animation/swap replay.
- Asset cache is per window: opening many windows re-rasterizes icons once each.
- Full usage/examples: [`rust/gpui/README.md`](../rust/gpui/README.md).
- Back to the Rust crate docs: [languages/rust.md](languages/rust.md).
