# Nexa icon design rules

The Nexa icon system is one visual language: **650 stroke icons in 24
categories**, all drawn on the same grid, all inheriting the text color, all
shipped with a semantic animation preset.

This page is the condensed, package-facing version of
[`nexa-icon-styles-SKILL.md`](../nexa-icon-styles-SKILL.md) — read that file for
the full app-level style guide (brand marks, containers, review process). The
rules below are the ones that affect how you *consume* this package.

## 1. One set, only

Use this set for every UI icon in an Nexa surface: nav, buttons, inputs, tables,
empty states, feature cards, status. Do not mix in a second icon set on the same
screen — mixed stroke weights and corner radii read as visual noise, even when
each icon is individually fine.

The geometry derives from Lucide 1.70 (ISC), which in turn derives partly from
Feather (MIT). Keeping one upstream keeps the drawn shapes consistent.

## 2. Grid and geometry

| Rule | Value |
|---|---|
| Canvas | `viewBox="0 0 24 24"` |
| Padding | 2px on every side → 20×20 live area |
| Fill | `none` at rest; fill variants set `fill="currentColor"` with `fill-opacity` (1 solid / 0.16 duotone); tiny detail dots in `KeyRound`, `Palette`, `Tag` always use `fill="currentColor"` |
| Stroke | `currentColor` |
| Caps / joins | `round` |
| Root stroke width | `2` — components scale it per size (table below) |
| Corner radius | ≈2px on rectangles |
| Complexity | ≤4 strokes per icon so it stays legible at 16px |

All icons are stored as absolute `{tag, attrs}` nodes, so generators emit the
same geometry in every language. Nothing is fetched at runtime.

## 3. Size → stroke width

Stroke has to get *thinner* as the icon gets *bigger*, or optical weight drifts:
a 2px stroke at 24px looks heavier than a 2px stroke at 16px.

| Token | Pixels | Stroke |
|---|---|---|
| `sm` | 16 | 2 |
| `md` | 20 | 1.75 |
| `lg` | 24 | 1.5 |
| `xl` | 40 | 1.5 |

The source SVGs and sprite symbols carry `stroke-width="2"` at 24px so they are
valid, readable standalone assets; `sprite({ strokeWidth })` can change the
symbol stroke when you need the optical weight for another size.

Every binding derives stroke from size automatically: ≤16 → 2, 20 → 1.75, 24+
(including 32/48) → 1.5. The default is **24px / 1.5** in React, JS, Go and
Rust; `strokeWidth` (Go `StrokeWidth`, Rust `.stroke_width`) can override the
automatic choice when you need to match an existing surface exactly.

## 4. Color

- Every icon is `currentColor`. There is no color prop, no hex, no theme variant
  file — the icon inherits `color` from its context.
- Default to a muted foreground (~60% of text contrast); use full foreground for
  hover/active. See [theming.md](theming.md) for tokens and contrast evidence.
- Accent color is reserved: primary action, active nav item, and status.
  - success (applied, saved): green
  - warning (expiring, closing soon): amber
  - danger (rejected, delete): red
  - info / new jobs / Pro: brand accent
- Both themes are the same file: light `#fafafa`, dark `#0c0c0e`. Check the icon
  at 3:1 contrast on both (WCAG 1.4.11 for non-text UI).

## 5. States

| State | Treatment |
|---|---|
| Default | outline, muted foreground |
| Active / selected | 10–15% accent tint behind the glyph in a rounded square (radius 8px), or the `filled` / `variant="solid"` state where the glyph is `fillSafe` |
| Disabled | 40% opacity, no hover |
| Loading | spinner (`Loader2`, `spin` / `always`) at the same size — never shift layout |

Keep one active treatment per surface. Tint, shape container and solid fill are
three valid active treatments — pick one per surface, never mix them on the same
nav bar.

## 6. Containers, shapes and fills

Shape containers (React/JS `shape="…"`) wrap a glyph in a theme-safe frame:

| Shape | Use |
|---|---|
| `rounded` / `squircle` | feature cards, empty states |
| `circle` | status dots, avatars, media |
| `square` / `pill` | toolbars, filters, chips |
| `hexagon` / `diamond` | decorative/hero moments only |

- Frame is `round(size × 1.7)`; tint `color-mix(currentColor 14%)`, border 26%.
  It follows `color`, so never set a background color on the container.
- `filled` / `variant`: outline is the default; `duotone` (soft 16% fill) is the
  safe emphasis; `solid` only for closed geometry. Open glyphs degrade to
  duotone automatically — do not force solid globally.
- One container style per page section. Containers are presentation; the fill
  state must also be conveyed in text/`aria-*` when it carries meaning.

## 6b. CSS 3D

`threeD="tilt|flip|extrude|orbit"` is a presentation flourish: perspective
640px, transform-only transitions on hover/focus-within. Use at most one 3D
moment per view, never as the only state feedback, and never on a row of icons.
It is CSS, not WebGL, and reduced motion removes it.

## 7. Fill and 3D are motion too

Fill transitions (`animateFill`) and 3D previews share the same rules as icon
animation: CSS-only, compositor-friendly, reduced-motion safe, never the only
signal. Fill animation is a 320ms `fill-opacity` transition; don't combine it
with a transform preset on the same icon.

## 8. Motion is semantic

Every icon has a preset chosen from its meaning, not from taste: arrows nudge in
their own direction, `Loader2` spins forever, `Bell` rings, `Heart` beats,
`Trash2` shakes, most everything else pops on hover. Animation is feedback, not
decoration — it plays on hover by default, only `Loader2` runs always, and all
motion collapses to a no-op under `prefers-reduced-motion: reduce`.

28% of the set are `pop` (generic confirmation), 20% `pulse`, 14% `wiggle`;
the directional nudges cover arrows/chevrons so the movement reinforces the
label. Full preset table: [animations.md](animations.md).

## 9. Accessibility

- Decorative icon → `aria-hidden="true"` (the default in every API).
- Icon-only button → `aria-label` + tooltip; hit area ≥40×40px even when the
  glyph is 20px.
- Never convey status/state with the glyph alone — pair it with text or a label.
- Meaningful standalone icons → pass `label`, which switches to `role="img"` +
  `aria-label` instead of `aria-hidden`.
- Icons must meet 3:1 against their background in both themes; the default
  outline weight is designed for this.

## 9b. Illustrated set

Twelve larger duotone illustrations live in [`illustrations/`](../illustrations)
for empty states, feature cards and onboarding — the expressive sibling of the
24px icon set. Rules (full system in
[`illustrations/README.md`](../illustrations/README.md)):

- 64×64 viewBox; three-step outline weights 2.5 / 2 / 3; soft currentColor
  washes at fixed opacity steps (`.14/.10/.07/.20/.35/.45`).
- Exactly **one semantic accent detail** per illustration
  (`--nexa-ill-accent`); decoration stays currentColor.
- Circle stage for state/people/scene; rounded-square stage for
  surface/document/workplace. One stage per illustration.
- Inline SVG so `color`/tokens inherit; never bake hexes. Reads at 48px, clean
  at 192px; grayscale-safe.

Use illustrations for empty states/heroes; keep the 24px stroke icons for UI
chrome (nav, buttons, tables).

## 10. Brand marks (exception)

Favicon, app icon, PWA icon, and OG/social images may be filled or duotone and
do not follow the outline rules. The UI set stays outline. See
[`nexa-icon-styles-SKILL.md`](../nexa-icon-styles-SKILL.md) §9 for export sizes.

## Do / don't

| Do | Don't |
|---|---|
| Use one icon per concept from the map | Pick a new icon each time the concept appears |
| Pass `size="sm" \| "md" \| "lg" \| "xl"` | Hand-write `width`/`height`/`stroke-width` on the `<svg>` |
| Let `currentColor` inherit | Hard-code a hex; use the `filled`/`variant` API instead of raw `fill` styles |
| Use `aria-hidden` on decorative icons | Add `aria-hidden` to a labelled icon-button icon |
| Respect reduced motion | Force `animation`/`transition: ... !important` on icons |
| Pick one active treatment per surface (fill, shape or tint) | Mix solid fills, shape frames and tinted cards on one surface |
| Use `threeD` as a single deliberate flourish | Put 3D on every icon or use it as the only feedback |
| Start from `nexaMap` in `data/icons.json` | Invent a new concept→icon mapping in a PR |


## Glass & gradients

- Glass is an optional surface, not a default: one glass layer per surface,
  never on every icon in a list. Use `frost`/`clear` for neutral chrome, `ice`
  for cool accents, `steel` on neutral grey surfaces.
- Gradient strokes are decorative emphasis: one gradient moment per view; keep
  status colours semantic and pair with text.
- `mono` gradient is the currentColor-safe option; all presets are retunable via
  `--nexa-grad-a/b` and degrade to Canvas/CanvasText in forced colours.
- Import `@nexa/icons/effects.css` only in apps that use them (icons unaffected
  otherwise).
