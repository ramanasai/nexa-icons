# Animations and swaps

The animation layer is **CSS only**: `dist/animations.css` ships 17 semantic
presets, a `fade-in` helper, six-plus triggers, the icon-swap transitions, the
fill ↔ empty transition, and the CSS-3D presentation presets.
Motion uses only `transform`, `opacity` and `color`-free compositor properties,
so it runs off the main thread, and adds zero JavaScript runtime.

Load the stylesheet once:

```ts
import "@sairamanapb/icons/animations.css";
```

```html
<link rel="stylesheet" href="node_modules/@sairamanapb/icons/dist/animations.css">
```

## The animation contract

All renderers (React, vanilla JS, Go, Rust, hand-written HTML) emit the same
attributes:

| Attribute | Values | Meaning |
|---|---|---|
| `class="nexa-icon"` | fixed base class | sizing/vertical-align; emitted by every renderer |
| `focusable="false"` | fixed | keeps the SVG out of IE/legacy focus order |
| `data-nexa-icon` | kebab id | lets CSS/analytics target one glyph |
| `data-nexa-anim` | preset name | which preset to play |
| `data-nexa-trigger` | `hover` / `focus` / `press` / `mount` / `always` / `manual` / `inview` | when to play |
| `data-nexa-active` | `"true"` | plays while true for `trigger="manual"`, and drives swaps |
| `data-fill-state` | `"true"` / `"soft"` | solid / duotone fill (see fill animation) |
| `data-fill-anim` | `"true"` | enables the CSS fill transition |
| `data-nexa-3d` | `tilt`/`flip`/`extrude`/`orbit` | CSS-3D presentation on the frame |
| `.nexa-icon-frame` + `.nexa-shape--*` | classes | shape container; tint is static CSS |

```html
<svg class="nexa-icon" aria-hidden="true"
     data-nexa-anim="ring" data-nexa-trigger="hover"><use href="#nexa-bell"/></svg>
```

## Triggers

Animation is **opt-in**: an icon without `animate`/`data-nexa-anim` is static.
The trigger defaults to the icon's semantic one (`hover`, except `Loader2` →
`always`).

| Trigger | CSS behaviour | Use for |
|---|---|---|
| `hover` (default) | plays on `:hover` **or** `:focus-visible`; also plays when a parent `<button>`, `<a>` or `[role="button"]` gets `:focus-visible` | nav, buttons, cards |
| `focus` | plays on `:focus-visible` only | keyboard/AT-driven focus feedback |
| `press` | plays while `:active` (pointer held) | tap feedback, toolbar buttons |
| `inview` | CSS scroll-driven animation (`animation-timeline: view()`, entry 0–60%); browsers without support just show the static icon | scroll reveals, landing sections |
| `mount` | plays once when rendered (also one-shot on React mount) | toasts, empty states |
| `always` | animation always applied; `spin`/`pulse` loop forever, others play once | spinners, live indicators |
| `manual` | plays only while `data-nexa-active="true"` / `active={true}` | expanded panels, controlled state |

`hover`, `focus`, `press` and `inview` are pure CSS — there is no JS listener,
no `IntersectionObserver`, and no animation library. The parent-focus rule means
an icon inside an icon-only button animates for keyboard users even though the
SVG itself is never focused. `inview` is progressive
enhancement: wrapped in `@supports (animation-timeline: view())`.

```tsx
<Bell />                                      {/* static */}
<Bell animate />                              {/* ring, hover */}
<Bell animate trigger="press" />              {/* plays while pressed */}
<Bell animate="pulse" trigger="inview" />     {/* scroll-driven reveal */}
<Bell animate="wiggle" trigger="mount" />
<Loader2 animate trigger="always" />          {/* spinner */}
<Trash2 animate="shake" trigger="manual" active={confirming} />
```

```js
svg("Bell", { animate: true });                         // semantic preset + trigger
svg("Loader2", { animate: "spin", trigger: "always" });
svg("Bell", { animate: "pulse", trigger: "inview" });
```

## The 17 presets

Counts are from `data/report.json` (`animation`); examples are real icons.
Every preset is one-shot unless its trigger loops.

| Preset | Motion (`transform` only) | Icons | Examples |
|---|---|---|---|
| `spin` | `rotate(0 → 360deg)`, linear, 720ms | 9 | `Loader2`, `RefreshCw`, `History` |
| `pulse` | `scale(1 → 1.12 → 1)`, 520ms | 34 | `Activity`, `Search`, `Clock` |
| `ring` | bell wobble around top center, 640ms | 1 | `Bell` |
| `shake` | `translateX(0, -2, 2, -1.5, 1.5, 0)`, 480ms | 10 | `Trash2`, `Lock`, `Ban` |
| `wiggle` | `rotate(0, -7, 6, -3, 0)`, 520ms | 23 | `Pencil`, `Code`, `Copy` |
| `flip` | `rotate(0 → 90 → 180deg)`, 560ms | 4 | `ArrowUpDown`, `Repeat` |
| `bounce` | `translateY(0, -3, 0, -1.5, 0)`, 620ms | 5 | `Mail`, `MapPin`, `Pin` |
| `float` | `translateY(0 → -2 → 0)`, 760ms | 4 | `Rocket`, `Plane`, `MoonStar` |
| `tilt` | `rotate(0, -10, 7, 0)`, 560ms | 4 | `Briefcase`, `Camera`, `Moon` |
| `heartbeat` | double scale beat `1 → 1.16 → 1 → 1.1 → 1`, 760ms | 1 | `Heart` |
| `pop` | `scale(1 → 1.18 → 1)`, 420ms | 47 | `Check`, `Star`, `Plus`, `User` |
| `nudge-up` | `translateY(0 → -2.5px → 0)`, 460ms | 5 | `ArrowUp`, `ChevronUp`, `Upload` |
| `nudge-down` | `translateY(0 → 2.5px → 0)`, 460ms | 6 | `ArrowDown`, `Download`, `Inbox` |
| `nudge-left` | `translateX(0 → -2.5px → 0)`, 460ms | 5 | `ArrowLeft`, `ChevronLeft`, `LogOut` |
| `nudge-right` | `translateX(0 → 2.5px → 0)`, 460ms | 4 | `ArrowRight`, `ChevronRight` |
| `nudge-up-right` | `translate(0,0 → 2px,-2px → 0,0)`, 460ms | 3 | `ArrowUpRight`, `ExternalLink`, `Send` |
| `nudge-down-right` | `translate(0,0 → 2px,2px → 0,0)`, 460ms | 1 | `ArrowDownRight` |

### Spring easing

`pop` and `bounce` use spring-like easing: a `cubic-bezier` overshoot fallback,
upgraded to a `linear()` spring curve in browsers that support it
(`@supports (animation-timing-function: linear(0, 1))`). Still
transform/opacity only.

### `fade-in` helper

`fade-in` is an 18th animation class, not assigned to icons: `opacity 0 → 1` +
`scale(0.94 → 1)` over 300ms. Use it for `mount` reveals without a semantic
preset:

```tsx
<Bell animate="fade-in" trigger="mount" />
```

## Swap / morph animation

Two related glyphs can morph in place: stack both icons, toggle one attribute,
and CSS transitions between them. No JS animation loop.

Semantic pairs live in `data/swaps.json` (26 base pairs → 49 directional
entries), each with a mode: `mirror`, `flip`, `rotate`, `slide`, `fade`.
Examples: `ArrowLeft ↔ ArrowRight` (mirror), `ArrowUp ↔ ArrowDown` (flip),
`Sun ↔ Moon` (rotate), `MessageSquare ↔ Mail` (slide), `Plus ↔ Minus` (fade),
`Check ↔ X` (fade).

### React

```tsx
import { IconSwap, IconToggle, ArrowLeft, ArrowRight } from "@sairamanapb/icons";
import "@sairamanapb/icons/animations.css";

<IconSwap from={ArrowLeft} to={ArrowRight} active={open} label="Direction" />

<IconToggle from={ArrowLeft} to={ArrowRight} label="Next page" />
```

| `IconSwap` prop | Type | Default | Notes |
|---|---|---|---|
| `from` / `to` | `NexaIconComponent` | — | required pair |
| `active` | `boolean` | uncontrolled | controlled state |
| `defaultActive` | `boolean` | `false` | uncontrolled initial state |
| `mode` | `SwapMode \| "auto"` | `"auto"` | semantic mode from `from`'s name |
| `duration` | `number` (ms) | `260` | sets `--nexa-swap-dur` |
| `label` | `string` | — | group accessible name; else `aria-hidden` |
| `size`, `strokeWidth`, `className`, `style` | as icons | | forwarded |

`IconToggle` renders a real `<button type="button">` with `aria-pressed`, the
required `label`, and the glyph pair inside; it manages pressed state
(`pressed`, `defaultPressed`, `onPressedChange`) and has a ≥40×40px hit area and
focus-visible ring. It is the accessible default for click-to-toggle glyphs.

### Vanilla JS / HTML

```js
import { swapSvg, pairFor, swapModeFor } from "@sairamanapb/icons/js";

pairFor("ArrowLeft");      // "ArrowRight"
swapModeFor("ArrowLeft");  // "mirror"

element.innerHTML = swapSvg("ArrowLeft", "ArrowRight", {
  active: false, mode: "auto", size: 20, duration: 260, label: "Direction",
});
// then toggle the attribute (no re-render required):
element.firstElementChild.dataset.nexaActive = "true";
```

`swapSvg(from, to, opts)` renders:

```html
<span class="nexa-swap" data-mode="mirror" data-nexa-active="false"
      style="--nexa-swap-dur:260ms" role="img" aria-label="Direction">
  <span class="nexa-swap__a"><svg …/></span>
  <span class="nexa-swap__b"><svg …/></span>
</span>
```

CSS classes/attributes: `.nexa-swap`, `.nexa-swap__a`, `.nexa-swap__b`,
`data-mode="mirror|flip|rotate|slide|fade"`, `data-nexa-active="true|false"`.

### Accessibility and motion

- `IconToggle` gives you `aria-pressed`; `IconSwap`/`swapSvg` with `label`
  gives `role="img"` + `aria-label`, otherwise the group is `aria-hidden`. Both
  inner layers (`.nexa-swap__a`, `.nexa-swap__b`) are always `aria-hidden="true"`
  in React, JS, Go and Rust — the wrapper is the only accessible node.
- Reduced motion removes the swap transition (`transition: none !important` in
  `animations.css`), so the glyph swaps instantly — state stays correct.
- A swapped glyph that conveys state must also convey it in text/`aria-pressed`;
  the glyph is not the label.

## Fill animation (empty ↔ filled)

Fills are presentation state, not keyframes: the SVG carries
`data-fill-state="true"` (solid) or `"soft"` (duotone) and CSS transitions
`fill-opacity` over 320ms.

```tsx
<Heart filled animateFill />        {/* outline <-> solid */}
<Bookmark filled={false} />
<Square filled="soft" />            {/* duotone */}
```

```js
svg("Heart", { filled: true, animateFill: true });
```

```css
.nexa-icon[data-fill-state="true"] { fill: currentColor; fill-opacity: 1; }
.nexa-icon[data-fill-state="soft"] { fill: currentColor; fill-opacity: 0.16; }
.nexa-icon[data-fill-anim="true"]  { transition: fill-opacity 320ms cubic-bezier(0.2, .8, .2, 1); }
```

- Only closed geometry (`fillSafe` in the dataset) fills cleanly; a solid
  request on open geometry is emitted as duotone instead, so no broken shapes.
- Reduced motion disables the transition; the state still updates instantly.
- Don't combine fill animation with a transform preset on the same icon — pick
  one motion per icon.

## Shape containers

```tsx
<Bell shape="rounded" />
```

`shape="square|rounded|circle|pill|squircle|hexagon|diamond"` wraps the SVG in
`.nexa-icon-frame.nexa-shape.nexa-shape--<shape>`. The tint and border use
`color-mix(in srgb, currentColor 14%/20%, transparent)`, so they follow the
theme with no colors of their own. The frame is `round(size × 1.7)`; accessible
name moves to the frame. Shapes are static decoration — animate the glyph, not
the frame.

## CSS 3D presets

Four presentation presets, applied to the wrapper `.nexa-3d[data-nexa-3d="…"]`:

| Preset | On `:hover` / `:focus-within` |
|---|---|
| `tilt` | `rotateX(18deg) rotateY(-22deg) scale(1.06)` |
| `flip` | `rotateY(180deg) scale(1.04)` |
| `extrude` | `translateZ(12px)` + layered `drop-shadow` depth |
| `orbit` | `rotateX(26deg) rotateY(-32deg) translateZ(14px) scale(1.08)` |

```tsx
<Crown threeD="tilt" />
```

```js
svg("Crown", { threeD: "orbit" });
```

- Wrapper has `perspective: 640px`; inner SVG transitions `transform` only.
- This is **CSS 3D presentation, not WebGL**: no canvas, no 3D engine, no
  per-frame JS. It degrades to a normal icon if CSS 3D is unavailable.
- Reduced motion removes all 3D transforms; hover/focus still works for
  pointer/keyboard users, motion is simply absent.
- Focus-visible inside the wrapper triggers it, so keyboard users get the same
  presentation change.

## Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  [data-nexa-anim] { animation: none !important; }
  .nexa-swap__a, .nexa-swap__b { transition: none !important; }
  .nexa-icon[data-fill-anim="true"] { transition: none; }
  .nexa-3d .nexa-icon { transition: none; }
  .nexa-3d:is(:hover, :focus-within) .nexa-icon { transform: none; }
}
```

This is built in. Keep a non-motion affordance for state that matters (e.g.
"Loading…" text next to a spinner) and never re-enable motion with
`animation: … !important`.

## Forced colors / high contrast

```css
@media (forced-colors: active) {
  .nexa-icon { forced-color-adjust: auto; }
}
```

Icons stay visible because they paint with `currentColor`. Background tints used
for active states need a border or other non-color cue in forced-colors mode.

## Custom timing, presets and swap easing

Animation is driven by CSS custom properties on `[data-nexa-anim]`:

| Variable | Default | Purpose |
|---|---|---|
| `--nexa-dur` | preset-specific (420–760ms) | duration |
| `--nexa-ease` | `cubic-bezier(0.2, 0.8, 0.2, 1)` (`spin`: linear) | easing |
| `--nexa-delay` | `0ms` | delay |
| `--nexa-iter` | `1` | iteration count |
| `--nexa-fill` | `both` | fill mode |
| `--nexa-kf` | preset keyframe name | which keyframes run |

Swaps use `--nexa-swap-dur` and `--nexa-swap-ease` on `.nexa-swap`.

```css
.hero .nexa-icon[data-nexa-anim="float"] { --nexa-dur: 1600ms; }
.nexa-swap { --nexa-swap-dur: 400ms; }

@keyframes nexa-attention {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.25) rotate(3deg); }
}
[data-nexa-anim="attention"] { --nexa-kf: nexa-attention; --nexa-dur: 900ms; }
```

The trigger selectors match any `data-nexa-anim` value, so custom presets get the
same trigger semantics.


## Glass, gradients and motion

Glass and gradient effects are **static** — they add no animation. They compose
with presets, fills, shapes and CSS-3D (`<Crown glass="steel" gradient="gold"
threeD="tilt" />`). Import `@sairamanapb/icons/effects.css` once; see
[effects.md](effects.md) for presets, tokens and fallbacks.


## Parent trigger and global motion switch

```tsx
<button className="nav-item"><Bell animate trigger="parent" /></button>
```

`trigger="parent"` starts the preset when the nearest `<a>`, `<button>` or
`[role="button"]` is hovered or `:focus-visible`. For app-wide control, put
`data-nexa-motion="off"` on a container to disable presets, fill, swap and 3D
transitions inside it.
