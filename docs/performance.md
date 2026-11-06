# Performance

Every number below was **measured in this repo**, not estimated: sizes with
Node's `zlib` (brotli quality 11, gzip level 9), runtime with
`node bench/bench.mjs` (`bench/results.json`). Re-run both commands to reproduce.

**1,034-icon catalog baseline** (26 categories, 12 illustrations, shape/fill/3D +
swap layers). Numbers move when the catalog/features change; treat the table as
the current snapshot.

## Measured payload sizes

| Asset | Raw | Gzip 9 | Brotli 11 |
|---|---:|---:|---:|
| One standalone SVG (`icons/bell.svg`) | 384 B | 264 B | **221 B** |
| One React icon module (`dist/icons/bell.js`) | 407 B | 295 B | **258 B** |
| One-icon tree-shaken bundle (React external, incl. shape/fill/3D) | 3,500 B | 1,691 B | **1,544 B** |
| Eight-icon tree-shaken bundle | 5,191 B | 2,247 B | **2,036 B** |
| Fifty-icon tree-shaken bundle | 13,304 B | 3,799 B | **3,347 B** |
| Full sprite, all 1,034 icons (`sprite.svg`) | 357,126 B | 52,152 B | **44,154 B** |
| Animation + shape/fill/3D layer (`dist/animations.css`) | 16,198 B | 3,903 B | **3,270 B** |
| React barrel (`dist/index.js`, re-exports only) | 68,230 B | 13,951 B | **11,953 B** |
| CJS root entry (`dist/cjs/index.js`) | 68,490 B | 13,399 B | **11,336 B** |
| Vanilla JS ESM, lean runtime (`js/index.mjs`) | 372,496 B | 77,284 B | **60,896 B** |
| JS type declarations (`js/index.d.ts`) | 5,706 B | 2,185 B | **1,846 B** |
| Canonical dataset (`data/icons.json`) | 511,657 B | 92,167 B | **67,563 B** |
| Category manifest (`data/categories.json`) | 51,666 B | 9,031 B | **7,540 B** |
| Swap pairs dataset (`data/swaps.json`) | 2,047 B | 591 B | **518 B** |
| Illustrated set, 12 SVGs (`illustrations/*.svg`) | 10,634 B | — | — |
| Gallery shell (`gallery/index.html`) | 30,402 B | 8,407 B | **7,234 B** |
| Gallery data (`gallery/icons.data.js`) | 457,027 B | 94,711 B | **74,806 B** |
| Gallery app (`gallery/app.js`) | 87,603 B | 21,032 B | **18,645 B** |

Reference combinations:

| Goal | Payload |
|---|---|
| One icon in React, tree-shaken | **1,544 B brotli** |
| One icon + animations | 1,544 B + 3,270 B ≈ **4.0 KB brotli** |
| Every icon in the app, one sprite request | **44,154 B brotli** |
| Every icon + animation/shape/fill/3D layer | ≈ **32.5 KB brotli** |
| Whole gallery (650 cards + data + app) | **≈ 74.9 KB brotli** (shell 6,957 + data 74,806 + app 18,645) |

The sprite is the cheapest way to make the whole set available: one cached
request for all 1,034 icons. Named React imports are the cheapest way to ship a few
icons: one module per icon, ~1,544 B brotli for the first (includes the shared
shape/fill/3D factory), ~40–49 B per extra icon.

**Lean JS runtime.** `js/index.mjs` does not ship search `keywords`; icon records
are `{name, aliases, preset, trigger, inner}` plus `kebab` from `getIcon()`.
Keywords stay in `data/icons.json`. The 1,034-icon API is **372,496 B raw /
60,896 B brotli** with all category metadata included.

**CJS mirror.** `dist/cjs/` mirrors every ESM module for `require()` consumers;
the CJS tree is larger because CommonJS cannot share modules. This is **package
weight only**: browsers/bundlers resolve the ESM build and never download
`dist/cjs`; Node loads only the modules a `require()` chain touches.

**ESM tree.** `dist/index.js` (barrel) is 68,230 B raw / 11,953 B brotli;
the tree-shakeable icon modules are 650 separate ESM files (`dist/icons/*.js`)
that bundlers select from. The published ESM tree is ~688 KB raw (~672 KiB) —
package weight, not per-page weight.

## Shape, fill and 3D cost

These presentation features are CSS/markup only — there is no runtime engine:

| Feature | Extra payload / runtime |
|---|---|
| `shape` | one wrapper `<span>` + inline width/height; tint is CSS `color-mix` — no image, no second SVG |
| `variant`/`filled` | two SVG attributes + `fill-opacity` CSS; solid request on open geometry degrades to duotone |
| `animateFill` | one attribute + a 320ms `fill-opacity` transition (compositor-friendly) |
| `threeD` | one wrapper + `data-nexa-3d`; transform/`drop-shadow` CSS only — **not WebGL**, no canvas, no JS loop |

The whole layer costs about **3.1 KB brotli** (`dist/animations.css`), and the
shared factory accounts for the one-icon bundle growing from ~694 B to ~953 B;
per-icon cost after the first stays ~40–49 B. Reduced motion disables every
preset/fill/swap/3D transition.

## Playground gallery (shell-first)

The gallery is **shell-first**: `index.html` is a small shell, and the catalog
payload (`icons.data.js`) + app (`app.js`) load after the first painted frame,
then the grid is virtualized. Current measured build:

| Part | Raw | Gzip | Brotli |
|---|---:|---:|---:|
| Shell `index.html` | 30,402 B | 8,407 B | **7,234 B** |
| Data `icons.data.js` | 457,027 B | 94,711 B | **74,806 B** |
| App `app.js` | 87,603 B | 21,032 B | **18,645 B** |

All local files, **0 third-party requests (2 local deferred scripts)**. QA: 97/97 Playwright checks pass —
shell < 40 KB, virtualized window ≈136 cards / 976 DOM nodes (bounded < 1.2k),
650 searchable icons, 24-category filter, lazy shapes/fill/3D/illustration
sections, drawer/copy/keyboard/deep links, 320/390/768/1440 no overflow,
reduced-motion + forced-colors.

Honest performance (median of 3 warm loads, 1440×1000 headless Chromium):

| Measurement | Result |
|---|---|
| Gallery JS before first paint | **0 ms** — the shell only registers a `PerformanceObserver`; data/app load after the first painted frame |
| Script load + eval | 4.2 ms |
| JS → first row | ~49 ms (includes load event + rAF scheduling) |
| Window render (virtualized) | 1.5 ms |
| FP / FCP | ~44 ms (browser floor) |

A sub-millisecond **first paint** is not physically measurable in a browser, so
we do not claim it: the defensible statement is **0 ms of gallery JS before
first paint**, with ~44 ms FP/FCP and 1.5 ms per virtualized window render.
`gallery/build-report.json` carries the per-build numbers; `bench/bench.mjs`
records Playwright load timings when available.

## Sprite stroke contract (important)

Sprite symbols are **fixed at `stroke-width="2"`** by default — the Nexa weight
for 24px — because a `<symbol>` is a definition, not a sized render. Do not put a
20px sprite icon on the page and expect the 1.75 optical weight: it will look
heavy.

| Need | Use |
|---|---|
| Any size with the optical stroke rule | inline API: React components, JS `svg()`, Go `Icon.SVG`, Rust `Icon::svg` |
| Sprite at a non-24px weight | generate symbols with a stroke width: JS `sprite({ strokeWidth: 1.75 })` / `symbol(name, { strokeWidth })`; Go `Sprite(SpriteStrokeWidth(1.75))` / `Symbol(name, SymbolStrokeWidth(2))`; Rust `sprite_with(1.75)` / `Icon::symbol_with(2.0)` |
| One static 24px icon with no theming | `icons/<kebab>.svg` (fixed stroke 2) |

## Why it is fast

1. **Static data, no runtime cost.** Every icon is an immutable `{tag, attrs}`
   node tree embedded at build time. Rendering is `createElement` over static
   nodes (React) or string concatenation (JS/Go/Rust). There is no fetch, no JSON
   parse on the client, no icon lookup table download, no font.
2. **Per-icon modules, tree-shakeable.** `src/icons/<kebab>.tsx` are pure modules
   with `/*#__PURE__*/ createIcon(...)` annotations, pure ESM, and
   `sideEffects: ["*.css"]`. Importing `Bell` drops the other 649 components, and
   `@nexa/icons/react/bell` gives a deep import straight to
   `dist/icons/bell.js`. Category subpaths (`@nexa/icons/communication`) are
   equally tree-shakeable.
3. **Sprite = one request.** `sprite()` returns a cached string; inline it once
   and every `<use href="#nexa-…">` is a document-local reference.
4. **CSS-only animation, fill, swap and 3D.** Presets animate transform/opacity;
   fill transitions fill-opacity; swap stacks two layers; 3D is transform +
   drop-shadow. presets/swap/shape animate transform/opacity; fill transitions fill-opacity; 3D extrude animates filter (paint), trigger no layout, and require no JS
   runtime, no `requestAnimationFrame`, no `IntersectionObserver`, no WebGL.
   `inview` uses CSS scroll-driven animation and degrades to static.
5. **Zero runtime dependencies beyond the optional React peer.** Plain JS, Go,
   Rust and the GPUI adapter carry no web runtime at all.
6. **Small geometry.** 1,034 icons average 393 B of SVG markup (max 896 B,
   `brain-cog`); total 409,421 B raw as individual files; sprite 357,126 B raw.
7. **Illustrations are small and static.** 12 duotone illustrations total
   ~10.6 KB raw (~1.1 KB each), inline-friendly, no external assets.

## Why no WASM or assembly renderer

Static SVG needs **zero runtime compute**: rendering an icon means copying
precomputed nodes/strings — no parsing, geometry math or layout. The repo's
measured WASM prototype loses: all-166 wasm was ~6.7 KB brotli with no
tree-shaking (≈ the sprite, but 12 tree-shaken icons are ~1.6 KB), 0.16–0.30
µs/call vs 0.026 µs for a precomputed JS string, plus async fetch/compile before
first paint and a second maintenance surface. The catalog is larger now, but the
trade-off is unchanged — the real win is build-time precomputation (immutable
node tables, prebuilt sprite, prerendered HTML, CSS-only motion), which this
package already does.

The GPUI adapter follows the same principle: it generates SVG bytes in memory
and lets GPUI's rasterizer/sprite atlas do the painting — no image files, no
network, no per-frame path math. Its build cost is the cost of GPUI itself
(≈400 transitive crates, ~47 s cold check, ~796 MB target); see
[gpui.md](gpui.md).

## Fair comparison: Nexa vs Lucide

The only meaningful comparison uses the **same bundler, same settings, same
icon names, same compression**. `node bench/compare-lucide.mjs` does exactly
that (ESM, minified, React external, brotli q11 / gzip 9). Measured on this repo:

| Icons imported | Nexa brotli | Lucide brotli | Nexa gzip | Lucide gzip |
|---:|---:|---:|---:|---:|
| 1 | **1,512 B** | 1,571 B | **1,656 B** | 1,756 B |
| 2 | **1,599 B** | 1,685 B | **1,745 B** | 1,874 B |
| 5 | **1,790 B** | 1,913 B | **1,942 B** | 2,130 B |
| 10 | **1,957 B** | 2,138 B | **2,121 B** | 2,392 B |
| 13 (authenticated page: 2 layout + 11 nav) | **2,091 B** | 2,332 B | **2,296 B** | 2,600 B |
| 20 | **2,488 B** | 2,810 B | **2,752 B** | 3,177 B |
| 30 | **3,048 B** | 3,566 B | **3,425 B** | 4,119 B |
| 168 (original catalog) | **9,606 B** (11,329 gzip) | 12,147 B (14,575 gzip) | | |

- Marginal cost per extra icon is **~33–87 B brotli** for Nexa vs **~45–114 B**
  for Lucide in the same setup — both are rounding errors on a real page.
- The 168-name catalog is **~22% lighter with Nexa** on gzip.
- A “392 B gzip per Lucide icon” figure is the *icon module alone / incremental
  icon*, not the first-icon bundle. The like-for-like first-icon bundle includes
  the shared factory on both sides: **~1.5 KB brotli either way** (Nexa 1,512 B,
  Lucide 1,571 B). Comparing that bundle to Lucide’s per-icon module compares a
  whole chunk to one leaf module.
- Nexa’s first-icon factory still includes shape/fill/3D/glass/gradient props;
  the optional `animations.css` / `effects.css` layers are separate and not paid
  by apps that do not import them.

Reproduce (Lucide pinned to the reference version):

```bash
npm i -D lucide-react@1.70.0
node bench/compare-lucide.mjs
```

## Measured runtime (`node bench/bench.mjs`)

Machine-dependent; sizes above are deterministic. Node 26.9.0, darwin-arm64,
8 CPUs, warmed loops:

| Operation | Result |
|---|---|
| `svg("Bell")` | ~0.67 µs/op (~1.5M ops/s) |
| `svg("Bell", { size, animate, label })` | ~0.85 µs/op |
| `svg()` over all 1,034 icons | ~0.60 µs/icon |
| `symbol("bell")` | ~0.07 µs/op |
| cached `sprite()` | ~0.05 µs/op |
| SSR `<Bell/>` (`renderToStaticMarkup`) | ~19.2 µs/op |
| Cold ESM import `js/index.mjs` | ~4.3 ms median (5 fresh processes, 1,034 icons) |
| Gallery `file://` load (Playwright Chromium) | ~10.3 ms wall, FCP ~16 ms, virtualized 1,034-icon grid |

The whole dataset renders from static strings/nodes; there is no parse or lookup
cost per icon after import.

## Sprite vs inline vs per-icon

| Approach | Cost | Best for |
|---|---|---|
| `<use href="#nexa-bell">` + inline sprite | one 29.4 KB brotli request for all 1,034 icons (fixed stroke 2) | app shells, galleries, SSR pages |
| Named React import / deep import / category import | ~1,544 B brotli for the first icon, ~41–49 B/extra | React apps with a few icons |
| Per-icon `icons/*.svg` file | ~221 B brotli per icon, one request each | static sites, `<img>`, email, docs |
| `svg()` from `@nexa/icons/js` | 41.3 KB brotli ESM includes all icon + category data; zero fetch | no-build pages, Node scripts, server render |

## Tree-shaking proof

Bundle a named import with esbuild, minified ESM, React marked external
(`node bench/bench.mjs` does exactly this):

```bash
# one icon
printf 'import { Bell } from "@nexa/icons";\nconsole.log(Bell);\n' \
  | ./node_modules/.bin/esbuild --bundle --minify --format=esm --platform=neutral \
      --external:react --outfile=/tmp/one.js --log-level=error
# => 3,500 B raw / 1,544 B brotli (React itself not included)

# eight icons
printf 'import { Bell, Loader2, Briefcase, Search, Sparkles, Bookmark, Send, Mail } from "@nexa/icons";\nconsole.log(Bell, Loader2, Briefcase, Search, Sparkles, Bookmark, Send, Mail);\n' \
  | ./node_modules/.bin/esbuild --bundle --minify --format=esm --platform=neutral \
      --external:react --outfile=/tmp/many.js --log-level=error
# => 4,8 raw / 2,036 B brotli (8 icons)
```

The one-icon bundle contains one icon component plus the shared factory; the
eight-icon bundle adds ~40 B brotli per extra icon (50-icon bundle: ~49 B/icon).
Icons you never import are not in the bundle. (The generic `<Icon name>`/`getIcon`
path imports the whole registry by design — see [api.md](api.md).)

## Measuring it yourself

```js
const fs = require("node:fs"), zlib = require("node:zlib");
const br = (b) => zlib.brotliCompressSync(b, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 } }).length;
const gz = (b) => zlib.gzipSync(b, { level: 9 }).length;
for (const f of ["icons/bell.svg", "sprite.svg", "dist/icons/bell.js",
                 "dist/animations.css", "js/index.mjs", "data/icons.json",
                 "gallery/index.html", "gallery/icons.data.js", "gallery/app.js"]) {
  const b = fs.readFileSync(f);
  console.log(f, b.length, "br", br(b), "gz", gz(b));
}
```

```bash
node bench/bench.mjs     # sizes + tree-shaking + runtime + gallery load
node scripts/verify.mjs  # release verification (dataset, parity, sizes, a11y, docs)
```

## Budgets

| Asset | Budget | Actual |
|---|---|---|
| Individual SVG | ≤ 1.0 KB raw | max 896 B (`brain-cog.svg`) |
| Sprite | < 260 KB raw | 357,126 B |
| One-icon React bundle | < 1.5 KB brotli | 953 B |
| Animation + shape/fill/3D/swap CSS | ≤ 18 KB raw / ≤ 4 KB brotli | 16,198 B / 3,270 B |
| Gallery shell | 0 ms gallery JS before first paint (observer only); shell < 40 KB | 30,402 B shell (build-report budget 40,960 B) |
| `js/index.mjs` | < 60 KB gzip | 77,284 B gzip for 1,034 icons |

The dataset is regenerated deterministically; these sizes are stable unless
icons, categories, swap pairs or the presentation layer change. The gallery is
the largest artefact set because it contains all 1,034 icons plus the virtualized
viewer; it is split into shell/data/app for first-paint speed.
