# Nexa Icons

[![Live gallery](https://img.shields.io/badge/live%20gallery-nexa--icons-5b8def?style=flat-square)](https://ramanasai.github.io/nexa-icons/)

**[Open the live icon gallery →](https://ramanasai.github.io/nexa-icons/)** — browse all 1,000 icons, shapes, fills, 3D, glass/gradients, swaps and illustrations, entirely client-side.

**The Nexa icon system** — one stroke-first visual language for navigation,
actions, empty states and status, shipped for React/TypeScript, vanilla JS,
plain HTML, Go and Rust. CurrentColor-only, CSS-only motion, **zero runtime
dependencies beyond the optional React peer**.

> **Catalog status:** **1,000 icons in 24 categories**, plus **12 illustrated
> duotone illustrations** and a **Rust GPUI integration crate** — all shipping in
> this release.

- **1,000 icons** in **24 categories**, plus legacy aliases `XIcon === X`,
  `TriangleAlert === AlertTriangle`.
- **Category imports** — `import { Bell } from "@nexa/icons/communication"` (24
  tree-shakeable category entry points; metadata via `CATEGORIES`).
- **24×24 grid**, 2px padding, stroke-first, `currentColor`, round caps/joins.
- **Shape containers** — `square`, `rounded`, `circle`, `pill`, `squircle`,
  `hexagon`, `diamond` — theme-safe via `color-mix(currentColor …)`.
- **Fill variants** — outline / duotone / solid, with CSS-only fill ↔ empty
  animation; open geometry degrades to duotone automatically.
- **CSS 3D presets** — `tilt`, `flip`, `extrude`, `orbit` (presentation, not
  WebGL).
- **17 semantic animation presets** (plus `fade-in`), CSS-only,
  `prefers-reduced-motion` aware, with `hover`/`focus`/`press`/`inview`/`mount`/
  `always`/`manual` triggers.
- **Swap / morph transitions** between semantic pairs (`ArrowLeft ↔ ArrowRight`,
  `Plus ↔ Minus`, `Sun ↔ Moon`, …) — `IconSwap` / `IconToggle` in React,
  `swapSvg` in vanilla JS, pure CSS everywhere.
- **Illustrated set** — 12 duotone 64×64 illustrations for empty states,
  feature cards and onboarding (`illustrations/`, manifest + preview).
- **Native Rust/GPUI** — `nexa-icons-gpui` renders catalog icons in GPUI windows
  ([docs/gpui.md](docs/gpui.md)).
- **No runtime dependencies beyond an optional React peer.** Static geometry,
  per-icon modules, tree-shakeable, ESM + CJS.
- Derived from **Lucide 1.70** (ISC) with the Feather (MIT) notice retained.

## Install

Two entry points — pick the one that matches your stack:

| You are using | Entry point | React required? |
|---|---|---|
| React / TypeScript | `@nexa/icons` (root) | Yes — optional peer `react >= 18` |
| Vanilla JS, HTML, Node, Go, Rust | `@nexa/icons/js` (or the Go/Rust modules) | **No** — zero dependencies |

Both are in the same package, so install once:

| Manager | Command |
|---|---|
| npm | `npm install @nexa/icons` |
| Yarn (Classic/Berry) | `yarn add @nexa/icons` |
| pnpm | `pnpm add @nexa/icons` |
| bun | `bun add @nexa/icons` |

ESM:

```js
import { Bell } from "@nexa/icons";   // React entry (React peer)
import { svg } from "@nexa/icons/js"; // vanilla entry (no React)
```

CJS:

```js
const { Bell } = require("@nexa/icons"); // root CJS build
```

React is an **optional** peer: install it only if you import the root entry.
`@nexa/icons/js`, Go and Rust have no dependencies. The package ships ESM and a
CJS root build; `@nexa/icons/js` has both too. Contributors use the pinned
toolchain in [`mise.toml`](mise.toml): `mise install && mise run setup` (see
[docs/development.md](docs/development.md)).

Browse all 1,000 icons, 24 categories, 26 swap pairs and 12 illustrations in the
shell-first [gallery](gallery/index.html) (virtualized; 0 ms gallery JS before
first paint, all local files/0 network).

## Optional effects: frosted glass + gradients

Every icon also supports an optional frosted-glass surface and a gradient
stroke — import [`@nexa/icons/effects.css`](docs/effects.md) once:

```tsx
<Bell glass="frost" />                 // frosted surface
<Bell gradient="aurora" />             // gradient stroke
<Crown glass="ice" gradient="gold" />  // both
```

7 glass presets (`frost`, `ice`, `clear`, `steel`, `neon`, `jelly`, `aurora`) and 8 gradient presets
(`aurora`, `ice`, `sunset`, `emerald`, `ocean`, `candy`, `gold`, `mono`, all
retunable via `--nexa-grad-a/b`). See [docs/effects.md](docs/effects.md).

## 30-second quick starts

### HTML — one sprite, no JavaScript

Paste `sprite.svg` once into the page, then reference symbols. Sprite glyphs are
fixed at `stroke-width="2"` (the 24px Nexa weight) — for 16/20px optical weights
use the inline API, or generate symbols with a stroke width: JS
`sprite({ strokeWidth: 1.75 })`, Go `Sprite(SpriteStrokeWidth(1.75))`, Rust
`sprite_with(1.75)`.
Add the animation stylesheet only if you want motion.

```html
<!-- once per page: paste the contents of sprite.svg (or inject sprite()) -->
<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:none">
  <symbol id="nexa-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">…</symbol>
  <!-- …the other 649 symbols… -->
</svg>

<!-- anywhere after -->
<svg class="nexa-icon" aria-hidden="true" width="24" height="24"
     style="color:#3f3f46"><use href="#nexa-bell"/></svg>

<!-- optional: animation layer -->
<link rel="stylesheet" href="node_modules/@nexa/icons/dist/animations.css">
<svg class="nexa-icon" aria-hidden="true" data-nexa-anim="ring"
     data-nexa-trigger="hover"><use href="#nexa-bell"/></svg>
```

### Vanilla JS

```js
import { svg, sprite, getIcon, names } from "@nexa/icons/js";

document.querySelector("#bell").innerHTML = svg("Bell", { size: 20 });
document.body.insertAdjacentHTML("afterbegin", sprite()); // inline once
console.log(names().length); // 650
```

No dependencies; ESM (`@nexa/icons/js`) and CJS are both shipped. The runtime
payload is lean: `getIcon()`/`ICONS` omit search `keywords` (they stay in
`data/icons.json`), which keeps the whole API at ~41.3 KB brotli for all 1,000 icons.

### TypeScript / React

```tsx
import { Bell, Loader2, IconToggle, ArrowLeft, ArrowRight } from "@nexa/icons";
// or deep-import one module: import { Bell } from "@nexa/icons/react/bell";
import "@nexa/icons/animations.css"; // once, app entry

export function AlertsButton() {
  return (
    <button type="button" aria-label="Alerts">
      <Bell animate />                  {/* 24px, stroke 1.5; ring on hover */}
      <Bell size="sm" />                {/* 16px, stroke 2 */}
      <Loader2 animate />               {/* spinner, trigger="always" */}
    </button>
  );
}

export function Pager() {
  return <IconToggle from={ArrowLeft} to={ArrowRight} label="Next page" />;
}

// Shape / fill / 3D presentation (CSS only)
<Bell shape="rounded" />
<Heart filled animateFill />
<Crown threeD="tilt" />
```

Tree-shaken cost: ~1,544 B brotli for the first icon (includes the shape/fill/3D factory), ~41–49 B per extra icon.

### Go

```go
package main

import (
	"fmt"

	nexaicons "github.com/nexa-icons/nexa/go"
)

func main() {
	bell, ok := nexaicons.Get("Bell") // case-insensitive, alias and kebab aware
	if !ok {
		return
	}
	fmt.Println(bell.SVG(nexaicons.Size(20))) // 20px => stroke 1.75
	fmt.Println(nexaicons.Sprite()) // inline once, then <use href="#nexa-bell">
}
```

### Rust

```rust
use nexa_icons::{get, SvgOptions};

fn main() {
    let bell = get("Bell").expect("Bell is in the set");
    println!("{}", bell.svg(SvgOptions::new().size(20))); // 20 => stroke 1.75
    println!("{}", nexa_icons::sprite()); // inline once
}
```

## Shapes, fills and 3D (CSS-only)

React and vanilla JS take presentation props; everything below is pure CSS
(`transform`/`fill-opacity`), theme-safe, and reduced-motion aware. Go/Rust
currently expose the base stroke icon, sprite and swap APIs.

```tsx
<Bell shape="rounded" />                 {/* square rounded circle pill squircle hexagon diamond */}
<Heart filled animateFill />             {/* solid where geometry allows; others -> duotone */}
<Square variant="duotone" />             {/* outline (default) | duotone | solid */}
<Crown threeD="tilt" />                  {/* tilt | flip | extrude | orbit */}
```

```js
svg("Bell", { shape: "circle" });
svg("Heart", { filled: "soft", animateFill: true });
svg("Crown", { threeD: "extrude" });
```

| Feature | Markup | Notes |
|---|---|---|
| Shape container | `span.nexa-icon-frame.nexa-shape.nexa-shape--<shape>` | frame `round(size × 1.7)`; tint `color-mix(currentColor 14%)`; label moves to frame |
| Fill | `data-fill-state="true\|soft"` | `solid` only for closed geometry (`fillSafe`); open glyphs degrade to duotone |
| Fill animation | `data-fill-anim="true"` | `fill-opacity` transition 320ms; off under reduced motion |
| 3D | `span.nexa-3d[data-nexa-3d="<preset>"]` | `perspective: 640px`; presentation preset, **not WebGL** |

See [AGENTS.md](AGENTS.md), [docs/api.md](docs/api.md) and
[docs/animations.md](docs/animations.md).

## Categories

**1,000 icons in 24 categories**, with tree-shakeable category entry points:

```tsx
import { Bell } from "@nexa/icons/communication"; // category subpath
import { CATEGORIES } from "@nexa/icons";         // metadata array
```

```js
import { CATEGORIES, categories } from "@nexa/icons/js";

Object.keys(CATEGORIES);      // 24 ids
categories("communication");  // { id, label, description, icons }
```

| Binding | Category API |
|---|---|
| React | `@nexa/icons/<id>` imports + `CATEGORIES` metadata (array) |
| Vanilla JS | same subpaths + `CATEGORIES` map + `categories(id?)` |
| Go | `Categories()`, `ByCategory(id)` |
| Rust | `categories()`, `by_category(id)`, `category_icons(id)` |

Ids: navigation, arrows, actions, communication, media, files, data, finance,
people, security, status, time, weather, devices, design, travel, places,
education, health, food, development, commerce, editing, layout.

## Illustrations and GPUI

- **Illustrations** — 12 duotone 64×64 illustrations for empty states, feature
  cards and onboarding, in [`illustrations/`](illustrations) with
  [`manifest.json`](illustrations/manifest.json), [`preview.html`](illustrations/preview.html)
  and [usage/theming docs](illustrations/README.md). Inline them for
  `currentColor` + `--nexa-ill-*` tokens, or import raw in React
  (`@nexa/icons/illustrations/no-jobs.svg?raw`).
- **GPUI (Rust)** — `nexa-icons-gpui` renders catalog icons natively in GPUI
  windows via an in-memory asset source and sprite-atlas caching; see
  [docs/gpui.md](docs/gpui.md). GPUI 0.2.2 is pre-1.0 and pinning is required;
  the dependency tree is large (400 crates, ~47 s cold check), so the crate is
  opt-in.

## Measured sizes

Brotli quality 11 on the shipped files; method and commands in
[docs/performance.md](docs/performance.md)
- [docs/effects.md](docs/effects.md) — glass & gradient presets
- [docs/inventory.md](docs/inventory.md) — full inventory of the 1,000 icons, variants, categories and differentiators.

| Asset | Raw | Brotli |
|---|---:|---:|
| One standalone SVG (`icons/bell.svg`) | 384 B | **221 B** |
| One React icon module (`dist/icons/bell.js`) | 407 B | **258 B** |
| One-icon tree-shaken app bundle (incl. shape/fill/3D) | 3,500 B | **1,544 B** |
| Full sprite, all 1,000 icons (`sprite.svg`) | 343,455 B | **41,198 B** |
| Animation + shape/fill/3D layer (`dist/animations.css`) | 16,198 B | **3,270 B** |
| React barrel (`dist/index.js`) | 66,126 B | **11,530 B** |
| CJS root bundle (`dist/cjs/index.js`) | 68,490 B | **11,336 B** |
| Vanilla JS with all data (`js/index.mjs`) | 359,069 B | **57,507 B** |
| Gallery shell (`gallery/index.html`) | 30,402 B | **7,234 B** |
| Gallery data (`gallery/icons.data.js`) | 444,244 B | **71,291 B** |
| Gallery app (`gallery/app.js`) | 87,603 B | **18,645 B** |
| Illustrated set, 12 SVGs (`illustrations/`) | 10,634 B | — |

## Project structure

```text
data/icons.json          canonical dataset: 1,000 icons, geometry, keywords, presets
data/swaps.json          semantic swap pairs + modes (ships as @nexa/icons/data/swaps.json)
data/categories.json     24 categories + icon membership (source for category APIs)
data/report.json         dedupe report, preset groups, raw byte sizes
icons/<kebab>.svg        one standalone optimized SVG per icon
sprite.svg               all icons as <symbol id="nexa-<kebab>">
raw/requested-names.txt  original requested public names (kept for compatibility)
raw/vendor.json          vendored Lucide 1.70 snapshot (offline regeneration)
raw/catalog-names.txt    1,000 selected catalog names (input to dataset generation)
scripts/                 dataset + per-language generators and build
src/, dist/              React/TypeScript package (ESM + CJS, types, animations.css)
js/                      vanilla JS/ESM + CJS API
go/                      Go module (zero dependencies)
rust/                    Rust crate (zero dependencies)
gallery/index.html       shell-first virtualized gallery (data/app loaded once)
illustrations/           12 duotone illustrations + manifest/preview
rust/gpui/               nexa-icons-gpui crate (GPUI 0.2.2)
AGENTS.md                canonical end-user/agent guide
mise.toml                pinned Node/Go/Rust/Bun + task runner
bunfig.toml, .yarnrc.yml package-manager configs (npm/yarn/pnpm/bun supported)
docs/                    design, theming, API, animation, performance, effects, GPUI, languages
reports/                 QA report for the current release
bench/                   reproducible size/tree-shaking/runtime benchmark (results git-ignored)
skills/nexa-icons/        reusable agent skill (SKILL.md + references)
nexa-icon-styles-SKILL.md Nexa app-level icon style guide
```

## API at a glance

| Language | Entry point | One icon |
|---|---|---|
| React/TS | `@nexa/icons` | `import { Bell } from "@nexa/icons"; <Bell size="md" />` |
| Vanilla JS | `@nexa/icons/js` | `import { svg } from "@nexa/icons/js"; svg("Bell", { size: 20 })` |
| HTML | `sprite.svg` / `icons/*.svg` | `<svg class="nexa-icon"><use href="#nexa-bell"/></svg>` |
| Go | `github.com/nexa-icons/nexa/go` | `icon, _ := nexaicons.Get("Bell"); icon.SVG(nexaicons.Size(20))` |
| Rust | `nexa-icons` | `get("Bell").unwrap().svg(SvgOptions::new().size(20))` |

Swap/morph is available in every binding (pairs live in `data/swaps.json`:
26 semantic pairs → 49 directed edges, CSS transitions only):

| Language | Click-to-swap API |
|---|---|
| React | `<IconToggle from={ArrowLeft} to={ArrowRight} label="Next page" />` (`aria-pressed` button) or `<IconSwap from={ArrowLeft} to={ArrowRight} active={open} />` |
| Vanilla JS | `swapSvg("ArrowLeft", "ArrowRight", { active: false, label: "Direction" })` |
| Go | `nexaicons.SwapSVG("ArrowLeft", "ArrowRight", nexaicons.SwapLabel("Direction"))` |
| Rust | `nexa_icons::swap_svg("ArrowLeft", "ArrowRight", SwapOptions::new().label("Direction"))` |

### Shape / fill / 3D options

| Option | Values | Applies |
|---|---|---|
| `shape` | `square`, `rounded`, `circle`, `pill`, `squircle`, `hexagon`, `diamond`, `none` | React, JS |
| `variant` | `outline`, `duotone`, `solid` | React, JS |
| `filled` | `false`, `true`, `"soft"` | React, JS |
| `animateFill` | `boolean` | React, JS |
| `threeD` | `tilt`, `flip`, `extrude`, `orbit`, `false` | React, JS |
| category import | `@nexa/icons/<category>` | React, JS (24 categories) |

Deep import one React icon without the barrel:

```tsx
import { Bell } from "@nexa/icons/react/bell"; // -> dist/icons/bell.js
```

Full props, options and types: [docs/api.md](docs/api.md) ·
[api cheatsheet](skills/nexa-icons/references/api-cheatsheet.md).

## Theming

Icons paint with `currentColor`: no color props, no per-theme files. Nexa light
canvas `#fafafa`, dark canvas `#0c0c0e`, **3:1 minimum contrast** for meaningful
icons. Accent is reserved for primary actions, active nav and status. Light and
dark use the same files. Details: [docs/theming.md](docs/theming.md).

## Animation

17 semantic presets, CSS `transform`/`opacity` only — no JS runtime. Every icon
carries a default preset (e.g. `Bell` → `ring`, `Loader2` → `spin`); animation is
opt-in with `animate`, hover-triggered by default (`focus`, `press`, `inview`,
`mount`, `always`, `manual` also supported), `Loader2` loops. Swap/morph
transitions pick a semantic mode from `data/swaps.json` (shipped in the package):
mirror, flip, rotate, slide or fade.

| Preset | Icons | Preset | Icons |
|---|---:|---|---:|
| `spin` | 9 | `bounce` | 5 |
| `pulse` | 34 | `float` | 4 |
| `ring` | 1 | `tilt` | 4 |
| `shake` | 10 | `heartbeat` | 1 |
| `wiggle` | 23 | `pop` | 47 |
| `flip` | 4 | 6 × `nudge-*` | 24 |

Full preset table, triggers, swap API and custom hooks:
[docs/animations.md](docs/animations.md).

## Accessibility

- Decorative icons are `aria-hidden="true"` by default in every API.
- Meaningful icons take a `label` → `role="img"` + `aria-label`.
- Icon-only controls: `aria-label` + tooltip, hit area ≥40×40px.
- `prefers-reduced-motion: reduce` disables preset motion; forced-colors mode is
  supported; icons meet 3:1 in both themes.
- Never convey status with an icon or color alone.

## Regenerate

```bash
node scripts/generate-all.mjs     # dataset → React/JS/Go/Rust (+ gallery)
node scripts/build.mjs            # dist/ (ESM + CJS + d.ts + CSS)
node gallery/build.mjs            # gallery/index.html
```

Step by step:

```bash
node scripts/generate-data.mjs    # dataset + SVGs + sprite + report (+ categories)
node scripts/generate-react.mjs   # src/
node scripts/generate-js.mjs      # js/
node scripts/generate-go.mjs      # go/
node scripts/generate-rust.mjs    # rust/
node scripts/build.mjs            # dist/
```

Add an icon: append its Lucide public name to `raw/requested-names.txt`, assign a
semantic preset in `scripts/generate-data.mjs`, regenerate, verify. Full
workflow: [docs/adding-icons.md](docs/adding-icons.md).

## License / attribution

The SVG geometry derives from **Lucide 1.70.0** (ISC). A subset of Lucide icons
derives from **Feather** (MIT, Cole Bemis); both notices are retained in
[LICENSE](LICENSE) and [NOTICE](NOTICE) and must remain in redistributions of the
geometry. Names/API surface are used for Lucide compatibility; not trademarks.
The animation layer, packages, tooling and docs are original Nexa work under ISC.

## Docs

| Doc | Contents |
|---|---|
| [AGENTS.md](AGENTS.md) | canonical end-user/agent guide (start here) |
| [docs/design.md](docs/design.md) | grid, stroke, states, containers, motion, a11y |
| [docs/theming.md](docs/theming.md) | currentColor, tokens, contrast, forced colors |
| [docs/api.md](docs/api.md) | React/JS/Go/Rust reference |
| [docs/animations.md](docs/animations.md) | 17 presets, triggers, reduced motion, custom CSS |
| [docs/performance.md](docs/performance.md) | measured sizes, tree-shaking proof, no-WASM rationale |
| [docs/gpui.md](docs/gpui.md) | Rust GPUI integration (`nexa-icons-gpui`) |
| [docs/development.md](docs/development.md) | mise tasks, package-manager matrix, regenerate |
| [docs/adding-icons.md](docs/adding-icons.md) | add/regenerate/verify |
| [docs/migration-from-lucide.md](docs/migration-from-lucide.md) | drop-in Lucide swap |
| [docs/troubleshooting.md](docs/troubleshooting.md) | common failure modes |
| [docs/languages/go.md](docs/languages/go.md) · [docs/languages/rust.md](docs/languages/rust.md) | language guides |
| [skills/nexa-icons/SKILL.md](skills/nexa-icons/SKILL.md) | agent skill for icon work |
| [illustrations/README.md](illustrations/README.md) | duotone illustration system + usage/theming |
| [nexa-icon-styles-SKILL.md](nexa-icon-styles-SKILL.md) | Nexa app style guide |
