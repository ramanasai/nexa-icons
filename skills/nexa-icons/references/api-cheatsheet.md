# Nexa Icons API cheatsheet

Compact per-language reference, verified against the shipped packages. Long
form: [`docs/api.md`](../../../docs/api.md). Source of truth: `src/types.ts`,
`src/createIcon.tsx`, `js/index.mjs`, `go/icons.go`, `rust/src/lib.rs`.

## React / TypeScript — `@nexa/icons`

```tsx
import { Bell, Loader2, Icon } from "@nexa/icons"; // imports React (optional peer)
import { Bell } from "@nexa/icons/react/bell"; // deep import -> dist/icons/bell.js
import "@nexa/icons/animations.css"; // once, app entry
```

Non-React projects use `@nexa/icons/js` (below) — the root entry requires React.

| Prop | Type | Default | Notes |
|---|---|---|---|
| `size` | `"sm" \| "md" \| "lg" \| "xl" \| number` | **26** (`lg`) | 16/20/24/40px; numbers are px |
| `strokeWidth` | `number` | auto by size | 16→2, 20→1.75, 24+→1.5 |
| `animate` | `NexaPreset \| boolean` | off | `true` = icon's semantic preset |
| `trigger` | `"hover" \| "focus" \| "press" \| "mount" \| "always" \| "manual" \| "inview"` | icon default (`hover`; `Loader2` = `always`) | only with `animate` |
| `active` | `boolean` | `false` | `trigger="manual"` |
| `shape` | `square`/`rounded`/`circle`/`pill`/`squircle`/`hexagon`/`diamond`/`none` | — | `.nexa-icon-frame` + `.nexa-shape--*`; label moves to frame |
| `variant` | `outline` / `duotone` / `solid` | `outline` | fill; open geometry degrades to duotone |
| `filled` | `boolean \| "soft"` | — | controlled fill state (`"soft"` = duotone) |
| `animateFill` | `boolean` | `false` | CSS `fill-opacity` transition |
| `threeD` | `tilt` / `flip` / `extrude` / `orbit` / `false` | `false` | `.nexa-3d` CSS presentation (not WebGL) |
| `label` | `string` | — | `role="img"` + `aria-label`; omit → `aria-hidden` |
| `title` | `string` | — | `<title>` child; also makes it labelled |
| `className`, `style` | usual | — | color via inherited `color` |
| `ref` | `Ref<SVGSVGElement>` | — | `forwardRef` |

```tsx
<Bell size="sm" />                          {/* 16px, stroke 2, static */}
<Bell animate />                            {/* ring on hover */}
<Loader2 animate trigger="always" />        {/* spinner */}
<Bell animate="wiggle" trigger="mount" />
<Bell animate trigger="focus" />
<Trash2 animate="shake" trigger="manual" active={confirming} />
<Bell label="Alerts" />                     {/* meaningful icon */}
<Bell shape="rounded" />                     {/* shape container */}
<Heart filled animateFill />                 {/* solid where fillSafe + transition */}
<Square variant="duotone" />
<Crown threeD="tilt" />                      {/* CSS 3D */}

```

Helpers: `SIZE_PX`, `PRESETS` (18 incl `fade-in`), `strokeForSize(px)`,
`STROKE_FOR_PX`, `NEXA_MAP`, `ICON_NAMES`, `resolveKebab(name)`, `createIcon`,
`SWAP_PAIRS`, `SWAP`, `swapTarget(name)`, `swapModeFor(name)`, and
`getIcon(name)` / `<Icon name="..." />` for data-driven UIs (pulls the full
registry — prefer named imports).

### Swap components

```tsx
import { IconSwap, IconToggle, ArrowLeft, ArrowRight, Plus, Minus } from "@nexa/icons";

<IconSwap from={ArrowLeft} to={ArrowRight} active={open} label="Direction" />
<IconToggle from={Plus} to={Minus} label="Expand section" />
```

`IconSwap` props: `from`, `to`, `active`, `defaultActive`, `mode`
(`mirror|flip|rotate|slide|fade|auto`), `duration` (260ms), `label`, `size`,
`strokeWidth`, `className`, `style`. `IconToggle` adds a real `<button>` with
`aria-pressed` + required `label` and `pressed`/`defaultPressed`/
`onPressedChange`. Pairs/modes come from `data/swaps.json`.

## Vanilla JS — `@nexa/icons/js`

```js
import {
  svg, sprite, symbol, getIcon, hasIcon, names, ids,
  meta, ICONS, PRESETS, SWAP, SWAP_PAIRS, SIZE_PX, strokeForSize,
  pairFor, swapModeFor, swapSvg,
} from "@nexa/icons/js";
```

Root package ships CJS too: `const { Bell } = require("@nexa/icons")`.

| Export | Signature | Returns |
|---|---|---|
| `svg(name, opts?)` | `(string, object)` | inline SVG string; `RangeError` if unknown |
| `sprite(opts?)` | `{strokeWidth?}` | full sprite markup (cached); symbol stroke defaults to **2** |
| `symbol(name, opts?)` | `string`, `{strokeWidth?}` | one `<symbol id="nexa-…">`; stroke defaults to **2** |
| `getIcon(name)` | `string` | frozen icon record (`kebab,name,aliases,preset,trigger,inner`) or `undefined` — **no keywords** |
| `hasIcon(name)` | `string` | `boolean` |
| `names()` | — | 650 PascalCase names, sorted |
| `ids()` | — | 650 kebab ids, sorted |
| `meta` | — | count/grid/sizes/`nexaMap`/source |
| `ICONS` | — | `kebab → {name, aliases, preset, trigger, inner}`; keywords stay in `data/icons.json` |
| `PRESETS` | — | 18 animation names |
| `SIZE_PX` | — | `{sm:16, md:20, lg:24, xl:40}` |
| `strokeForSize(px)` | `number` | 16→2, 20→1.75, 24+→1.5 |
| `swapSvg(from, to, opts?)` | `(string, string, object)` | two-layer `.nexa-swap` markup |
| `pairFor(name)` | `string` | semantic counterpart, e.g. `"ArrowRight"` |
| `swapModeFor(name)` | `SwapMode` | `mirror`/`flip`/`rotate`/`slide`/`fade` |
| `SWAP_PAIRS` / `SWAP` | — | pair list / compact lookup |
| `CATEGORIES` / `categories(id?)` | — | category manifest / one record (empty until catalog lands) |

`svg` options: `size` (number or token, default 24), `strokeWidth`, `animate`,
`trigger` (`hover|focus|press|mount|always|manual|inview`), `active`, `label`,
`title`, `class`/`className`, `color`, plus any extra key as an escaped SVG
attribute (plus `shape`, `variant`, `filled`, `animateFill`, `threeD` for the
presentation features). `sprite({ strokeWidth })` sets the symbol stroke
(default 2 — size-aware stroke is only available through the inline APIs). Go: `Sprite(SpriteStrokeWidth(w))` /
`Symbol(name, SymbolStrokeWidth(w))`; Rust: `sprite_with(w)` / `Icon::symbol_with(w)`.
Swap pairs ship at `@nexa/icons/data/swaps.json`.

```js
svg("Bell", { size: 20 });                          // 20px / 1.75
svg("Loader2", { animate: true });                  // spin + always
svg("Trash2", { animate: "shake", trigger: "manual", active: true, label: "Delete" });
swapSvg("ArrowLeft", "ArrowRight", { active: false, size: 20, label: "Direction" });
sprite();                                           // inline once, then <use href="#nexa-bell">
```

Lookup is case-insensitive and alias/kebab aware (`"TriangleAlert"`,
`"triangle-exclamation-point"`, `"book user"` all work).

## Go — `github.com/nexa-icons/nexa/go`

```go
import nexaicons "github.com/nexa-icons/nexa/go"
```

| API | Signature |
|---|---|
| `nexaicons.Get(name)` | `(Icon, bool)` — name/kebab/alias, case-insensitive, separators ignored |
| `nexaicons.Names()` | `[]string` sorted |
| `nexaicons.Symbol(name, opts...)` / `Sprite(opts...)` | `(string, bool)` / `string`; stroke default 2 (`SymbolStrokeWidth`, `SpriteStrokeWidth`) |
| `Icon.SVG(opts ...Option)` | `string` |
| `Icon` fields | `Name`, `Kebab`, `Preset`, `Trigger`, `Aliases`, `Keywords`, `Inner` |
| `nexaicons.Pair(name)` / `Pairs()` / `SwapMode(name)` | `SwapPair{From,To,Mode}` / 49 edges / mode |
| `nexaicons.SwapSVG(from, to, opts...)` | two-layer swap markup; `""` if unknown |

Options: `Size(int)` (24), `StrokeWidth(float64)` (auto: 16→2, 20→1.75, 24+→1.5),
`Class`, `Label`, `Title`, `Anim`, `Trigger`, `Active`. Swap options:
`SwapActive`, `SwapDuration`, `SwapTransition`, `SwapLabel`, `SwapClass`,
`SwapSize`, `SwapStrokeWidth`. Every SVG emits `class="nexa-icon"`,
`focusable="false"`, `data-nexa-icon`, `currentColor`; decorative → `aria-hidden`.

```go
bell, ok := nexaicons.Get("Bell")
if ok {
    _ = bell.SVG(nexaicons.Size(20), nexaicons.Label("Alerts")) // 20px => stroke 1.75
}
_ = bell.SVG(nexaicons.Anim("ring"), nexaicons.Trigger("focus"))
_, _ = nexaicons.Symbol("Bell", nexaicons.SymbolStrokeWidth(1.75))
```

## Rust — `nexa-icons`

```rust
use nexa_icons::{get, names, sprite, SvgOptions, ICONS};
```

| API | Signature |
|---|---|
| `ICONS` | `&'static [Icon]` |
| `get(name)` | `Option<&'static Icon>` — name/kebab/alias, separators ignored |
| `names()` | `Vec<&'static str>` |
| `sprite()` | `String` (fixed stroke 2) |
| `Icon::svg(opts)` | `String` (size-aware) |
| `Icon::symbol()` | `String` (fixed stroke 2) |
| `Icon` fields | `name`, `kebab`, `preset`, `trigger`, `aliases`, `keywords`, `inner` |
| `pair(name)` / `pairs()` / `swap_mode(name)` | `SwapPair{from,to,mode}` / 49 edges / mode |
| `swap_svg(from, to, SwapOptions)` | `Option<String>` swap markup |

```rust
let bell = get("Bell").expect("Bell");
let svg = bell.svg(SvgOptions::new().size(20).label("Alerts")); // 20 => 1.75
let animated = bell.svg(SvgOptions::new().anim("ring").trigger("focus"));
let swap = nexa_icons::swap_svg("ArrowLeft", "ArrowRight", nexa_icons::SwapOptions::new());
```

## Shared contract

- `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, round caps/joins.
- default size **24px / stroke 1.5**; size-aware stroke: 16→2, 20→1.75, 24+→1.5.
- decorative → `aria-hidden="true"`; labelled → `role="img"` + `aria-label`.
- every binding emits `class="nexa-icon"`, `focusable="false"` and
  `data-nexa-icon="<kebab>"`; animation adds `data-nexa-anim`, `data-nexa-trigger`,
  `data-nexa-active` (CSS only; load `animations.css`).
- swap inner layers `.nexa-swap__a`/`.nexa-swap__b` are `aria-hidden="true"`; the
  wrapper carries the label.
- **No runtime dependencies beyond the optional React peer**: root entry needs
  React ≥18, `@nexa/icons/js`/Go/Rust need nothing.
- Shape/fill/3D are React + vanilla-JS features; Go/Rust expose base
  stroke/sprite/swap APIs. Categories are live in every binding:
  React/JS `@nexa/icons/<id>` + `CATEGORIES`; Go `Categories()`/`ByCategory()`;
  Rust `categories()`/`by_category()`/`category_icons()`.

## Unknown names

| Binding | Behaviour |
|---|---|
| JS `svg`/`symbol` | throws `RangeError` |
| JS `getIcon`/`hasIcon` | `undefined` / `false` |
| React `<Icon name>` | renders `null`; `getIcon()` → `undefined` |
| Go `Get`/`Pair`/`Symbol` | `(zero, false)`; `SwapSVG` → `""` |
| Rust `get`/`pair` | `None`; `swap_svg` → `None` |
