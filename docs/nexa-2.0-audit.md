# Nexa Icons 2.0 — Design Audit

Status: **Phase A complete** · 7 Nov 2026

Scope: current v1 catalog (1,034 icons, 26 categories) plus renderer, variants,
animation layer and gallery. This audit drives the 2.0 design system; it does
not rewrite the catalog.

## What is already strong

- One 24×24 coordinate system and currentColor-only rendering.
- Tree-shakeable per-icon modules, SSR-safe output, optional React peer.
- Accessible defaults, reduced-motion support and forced-colours rules.
- Consistent API across React, vanilla JS, HTML, Go and Rust.
- Static data + CSS-only motion keeps payload low and rendering predictable.

## Visual findings

| # | Finding | Evidence / impact |
|---|---|---|
| A1 | The outline language is Lucide 1.70-derived and visually generic. | Most geometries are inherited; silhouettes read as “another Lucide”. |
| A2 | Weight is tuned by size, but shapes are not redrawn for size. | 16px Settings gear and Calendar details become noise; 48px icons feel under-detailed. |
| A3 | Solid is synthetic, not designed. | `fillSafe` fills closed nodes; open glyphs fall back to a thick body. Bell/User solid lose detail; Palette/KeyRound cannot fill. |
| A4 | Duotone is accidental. | A flat 16% fill on closed nodes, with per-icon exceptions; no primary/secondary hierarchy. |
| A5 | Corner language is inherited and uneven. | 2px Lucide corners mixed with 1px details; terminals depend on source path. |
| A6 | Optical centering is inconsistent. | Search handle and Bell mouth sit differently from Calendar/Clock; small sizes expose it. |
| A7 | The gallery’s glass treatment dominates the glyph. | Tiles/cards become the subject; labels lose contrast; icons look placed inside buttons. |
| A8 | No visual regression gate. | Structural tests pass while optical regressions or missing variants ship. |

## Per-icon audit — the first 20

| Icon | Observation | 2.0 intervention |
|---|---|---|
| Home | Roof pitch and door width inherited; eaves feel narrow. | Wider 18px body, 2.4r roof junction, arched door with 2.1r. |
| Search | Lens and handle are balanced but generic. | 13.1 diameter lens, tangent 45° handle, solid ring with cut-out. |
| Settings | 8-tooth gear is dense at 16/20. | 8-tooth at 24+, 6-tooth optical variant at 16, larger hub. |
| Bell | Mouth line and clapper are Lucide-like. | Asymmetric flare, 2.25r clapper, solid bell silhouette. |
| User | Head/shoulder gap is tight. | Head r3.55, 1.5px gap, wider shoulder arc. |
| Shield | Curved top lacks structure. | Flatter shoulders, 2.4r point transition, solid fill. |
| Database | Ellipse bands feel diagrammatic. | 7.3×2.65 caps, two 1.2px separations, solid band stack. |
| Server | Two rounded rects, no personality. | 18px wide chassis, status lamp + slot, cut-out holes in solid. |
| Cloud | Lobes are generic. | Flatter 18.55 baseline, dominant right lobe. |
| Folder | Tab is short and symmetric. | Longer offset tab and 1.2r top transition. |
| File | Fold and lines are inherited. | 4.35 diagonal fold, two 1.2px text cuts; solid negative-space lines. |
| Arrow | Head/shaft ratio is generic. | 15.2 shaft, 5.9 head, 45° cut; solid silhouette. |
| Check | Stroke-only check is thin at 48. | Longer arm rhythm, solid wedge with rounded ends. |
| Close | X is symmetrical but plain. | Wider 13.3 span, 1.6r solid arms. |
| Plus / Minus | Standard primitives. | 13.4 span; solid arms use 1.3r. |
| Heart | Lobes and point are inherited. | Wider lobes, 2.5r waist, solid fill. |
| Star | Sharp points feel mechanical. | Rounded outer points through round joins; solid star silhouette. |
| Calendar | Dots and header lack hierarchy. | 2.2r body, binding tabs, progressive-detail dots (5→2 at 16). |
| Clock | Hands and ring are generic. | 8.55 ring, 8px hand lengths, 0.95 hub. |

## Variant audit

- **Outline:** keep one stroke, round caps/joins, no fill.
- **Solid:** must be designed per icon, not generated from the outline. Closed
  silhouettes use `fill-rule="evenodd"` for real cut-outs.
- **Duotone:** one soft primary region at 16% + primary outline; no third layer;
  never encode meaning by colour alone.
- **Glass / gradient / 3D:** optional presentation only; default preview neutral.

## Recommended gates

1. `design:qa` — SVG validity, viewBox, path budget, duplicate geometry, bbox,
   variant completeness.
2. Contact sheets — 20 prototype icons × 3 variants × 5 sizes; all-catalog and
   per-category sheets for silhouette review.
3. Visual snapshots for the prototype at 16/24/48 in light, dark and neutral
   preview backgrounds.
4. Manual review of exceptions; geometry checks are necessary, not sufficient.

## Non-goals for this phase

- Do not rewrite all 1,034 icons before the 20-icon direction is approved.
- Do not add runtime dependencies or change public icon names/aliases.
- Do not make glass/gradient/3D required for a good icon.
