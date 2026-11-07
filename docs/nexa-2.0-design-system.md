# Nexa Icons 2.0 — Design System

Direction: **Soft Precision · Balanced Weight · Distinctive Geometry**

This document defines the rules used by the prototype. It is a specification for
the catalog rollout, not a claim that all 1,034 icons already follow it.

## 1. Canvas and keylines

| Token | Value | Rule |
|---|---|---|
| Master grid | 24 × 24 | viewBox `0 0 24 24` |
| Live area | 20 × 20 | keep geometry inside 2…22 where possible |
| Keyline square | 18 × 18 | rounded/rectangular glyphs |
| Keyline circle | 17.1 diameter | circular glyphs (e.g. Clock r8.55) |
| Outer margin | 3 px | optical air; binding tabs may enter 2.6 |
| Baseline | 24 units | no fractional half-pixels |

Optical centering is measured from the rendered silhouette, not the path bbox.
Heavy-bottom glyphs (Bell, Cloud) may sit 0.25–0.5px higher than mathematical
centre; pointed glyphs (Star, Shield) may overshoot the circle keyline slightly.

## 2. Stroke and terminals

- Default outline stroke: **2 units** at 24px.
- Caps/joins: **round** for the core family. Sharp family uses butt caps/miter
  joins as an explicit alternative, never mixed inside one icon.
- Minimum negative space between strokes: **1.4 units** at 24px; details below
  1.2 units are removed at 16px.
- Do not use stroke to fake a solid icon. Solid geometry is filled.

### Optical stroke table

SVG stroke is expressed in viewBox units. The renderer may apply size-specific
weights; the prototype validates these values:

| Size | Stroke units | Rendered px | Notes |
|---:|---:|---:|---|
| 16 | 2.30 | ~1.53 | simplify details; 6-tooth gear |
| 20 | 2.15 | ~1.79 | full geometry, tighter spacing |
| 24 | 2.00 | 2.00 | master design |
| 32 | 1.92 | ~2.56 | breathing room |
| 48 | 1.85 | ~3.70 | display size |

The goal is consistent **optical** weight. Do not scale the same geometry and
call it optical sizing: 16px variants remove or merge details.
Examples in the prototype: Calendar drops 3 of 5 date dots and one header line;
File drops the text lines; Database drops the middle band; Settings uses a
6-tooth gear and larger hub.

## 3. Corners and proportions

- Container corners: **2.2–2.4r** (Calendar 2.2, Home junction 2.4).
- Small detail corners: **1.0–1.3r**.
- Interior cut-outs: at least 1.5 units wide at 24px; expand at 16px.
- Vertical/horizontal proportions: primary mass 14–18 units; avoid identical
  18×18 boxes for every icon — organic silhouettes carry the identity.
- Signature asymmetry: use one controlled asymmetry per icon where meaningful
  (Folder tab, Bell flare, Cloud right lobe). Never add decoration arbitrarily.

## 4. Variant rules

### Outline
- One stroke family; no fill.
- Closed silhouettes should read at 16px without detail.
- Details may be removed at 16px; the silhouette must survive.

### Solid
- Designed filled geometry, not a fill of the outline.
- Use `fill-rule="evenodd"` for intentional negative-space cut-outs.
- Cut-outs represent real structure: Home door, File text lines, Calendar dots,
  Server status/slot, Search lens.
- Silhouette must remain recognisable at 16px; remove micro-cut-outs first.

### Duotone
- **Soft** layer: 16% currentColor fill on the primary mass.
- **Primary** layer: full outline above it.
- One soft layer per icon; no gradient, no third tone, no meaning by colour.
- Detail-sensitive icons may omit the soft layer rather than produce a blob.

### Optional treatments
Glass, gradient, depth and 3D are presentation effects, applied after the icon
is good in outline. Default gallery preview is neutral and treatment-free.

## 5. Identity rules

1. **Soft junctions, precise endings.** Large forms use 2.2–2.4r; terminals stay
   deliberate and uncluttered.
2. **Generous air, not thin lines.** Use space and simplified details rather than
   reducing stroke below 2 units at 24.
3. **One asymmetry.** Folder tab, Bell flare, Cloud lobe; not applied to every
   icon.
4. **Silhouette first.** At 16px the icon must be identifiable as a black shape.
5. **No decorative signatures.** No dots, cuts or notches added only to look
   different.

## 6. Path quality budget

| Rule | Limit |
|---|---|
| Node count per variant | ≤ 12 |
| Path data length | ≤ 700 chars |
| Redundant points | none (collinear / duplicate commands) |
| Bbox | inside 1.5…22.5; width/height ≥ 12 |
| Duplicate geometry | none across catalog |
| Missing variants | none in the 2.0 set |

## 7. Rollout and compatibility

- Phase C validates 20 icons; Phase E applies the system in batches of 20–40
  with contact sheets and manual sign-off.
- Existing names, aliases, exports, animation presets and accessibility stay
  intact. Variant geometry is additive metadata; current fallback renderers
  remain for icons without 2.0 variants.
- A v1 → v2 visual diff and migration note are published with each batch.

## 8. Exceptions process

Any icon that cannot follow a rule (e.g. logo/brand marks, flags, illustrations)
is listed in the batch report with the reason and an optical rationale. Rules
are not enforced blindly.
