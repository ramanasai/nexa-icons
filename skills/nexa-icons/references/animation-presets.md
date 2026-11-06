# Animation presets

Every icon carries one of **17 semantic presets** (`anim.preset` in
`data/icons.json`) plus the `fade-in` helper. Animation is CSS-only —
`transform` and `opacity` on the `<svg>` — so it runs on the compositor, never
on the JS thread, and adds no runtime dependency.

Presets are assigned by **meaning**, not taste: arrows nudge in their own
direction, `Loader2` spins forever, `Bell` rings, `Trash2` shakes. Animation is
**opt-in in code**: `<Bell />` is static, `<Bell animate />` plays Bell's own
preset.

## Preset reference

| Preset | Motion | Icons | Examples |
|---|---|---|---|
| `spin` | rotate 360°, linear, 720ms | 9 | `Loader2`, `RefreshCw`, `History`, `Settings`, `Sun` |
| `pulse` | scale 1→1.12→1, 520ms | 34 | `Activity`, `Search`, `Clock`, `Eye`, `Globe`, `Shield` |
| `ring` | bell wobble, 640ms | 1 | `Bell` |
| `shake` | translateX ±2px, 480ms | 10 | `Trash2`, `Lock`, `Ban`, `X`, `AlertTriangle` |
| `wiggle` | rotate ±7°, 520ms | 23 | `Pencil`, `Code`, `Copy`, `Filter`, `Wrench` |
| `flip` | rotate 0→90→180°, 560ms | 4 | `ArrowUpDown`, `ChevronsUpDown`, `Repeat` |
| `bounce` | translateY bounce, 620ms | 5 | `Mail`, `MapPin`, `Pin`, `MailCheck` |
| `float` | translateY drift, 760ms | 4 | `Rocket`, `Plane`, `MoonStar`, `UploadCloud` |
| `tilt` | rotate -10°/+7°, 560ms | 4 | `Briefcase`, `Camera`, `Moon`, `StickyNote` |
| `heartbeat` | double scale beat, 760ms | 1 | `Heart` |
| `pop` | scale 1→1.18→1, 420ms | 47 | `Check`, `Star`, `Plus`, `User`, `Crown`, `Home` |
| `nudge-up` | translateY -2.5px, 460ms | 5 | `ArrowUp`, `ChevronUp`, `Upload`, `TrendingUp` |
| `nudge-up-right` | translate 2px,-2px, 460ms | 3 | `ArrowUpRight`, `ExternalLink`, `Send` |
| `nudge-right` | translateX +2.5px, 460ms | 4 | `ArrowRight`, `ChevronRight`, `PanelLeftOpen` |
| `nudge-down-right` | translate 2px,2px, 460ms | 1 | `ArrowDownRight` |
| `nudge-down` | translateY +2.5px, 460ms | 6 | `Archive`, `ArrowDown`, `ChevronDown`, `Download`, `Inbox` |
| `nudge-left` | translateX -2.5px, 460ms | 5 | `ArrowLeft`, `ChevronLeft`, `LogOut`, `Undo2` |

Counts come from `data/report.json` (`animation`). 1,000 icons, 17 presets.
`fade-in` (opacity 0→1 + scale 0.94→1, 300ms) is an 18th class for `mount`
reveals; it is not assigned to any icon.

## Triggers

The trigger only matters when `animate` is set. The default trigger is the
icon's semantic one: `hover` for 165 icons, `always` for `Loader2`.

| Trigger | Behaviour | Use for |
|---|---|---|
| `hover` (default) | plays while `:hover` or `:focus-visible` | nav, buttons, cards |
| `focus` | plays on `:focus-visible` only | keyboard/AT focus feedback |
| `press` | plays while `:active` (pointer held) | tap/toolbar feedback |
| `inview` | CSS scroll-driven (`animation-timeline: view()`, entry 0–60%); static where unsupported | scroll reveals |
| `mount` | plays once when rendered | success toasts, empty-state reveal |
| `always` | animation always applied; `spin`/`pulse` loop forever, others play once | spinners, live indicators |
| `manual` | plays only while `active` / `data-nexa-active="true"` | expanded panels |

React:

```tsx
<Bell />                                     {/* static */}
<Bell animate />                             {/* preset "ring", trigger "hover" */}
<Bell animate="wiggle" trigger="mount" />
<Bell animate trigger="focus" />             {/* on :focus-visible */}
<Bell animate trigger="press" />             {/* while held */}
<Bell animate="pulse" trigger="inview" />    {/* scroll-driven */}
<Loader2 animate trigger="always" />         {/* spinner */}
<Trash2 animate="shake" trigger="manual" active={confirming} />
```

Vanilla JS / HTML:

```html
<svg class="nexa-icon" aria-hidden="true"
     data-nexa-anim="ring" data-nexa-trigger="hover"><use href="#nexa-bell"/></svg>
```

```js
svg("Bell", { animate: "ring", trigger: "hover" });
```

Load the stylesheet once (`import "@sairamanapb/icons/animations.css"` or link
`dist/animations.css`); the attributes do nothing without it.

## Swap / morph transitions

Semantic pairs from `data/swaps.json` (26 base pairs → 49 directional entries):

| Mode | Motion | Example pair |
|---|---|---|
| `mirror` | horizontal flip | `ArrowLeft` ↔ `ArrowRight`, `ChevronLeft` ↔ `ChevronRight` |
| `flip` | vertical flip | `ArrowUp` ↔ `ArrowDown`, `TrendingUp` ↔ `TrendingDown` |
| `rotate` | 90° rotation | `Sun` ↔ `Moon`, `MoreHorizontal` ↔ `MoreVertical` |
| `slide` | cross-slide | `MessageSquare` ↔ `Mail`, `Bold` ↔ `Italic` |
| `fade` | cross-fade + scale | `Plus` ↔ `Minus`, `Check` ↔ `X`, `Heart` ↔ `HeartOff`, `Upload` ↔ `Download` |

React:

```tsx
import { IconSwap, IconToggle, ArrowLeft, ArrowRight } from "@sairamanapb/icons";

{/* IconToggle renders a real <button> with aria-pressed */}
<IconToggle from={ArrowLeft} to={ArrowRight} label="Next page" />
<IconSwap from={ArrowLeft} to={ArrowRight} active={open} label="Direction" />
```

Vanilla JS:

```js
import { swapSvg, pairFor, swapModeFor } from "@sairamanapb/icons/js";

pairFor("ArrowLeft");      // "ArrowRight"
swapModeFor("ArrowLeft");  // "mirror"
el.innerHTML = swapSvg("ArrowLeft", "ArrowRight", { size: 20, label: "Direction" });
el.firstElementChild.dataset.nexaActive = "true"; // morph, no re-render
```

CSS contract: `.nexa-swap` > `.nexa-swap__a` / `.nexa-swap__b` (both
`aria-hidden="true"`; the wrapper carries the accessible name), with `data-mode`
and `data-nexa-active="true|false"`; timing via `--nexa-swap-dur` (default 260ms)
and `--nexa-swap-ease`. Toggle the attribute; CSS does the rest.
Use `IconToggle`/`aria-pressed` for click toggles, and never encode state in the
glyph alone.

## Fill animation and CSS 3D

Fill is presentation state, not keyframes: `<Heart filled animateFill />` (or
`svg("Heart",{filled:true,animateFill:true})`) sets `data-fill-state="true"` /
`"soft"` and `data-fill-anim="true"`; the CSS transitions `fill-opacity` (320ms).
Solid only fills `fillSafe` geometry — open glyphs degrade to duotone.

3D presets are CSS presentation wrappers: `.nexa-3d[data-nexa-3d="tilt|flip|extrude|orbit"]`
with `perspective: 640px`, transform-only transitions on `:hover`/`:focus-within`.
This is **not WebGL** — no canvas, no per-frame JS; reduced motion removes it.
Don't combine fill animation and a transform preset on one icon.

## Reduced motion

`animations.css` contains:

```css
@media (prefers-reduced-motion: reduce) {
  [data-nexa-anim] { animation: none !important; }
}
```

Never re-enable preset motion with `animation: … !important`. If motion conveys
state (spinner), keep a static affordance (text "Loading…").

## Custom hooks

CSS variables on `[data-nexa-anim]` drive the animation:

| Variable | Default | Purpose |
|---|---|---|
| `--nexa-dur` | preset-specific (420–760ms) | duration |
| `--nexa-ease` | `cubic-bezier(0.2, 0.8, 0.2, 1)` (`spin`: linear) | easing |
| `--nexa-delay` | `0ms` | delay |
| `--nexa-iter` | `1` | iteration count |
| `--nexa-fill` | `both` | fill mode |
| `--nexa-kf` | preset keyframes | keyframe name |

`pop` and `bounce` additionally use spring-like easing (a `linear()` spring
curve where supported, cubic-bezier overshoot otherwise). Swaps use
`--nexa-swap-dur` / `--nexa-swap-ease` on `.nexa-swap`.

```css
.hero .nexa-icon[data-nexa-anim="float"] { --nexa-dur: 1600ms; }
@keyframes nexa-attention { 50% { transform: scale(1.25) rotate(3deg); } }
[data-nexa-anim="attention"] { --nexa-kf: nexa-attention; --nexa-dur: 900ms; }
```

For React, `className`, `style`, `active` and `trigger` are the extension
points; for HTML/JS, use `data-nexa-*` attributes. Full preset docs:
[`docs/animations.md`](../../../docs/animations.md).
