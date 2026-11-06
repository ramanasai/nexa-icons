# API reference

One dataset, five consumption paths: React/TypeScript, vanilla JS (ESM + CJS),
plain HTML, Go, and Rust. Every renderer emits the same SVG contract, so icons
look, theme, and animate identically everywhere.

- React package: `@nexa/icons` (`dist/`, ESM + CJS, React ≥18 peer — **optional**).
  This root entry statically imports React; non-React consumers must use the
  subpaths below.
- Vanilla JS: `@nexa/icons/js` (`js/index.mjs`, `js/index.cjs`) — **zero
  dependencies, no React required**
- Go: [`github.com/nexa-icons/nexa/go`](languages/go.md)
- Rust: [`nexa-icons`](languages/rust.md)
- HTML: `sprite.svg` / `icons/*.svg`

## The output contract

Every rendered icon is a stroke SVG with these fixed attributes (plus
`data-nexa-*` when animated):

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
     class="nexa-icon" aria-hidden="true" focusable="false"
     data-nexa-icon="bell" data-nexa-anim="ring" data-nexa-trigger="hover">…</svg>
```

Hover-triggered presets also play when a parent `<button>`, `<a>` or
`[role="button"]` receives `:focus-visible`, so keyboard users see the same
feedback without extra JS.

Defaults: **24px / stroke 1.5** in React, JS, Go and Rust. `class="nexa-icon"`,
`focusable="false"` and `data-nexa-icon="<kebab>"` are emitted by every binding
(`data-nexa-*` animation attributes only when animating). Named size tokens
(`sm`/`md`/`lg`/`xl`) are React/JS sugar; Go and Rust take pixel sizes and apply
the same size→stroke rule.

| Provision | Rule |
|---|---|
| Color | `stroke="currentColor"`; no color prop, no hex |
| Fill | `fill="none"`; 3 icons use tiny detail dots with `fill="currentColor"` (`KeyRound`, `Palette`, `Tag`) — still no hard-coded colors |
| Accessibility | decorative → `aria-hidden="true"`; labelled → `role="img"` + `aria-label` |
| Grid | `viewBox="0 0 24 24"` always |

## React / TypeScript — `@nexa/icons`

```tsx
import { Bell, Loader2, Icon, NEXA_MAP } from "@nexa/icons";
import "@nexa/icons/animations.css"; // once, app entry
```

Exports: **650 named components**, the aliases `XIcon`/`TriangleAlert`, the
generic `Icon`/`getIcon`, the swap components `IconSwap`/`IconToggle` plus
`SWAP`, `SWAP_PAIRS`, `swapTarget`, `swapModeFor`, **`CATEGORIES`** (category
metadata), helpers `createIcon`, `strokeForSize`/`STROKE_FOR_PX`, `SIZE_PX`,
`PRESETS`, `NEXA_MAP`, `ICON_NAMES`, `resolveKebab`, and the types
`NexaIconName`, `NexaIconProps`, `NexaIconComponent`, `NexaPreset`, `NexaSize`,
`NexaTrigger`, `NexaIconData`, `IconSwapProps`, `IconToggleProps`, `SwapMode`,
`NexaCategory`.

### Importing one icon without the barrel

```tsx
import { Bell } from "@nexa/icons/react/bell"; // deep import -> dist/icons/bell.js
```

Each icon ships as its own ESM module under `dist/icons/<kebab>.js`; the
`@nexa/icons/react/*` subpath exports it (with types). Use the barrel for the
common case, or deep-import when a bundler/dev-server benefits from a single
small module (the barrel is tree-shaken anyway, ~694 B brotli for one icon).

### `<Bell />` props

`NexaIconProps` extends the native `<svg>` props minus `color`, `width`,
`height`, `ref` (so `className`, `style`, `id`, `onClick`, … work normally), plus:

| Prop | Type | Default | Behaviour |
|---|---|---|---|
| `size` | `"sm" \| "md" \| "lg" \| "xl" \| number` | **24** (`lg`) | 16 / 20 / 24 / 40px (numbers are px) |
| `strokeWidth` | `number` | auto by size | 16→2, 20→1.75, 24+→1.5 |
| `animate` | `NexaPreset \| boolean` | off | `true` = the icon's semantic preset; a string = that preset |
| `trigger` | `"hover" \| "focus" \| "press" \| "mount" \| "always" \| "manual" \| "inview"` | icon's default (`hover`; `Loader2` is `always`) | only used when `animate` is set; see [animations.md](animations.md) |
| `active` | `boolean` | `false` | for `trigger="manual"` |
| `shape` | `square`/`rounded`/`circle`/`pill`/`squircle`/`hexagon`/`diamond`/`none` | — | wraps the SVG in a shaped frame; label moves to the frame |
| `variant` | `outline` / `duotone` / `solid` | `outline` | fill treatment; open glyphs degrade to duotone |
| `filled` | `false` / `true` / `"soft"` | — | controlled fill state (`soft` = duotone) |
| `animateFill` | `boolean` | `false` | CSS `fill-opacity` transition (320ms) |
| `threeD` | `tilt` / `flip` / `extrude` / `orbit` / `false` | `false` | CSS-3D presentation preset (not WebGL) |
| `label` | `string` | — | `role="img"` + `aria-label`; omit for `aria-hidden` |
| `title` | `string` | — | renders `<title>` and marks the icon labelled |
| `className` | `string` | — | appended to the base `nexa-icon` class |
| `style` | CSSProperties | — | use `color` here for one-off coloring |
| `ref` | `Ref<SVGSVGElement>` | — | components are `forwardRef` |

```tsx
<Bell size="sm" />                                   // 16px, stroke 2, decorative
<Bell size={32} animate="wiggle" />                  // 32px, stroke 1.5, hover
<Loader2 animate trigger="always" />                 // 20px, infinite spin
<Trash2 animate="shake" trigger="manual" active={confirming} />
<Bell label="Alerts" />                              // role="img" aria-label
<Bell style={{ color: "var(--nexa-accent)" }} />

<Bell shape="rounded" />                             // shape container
<Heart filled animateFill />                         // solid where geometry allows
<Square variant="duotone" />
<Crown threeD="tilt" />                              // CSS 3D presentation
```

### Shape / fill / 3D markup

Shape and 3D add a wrapper around the SVG, and the accessible name moves to
that wrapper:

```html
<span class="nexa-icon-frame nexa-shape nexa-shape--rounded nexa-3d"
      data-nexa-3d="tilt" role="img" aria-label="Alerts">
  <svg class="nexa-icon" aria-hidden="true" data-fill-state="soft"
       data-fill-anim="true" data-nexa-icon="bell">…</svg>
</span>
```

- Frame size is `round(size × 1.7)` when shaped; 3D alone uses the wrapper
  without a shape class. `perspective: 640px` comes from `.nexa-3d`.
- Fill: `data-fill-state="true"` (solid) or `"soft"` (duotone);
  `data-fill-anim="true"` enables the CSS transition. Solid requests on
  non-`fillSafe` geometry are emitted as `"soft"` so they never render broken.
- These are presentation-only props; do not also set raw `fill`/`transform`
  styles on the SVG.

Animation is **opt-in**: `<Bell />` is static. `<Bell animate />` plays the
dataset preset (`ring` for Bell) on the dataset trigger. See
[animations.md](animations.md).

### Swap / morph — `IconSwap`, `IconToggle`

```tsx
import { IconSwap, IconToggle, ArrowLeft, ArrowRight } from "@nexa/icons";

<IconSwap from={ArrowLeft} to={ArrowRight} active={open} label="Direction" />
<IconToggle from={ArrowLeft} to={ArrowRight} label="Next page" />
```

| `IconSwap` prop | Type | Default |
|---|---|---|
| `from` / `to` | `NexaIconComponent` | required |
| `active` | `boolean` | uncontrolled |
| `defaultActive` | `boolean` | `false` |
| `mode` | `"mirror" \| "flip" \| "rotate" \| "slide" \| "fade" \| "auto"` | `"auto"` |
| `duration` | `number` (ms) | `260` |
| `label` | `string` | — (decorative if omitted) |
| `size`, `strokeWidth`, `className`, `style` | forwarded | |

`IconToggle` is an accessible icon-only `<button>` with `aria-pressed`, required
`label`, ≥40×40px hit area and the same pair props plus `pressed`,
`defaultPressed`, `onPressedChange`. Semantic pairs come from `data/swaps.json`
(`SWAP_PAIRS`, `swapTarget(name)`, `swapModeFor(name)`). Full behaviour:
[animations.md](animations.md#swap--morph-animation).

### Generic `<Icon>` and `getIcon`

For data-driven UIs (menus, tables, CMS content):

```tsx
import { Icon } from "@nexa/icons";

<Icon name="bell" size={20} />                  // PascalCase, kebab, or alias
<Icon name="TriangleAlert" animate="shake" />   // alias resolves to AlertTriangle
```

`Icon` resolves and memoizes a component from the full registry; an unknown
name renders `null`. `getIcon(name)` returns the component or `undefined` if you
need to check first. **Trade-off:** the registry is all 650 icon path sets —
prefer named imports in app code so only used icons ship.

### Aliases and names

- `NexaIconName` is a union of all 650 canonical names plus `XIcon` and
  `TriangleAlert`.
- `resolveKebab(name)` maps name/kebab/alias → kebab id; `ICON_NAMES` is the
  canonical list.
- Lookup is case-insensitive in `Icon`/`getIcon`.

### Package shape

| Path | Contents |
|---|---|
| `@nexa/icons` | ESM build `dist/index.js` + types `dist/index.d.ts`; CJS at `dist/cjs/index.js` (`require`) |
| `@nexa/icons/animations.css` | the animation layer (`dist/animations.css`) |
| `@nexa/icons/sprite.svg` | full symbol sprite |
| `@nexa/icons/icons/*` | standalone SVG files |
| `@nexa/icons/data/icons.json` | canonical dataset |

`sideEffects: ["*.css"]` so bundlers keep the CSS import and tree-shake icons.
`main`/`module`/`types` are set for classic resolvers; `exports` covers modern
ESM/CJS consumers.

## Vanilla JS — `@nexa/icons/js`

Zero dependencies; works in Node ≥18 and browsers. ESM (`js/index.mjs`) and CJS
(`js/index.cjs`), ~11.7 KB brotli total. The runtime payload is lean: icon
records omit search `keywords` (kept in `data/icons.json` for tooling/search
rebuilds).

```js
import {
  svg, sprite, symbol, getIcon, hasIcon, names, ids,
  meta, ICONS, SWAP, SWAP_PAIRS, PRESETS, SIZE_PX, strokeForSize,
  pairFor, swapModeFor, swapSvg,
} from "@nexa/icons/js";
```

TypeScript declarations ship as `js/index.d.ts` (referenced by the package
`exports` map). The root package also has a CJS build: `require("@nexa/icons")`
works on Node. Subpath `@nexa/icons/js` ships both ESM and CJS.

| Export | Signature | Returns |
|---|---|---|
| `svg(name, options?)` | `(string, object)` | inline SVG string; throws `RangeError` on unknown name |
| `sprite(opts?)` | `{strokeWidth?}` | full sprite markup, cached; symbol stroke defaults to **2** |
| `symbol(name, opts?)` | `string`, `{strokeWidth?}` | one `<symbol id="nexa-<kebab>">`, stroke defaults to **2** |
| `getIcon(name)` | `string` | frozen `{kebab, name, aliases, preset, trigger, inner}` or `undefined` (**no keywords**) |
| `hasIcon(name)` | `string` | `boolean` |
| `names()` | — | 650 PascalCase names, sorted |
| `ids()` | — | 650 kebab ids, sorted |
| `meta` | — | dataset meta (count, grid, sizes, `nexaMap`, source/license) |
| `ICONS` | — | map `kebab → {name, aliases, preset, trigger, inner}` (search `keywords` live only in `data/icons.json`) |
| `PRESETS` | — | 18 animation names (17 presets + `fade-in`) |
| `SIZE_PX` | — | `{sm:16, md:20, lg:24, xl:40}` |
| `strokeForSize(px)` | `number` | 16→2, 20→1.75, 24+→1.5 |
| `swapSvg(from, to, opts?)` | `(string, string, object)` | two-layer swap widget markup; `RangeError` if either name is unknown |
| `pairFor(name)` | `string` | semantic counterpart, e.g. `"ArrowRight"` |
| `swapModeFor(name)` | `SwapMode` | `mirror`/`flip`/`rotate`/`slide`/`fade` |
| `SWAP_PAIRS` | — | `[from, to, mode]` list (both directions) |
| `SWAP` | — | compact name → `{to, mode}` map |
| `CATEGORIES` | — | category manifest map (`id → {id, label, description, icons}`); empty until the catalog lands |
| `categories(id?)` | `string` | all categories, or one category record |

### `svg` options

| Option | Type | Default | Notes |
|---|---|---|---|
| `size` | `number \| "sm" \| "md" \| "lg" \| "xl"` | `24` | numbers are px |
| `strokeWidth` | `number` | auto by size | overrides the Nexa table |
| `animate` | `string \| true` | off | `true` = semantic preset |
| `trigger` | `"hover" \| "focus" \| "press" \| "mount" \| "always" \| "manual" \| "inview"` | icon's default | |
| `active` | `boolean` | `false` | adds `data-nexa-active="true"` |
| `label` | `string` | — | `role="img"` + `aria-label` |
| `title` | `string` | — | `<title>` child |
| `class` / `className` | `string` | — | appended to `nexa-icon` |
| `color` | `string` | — | shorthand for `style="color:…"` |
| `shape` | `NexaShape \| "none"` | — | shaped frame (`.nexa-icon-frame .nexa-shape--…`) |
| `variant` | `NexaFill` | `outline` | `outline` / `duotone` / `solid` |
| `filled` | `boolean \| "soft"` | — | controlled fill state (`"soft"` = duotone) |
| `animateFill` | `boolean` | `false` | `data-fill-anim="true"` + CSS transition |
| `threeD` | `Nexa3D \| false` | `false` | `.nexa-3d[data-nexa-3d]` wrapper |
| `…rest` | — | — | any other key becomes an escaped SVG attribute |

```js
svg("Bell", { size: 20 });                                  // 20px, 1.75
svg("Loader2", { animate: true });                          // spin + always
svg("Trash2", { animate: "shake", trigger: "manual", active: true, label: "Delete" });
svg("TriangleAlert");                                       // alias works

svg("Bell", { shape: "circle" });                          // shaped frame
svg("Heart", { filled: "soft", animateFill: true });       // duotone + transition
svg("Crown", { threeD: "extrude" });                       // CSS 3D
categories("communication");                               // category record (when catalog lands)

swapSvg("ArrowLeft", "ArrowRight", { active: false, size: 20, label: "Direction" });
swapSvg("Plus", "Minus", { mode: "auto" });                 // "fade" from the pair
pairFor("Heart");                                           // "HeartOff"
swapModeFor("Sun");                                         // "rotate"
```

`swapSvg` options: `size`, `strokeWidth`, `active`, `mode` (`auto` by default →
the pair's semantic mode), `duration` (ms, default 260), `label`, `class` /
`className`. Toggle `data-nexa-active` on the rendered `.nexa-swap` root to morph;
no re-render needed. Both inner layers (`.nexa-swap__a`, `.nexa-swap__b`) are
`aria-hidden="true"` — the wrapper carries the accessible name.

`getIcon`/`svg` accept canonical names, kebab ids, aliases, and
space/underscore-insensitive forms (`"book user"`, `"book_user"`).

### HTML without a build step

```html
<script type="module">
  import { sprite } from "@nexa/icons/js";
  document.body.insertAdjacentHTML("afterbegin", sprite());
</script>

<svg class="nexa-icon" aria-hidden="true"><use href="#nexa-bell"/></svg>
```

`<svg class="nexa-icon">` is styled by `animations.css`. Sprite symbols are fixed
at `stroke-width="2"` (the 24px Nexa weight) by default: for the 16/20px optical
weights, call `sprite({ strokeWidth: 1.75 })` / `symbol("Bell", { strokeWidth: 2 })`
(Go: `Sprite(SpriteStrokeWidth(1.75))` / `Symbol("Bell", SymbolStrokeWidth(2))`;
Rust: `sprite_with(1.75)` / `Icon::symbol_with(2.0)`), or use the inline API
(`svg()`, React components, Go `Icon.SVG`, Rust `Icon::svg`) which is size-aware.
`icons/bell.svg` is a fixed 24px / stroke 2 standalone file.

### Unknown names

| Binding | Behaviour |
|---|---|
| JS `svg()` / `symbol()` | throws `RangeError('[nexa-icons] Unknown icon: "…"')` |
| JS `getIcon()` / `hasIcon()` | `undefined` / `false` (lookups are lenient: case/alias/kebab/separator-insensitive) |
| React `<Icon name>` | renders `null` for an unknown name; `getIcon()` returns `undefined` |
| React named component | compile error for a non-exported name (`NexaIconName` union) |
| Go `Get` / `Pair` / `Symbol` | `(zero, false)`; `SwapSVG` returns `""` |
| Rust `get` / `pair` | `None`; `swap_svg` returns `None` |

### React SSR sprite recipe

The React entry does not export a `sprite()` helper. For SSR, inject the same
symbol set once in the document shell, then use `<use>` anywhere:

```tsx
// app/layout.tsx (server component) — load the shipped sprite once
import { readFileSync } from "node:fs";
import { createElement } from "react";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const spriteFile = path.join(
  path.dirname(require.resolve("@nexa/icons/package.json")),
  "sprite.svg"
);
const sprite = readFileSync(spriteFile, "utf8");

export function IconSprite() {
  return createElement("span", {
    "aria-hidden": "true",
    style: { display: "none" },
    dangerouslySetInnerHTML: { __html: sprite },
  });
}

// anywhere in the tree
export function Bell() {
  return (
    <svg className="nexa-icon" width={24} height={24} aria-hidden="true">
      <use href="#nexa-bell" />
    </svg>
  );
}
```

With Vite/Next you can also `import sprite from "@nexa/icons/sprite.svg?raw"`
instead of reading the file. Alternatively call the vanilla `sprite()` from
`@nexa/icons/js` on the server — it returns the same markup. Sprite symbols are
fixed stroke 2; use the React component itself when you need size-aware stroke.

## Categories

The **650-icon catalog is categorized** into 24 groups from
`data/categories.json`. Every binding exposes them:

| Binding | API |
|---|---|
| React | `import { CATEGORIES } from "@nexa/icons"` (metadata); `import { Bell } from "@nexa/icons/communication"` |
| Vanilla JS | `CATEGORIES`, `categories()`, `categories("communication")` from `@nexa/icons/js`; same category subpaths |
| Go | `Categories() []Category`, `ByCategory(id) (Category, bool)` |
| Rust | `categories()`, `by_category(id)`, `category_icons(id)` |

```tsx
import { Bell } from "@nexa/icons/communication";
import { CATEGORIES } from "@nexa/icons";
```

```js
import { CATEGORIES, categories } from "@nexa/icons/js";

Object.keys(CATEGORIES);      // 24 ids
categories("communication");  // { id, label, description, icons }
```

Category entry modules are tree-shakeable subpaths
(`@nexa/icons/<id>` → `dist/categories/<id>.js`). Ids: navigation, arrows,
actions, communication, media, files, data, finance, people, security, status,
time, weather, devices, design, travel, places, education, health, food,
development, commerce, editing, layout.

## Go

See [languages/go.md](languages/go.md). Summary:

| API | Signature |
|---|---|
| `nexaicons.Get(name)` | `(Icon, bool)` — name/kebab/alias, case-insensitive, separators ignored |
| `nexaicons.Names()` | `[]string` |
| `nexaicons.Symbol(name, opts...)` / `Sprite(opts...)` | `(string, bool)` / `string`; `SymbolStrokeWidth`, `SpriteStrokeWidth` (default 2) |
| `Icon.SVG(opts...)` | `string`, size-aware; options `Size`, `StrokeWidth`, `Class`, `Label`, `Title`, `Anim`, `Trigger`, `Active` |
| `Pair(name)` / `Pairs()` / `SwapMode(name)` | swap counterpart, all 49 edges, mode |
| `SwapSVG(from, to, opts...)` | `string`; options `SwapActive`, `SwapDuration`, `SwapTransition`, `SwapLabel`, `SwapClass`, `SwapSize`, `SwapStrokeWidth` |

## Rust

See [languages/rust.md](languages/rust.md). Summary:

| API | Signature |
|---|---|
| `get(name)` | `Option<&'static Icon>` — name/kebab/alias, case-insensitive, separators ignored |
| `names()` | `Vec<&'static str>` |
| `sprite()` / `Icon::symbol()` | `String`, fixed stroke 2 |
| `Icon::svg(SvgOptions)` | `String`, size-aware; builder `.size().stroke_width().class().label().title().anim().trigger().active()` |
| `pair(name)` / `pairs()` / `swap_mode(name)` | swap counterpart, all 49 edges, mode |
| `swap_svg(from, to, SwapOptions)` | `Option<String>`; builder `.active().duration().mode().label().class().size().stroke_width()` |

## Illustrations

Twelve duotone illustrations for empty states, feature cards and onboarding ship
in [`illustrations/`](../illustrations) (64×64 viewBox, currentColor, one accent
detail, `manifest.json` + `preview.html`). Usage:

```html
<!-- inline; inherits color and the theming tokens -->
<svg viewBox="0 0 64 64" width="96" height="96" aria-hidden="true">
  <!-- contents of illustrations/no-jobs.svg -->
</svg>
```

```tsx
import noJobs from "@nexa/icons/illustrations/no-jobs.svg?raw";
<div style={{ color: "var(--nexa-fg-muted)" }}
     dangerouslySetInnerHTML={{ __html: noJobs }} />;
```

Tokens: `--nexa-ill-fg` (foreground), `--nexa-ill-soft` (duotone washes),
`--nexa-ill-accent` (single semantic detail); all default to `currentColor`.
Full design system, manifest schema and React patterns:
[`illustrations/README.md`](../illustrations/README.md).

## GPUI (Rust native UIs)

`nexa-icons-gpui` renders catalog icons in GPUI windows with a custom element +
in-memory asset source. Full guide: [gpui.md](gpui.md).

## Dataset access

`data/icons.json` is the single source of truth:

```jsonc
{
  "meta": { "count": 650, "requested": 650, "duplicates": 0, "grid": 24,
            "sizes": { "sm": [16, 2], "md": [20, 1.75], "lg": [24, 1.5], "xl": [40, 1.5] },
            "categories": [ { "id": "communication", "label": "Communication", … } ],
            "nexaMap": { "jobs": "Briefcase", … } },
  "icons": [
    { "name": "Bell", "kebab": "bell", "aliases": ["Bell"],
      "keywords": ["notification", …],
      "anim": { "preset": "ring", "trigger": "hover" },
      "nodes": [["path", { "d": "…" }]], "inner": "<path d=\"…\"/>" }
  ]
}
```

Use it to build your own renderer when no existing binding fits; keep geometry
and `anim` metadata intact (see [adding-icons.md](adding-icons.md)). The
semantic swap pairs ship as `data/swaps.json` and are exported as a package
subpath (`import swaps from "@nexa/icons/data/swaps.json" with { type: "json" }`
— or read `node_modules/@nexa/icons/data/swaps.json`).
