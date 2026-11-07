# Nexa Icons — QA report

**Release:** v1.1.0 + Nexa 2.0 alpha prototype · **Date:** 2026-11-07 · **Scope:** `@sairamanapb/icons` 1,034-icon
catalog across React/TypeScript, vanilla JS, HTML, Go, Rust and the Rust GPUI
adapter.

## Gates (all green)

| Gate | Command | Result |
|---|---|---|
| Unit/integration suite | `npm test` | **104/104 pass** |
| Release verification | `node scripts/verify.mjs` | **OK** — all size/asset budgets |
| Gallery browser checks | `python3 gallery/verify-browser.py` | **106/106 pass** (Chromium) |
| Cross-browser checks | `python3 gallery/verify-cross-browser.py` | **26/26 pass** (Chromium + WebKit; Firefox launcher unavailable in this environment) |
| Go module | `cd go && go test ./...` | pass (1,034 icons) |
| Rust crate | `cd rust && cargo test` | 17 pass |
| GPUI adapter | `cd rust/gpui && cargo test` | 7 pass + clippy clean |
| Docs/link checks | `npm test` (docs tests) | pass — 0 broken links |
| Nexa 2.0 structural QA | `npm run design:qa` | pass — 20 icons × 3 variants |
| Nexa 2.0 visual bbox snapshots | `npm run design:snapshots` | pass — 60 SVG snapshots, bbox OK |

## What is covered

- Dataset integrity: 1,034 unique glyphs, 26 categories, aliases, keywords,
  17 semantic presets, fill-safety flags, geometry in the 24 grid, no hard-coded
  colours.
- Every binding renders the same contract (structural/alias/category parity).
- Assets: one SVG per icon, 1,034-symbol sprite, per-icon ESM/CJS modules,
  `.d.ts`, category barrels and `effects.css`.
- Accessibility: decorative defaults, labelled icons, icon-only buttons,
  reduced-motion and forced-colors rules, gallery keyboard/focus behaviour.
- Presentation: shapes, fill/duotone/solid + fill animation, CSS-3D presets,
  glass presets/body/motion/trigger, gradient presets/hue animation, swaps.
- Performance: one-icon tree-shaken bundle, 8/50-icon bundles, sprite, CSS,
  gallery shell/data/app sizes and runtime HUD numbers are measured, not
  promised.

## Known limitations (honest)

- Glass is a CSS/SVG surface + stroke treatment, not hand-drawn filled artwork;
  `glassBody` gives a filled jelly-style body from the same geometry.
- Gradient colour animation is opt-in `hue` rotation (paint work), not stop
  morphing.
- CSS-3D presets are not a WebGL renderer.
- Firefox Playwright launch is blocked on the current machine (binary works);
  WebKit + Chromium are covered.
- pnpm is documented but not installed in this environment; npm, Yarn Classic
  and Bun are exercised.

## Reproduce

```bash
npm test
node scripts/verify.mjs
python3 gallery/verify-browser.py
python3 gallery/verify-cross-browser.py --browsers chromium,webkit
cd go && go test ./...
cd rust && cargo test
```
