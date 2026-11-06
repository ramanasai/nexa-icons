//! Markup, lookup and asset-source tests that do not need a GPUI window.
//!
//! These exercise everything except the platform window/renderer: name
//! resolution, deterministic asset paths, the generated SVG markup contract and
//! the in-memory [`NexaIconAssets`] source.

use std::borrow::Cow;

use gpui::{AssetSource, SharedString};
use nexa_icons_gpui::{
    asset_path, icon, icon_opt, is_nexa_asset_path, parse_asset_path, render_asset, render_svg,
    resolve_icon, IconAsset, NexaIconAssets, ASSET_PREFIX,
};

#[test]
fn resolves_names_aliases_kebabs_and_compact_forms() {
    assert_eq!(resolve_icon("Bell").map(|icon| icon.name), Some("Bell"));
    assert_eq!(resolve_icon("bell").map(|icon| icon.name), Some("Bell"));
    assert_eq!(resolve_icon("BELL").map(|icon| icon.name), Some("Bell"));
    assert_eq!(resolve_icon("XIcon").map(|icon| icon.name), Some("X"));
    assert_eq!(
        resolve_icon("TriangleAlert").map(|icon| icon.name),
        Some("AlertTriangle")
    );
    assert_eq!(
        resolve_icon("Triangle Alert").map(|icon| icon.name),
        Some("AlertTriangle")
    );
    assert_eq!(
        resolve_icon("Alert-Triangle").map(|icon| icon.name),
        Some("AlertTriangle")
    );
    assert_eq!(
        resolve_icon("triangle-exclamation-point").map(|icon| icon.name),
        Some("AlertTriangle")
    );
    assert_eq!(
        resolve_icon("RotateCcwClock").map(|icon| icon.name),
        Some("History")
    );
    assert!(resolve_icon("").is_none());
    assert!(resolve_icon("not-a-real-icon").is_none());
}

#[test]
fn icon_element_is_valid_on_known_names_only() {
    assert!(icon("bell").is_valid());
    assert_eq!(icon("bell").kebab(), Some("bell"));
    assert!(icon("XIcon").is_valid());
    assert_eq!(icon("XIcon").kebab(), Some("x"));
    assert_eq!(
        icon("Triangle Alert").kebab(),
        Some("triangle-exclamation-point")
    );

    assert!(!icon("not-a-real-icon").is_valid());
    assert_eq!(icon("not-a-real-icon").kebab(), None);
    assert!(icon_opt("bell").is_some());
    assert!(icon_opt("not-a-real-icon").is_none());
    // Builder methods are chainable and never panic on bad input.
    assert!(icon("bell").stroke_width(2.0).is_valid());
    assert!(icon("bell").stroke_width(f32::NAN).is_valid());
}

#[test]
fn asset_paths_are_deterministic_and_round_trip() {
    assert_eq!(asset_path("bell", 24, None), "nexa-icons/bell/24/auto.svg");
    assert_eq!(asset_path("bell", 16, None), "nexa-icons/bell/16/auto.svg");
    assert_eq!(
        asset_path("bell", 24, Some(2.5)),
        "nexa-icons/bell/24/2.5.svg"
    );
    assert_eq!(
        asset_path("bell", 24, Some(2.0)),
        "nexa-icons/bell/24/2.svg"
    );
    // Invalid values degrade to safe variants instead of producing bad paths.
    assert_eq!(asset_path("bell", 0, None), "nexa-icons/bell/1/auto.svg");
    assert_eq!(
        asset_path("bell", 24, Some(0.0)),
        "nexa-icons/bell/24/auto.svg"
    );
    assert_eq!(
        asset_path("bell", 24, Some(f32::NAN)),
        "nexa-icons/bell/24/auto.svg"
    );

    let cases = [
        ("nexa-icons/bell/24/auto.svg", "bell", 24, None),
        ("nexa-icons/bell/16/auto.svg", "bell", 16, None),
        ("nexa-icons/bell/24/2.5.svg", "bell", 24, Some(2.5)),
        (
            "nexa-icons/triangle-exclamation-point/40/2.svg",
            "triangle-exclamation-point",
            40,
            Some(2.0),
        ),
    ];
    for (path, kebab, size, stroke) in cases {
        let parsed = parse_asset_path(path).unwrap_or_else(|| panic!("failed to parse {path}"));
        assert_eq!(
            parsed,
            IconAsset {
                kebab: kebab.to_string(),
                size_px: size,
                stroke_width: stroke,
            }
        );
        // Re-serialising a parsed path is stable for these accepted values.
        assert_eq!(
            asset_path(&parsed.kebab, parsed.size_px, parsed.stroke_width),
            path
        );
    }

    for bad in [
        "nexa-icons/bell/24.svg",
        "nexa-icons//24/auto.svg",
        "nexa-icons/bell/0/auto.svg",
        "nexa-icons/bell/abc/auto.svg",
        "nexa-icons/bell/24/0.svg",
        "nexa-icons/bell/24/-1.svg",
        "nexa-icons/bell/24/auto.svg/extra",
        "other/bell/24/auto.svg",
    ] {
        assert!(parse_asset_path(bad).is_none(), "{bad} should not parse");
    }

    assert!(is_nexa_asset_path(ASSET_PREFIX));
    assert!(is_nexa_asset_path("nexa-icons/bell/24/auto.svg"));
    assert!(!is_nexa_asset_path("nexa-icons-other/bell.svg"));
    assert!(!is_nexa_asset_path("images/logo.png"));
}

#[test]
fn rendered_markup_follows_the_nexa_contract() {
    let svg = render_svg("bell", 24, None).expect("bell renders");
    assert!(svg.starts_with("<svg "), "{svg}");
    assert!(svg.ends_with("</svg>"), "{svg}");
    assert!(svg.contains("viewBox=\"0 0 24 24\""), "{svg}");
    assert!(svg.contains("width=\"24\""), "{svg}");
    assert!(svg.contains("height=\"24\""), "{svg}");
    assert!(svg.contains("stroke=\"currentColor\""), "{svg}");
    assert!(svg.contains("fill=\"none\""), "{svg}");
    assert!(svg.contains("stroke-width=\"1.5\""), "{svg}");
    assert!(svg.contains("class=\"nexa-icon\""), "{svg}");
    assert!(svg.contains("data-nexa-icon=\"bell\""), "{svg}");
    assert!(!svg.contains('#'), "no hard-coded hex colors: {svg}");

    // Alias / canonical / kebab / compact all produce identical markup.
    assert_eq!(render_svg("Bell", 24, None), Some(svg.clone()));
    assert_eq!(render_svg("BELL", 24, None), Some(svg.clone()));

    // Nexa size -> stroke rule.
    for (size, stroke) in [
        (16u32, "2"),
        (20, "1.75"),
        (24, "1.5"),
        (32, "1.5"),
        (40, "1.5"),
    ] {
        let svg = render_svg("bell", size, None).expect("renders");
        let expected = format!("stroke-width=\"{stroke}\"");
        assert!(svg.contains(&expected), "{size}px: {svg}");
        assert!(svg.contains(&format!("width=\"{size}\"")), "{svg}");
    }

    // Explicit stroke override wins.
    let heavy = render_svg("bell", 20, Some(2.5)).expect("renders");
    assert!(heavy.contains("stroke-width=\"2.5\""), "{heavy}");
    assert!(heavy.contains("width=\"20\""), "{heavy}");

    assert!(render_svg("not-a-real-icon", 24, None).is_none());

    // `render_asset` and `render_svg` agree.
    let asset = IconAsset {
        kebab: "bell".to_string(),
        size_px: 24,
        stroke_width: None,
    };
    assert_eq!(render_asset(&asset), Some(svg));
}

#[test]
fn every_catalogue_icon_renders() {
    for name in nexa_icons::names() {
        let svg = render_svg(name, 24, None).unwrap_or_else(|| panic!("{name} did not render"));
        assert!(svg.starts_with("<svg "), "{name}: {svg}");
        assert!(svg.ends_with("</svg>"), "{name}: {svg}");
        assert!(svg.contains("class=\"nexa-icon\""), "{name}: {svg}");
        assert!(!svg.contains('#'), "{name} contains a hex color");
        assert!(
            nexa_icons_gpui::resolve_icon(name).is_some(),
            "{name} should resolve"
        );
    }
}

#[test]
fn in_memory_asset_source_serves_icons() {
    let assets = NexaIconAssets::new();

    let bytes = assets
        .load("nexa-icons/bell/24/auto.svg")
        .expect("load succeeds")
        .expect("asset exists");
    let svg = std::str::from_utf8(&bytes).expect("utf-8");
    assert!(svg.starts_with("<svg "), "{svg}");
    assert!(svg.contains("data-nexa-icon=\"bell\""), "{svg}");
    assert_eq!(svg, render_svg("bell", 24, None).expect("renders"));

    // Aliases work in asset paths too (resolved through the icon crate).
    let alias = assets
        .load("nexa-icons/XIcon/24/auto.svg")
        .expect("load succeeds")
        .expect("alias asset exists");
    assert!(std::str::from_utf8(&alias)
        .expect("utf-8")
        .contains("data-nexa-icon=\"x\""));

    // Unknown icons and malformed paths return `None` rather than erroring.
    assert!(assets
        .load("nexa-icons/not-a-real-icon/24/auto.svg")
        .expect("load succeeds")
        .is_none());
    assert!(assets
        .load("nexa-icons/bell/24/not-a-stroke.svg")
        .expect("load succeeds")
        .is_none());
    // Non-Nexa paths fall through to the default `()` asset source.
    assert!(assets
        .load("images/logo.png")
        .expect("load succeeds")
        .is_none());

    let listed = assets.list("nexa-icons").expect("list succeeds");
    assert_eq!(listed.len(), nexa_icons::ICONS.len());
    assert!(listed.contains(&SharedString::from("bell")));
}

#[test]
fn asset_source_delegates_unknown_paths_to_fallback() {
    struct Custom;

    impl AssetSource for Custom {
        fn load(&self, path: &str) -> gpui::Result<Option<Cow<'static, [u8]>>> {
            match path {
                "custom/hello.txt" => Ok(Some(Cow::Borrowed(b"hello"))),
                _ => Ok(None),
            }
        }

        fn list(&self, path: &str) -> gpui::Result<Vec<SharedString>> {
            if path == "custom" {
                Ok(vec![SharedString::from("hello.txt")])
            } else {
                Ok(Vec::new())
            }
        }
    }

    let assets = NexaIconAssets::with_fallback(Custom);
    assert_eq!(
        assets
            .load("custom/hello.txt")
            .expect("load succeeds")
            .expect("fallback asset exists")
            .as_ref(),
        b"hello"
    );
    assert_eq!(assets.list("custom").expect("list succeeds").len(), 1);
    // Icons still win over the fallback for Nexa paths.
    assert!(assets
        .load("nexa-icons/bell/24/auto.svg")
        .expect("load succeeds")
        .is_some());
}

#[test]
#[ignore = "micro-benchmark; run with `cargo test -- --ignored --nocapture`"]
fn measure_asset_generation() {
    use std::time::Instant;

    let names = nexa_icons::names();
    let iterations = 200u32;
    // Warm up in-memory lookup/caches.
    let _ = render_svg("bell", 24, None);

    let start = Instant::now();
    let mut bytes = 0usize;
    for _ in 0..iterations {
        for name in &names {
            bytes += render_svg(name, 24, None).expect("renders").len();
        }
    }
    let elapsed = start.elapsed();
    let calls = u64::from(iterations) * names.len() as u64;
    println!(
        "render_svg: {:.2} us/icon (debug build, {} icons x {iterations} iterations, {:.1} MiB generated)",
        elapsed.as_secs_f64() * 1e6 / calls as f64,
        names.len(),
        bytes as f64 / (1024.0 * 1024.0)
    );
}
