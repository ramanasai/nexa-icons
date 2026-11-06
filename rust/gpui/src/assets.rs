//! In-memory asset serving for GPUI.
//!
//! GPUI's SVG renderer loads assets through the [`gpui::AssetSource`] trait,
//! which is registered once per application with
//! [`gpui::Application::with_assets`]. [`NexaIconAssets`] implements that trait
//! and answers `nexa-icons/...` requests by generating the requested glyph at
//! runtime from the `nexa-icons` crate — **no filesystem, no network, no
//! external asset bundle**.
//!
//! Asset paths are deterministic and encode everything that affects the
//! rendered SVG:
//!
//! ```text
//! nexa-icons/<kebab>/<size-px>/<stroke>.svg
//! nexa-icons/bell/24/auto.svg      size-derived Nexa stroke (1.5 at 24px)
//! nexa-icons/bell/16/auto.svg      size-derived Nexa stroke (2 at 16px)
//! nexa-icons/bell/24/2.5.svg       explicit stroke-width override
//! ```
//!
//! Encoding the size/stroke in the path matters because GPUI caches rasterized
//! SVGs by asset path and device size; each distinct variant is rendered once
//! and then painted from the sprite atlas.

use std::borrow::Cow;

use gpui::{AssetSource, Result, SharedString};
use nexa_icons::SvgOptions;

/// Prefix every Nexa icon asset path starts with.
pub const ASSET_PREFIX: &str = "nexa-icons";

/// One parsed icon asset request.
#[derive(Debug, Clone, PartialEq)]
pub struct IconAsset {
    /// Kebab-case icon id, e.g. `bell`.
    pub kebab: String,
    /// Requested square size in logical pixels.
    pub size_px: u32,
    /// Explicit stroke width in 24-grid units, or `None` to derive it from
    /// `size_px` using the Nexa size→stroke rule (16 => 2, 20 => 1.75, 24+ => 1.5).
    pub stroke_width: Option<f32>,
}

/// Returns true when `path` belongs to the Nexa icon asset namespace.
pub fn is_nexa_asset_path(path: &str) -> bool {
    match path.strip_prefix(ASSET_PREFIX) {
        Some(rest) => rest.is_empty() || rest.starts_with('/'),
        None => false,
    }
}

/// Builds the deterministic asset path for one icon variant.
///
/// Invalid sizes (0) are clamped to 1px and invalid stroke widths (zero,
/// negative, NaN) are treated as `None` (size-derived).
pub fn asset_path(kebab: &str, size_px: u32, stroke_width: Option<f32>) -> String {
    let size_px = size_px.max(1);
    match stroke_width.filter(|width| width.is_finite() && *width > 0.0) {
        Some(width) => format!(
            "{ASSET_PREFIX}/{kebab}/{size_px}/{}.svg",
            format_float(width)
        ),
        None => format!("{ASSET_PREFIX}/{kebab}/{size_px}/auto.svg"),
    }
}

/// Parses an asset path produced by [`asset_path`].
///
/// Returns `None` for paths outside the Nexa namespace, paths with missing or
/// extra segments, sizes that are not positive integers, and non-positive or
/// non-finite explicit stroke widths.
pub fn parse_asset_path(path: &str) -> Option<IconAsset> {
    let rest = path.strip_prefix(ASSET_PREFIX)?.strip_prefix('/')?;
    let mut segments = rest.split('/');
    let kebab = segments.next()?;
    let size = segments.next()?;
    let stroke = segments.next()?;
    if segments.next().is_some() || kebab.is_empty() {
        return None;
    }

    let size_px: u32 = size.parse().ok()?;
    if size_px == 0 {
        return None;
    }

    let stroke = stroke.strip_suffix(".svg")?;
    let stroke_width = if stroke == "auto" {
        None
    } else {
        let width: f32 = stroke.parse().ok()?;
        if !width.is_finite() || width <= 0.0 {
            return None;
        }
        Some(width)
    };

    Some(IconAsset {
        kebab: kebab.to_string(),
        size_px,
        stroke_width,
    })
}

/// Generates the full SVG markup for an icon variant using the public
/// `nexa-icons` renderer, or `None` when the kebab id is unknown.
///
/// This is the same markup the web packages emit: a 24-grid, stroke-only,
/// `currentColor` SVG with `class="nexa-icon"` and `data-nexa-icon`. GPUI's
/// monochrome SVG renderer converts it to an alpha mask and tints it with the
/// text color, which is how `currentColor` semantics are preserved natively.
pub fn render_asset(asset: &IconAsset) -> Option<String> {
    render_svg(&asset.kebab, asset.size_px, asset.stroke_width)
}

/// Convenience wrapper around [`render_asset`] taking the raw variant fields.
pub fn render_svg(kebab: &str, size_px: u32, stroke_width: Option<f32>) -> Option<String> {
    // Fast path: GPUI always passes a canonical kebab id, so match it directly
    // against the table before falling back to the full alias-aware lookup.
    let icon = nexa_icons::ICONS
        .iter()
        .find(|icon| icon.kebab == kebab)
        .or_else(|| nexa_icons::get(kebab))?;
    let mut options = SvgOptions::new().size(size_px.max(1));
    if let Some(width) = stroke_width.filter(|width| width.is_finite() && *width > 0.0) {
        options = options.stroke_width(width);
    }
    Some(icon.svg(options))
}

/// All kebab ids in the catalogue, sorted.
fn kebab_ids() -> Vec<SharedString> {
    let mut ids: Vec<SharedString> = nexa_icons::ICONS
        .iter()
        .map(|icon| SharedString::from(icon.kebab))
        .collect();
    ids.sort();
    ids
}

fn format_float(value: f32) -> String {
    // `Display` for f32 renders 2.0 as "2" and 1.75 as "1.75", which keeps
    // paths short and stable. Values are validated before reaching this point.
    format!("{value}")
}

/// A [`gpui::AssetSource`] that serves the Nexa icon catalogue from memory.
///
/// Register it once when the application starts:
///
/// ```no_run
/// use gpui::Application;
/// use nexa_icons_gpui::NexaIconAssets;
///
/// Application::new()
///     .with_assets(NexaIconAssets::new())
///     .run(|cx| {
///         // open windows and render `nexa_icons_gpui::icon("bell")` elements
///         let _ = cx;
///     });
/// ```
///
/// If your application already has an asset source (for images, fonts, …), wrap
/// it so Nexa paths are handled here and everything else falls through:
///
/// ```no_run
/// use nexa_icons_gpui::NexaIconAssets;
/// # struct MyAssets;
/// # impl gpui::AssetSource for MyAssets {
/// #     fn load(&self, _: &str) -> gpui::Result<Option<std::borrow::Cow<'static, [u8]>>> { Ok(None) }
/// #     fn list(&self, _: &str) -> gpui::Result<Vec<gpui::SharedString>> { Ok(Vec::new()) }
/// # }
/// let assets = NexaIconAssets::with_fallback(MyAssets);
/// # let _ = assets;
/// ```
#[derive(Debug, Clone, Copy, Default)]
pub struct NexaIconAssets<F = ()> {
    fallback: F,
}

impl NexaIconAssets<()> {
    /// Creates an asset source serving only Nexa icons.
    pub const fn new() -> Self {
        Self { fallback: () }
    }
}

impl<F: AssetSource> NexaIconAssets<F> {
    /// Creates an asset source that serves Nexa icons and delegates every other
    /// path to `fallback` (your existing image/font asset source).
    pub fn with_fallback(fallback: F) -> Self {
        Self { fallback }
    }

    /// The wrapped fallback asset source.
    pub fn fallback(&self) -> &F {
        &self.fallback
    }
}

impl<F: AssetSource> AssetSource for NexaIconAssets<F> {
    fn load(&self, path: &str) -> Result<Option<Cow<'static, [u8]>>> {
        if is_nexa_asset_path(path) {
            let bytes = parse_asset_path(path)
                .and_then(|asset| render_asset(&asset))
                .map(|svg| Cow::Owned(svg.into_bytes()));
            return Ok(bytes);
        }
        self.fallback.load(path)
    }

    fn list(&self, path: &str) -> Result<Vec<SharedString>> {
        if is_nexa_asset_path(path) {
            return Ok(kebab_ids());
        }
        self.fallback.list(path)
    }
}
