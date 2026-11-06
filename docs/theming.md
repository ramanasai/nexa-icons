# Theming icons

Icons are theme-neutral by construction: every glyph strokes with
`currentColor` and has `fill="none"` at rest; fill variants and shape frames
also derive every color from `currentColor`. There is no light SVG and dark SVG,
no icon font, no color prop. You theme icons the same way you theme text — with
the CSS `color` property.

```html
<svg class="nexa-icon" aria-hidden="true"><use href="#nexa-bell"/></svg>
```

```css
.nexa-icon { width: 20px; height: 20px; color: var(--nexa-fg-muted); }
.nexa-icon:hover { color: var(--nexa-fg); }
```

## 1. The currentColor rule

| Do | Why |
|---|---|
| Style the wrapper (`color`) | One rule themes any number of icons; hover/focus/disabled inherit |
| Let icons inherit button/link colors | Icons inside `<button>` automatically match its state colors |
| Use `currentColor` in custom CSS backgrounds | Tint chips and containers can follow the icon color |

Never put `fill`, `stroke`, or a hex value on an icon. The generators assert the
dataset contains no hard-coded colors, and every API emits `currentColor` only.

## 2. Nexa theme backgrounds

| Theme | Background | Notes |
|---|---|---|
| Light | `#fafafa` | Nexa app light canvas |
| Dark | `#0c0c0e` | Nexa app dark canvas |

The same icon file must pass on both. Do not fork the icon set per theme; if an
icon is invisible, the **color token** is wrong, not the glyph.

## 3. Reference tokens (starting point, not a mandate)

These are neutral reference values that clear 3:1 (most clear 4.5:1) on the Nexa
backgrounds. If your app already has a palette, keep it and just verify contrast.

| Token | Light on `#fafafa` | Ratio | Dark on `#0c0c0e` | Ratio |
|---|---|---|---|---|
| `--nexa-fg` | `#3f3f46` | 10.01:1 | `#d4d4d8` | 13.22:1 |
| `--nexa-fg-muted` | `#71717a` | 4.63:1 | `#a1a1aa` | 7.63:1 |
| `--nexa-accent` | `#2563eb` | 4.95:1 | `#60a5fa` | 7.69:1 |
| `--nexa-success` | `#15803d` | 4.81:1 | `#4ade80` | 11.22:1 |
| `--nexa-warning` | `#b45309` | 4.81:1 | `#fbbf24` | 11.71:1 |
| `--nexa-danger` | `#b91c1c` | 6.20:1 | `#f87171` | 7.07:1 |
| `--nexa-pro` | `#7c3aed` | 5.46:1 | `#a78bfa` | 7.18:1 |

Ratios use the WCAG 2.x relative-luminance formula and were computed against the
exact background hexes above. Recompute if you change a value:

```js
const lum = (hex) => {
  const c = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map(i => parseInt(c.slice(i, i + 2), 16) / 255)
    .map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
console.log(ratio('#71717a', '#fafafa').toFixed(2)); // 4.63
```

```css
:root {
  --nexa-bg: #fafafa;
  --nexa-fg: #3f3f46;
  --nexa-fg-muted: #71717a;
  --nexa-accent: #2563eb;
  color-scheme: light;
}
[data-theme="dark"] {
  --nexa-bg: #0c0c0e;
  --nexa-fg: #d4d4d8;
  --nexa-fg-muted: #a1a1aa;
  --nexa-accent: #60a5fa;
  color-scheme: dark;
}
```

## 4. Contrast: 3:1 is the floor

WCAG 1.4.11 (Non-text Contrast) requires **3:1** for icons that carry meaning —
nav items, icon buttons, form status, toggles. Treat 3:1 as the minimum and 4.5:1
as the target for icons paired with body text.

| Icon role | Requirement |
|---|---|
| Decorative (next to a text label) | Exempt, but keep ≥3:1 for comfort |
| Meaningful / icon-only control | 3:1 minimum vs adjacent background |
| Focus indicator around an icon | 3:1 vs both the icon and the background |
| Disabled icon | Exempt; still keep it visually distinguishable (~40% opacity) |

Icons are single-color strokes, so contrast is simply icon color vs the surface
behind it — test against the actual card/pill background, not just the page.

## 5. Accent and status usage

Accent is a signal, not decoration. Allowed uses:

- the primary action's icon
- the active nav item
- status: success / warning / danger / info (job states: applied, expiring,
  rejected, new)
- Pro/upsell affordances

Not allowed: tinting every icon on a card, per-icon rainbow palettes, or using
accent for an icon that is not interactive. Status must never be conveyed by
color alone — pair the icon with text or a visible label.

## 6. Containers

The approved icon container: 40px box / 20px icon or 48px box / 24px icon,
radius 10–12px, background = accent at 10% (light) / 15% (dark), glyph in the
accent color. Set the tint with `color-mix` when available, with a fallback:

```css
.icon-tile {
  inline-size: 40px;
  block-size: 40px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  color: var(--nexa-accent);
  background: color-mix(in srgb, currentColor 10%, transparent);
}
@media (prefers-color-scheme: dark) {
  .icon-tile { background: color-mix(in srgb, currentColor 15%, transparent); }
}
@supports not (background: color-mix(in srgb, currentColor 10%, transparent)) {
  .icon-tile { background: rgb(37 99 235 / 0.10); }
}
```

## 7. Shape containers, fills, 3D

| Feature | How it themes |
|---|---|
| Shape frame | `background: color-mix(in srgb, currentColor 14%, transparent)`, border 26% — follows `color` automatically |
| Duotone / solid fill | `fill="currentColor"` + `fill-opacity` (0.16 / 1) — no second color |
| Fill animation | CSS `fill-opacity` transition only; reduced motion removes it |
| 3D | `transform` + `drop-shadow(color-mix(currentColor …))`; no colors of its own |

```css
/* one accent context themes the icon AND its frame/fill */
.alert { color: var(--nexa-danger); }
```

Rules:

- Never set a background on a shaped frame yourself; the 11% currentColor tint
  is the contract (light and dark both work).
- Solid fill is an emphasis, not a status color: keep status in text/`aria`.
- In forced-colors mode `color-mix` tints disappear; keep a border (the CSS
  already emits one) and do not rely on the tint to distinguish states.
- 3D `drop-shadow` depth uses currentColor alpha, so it follows the theme; do
  not add hard-coded shadows.

## 8. Windows high contrast / forced colors

In forced-colors mode the OS replaces author colors. Because icons are
`currentColor`, they map to `CanvasText` and remain visible — as long as you
don't fight it.

```css
@media (forced-colors: active) {
  .nexa-icon { forced-color-adjust: auto; }
  .icon-tile {
    background: Canvas;
    border: 1px solid CanvasText; /* tints disappear; keep the container visible */
  }
  .nexa-icon:focus-visible { outline: 2px solid Highlight; outline-offset: 2px; }
}
```

- Don't use `forced-color-adjust: none` for icons; it defeats the user's choice.
- Don't rely on a background tint to distinguish active state in forced-colors;
  add a border or weight change.
- The package animation CSS includes forced-colors handling; see
  [animations.md](animations.md).

## 9. Illustrations

The 12 duotone illustrations are theme-neutral like the icons: every stroke/fill
is `currentColor` with fixed opacity washes, plus three optional tokens:

| Token | Default | Controls |
|---|---|---|
| `--nexa-ill-fg` | `currentColor` | foreground (rarely needed; set `color` instead) |
| `--nexa-ill-soft` | `currentColor` | duotone washes |
| `--nexa-ill-accent` | `currentColor` | the single semantic accent detail |

```css
.empty-state { color: var(--nexa-fg-muted); --nexa-ill-accent: var(--nexa-accent); }
```

- Unset = identical to surrounding text with opacity layers, so light/dark work
  with no config.
- Inline SVGs (not `<img>`/`<object>`) inherit `color` and the tokens.
- Grayscale/forced-colors safe; the accent is semantic, not decoration.
- Full system: [illustrations/README.md](../illustrations/README.md).

## 10. Reduced motion and theme

Reduced motion is independent of color theme. `prefers-reduced-motion: reduce`
turns preset animations into a no-op (or a one-shot opacity change) in
`animations.css`; theme tokens don't need to change for it. See
[animations.md](animations.md) §reduced-motion.

## Checklist

1. Icons styled via `color` / CSS variables only — no `fill`, no hex in markup.
2. Meaningful icons ≥3:1 on both `#fafafa` and `#0c0c0e`, measured against the
   real surface.
3. Accent reserved for primary/active/status; status paired with text.
4. Container tint follows the 10% / 15% rule and doesn't carry meaning alone.
5. Forced-colors mode still distinguishes active/focus states.


## Global switches (no wrapper component needed)

```html
<div data-nexa-fill="duotone" data-nexa-motion="off" style="--nexa-stroke: 1.75">
  <svg class="nexa-icon" data-nexa-icon="bell">…</svg>
</div>
```

- `[data-nexa-fill="duotone|solid"]` fills closed nodes only
  (`data-closed="true"`); the SVG always exposes `data-nexa-fill-safe`.
- `[data-nexa-motion="off"]` disables presets, fill, swap and 3D transitions.
- `--nexa-stroke` inherits to every icon and overrides the stroke width.
- Frames use `em` units, so a CSS-sized icon (`h-4 w-4`) gets a correctly scaled
  frame; set `--nexa-icon-size` when the frame is not next to a known font size.
