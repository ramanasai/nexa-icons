# AGENTS.md — Nexa Icons

Canonical guide for humans and coding agents working with **Nexa Icons**
(`@sairamanapb/icons`): one stroke-first icon language, shipped for React/TypeScript,
vanilla JS, plain HTML, Go and Rust with **zero runtime dependencies beyond the
optional React peer**.

> **Status snapshot:** **1,034 icons in 26 categories**, **12 duotone
> illustrations**, and a verified **Rust GPUI adapter** (`nexa-icons-gpui`) ship
> in this release. Everything on this page is the current, implemented API.

## Contents

1. [Install](#1-install)
2. [Imports by language](#2-imports-by-language)
3. [Sizing and stroke](#3-sizing-and-stroke)
4. [Shape containers](#4-shape-containers)
5. [Fill variants and fill animation](#5-fill-variants-and-fill-animation)
6. [CSS 3D presets](#6-css-3d-presets)
7. [Animation presets and triggers](#7-animation-presets-and-triggers)
8. [Swap / morph](#8-swap--morph)
9. [Categories](#9-categories)
10. [Illustrations](#10-illustrations-duotone-set)
11. [Rust + GPUI](#11-rust--gpui)
12. [Design rules](#12-design-rules)
13. [Accessibility](#13-accessibility)
14. [Performance budgets](#14-performance-budgets)
15. [Regenerate and verify](#15-regenerate-and-verify)
16. [Troubleshooting](#16-troubleshooting)
17. [Docs map and repo layout](#17-docs-map-and-repo-layout)
18. [License and attribution](#18-license-and-attribution)

## 1. Install

| Manager | Command |
|---|---|
| npm | `npm install @sairamanapb/icons` |
| Yarn (Classic/Berry) | `yarn add @sairamanapb/icons` |
| pnpm | `pnpm add @sairamanapb/icons` |
| bun | `bun add @sairamanapb/icons` |

Two entry points in one package:

| You are using | Import path | React needed? |
|---|---|---|
| React / TypeScript | `@sairamanapb/icons` (root) | Yes — optional peer `react >= 18` |
| Vanilla JS / HTML / Node | `@sairamanapb/icons/js` | **No** — zero dependencies |
| Go | `github.com/nexa-icons/nexa/go` | No |
| Rust | `nexa-icons` (crate) | No |
| Rust + GPUI | `nexa-icons-gpui` (`rust/gpui/`) | No — needs GPUI 0.2.2 |
| Lucide-compatible | `@sairamanapb/icons/lucide` | Yes (`react`) |
| Illustrations | `@sairamanapb/icons/illustrations/*` / `illustrations/` | No |

> The npm tarball is runtime-only: raw `icons/*.svg` and the full `docs/` are
> GitHub-only. `sprite.svg` is shipped in the package. Go/Rust crates live in
> the repo and are not in the npm tarball.

Contributors use the pinned toolchain:

```bash
mise install                 # Node/Go/Rust/Bun pinned in mise.toml
mise run setup               # deps + generate + build
mise run verify              # release gate (or: npm run verify)
MISE_DISABLE_TOOLS=1 mise run verify   # use system tools if mise has no installs
```

## 2. Imports by language

### React / TypeScript

```tsx
import { Bell, Loader2, IconToggle, ArrowLeft, ArrowRight } from "@sairamanapb/icons";
import "@sairamanapb/icons/animations.css"; // once, app entry

<Bell />                                  // 24px, stroke 2 (CSS-sized default), static
<Bell animate />                          // semantic preset (ring) on hover
<Loader2 animate />                       // spinner, trigger="always"
<IconToggle from={ArrowLeft} to={ArrowRight} label="Next page" />
```

Deep import one module (smaller dev-server graphs; same tree-shaking result):

```tsx
import { Bell } from "@sairamanapb/icons/react/bell"; // -> dist/icons/bell.js
```

Dynamic names (pulls the full registry — avoid for static UIs):

```tsx
import { Icon, getIcon } from "@sairamanapb/icons";
<Icon name="bell" size={20} />;
```

### Vanilla JS / ESM

```js
import { svg, sprite, symbol, getIcon, names, ICONS, categories, swapSvg, pairFor } from "@sairamanapb/icons/js";

document.querySelector("#bell").innerHTML = svg("Bell", { size: 20 });
document.body.insertAdjacentHTML("afterbegin", sprite()); // inline once
```

CJS: `const { svg } = require("@sairamanapb/icons/js")` (and `require("@sairamanapb/icons")` for the React root build).

### Plain HTML

```html
<!-- inline the sprite once (paste sprite.svg or sprite() output) -->
<svg class="nexa-icon" aria-hidden="true" width="24" height="24"
     style="color:#3f3f46"><use href="#nexa-bell"/></svg>

<!-- optional animation layer -->
<link rel="stylesheet" href="node_modules/@sairamanapb/icons/dist/animations.css">
<svg class="nexa-icon" aria-hidden="true" data-nexa-anim="ring"
     data-nexa-trigger="hover"><use href="#nexa-bell"/></svg>
```

Sprite symbols are fixed at `stroke-width="2"`; for other weights generate with
`sprite({ strokeWidth: 1.75 })` (Go: `Sprite(SpriteStrokeWidth(1.75))`, Rust:
`sprite_with(1.75)`), or use an inline renderer, which is size-aware.

### Go

```go
import nexaicons "github.com/nexa-icons/nexa/go"

icon, ok := nexaicons.Get("Bell")
if ok {
    html := icon.SVG(nexaicons.Size(20)) // 20px => stroke 1.75 (auto)
}
```

### Rust

```rust
use nexa_icons::{get, SvgOptions};

let bell = get("Bell").expect("Bell is in the set");
let svg = bell.svg(SvgOptions::new().size(20)); // 20px => stroke 1.75 (auto)
```

Shape/fill/3D props are React/JS only; Go and Rust expose the base stroke icon,
sprite, swap and category APIs. Native Rust UIs can use the GPUI adapter
([docs/gpui.md](docs/gpui.md)).

## 3. Sizing and stroke

| Token | Pixels | Stroke |
|---|---|---|
| `sm` | 16 | 2 |
| `md` | 20 | 1.75 |
| `lg` | 24 | 1.5 |
| `xl` | 40 | 1.5 |

Default is **24px**. When no `size` prop is given (CSS-sized icons such as
`className="h-4 w-4"`), the stroke is **2**; when an explicit size is passed,
stroke derives as `≤16 → 2`, `≤20 → 1.75`, `>20 → 1.5`. `strokeWidth` and
`absoluteStrokeWidth` override deliberately. Go/Rust take pixels (no named
tokens) and default to the explicit-size mapping.

## 4. Shape containers

Wrap the glyph in a theme-safe container (React / JS):

```tsx
<Bell shape="rounded" />
<Bell shape="circle" size="lg" />
```

```js
svg("Bell", { shape: "circle", size: 24 });
```

| Value | Container |
|---|---|
| `square` / `rounded` / `circle` / `pill` / `squircle` / `hexagon` / `diamond` | `.nexa-shape--<shape>` |
| omitted / `"none"` | no container |

- Renders `<span class="nexa-icon-frame nexa-shape nexa-shape--…"><svg …></span>`;
  the frame is `round(size × 1.7)` square (pill: width ×1.7, height ×1.25).
- Tint is `color-mix(in srgb, currentColor 14%, transparent)` with a 26%
  currentColor border, so it follows `color` in every theme.
- Accessibility moves to the frame when shape/3D/glass is on: pass `label`; the
  inner SVG stays `aria-hidden`.

### Glass & gradient (optional)

```tsx
import "@sairamanapb/icons/effects.css";   // once, only if you use these
<Bell glass />                       // frost (default)
<Bell glass="ice" gradient="aurora" />
<Bell glass="neon" glassAnim="sheen" />   // animated glass (sheen/pulse/float)
```

`glass`: `"frost" | "ice" | "clear" | "steel" | "neon" | "jelly" | "aurora"`. Extras: `glassBody` (filled jelly body), `glassAnim` (`sheen`/`pulse`/`float`), `glassTrigger` (`always`/`hover`), `gradientAnim` (`hue`). `gradient`: `"aurora" | "ice" |
"sunset" | "emerald" | "ocean" | "candy" | "gold" | "mono"`. Gradient strokes
use an inline SVG `linearGradient` driven by `--nexa-grad-a/b` (tintable per
theme); glass uses `backdrop-filter` + layered highlights derived from
`currentColor`, with a solid fallback and forced-colours support. Configurable per icon via props (`glass: { preset, blur, tintA, tintB, edge, radius }`,
`gradient: { from, to, angle }`), or per theme via CSS variables
(`--nexa-glass-*`, `--nexa-grad-a/b`). Omit the props or skip `effects.css` to
turn them off entirely. Full guide: [docs/effects.md](docs/effects.md).

## 5. Fill variants and fill animation

```tsx
<Circle variant="duotone" />
<Heart filled />                                  // solid where geometry allows
<Bookmark filled={false} className="fav" />       // outline
<Square filled="soft" />                          // duotone
<Heart filled animateFill />                      // animated fill <-> empty
```

```js
svg("Circle", { variant: "solid" });
svg("Bell", { filled: "soft", animateFill: true });
```

| Prop / option | Values | Meaning |
|---|---|---|
| `variant` | `outline` (default) / `duotone` / `solid` | fill treatment |
| `filled` | `false` / `true` / `"soft"` | controlled fill state |
| `animateFill` | `boolean` | CSS `fill-opacity` transition (320ms) |

- Only **closed-geometry** icons (`fillSafe` in `data/icons.json`) fill cleanly.
  `solid` on an open glyph automatically degrades to `duotone`, so it never
  produces a broken shape.
- Duotone opacity is configurable with `fillOpacity={0..1}` (`--nexa-fill-opacity`).
  Solid on open geometry renders a thick `nexa-icon-body` fallback, so the solid
  variant is consistent; `fillUnsafe` detail icons (Palette, KeyRound) stay
  unfilled. Fill only targets **closed nodes** (`data-closed="true"`), so open paths
  (checks, chevrons, arrows) never get stray fill marks. The SVG carries
  `data-fill-state="true|soft"`, `data-fill-safe="true|false"` and
  `data-fill-anim="true"` when animated; `solid` on a non-fill-safe icon degrades
  to duotone.
- Reduced motion disables the fill transition; the state still changes.
- Do not animate fill and another preset on the same icon at once.

## 6. CSS 3D presets

```tsx
<Crown threeD="tilt" />
<Plane threeD="flip" size="xl" />
```

```js
svg("Crown", { threeD: "extrude" });
```

| Preset | On hover (or on a focusable wrapper's `:focus-visible` / `.is-preview` state) |
|---|---|
| `tilt` | `rotateX(18deg) rotateY(-22deg) scale(1.06)` |
| `flip` | `rotateY(360deg) scale(1.04)` (ends front-facing) |
| `extrude` | translateZ + layered `drop-shadow` depth |
| `orbit` | rotate + translateZ sweep |

Markup: `<span class="nexa-3d" data-nexa-3d="<preset>">` around the icon with
`perspective: 640px`; the inner glyph transitions transform only. This is a
**CSS presentation preset — not WebGL, not a real 3D renderer**. Reduced motion
removes all transforms. Icons are still SVGs and remain accessible (label goes
on the frame).

## 7. Animation presets and triggers

22 presets (17 semantic + `draw`, `spring`, `success`, `error`, `progress`) + `fade-in`; CSS-only:

`spin`, `pulse`, `ring`, `shake`, `wiggle`, `flip`, `bounce`, `float`, `tilt`,
`heartbeat`, `pop`, `nudge-up`, `nudge-up-right`, `nudge-right`,
`nudge-down-right`, `nudge-down`, `nudge-left`, `draw`, `spring`, `success`,
`error`, `progress`, and `fade-in`. Draw/progress animate `path` strokes
(`stroke-dashoffset`), so they are the only non-compositor presets; reduced
motion disables them too.

Triggers: `hover` (default; includes keyboard `:focus-visible` and parent
button/link focus), `parent` (plays when the nearest `<a>`, `<button>` or
`[role=button]` is hovered/focused), `focus`, `press` (`:active`), `inview`
(CSS scroll-driven, progressive enhancement), `mount`, `always` (loops for
`spin`/`pulse`), `manual` (+ `active`). Motion is opt-in: `<Bell />` is static, `<Bell animate />` plays
Bell's own preset. `prefers-reduced-motion: reduce` disables all preset/fill/
swap/3D motion.

## 8. Swap / morph

```tsx
<IconToggle from={ArrowLeft} to={ArrowRight} label="Next page" /> // <button aria-pressed>
<IconSwap from={Plus} to={Minus} active={open} label="Section" />
```

```js
pairFor("ArrowLeft");       // "ArrowRight"
swapModeFor("Sun");         // "rotate"
el.innerHTML = swapSvg("ArrowLeft", "ArrowRight", { label: "Direction" });
```

Modes: `mirror`, `flip`, `rotate`, `slide`, `fade`, `auto` (pair default).
Markup: `.nexa-swap` > `.nexa-swap__a`/`.nexa-swap__b` (both `aria-hidden`),
`data-mode`, `data-nexa-active`. Pairs live in `data/swaps.json` (26 pairs → 49
directed edges; shipped and exported as `@sairamanapb/icons/data/swaps.json`). Go:
`Pair`/`Pairs`/`SwapSVG`; Rust: `pair`/`pairs`/`swap_svg`.

## 9. Categories

**1,034 icons in 26 categories** (`data/categories.json`). Tree-shakeable
category subpaths, matching metadata in every binding:

```tsx
import { Bell } from "@sairamanapb/icons/communication";
import { CATEGORIES } from "@sairamanapb/icons"; // array of NexaCategory
```

```js
import { CATEGORIES, categories, ICONS } from "@sairamanapb/icons/js";
Object.keys(CATEGORIES);      // 26 ids (record)
categories("communication");  // { id, label, description, icons }
ICONS;                        // flat map, unchanged
```

| Binding | Category API |
|---|---|
| React | `@sairamanapb/icons/<id>` + `CATEGORIES` metadata (array) |
| Vanilla JS | `@sairamanapb/icons/<id>` + `CATEGORIES` (record) + `categories(id?)` |
| Go | `Categories() []Category`, `ByCategory(id)` |
| Rust | `categories()`, `by_category(id)`, `category_icons(id)` |

Ids: navigation, arrows, actions, communication, media, files, data, finance,
people, security, status, time, weather, devices, design, travel, places,
education, health, food, development, commerce, editing, layout, brands, government.

## 10. Illustrations (duotone set)

Twelve 64×64 duotone illustrations for empty states, feature cards and
onboarding live in [`illustrations/`](illustrations) with
[`manifest.json`](illustrations/manifest.json), [`preview.html`](illustrations/preview.html)
and the full design system in
[`illustrations/README.md`](illustrations/README.md).

```html
<svg viewBox="0 0 64 64" width="96" height="96" aria-hidden="true">
  <!-- paste illustrations/no-jobs.svg -->
</svg>
```

```tsx
import noJobs from "@sairamanapb/icons/illustrations/no-jobs.svg?raw";
<span aria-hidden="true" dangerouslySetInnerHTML={{ __html: noJobs }} />;
```

- Inline SVG is the primary path: inherits `color`; theming tokens
  `--nexa-ill-fg`, `--nexa-ill-soft`, `--nexa-ill-accent` default to
  `currentColor` (one accent detail per illustration).
- 64×64 canvas, 2.5 outline / soft duotone washes, ~1.1 KB/file, grayscale-safe,
  light `#fafafa` / dark `#0c0c0e`.
- Choose by `usage` in the manifest: `empty-state` | `feature` | `onboarding`.

## 11. Rust + GPUI

`nexa-icons-gpui` (in `rust/gpui/`) renders catalog icons in
[GPUI](https://gpui.rs) windows:

```rust
use nexa_icons_gpui::{icon, NexaIconAssets};
// Application::new().with_assets(NexaIconAssets::new())
div().text_color(rgb(0x27272a)).child(icon("bell"))
```

- Custom `gpui::Element` + in-memory `AssetSource`; paints via `paint_svg`,
  size→stroke from rendered bounds, `currentColor`-like text inheritance,
  sprite-atlas cached per `(icon, size, stroke)`.
- API: `icon`/`icon_opt`/`resolve_icon`, `IconElement` (+ `.stroke_width`),
  `NexaIconAssets` (`new`/`with_fallback`), asset helpers; re-exports `gpui` and
  `nexa_icons`.
- GPUI `0.2.2` is pre-1.0 — pin it. Build cost is real (625 unique crates (711 lock entries),
  47 s cold check, 796 MB target); web animation/swap/shape/fill/3D are not
  replayed. Full guide: [docs/gpui.md](docs/gpui.md).

## 12. Design rules

- **One set only.** Never mix another icon library into a Nexa surface.
- 24×24 grid, 2px padding, stroke-only base, round caps/joins, `currentColor`.
- Sizes/strokes from §3; do not hand-set width/height/stroke-width.
- Color comes from the parent `color`; never hard-code hex on an icon. For
  status, use accent only for primary/active/status and pair color with text.
- Shapes: one container style per surface; tint follows currentColor.
- Fills: outline is the default; `solid` only for `fillSafe` glyphs; `duotone`
  is the safe emphasis. Don't use fill to encode status alone.
- 3D: at most one 3D moment per view; never as the only feedback.
- Motion: semantic, opt-in, reduced-motion safe; never animate as the only signal.
- 3:1 contrast minimum on both `#fafafa` and `#0c0c0e`; forced-colors safe.

## 13. Accessibility

- Decorative icons: `aria-hidden="true"` (default in every API). An explicit
  `aria-label` makes the icon labelled (drops `aria-hidden`); explicit
  `aria-hidden={false}` is respected.
- Meaningful icons: pass `label`/`title` → `role="img"` + `aria-label`
  (with shape/3D the labelled element is the wrapper).
- Icon-only buttons: `aria-label` + tooltip, hit area ≥40×40px; use
  `IconToggle` for click-to-toggle glyphs (`aria-pressed`).
- Never encode status in the glyph/color alone; pair with text.
- Fill/shape/3D are decoration: state must also exist in text/`aria-*`.
- Global switches: `[data-nexa-fill="duotone|solid"]`, `[data-nexa-motion="off"]`
  and `--nexa-stroke` on an ancestor let an app style every icon without a wrapper.
  `data-nexa-motion="off"` only disables Nexa-owned motion, not app-level
  spinners/rotations on `.nexa-icon`.
- Reduced motion and forced-colors are handled by `animations.css`.

## 14. Performance budgets

Measured baseline for the **1,034-icon catalog**:

| Asset | Budget | Current |
|---|---|---|
| One tree-shaken React icon (incl. shape/fill/3D) | < 2.6 KB brotli | ~2,096 B brotli |
| 8 tree-shaken icons | — | ~2,600 B brotli |
| 13 tree-shaken icons (typical authenticated page) | — | ~2,368 B brotli (≈182 B/icon average) |
| Full sprite, 1,034 icons | — | 496,505 B raw / 45,723 B brotli |
| `animations.css` (incl. shape/fill/3D/swap) | ≤ 18 KB raw / ≤ 4 KB brotli | 18,929 B / 3,835 B |
| React barrel / JS ESM | — | barrel 68,230 B raw / 11,953 B br; JS ESM 549,204 B raw / 63,536 B br |
| Gallery (shell-first) | 0 ms gallery JS before first paint (observer only); FP/FCP ~44 ms browser floor | 30,461 B shell + 612,246 B data + 89,584 B app; ~136-card virtual window, 976 DOM nodes |

Why it is fast: static precomputed node/string data, per-icon tree-shakeable
modules, one cached sprite request, CSS-only animation/fill/swap/3D, no runtime
deps. No WASM needed — see [docs/performance.md](docs/performance.md).

## 15. Regenerate and verify

```bash
mise run setup                # npm ci + generate all + build
node scripts/generate-all.mjs # dataset → React/JS/Go/Rust (+ gallery)
node scripts/build.mjs        # dist/ (ESM + CJS + d.ts + CSS)
node gallery/build.mjs        # single-file gallery
npm test                      # test suite
node scripts/verify.mjs       # release verification
node bench/bench.mjs          # sizes + tree-shaking + runtime + gallery load
```

Never hand-edit generated files (`data/`, `icons/`, `sprite.svg`, `src/icons/`,
`js/`, `go/`, `rust/`, `dist/`, `gallery/index.html`). Adding an icon/pair:
[docs/adding-icons.md](docs/adding-icons.md).

## 16. Troubleshooting

| Symptom | Fix |
|---|---|
| Icon missing / `undefined` | use a canonical name, kebab or alias; JS `svg()` throws `RangeError`, React `<Icon>` renders `null`, Go returns `(zero,false)`, Rust `None` |
| Stroke too thick/thin | pass `size`/`strokeWidth`; sprite is fixed stroke 2 unless generated with a stroke width |
| Animation not playing | load `@sairamanapb/icons/animations.css`; pass `animate`; check trigger/reduced-motion; parent focus rule only applies to `hover` |
| Fill looks wrong | open geometry degrades to duotone by design; solid only for `fillSafe` icons |
| Shape/3D wrapper breaks layout | frame is 1.7× the icon box (pill: 1.7×1.25); keep it in a flex/grid cell; label goes on the frame |
| Sprite not rendering | same-document sprite required; ids are `#nexa-<kebab>`; don't use `<img>` |
| Icon not updating after rename | Nexa classes are `nexa-*`, attrs `data-nexa-*`, sprite ids `#nexa-*`; see [docs/migration-from-lucide.md](docs/migration-from-lucide.md) |
| SSR/hydration mismatch | keep icon props stable between server/client; don't derive size/label from browser state |

Full list: [docs/troubleshooting.md](docs/troubleshooting.md).

## 17. Docs map and repo layout

| Where | What |
|---|---|
| [README.md](README.md) | overview + quick starts + measured sizes |
| [llms.txt](llms.txt) | compact LLM/agent summary (also served at the gallery root) |
| [docs/api.md](docs/api.md) | React/JS/Go/Rust reference incl. shape/fill/3D/swap |
| [docs/animations.md](docs/animations.md) | presets, triggers, fill/swap/3D motion |
| [docs/studio.md](docs/studio.md) | Nexa Studio editor + exports |
| [docs/design.md](docs/design.md) | grid, stroke, states, containers, motion |
| [docs/theming.md](docs/theming.md) | currentColor, contrast, forced colors |
| [docs/performance.md](docs/performance.md) | measured sizes/runtime, budgets, no-WASM |
| [docs/effects.md](docs/effects.md) | frosted glass + gradient presets and theming |
| [docs/inventory.md](docs/inventory.md) | full icon/variant/category inventory + differentiators |
| [docs/adding-icons.md](docs/adding-icons.md) | dataset + category regeneration |
| [docs/migration-from-lucide.md](docs/migration-from-lucide.md) | drop-in from Lucide |
| [docs/troubleshooting.md](docs/troubleshooting.md) | failure modes |
| [docs/gpui.md](docs/gpui.md) | Rust GPUI adapter (`nexa-icons-gpui`) |
| [illustrations/README.md](illustrations/README.md) | duotone illustration system |
| [docs/development.md](docs/development.md) | mise, package managers, gates |
| [PUBLISHING.md](PUBLISHING.md) | npm release checklist (scope, 2FA, provenance, CI) |
| [docs/languages/go.md](docs/languages/go.md) · [docs/languages/rust.md](docs/languages/rust.md) | language guides |
| [skills/nexa-icons/SKILL.md](skills/nexa-icons/SKILL.md) | agent skill (`nexa-icons`) + references |
| [nexa-icon-styles-SKILL.md](nexa-icon-styles-SKILL.md) | app-level icon style guide |

Repo layout: `data/` canonical datasets (`icons.json`, `swaps.json`,
`categories.json`), `icons/` standalone SVGs, `sprite.svg`, `src/` + `dist/`
React/TS, `js/` vanilla ESM+CJS, `go/`, `rust/` (+ `rust/gpui/`), `gallery/`,
`illustrations/`, `scripts/`, `bench/`, `docs/`, `skills/`. `reports/` holds the
release QA summary; screenshots, benchmark results and other generated
evidence are git-ignored and reproducible.

## 18. License and attribution

Nexa's icon geometry derives from **Lucide 1.70** (ISC), which in turn derives
partly from **Feather** (MIT, Cole Bemis). Both notices are retained in
[LICENSE](LICENSE) and [NOTICE](NOTICE) and must remain in redistributions of
the geometry. The animation/shape/fill/3D layer, packages, tooling and docs are
original Nexa work under ISC. Icon names are used for compatibility; not
trademarks.
