# Development environment and installs

## Pinned toolchain (mise)

The repo ships a [`mise.toml`](../mise.toml) that pins the exact tool versions
used to build it, so every contributor and CI run gets the same Node, Go, Rust
and Bun:

| Tool | Pinned |
|---|---|
| Node | 26.9.0 |
| Go | 1.27.1 |
| Rust | 1.98.1 |
| Bun | 1.4.0 (optional) |

```bash
curl https://mise.run | sh                      # install mise (if missing)
echo 'eval "$(mise activate zsh)"' >> ~/.zshrc  # then restart the shell
mise install                                    # install pinned tools
mise run setup                                  # deps + generate + build everything
```

`mise.toml` tasks:

| Task | What it does |
|---|---|
| `mise run setup` | `npm ci` + regenerate every target (`scripts/generate-all.mjs`) |
| `mise run generate` | regenerate dataset → React/JS/Go/Rust (+ gallery if present) |
| `mise run build` | build `dist/` (ESM + CJS + `.d.ts` + `animations.css`) |
| `mise run gallery` / `mise run dev` | rebuild `gallery/index.html` |
| `mise run typecheck` | strict `tsc` over `src/` |
| `mise run test` | JS tests + `go vet`/`go test` + `cargo test` |
| `mise run bench` | micro-benchmarks and bundle-size report |
| `mise run verify` | independent verification (dataset, parity, sizes, a11y, docs) |
| `mise run lint` | `gofmt -l` and `cargo fmt --check` |
| `mise run release` | generate + build + gallery, then tests and verify |
| `mise run pm-check` | install/build under npm, yarn, pnpm and bun |
| `mise run clean` | remove build artefacts (keeps sources/data) |

> **All gates exist and pass:** `scripts/verify.mjs` and `bench/bench.mjs` are
> checked in, so `npm run verify`, `npm run bench`, `mise run verify/bench/release`
> work today (QA suite 77/77, Go 14/14, Rust + clippy clean, verification OK).
> If mise has not installed the pinned toolchains yet, use
> `MISE_DISABLE_TOOLS=1 mise run verify` to run with system tools.

Without mise, use the same commands directly (`node scripts/generate-all.mjs`,
`npm run build`, `node gallery/build.mjs`, `npm test`, `cd go && go test ./...`,
`cd rust && cargo test`).

## Package managers

The repo is installable with **npm, Yarn (Classic and Berry) and bun**, all
verified from the real tarball; pnpm uses the same `exports` map and is
supported/optional but not part of the cross-manager gate.

- `.yarnrc.yml` is a **Yarn Berry** file (`nodeLinker: node-modules`, no PnP
  requirement). Yarn **Classic 1.22** ignores it and uses `node_modules` by
  default — both are tested.
- `bunfig.toml` keeps peer resolution predictable for `bun install`.
- The package ships ESM, a CJS root build and `exports` for modern resolvers.

Install as a dependency (pick your manager):

| Manager | Command |
|---|---|
| npm | `npm install @nexa/icons` |
| Yarn | `yarn add @nexa/icons` |
| pnpm | `pnpm add @nexa/icons` |
| bun | `bun add @nexa/icons` |

Contribute to this repo:

| Manager | Install | Build + tests |
|---|---|---|
| npm | `npm ci` | `npm run build && npm test` |
| Yarn Classic/Berry | `yarn install` | `yarn build && yarn test` |
| pnpm (optional) | `pnpm install` | `pnpm build && pnpm test` |
| bun | `bun install` | `bun run build && bun test` |

`npm run verify` / `mise run verify` is the release gate (`scripts/verify.mjs`);
`npm run bench` / `mise run bench` regenerates `bench/results.json` (sizes,
tree-shaking, runtime, gallery load). Both are checked in and pass.

Cross-manager gate: `bash scripts/package-managers.sh` (or `mise run pm-check`)
installs and builds under each available manager, then checks both module
systems:

ESM consumers:

```js
import { Bell, IconSwap } from "@nexa/icons";
```

CJS consumers:

```js
const { Bell, IconSwap } = require("@nexa/icons"); // dist/cjs/index.js
```

`npm run build` is the canonical build for all managers; no manager-specific
plugin is required.

## Regenerate everything

```bash
node scripts/generate-all.mjs          # data → React/JS/Go/Rust (+ gallery)
node scripts/generate-all.mjs --skip-build
```

Individual steps (see [adding-icons.md](adding-icons.md)):

```bash
node scripts/generate-data.mjs   # data/icons.json, icons/*.svg, sprite.svg, report
node scripts/generate-react.mjs  # src/, swap map
node scripts/generate-js.mjs     # js/index.mjs, js/index.cjs, js/index.d.ts
node scripts/generate-go.mjs     # go/
node scripts/generate-rust.mjs   # rust/
node scripts/build.mjs           # dist/ (ESM + CJS + d.ts + CSS)
node gallery/build.mjs           # gallery/index.html (single file)
```

Never hand-edit generated files (`data/`, `icons/`, `sprite.svg`, `src/icons/`,
`js/`, `go/`, `rust/`, `dist/`, `gallery/index.html`).

## Tests and checks

```bash
npm test                                  # JS test suite
npm run typecheck                         # strict TypeScript
(cd go && go vet ./... && go test ./...)  # Go module
(cd rust && cargo test)                   # Rust crate
bash scripts/package-managers.sh          # npm/yarn/pnpm/bun parity
```

The release gate is `mise run release` (generate, build, gallery, tests,
verification). Size budgets are enforced by the build/verify steps; measured
numbers live in [performance.md](performance.md).

## Catalog expansion and extra artefacts

The catalog is **650 icons in 24 categories** (`data/categories.json`). Full
regeneration workflow:

1. `data/categories.json` (authored) → `node scripts/generate-data.mjs` writes
   `meta.categories` + per-icon category memberships.
2. `node scripts/generate-all.mjs` regenerates all bindings, category entry
   points, sprite, dist and gallery.
3. Re-run `node scripts/verify.mjs` and `node bench/bench.mjs`; refresh the
   measured numbers in README/`docs/performance.md`/AGENTS.md (counts, sprite,
   bundles, gallery).

Two extra artefacts ship alongside the icon packages:

| Artefact | Status | Docs |
|---|---|---|
| `illustrations/` (12 duotone illustrations + manifest/preview/tools) | shipped | [illustrations/README.md](../illustrations/README.md) |
| `bench/` (reproducible benchmarks) | not shipped | `bench/README.md` |
| `reports/` (release QA summary) | not shipped | `reports/qa-report.md` |
| `rust/gpui/` (`nexa-icons-gpui`, GPUI 0.2.2) | shipped/verified | [gpui.md](gpui.md) |

`mise run verify` covers dataset/SVG parity, sizes, a11y and docs for the icon
packages; the GPUI crate has its own `cargo check/test/clippy` gate (400
transitive crates — run it with a dedicated `CARGO_TARGET_DIR`).


## Cross-browser checks

`python3 gallery/verify-browser.py` runs 97 deep checks in Chromium.
`python3 gallery/verify-cross-browser.py` runs the core boot/a11y/effects checks
in **Chromium and WebKit** (on this machine Firefox's Playwright launcher times
out at startup even though the binary runs; the runner skips unavailable
launchers and reports them). Run both before a release:

```bash
python3 gallery/verify-browser.py
python3 gallery/verify-cross-browser.py --browsers chromium,webkit
```
