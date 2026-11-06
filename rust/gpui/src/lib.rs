//! [GPUI](https://gpui.rs) integration for **Nexa Icons**.
//!
//! [`icon`] turns any icon in the `nexa-icons` catalogue into a GPUI element:
//! a stroke-only, 24-grid SVG rendered through GPUI's own SVG renderer, tinted
//! with the ambient text color (the GPUI equivalent of `currentColor`), with
//! the Nexa size→stroke rule applied from the element's rendered size.
//!
//! No external assets are required: [`NexaIconAssets`] is an in-memory
//! [`gpui::AssetSource`] that generates the requested SVG on demand from the
//! `nexa-icons` crate, and GPUI caches the rasterized result in its sprite
//! atlas — which is what makes long grids of icons cheap to paint.
//!
//! # Quick start
//!
//! ```no_run
//! use gpui::{
//!     div, prelude::*, px, rgb, size, App, Application, Bounds, Context, Window, WindowBounds,
//!     WindowOptions,
//! };
//! use nexa_icons_gpui::{icon, NexaIconAssets};
//!
//! struct AppView;
//!
//! impl gpui::Render for AppView {
//!     fn render(&mut self, _window: &mut Window, _cx: &mut Context<Self>) -> impl IntoElement {
//!         div()
//!             .flex()
//!             .gap_2()
//!             .text_color(rgb(0x27272a))
//!             .child(icon("bell"))                    // 24px, stroke 1.5
//!             .child(icon("Bell").size(px(20.0))) // 20px, stroke 1.75
//!             .child(icon("XIcon"))                   // alias -> X
//!     }
//! }
//!
//! fn main() {
//!     Application::new()
//!         .with_assets(NexaIconAssets::new())
//!         .run(|cx: &mut App| {
//!             let bounds = Bounds::centered(None, size(px(640.0), px(480.0)), cx);
//!             cx.open_window(
//!                 WindowOptions {
//!                     window_bounds: Some(WindowBounds::Windowed(bounds)),
//!                     ..Default::default()
//!                 },
//!                 |_, cx| cx.new(|_| AppView),
//!             )
//!             .expect("failed to open window");
//!             cx.activate(true);
//!         });
//! }
//! ```
//!
//! # How it renders
//!
//! GPUI's [`gpui::Svg`](https://docs.rs/gpui/0.2.2/gpui/struct.Svg.html) element
//! in `gpui 0.2.2` can only load assets through [`gpui::AssetSource`] by path,
//! and it bakes a single SVG per element. To keep Nexa's *size-aware* stroke
//! rule and native `currentColor` behaviour, this crate registers a custom
//! [`gpui::Element`] that chooses a width/height/stroke-specific asset path from
//! the element's rendered bounds and paints through the public
//! [`gpui::Window::paint_svg`] API. The bytes are always the full SVG produced
//! by [`nexa_icons::Icon::svg`] — the same markup the web packages emit.
//!
//! # Sizing, stroke and color
//!
//! - Size comes from the normal GPUI style API: `.size(px(24.0))`, `.w(...)`,
//!   flex layout, etc. Default: 24×24px.
//! - Stroke follows the Nexa size→stroke rule from the *rendered* size: ≤16px => 2,
//!   ≤20px => 1.75, >20px => 1.5 (24-grid units). Override with
//!   [`IconElement::stroke_width`].
//! - Color is inherited exactly like `currentColor`: set `.text_color(...)` on
//!   the icon or an ancestor. There are no hard-coded palette colors.
//!
//! # Many icons
//!
//! A grid should render `icon(...)` elements directly: GPUI rasterizes each
//! distinct `(icon, size, stroke)` asset once per window and then paints it as a
//! single monochrome sprite per frame. Reusing the same size for a grid
//! maximizes sprite-atlas reuse; avoid animating the layout size of hundreds of
//! icons per frame (animate opacity/transform on a container instead).
//!
//! # Caveats
//!
//! - The crate pins the `gpui 0.2.2` API (GPUI is pre-1.0 and breaks between
//!   releases; pin it in your own `Cargo.toml` too).
//! - GPUI renders SVGs monochromatically: one tint per icon. Nexa's optional
//!   shape/fill/3D presentation layers are web-only.
//! - Web animation presets are CSS keyframes; GPUI has its own animation API, so
//!   the web `anim` metadata is not replayed here.
//! - GPUI currently has no cross-platform accessibility tree for the SVG
//!   itself; pair icons with GPUI text/tooltips. Nexa's SVG markup still carries
//!   `aria-hidden="true"`.

#![forbid(unsafe_code)]
#![deny(missing_docs)]
#![deny(rustdoc::broken_intra_doc_links)]

mod assets;
mod icon;

pub use assets::{
    asset_path, is_nexa_asset_path, parse_asset_path, render_asset, render_svg, IconAsset,
    NexaIconAssets, ASSET_PREFIX,
};
pub use icon::{icon, icon_opt, resolve_icon, IconElement};

/// Re-export of the icon data crate this adapter renders.
pub use nexa_icons;

/// Re-export of the GPUI version this adapter is built against, so downstream
/// crates can depend on the same one (`nexa_icons_gpui::gpui`).
pub use gpui;
