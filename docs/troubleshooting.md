# Troubleshooting

## The icon is missing / `getIcon` returns `undefined`

- Names are case-insensitive in every API, but they must match a requested name,
  kebab, or alias. `get("alert-triangle")` is **not** an alias — the alias is
  `TriangleAlert`; the canonical kebab is `triangle-exclamation-point`.
- React's generic `<Icon name="…" />` returns `null` for unknown names instead of
  throwing. Use `getIcon(name)` when you need to check first.
- The dataset has 1,034 icons across 26 categories; `XIcon` is an alias of `X` and
  `TriangleAlert` of `AlertTriangle`. Importing either alias works.
- List everything:

  ```bash
  node -e "const d=require('./data/icons.json'); console.log(d.icons.map(i=>i.name).join('\n'))"
  ```

## Stroke looks too thick or too thin

Stroke width is derived from size on purpose: **16→2, 20→1.75, 24/32/48→1.5**
(Nexa optical rule — see [design.md](design.md) §3).

- The default size is **24px / 1.5 stroke** in React, JS, Go and Rust. If an
  icon looks thinner than a Lucide icon you replaced, that is this optical
  default — pass `strokeWidth={2}` or use `size="sm"`/`"md"`.
- Numeric sizes follow the same thresholds (`≤16 → 2`, `≤20 → 1.75`, `>20 → 1.5`).
  Pass `strokeWidth={…}` to override deliberately.
- Raw `icons/*.svg` files and sprite symbols carry `stroke-width="2"` (the 24px
  Nexa weight). For the optical weights at other sizes use the inline API, or
  generate symbols with a stroke width — JS `sprite({ strokeWidth: 1.75 })`,
  Go `Sprite(SpriteStrokeWidth(1.75))`, Rust `sprite_with(1.75)` — otherwise a
  fixed-stroke sprite looks heavy at 20px and light at 40px.
- A thick look can also be double scaling: setting both `size` and
  `style={{ width: … }}` doesn't change stroke; only `size`/`strokeWidth` do.

## Animation does not play

1. **Is `animations.css` loaded?** It is not imported automatically.
   `import "@sairamanapb/icons/animations.css";` once at the app entry, or link
   `dist/animations.css`. Without it, the `data-nexa-*` attributes do nothing.
2. **Is the icon emitting the contract?** The rendered SVG needs
   `class="nexa-icon"`, `data-nexa-anim="<preset>"`, `data-nexa-trigger="…"`. In
   React, `animate={false}` or omitting it means no animation; pass `animate` or
   `animate="pulse"`.
3. **Trigger mismatch.** `hover` plays on `:hover`/`:focus-visible`; `focus`
   plays on `:focus-visible`; `press` on `:active`; `inview` is scroll-driven;
   `manual` requires `data-nexa-active="true"` (`active` prop); `mount` plays once
   on render. Hovering a static screenshot proves nothing — test with a real
   pointer or keyboard focus.
4. **Reduced motion.** If the OS/browser has "reduce motion" (or DevTools
   emulates `prefers-reduced-motion: reduce`), every preset is disabled by
   design.
5. **App CSS overrides.** `animation: none !important` or a global
   `* { animation: none }` reset beats the preset. Scope your reset to exclude
   `[data-nexa-anim]`.
6. **SVG in an `<img>`/CSS background cannot animate internals.** Inline SVG or
   `<use>` is required.
7. **`spin` in a one-shot trigger looks static.** With `trigger="hover"`, `spin`
   rotates 360° once and returns to start — visually identical to no animation
   unless you watch the whole 720ms. Use `trigger="always"` for a spinner.
8. **`inview` does nothing in this browser.** It is CSS scroll-driven animation
   (`animation-timeline: view()`), wrapped in `@supports`; unsupported browsers
   show the static icon by design. Check for a scroll container with
   `overflow: auto` — the view timeline follows the nearest scroller.
9. **`press` only fires while held.** It is `:active`; a quick click may be too
   short to see. Use `trigger="mount"` for one-shot feedback.

## Swap / morph does not animate

- The markup must be the two-layer contract: `.nexa-swap` containing
  `.nexa-swap__a` and `.nexa-swap__b`, with `data-mode` and
  `data-nexa-active="true"` / `"false"` — and `animations.css` loaded.
- In React use `IconSwap`/`IconToggle`; in vanilla use `swapSvg()`. Hand-written
  markup missing the child spans will toggle nothing.
- Toggle the **string** `data-nexa-active="true"` (or the `active` prop); the CSS
  transitions between layers. No re-render is required in vanilla.
- `mode="auto"` resolves through the `from` icon's semantic pair; if the pair
  isn't in `data/swaps.json`, it falls back to `fade`.
- Reduced motion removes swap transitions (instant glyph change) — state stays
  correct, only motion is gone.
- For click toggles use `IconToggle` (it owns `aria-pressed`); a bare `IconSwap`
  has no pressed semantics of its own.

## Shape, fill or 3D looks wrong

- **Shape/3D wrappers change layout size.** A shaped icon renders a
  `span.nexa-icon-frame` at `round(size × 1.7)`; put it in a flex/grid cell
  instead of forcing width on the inner SVG. With `shape`/`threeD`, the
  accessible name is on the frame — pass `label`, don't rely on the SVG.
- **`solid` turns into duotone.** Only closed-geometry icons (`fillSafe` in
  `data/icons.json`) fill cleanly; solid requests on open glyphs are emitted as
  `data-fill-state="soft"` by design. Use `variant="duotone"` for emphasis on
  open glyphs.
- **Fill transition does nothing.** `animateFill` requires the state to change;
  ensure `animations.css` is loaded and reduced motion is off. Fill animation is
  a `fill-opacity` transition only — no keyframes.
- **No 3D movement.** `threeD` is a CSS presentation preset (`perspective: 640px`,
  `:hover`/`:focus-within`); it needs `animations.css`. Under reduced motion it
  intentionally becomes static. It is **not WebGL** — there is no canvas or
  per-frame JS.
- **Frame tint disappears in forced-colors.** Expected: `color-mix` tints are
  overridden; the frame keeps its currentColor border for visibility.

## Category import does not resolve

The catalog ships **1,034 icons in 26 categories**, and category entry points are
live (`@sairamanapb/icons/communication`, …). If one fails:

- Check the id list (`navigation`, `arrows`, `actions`, `communication`, `media`,
  `files`, `data`, `finance`, `people`, `security`, `status`, `time`, `weather`,
  `devices`, `design`, `travel`, `places`, `education`, `health`, `food`,
  `development`, `commerce`, `editing`, `layout`).
- Regenerate in your checkout: `node scripts/generate-all.mjs` (writes
  `dist/categories/` + package exports). Old checkouts without that directory
  must rebuild.
- Fall back to the flat API: `categories(id)` / `CATEGORIES` in JS,
  `categories()`/`by_category()` in Rust, `Categories()`/`ByCategory()` in Go.

## Illustrations

- Import raw in React/Vite (`@sairamanapb/icons/illustrations/no-jobs.svg?raw`) or inline
  the SVG; `currentColor` + `--nexa-ill-fg/soft/accent` tokens drive theming.
- If an illustration looks flat/invisible, check it is inline (not `<img>`/
  `<object>`), and that `color` is set on an ancestor.
- See [../illustrations/README.md](../illustrations/README.md) for the full system.

## GPUI adapter

- Register `NexaIconAssets` (or `NexaIconAssets::with_fallback`) as the app's
  `AssetSource`; otherwise icons have no SVG bytes.
- Pin `gpui = "0.2.2"` and keep it aligned with `nexa_icons_gpui::gpui`.
- GPUI is monochrome: shape/fill/3D/animation presets are web-only; animate the
  element with GPUI's own API.
- Builds are heavy (~400 transitive crates, ~47 s cold check) — use a dedicated
  `CARGO_TARGET_DIR`. Full guide: [gpui.md](gpui.md).

## Pre-rename markup after upgrading

The package and its tokens were renamed (package, CSS class prefix, data-attribute
prefix and sprite-id prefix). Old markup silently does nothing — classes, data
attributes and `<use href>` ids must use the new prefix. See
[migration-from-lucide.md](migration-from-lucide.md) for the complete old→new token
and import mapping.

## Sprite not rendering

The sprite is one inline SVG containing `<symbol id="nexa-<kebab>">` elements.
A `<use>` only resolves against a sprite in the **same document**.

```html
<!-- once, near the top of <body> -->
<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:none">…</svg>

<!-- anywhere after -->
<svg class="nexa-icon" aria-hidden="true"><use href="#nexa-bell"/></svg>
```

- `display:none` on the sprite is fine and recommended; symbols still resolve.
- The `href` must include the `nexa-` prefix (`#nexa-bell`, not `#bell`).
- If you load the sprite as an external file (`sprite.svg#nexa-bell`), the browser
  fetches it per document and `file://` pages may be blocked — inline it
  instead (`sprite()` from JS/Go/Rust, or paste `sprite.svg`).
- Older Safari may need `xlink:href` **and** `xmlns:xlink`; modern browsers take
  plain `href`.
- `currentColor` flows from the `<svg>`/parent color into symbols — don't set
  `fill` on `<use>` or `<symbol>`; the sprite already defines `fill="none"`.

## Package managers / install

- The package exposes `exports` (ESM + CJS + `./js` + `./animations.css` +
  `./react/*` + `./data/icons.json` + `./data/swaps.json`). Very
  old bundlers that ignore `exports` can use the legacy fields: `main`
  (`dist/cjs/index.js`), `module` (`dist/index.js`), `types`
  (`dist/index.d.ts`).
- `require("@sairamanapb/icons")` works (CJS build); `import` works (ESM). Inside
  `"type": "module"` projects use `import`; `.cjs` files use `require`.
- Yarn PnP is not enabled by default: `.yarnrc.yml` uses `nodeLinker:
  node-modules` so npm/yarn/pnpm/bun installs behave identically. If you force
  PnP, declare the `react` peer yourself.
- `bun add @sairamanapb/icons` works; `bunfig.toml` in this repo sets `peer = true` for
  contributor installs.
- Use the pinned toolchain (`mise install`) when a command fails because of a
  Node/Go/Rust version mismatch; see [development.md](development.md).

## Wrong color / invisible in dark mode

Icons have no color of their own: they paint `currentColor` and inherit `color`.

- If an icon is invisible, check the **parent's** `color` and its contrast
  against the actual background (3:1 minimum, [theming.md](theming.md)).
- Don't pass a `color` prop — there isn't one. Use `className`, `style`, or the
  inherited color.
- A `fill` rule from a global SVG reset can fill stroke icons solid. Ensure
  `svg { fill: none }` or let the component's inline attributes win.
- In forced-colors mode, tints disappear; add a border/weight change for active
  states.

## SSR / hydration (Next.js, Remix, React 19)

Icons render deterministically: no ids, no random values, no `window` access, no
measurement. Server and client HTML should match when the props match.

- **Hydration mismatch** usually means props differ between server and client —
  e.g. `size` from a media query, `label` from `navigator`, or `animate` based on
  `useEffect`. Render a stable icon server-side and add behavior after mount.
- The React package ships ESM (`dist/index.js`) **and** CJS (`dist/cjs/index.js`,
  `require` condition), plus `dist/animations.css`. In Next.js App Router import
  the CSS from a component or the root layout, and keep `"use client"` only
  where you actually use state (plain icons are server-renderable).
- `<Icon name="…" />` and `getIcon()` import the full registry and are
  client/bundle-heavy; named imports (`import { Bell } from "@sairamanapb/icons"`) are
  server-safe and tree-shake. See [performance.md](performance.md).
- If you inline `sprite()` in a server template, do it once in the layout, not
  per component — duplicate ids are invalid HTML.

## React package: import errors

- `@sairamanapb/icons` has **React as an optional peer dependency** (`>=18`). In a
  non-React app use `@sairamanapb/icons/js` instead.
- Subpath exports are declared in `package.json` (`./js`, `./animations.css`,
  `./sprite.svg`, `./icons/*`). Older bundlers that ignore `exports` need the
  file path (`@sairamanapb/icons/dist/index.js`).
- `dist/` is a build artifact (`npm run build`); if it is absent in a checkout,
  run the build before importing the package.

## Go

- Import alias is required: `import nexaicons "github.com/nexa-icons/nexa/go"`
  (the package is `nexaicons` because `go` is a reserved word).
- `nexaicons.Get("AlertTriangle")` → `Name == "AlertTriangle"`; `Get("TriangleAlert")`
  resolves to the same icon via alias.
- `Anim(...)` only adds the CSS contract; without `animations.css` in the page
  nothing moves.
- Run `cd go && go vet ./... && go test ./...` when changing the generator.

## Rust

- `get("alert-triangle")` returns `None`; use `get("TriangleAlert")` or
  `get("triangle-exclamation-point")`.
- `SvgOptions` is a value builder: `SvgOptions::new().size(20).stroke_width(1.75)`
  returns a new struct each call — chain it in one expression.
- Rendering allocates a `String`; cache hot paths.
- `cargo test` covers count, aliases, lookup, builder, escaping and no-color
  output.

## Docs / samples

Code samples in `README.md` and `docs/` are checked for real imports/ids
against the built package by the review harness and the repo test suite
(`npm test`, `node scripts/verify.mjs`). Both gates exist and pass. If a sample
fails in your checkout, re-run the generators first
(`node scripts/generate-data.mjs` then the per-language generators) so `data/`,
`icons/`, `src/`, `js/`, `go/`, `rust/` and `sprite.svg` are in sync; see
[adding-icons.md](adding-icons.md).
