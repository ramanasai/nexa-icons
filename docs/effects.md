# Glass & gradient effects

Optional frosted-glass surfaces and gradient strokes for **every Nexa icon**
(1,034 icons). Both are pure CSS/SVG — no WebGL, no runtime, no extra requests —
and they are **off by default**. The reference point is the frosted-glass icon
style popularised by sets like *Iceland — Frosted Glass*: translucent surface,
soft blur, layered highlight, and an optional coloured gradient.

```ts
// import once, anywhere after your icon styles
import "@sairamanapb/icons/effects.css";
```

```tsx
<Bell glass />                                  // frost (default)
<Bell glass="ice" />                            // icy blue frost
<Bell gradient="aurora" />                      // gradient stroke
<Bell glass="frost" gradient="sunset" />        // gradient glass + gradient glyph
```

```js
svg("Bell", { glass: true, gradient: "aurora", label: "Alerts" });
```

## Glass presets

| Value | Look | Blur |
|---|---|---:|
| `true` / `"frost"` | neutral frosted tile, soft white sheen | 18px |
| `"ice"` | cool blue glass | 16px |
| `"clear"` | barely-there glass, tinted by `currentColor` | 8px |
| `"steel"` | grey/steel glass for neutral surfaces | 14px |
| `"neon"` | dark tile with coloured rim + glow (neon glass look) | 10px |
| `"jelly"` | glossy lavender jelly body with specular top edge | 6px |
| `"aurora"` | glass tinted by the active gradient tokens | 14px |

Markup: `<span class="nexa-icon-frame nexa-glass nexa-glass--<preset>">` around
the icon. The frame is `round(size × 1.7)` square (shapes/3D still compose), and
the glass is built from `currentColor` + white/black highlights, so it inherits
your theme instead of shipping a fixed colour.

## Gradient presets

| Value | Stops |
|---|---|
| `aurora` | violet → cyan |
| `ice` | pale blue → sky |
| `sunset` | rose → amber |
| `emerald` | mint → deep green |
| `ocean` | sky → indigo |
| `candy` | orchid → pink |
| `gold` | pale gold → amber |
| `mono` | `currentColor` → 45 % `currentColor` |

Gradient strokes are rendered with an SVG `linearGradient` whose stops read
`--nexa-grad-a` / `--nexa-grad-b`, so an app can retheme a preset:

```css
.nexa-grad--aurora { --nexa-grad-a: #f0abfc; --nexa-grad-b: #818cf8; }
```

When combined with glass, the same two variables tint the glass surface
(`data-nexa-gradient` on the frame). Gradient markup is inline (`url(#…)`), so
there is no external paint server and no extra request.

## Configuring glass and gradients

Everything is configurable three ways: props/objects, CSS variables, and global
CSS overrides.

### Props (React / JS)

```tsx
<Bell
  glass={{ preset: "neon", blur: 8, tintA: "rgba(20,20,30,.6)", tintB: "rgba(60,30,90,.4)", edge: "#a78bfa", radius: 18 }}
  gradient={{ from: "#f0abfc", to: "#22d3ee", angle: 90 }}
/>
```

```js
svg("Bell", {
  glass: { preset: "neon", blur: 8, tintA: "rgba(20,20,30,.6)", radius: 18 },
  gradient: { from: "#f0abfc", to: "#22d3ee", angle: 90 },
});
```

| Glass option | Type | Default |
|---|---|---|
| `preset` | `frost/ice/clear/steel/neon/jelly/aurora` | `frost` |
| `blur` | px | 12–18 (preset) |
| `tintA` / `tintB` | any CSS colour | currentColor mix |
| `edge` | any CSS colour | currentColor 30 % |
| `radius` | px | 27 % |
| Gradient option | | |
| `from` / `to` | CSS colours | preset stops |
| `angle` | degrees (90 = left→right) | 135 |

### CSS variables

```css
.nexa-glass {
  --nexa-glass-blur: 16px;
  --nexa-glass-a: rgba(255, 255, 255, 0.22);
  --nexa-glass-b: rgba(120, 180, 255, 0.16);
  --nexa-glass-edge: rgba(255, 255, 255, 0.4);
  --nexa-glass-radius: 14px;
  --nexa-glass-sheen: 0.85;
}
.nexa-grad--aurora { --nexa-grad-a: #ff9ecd; --nexa-grad-b: #ffd166; }
```

Variables cascade, so you can scope them to `:root`, a theme class, or a single
wrapper. `--nexa-grad-a/b` also tint glass when `data-nexa-gradient` is present.

### Disabling

- Per icon: omit `glass`/`gradient` (the default is plain stroke).
- Globally: simply do not import `effects.css`; all classes are inert.
- Per surface: reset `--nexa-glass-blur: 0` / `--nexa-glass-a: transparent` if a
  component needs flat icons inside an otherwise glassy area.

## Combining with the rest of the presentation layer

```tsx
<Heart glass="ice" gradient="aurora" variant="duotone" animateFill shape="circle" />
<Crown glass="steel" gradient="gold" threeD="tilt" size="xl" />
```

Order does not matter. Constraints worth knowing:

- Solid fills + gradient strokes can fight for attention — pick one emphasis.
- Glass is a surface; it already implies a container, so `shape` only changes
  the corner geometry.
- Keep glass to one layer per surface; stacked glass tiles get noisy fast.

## Glass body (filled jelly look)

```tsx
<Bell glass="jelly" glassBody />
<Crown glass="neon" glassBody gradient="aurora" />
```

`glassBody` renders a thick, rounded body layer behind the normal stroke (same
geometry, ~5–10px stroke in a 24px box, gradient-aware), so open stroke icons
read as solid glass/jelly objects without a second hand-drawn filled set. It is
pure SVG: no extra assets, and the outline stays crisp on top.

## Animated gradient

```tsx
<Bell gradient="aurora" gradientAnim="hue" />
```

`gradientAnim="hue"` cycles the gradient's hue over 6s (CSS `hue-rotate` on the
glyph). It is opt-in because it is paint work; `prefers-reduced-motion: reduce`
turns it off. Gradient *geometry* stays static — no repaint of stop positions.

## Glass trigger

```tsx
<Bell glass="neon" glassAnim="sheen" glassTrigger="hover" />
```

`glassTrigger`: `always` (default) or `hover` — hover mode keeps the surface
still until the icon is hovered or focused (`:focus-within`), then starts the
sheen/pulse/float loop. Reduced motion disables both modes.

## Gallery "Glass — all icons"

The gallery applies the seven glass presets to **every glyph**, not just a tile:
each card renders a gradient-filled `glass-body` behind the normal stroke
(closed paths are filled with the gradient, open paths get a thick gradient
stroke), plus a specular highlight. It is a visual demo of the effect; apps use
`glass`/`glassBody` on the React/JS components.

## Animated glass

Glass can move on its own — all CSS, no JS, no extra requests:

```tsx
<Bell glass="neon" glassAnim="sheen" gradient="aurora" />   // specular sweep
<Crown glass="jelly" glassAnim="float" />                    // 2px drift
<Heart glass="frost" glassAnim="pulse" />                    // breathing rim
```

| `glassAnim` | Effect | Duration |
|---|---|---|
| `sheen` | specular highlight sweeps across the surface | 2.8s loop |
| `pulse` | frosted rim opacity breathes | 3.2s loop |
| `float` | tile drifts 2px vertically | 4s loop |

```js
svg("Bell", { glass: "neon", glassAnim: "sheen" });
```

Markup adds `data-nexa-glass-anim="<mode>"` to the glass frame. All three
animations are disabled by `prefers-reduced-motion: reduce`; omit `glassAnim`
for static glass. Glass motion composes with icon animation presets, but avoid
running both on the same element at once.

Gradient stops are intentionally **static**: animating colour stops would force
paint work and is not worth the bytes; use `glassAnim="sheen"` for perceived
motion over a gradient.

## Theming & accessibility

- Glass is derived from `currentColor` + white/black highlights; it works on
  light `#fafafa`, dark `#0c0c0e`, and accent-coloured containers.
- Gradient presets are the one place where literal colours exist — they are
  decorative by definition; use `mono` if a gradient must stay strictly
  `currentColor`.
- `prefers-reduced-motion` is irrelevant here (glass is static); the effects
  layer contains no animation.
- `forced-colors: active` falls back to `Canvas`/`CanvasText`, no blur.
- Browsers without `backdrop-filter` get a more opaque solid tint (supported
  fallback) — the icon stays readable.
- Decorative icons remain `aria-hidden`; labelled icons keep the accessible name
  on the glass frame.

## Cost

| File | Raw | Brotli |
|---|---:|---:|
| `dist/effects.css` (glass + gradients + fallbacks) | 8,468 B | 1,926 B |

Only imported apps pay for it; icons without `glass`/`gradient` are unaffected
(the classes are inert without the stylesheet).
