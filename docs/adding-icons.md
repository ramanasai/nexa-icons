# Adding and regenerating icons

Everything in this repo derives from one source: `raw/requested-names.txt` plus
the vendored Lucide snapshot in `raw/vendor.json`. Never edit generated files by
hand (`data/icons.json`, `icons/*.svg`, `sprite.svg`, and the language packages
will be overwritten).

## Pipeline

```text
raw/requested-names.txt     650 public names the app asked for
        +
raw/vendor.json             vendored Lucide 1.70 snapshot (name → kebab → nodes → tags)
        │
        ▼
scripts/generate-data.mjs   ──► data/icons.json   canonical dataset (icons + categories)
                            ──► icons/<kebab>.svg  one standalone SVG per icon
                            ──► sprite.svg         <symbol id="nexa-<kebab>">
                            ──► data/report.json   dedupe + presets + raw sizes
        │
        │   data/swaps.json  (hand-maintained semantic swap pairs)
        │   data/categories.json (catalog categories, when authored)
        ▼
scripts/generate-react.mjs  ──► src/               React/TS components, registry, swap map
scripts/generate-js.mjs     ──► js/                vanilla ESM/CJS API + types + swap renderer
scripts/generate-go.mjs     ──► go/                Go module
scripts/generate-rust.mjs   ──► rust/              Rust crate
scripts/build.mjs           ──► dist/              ESM + CJS + .d.ts + animations.css
gallery/build.mjs           ──► gallery/           shell + data + app (virtualized viewer)
        │
        ▼
verify (see below)
```

`generate-react.mjs` writes `src/` only — the published `dist/` is produced by
`scripts/build.mjs`. Use `node scripts/generate-all.mjs` to run the whole chain
(it calls the generators, then the build and gallery when available).

## Add an icon

1. **Find the Lucide 1.70 public name.** Icons are requested by the name your
   app imports (`Bell`, `Loader2`, `ImageIcon`). If the name is new, append it to
   `raw/requested-names.txt`.
2. **Make sure the snapshot has it.** If `raw/vendor.json` already contains the
   name in `names`, nothing else is needed. If not, regenerate the vendor
   snapshot from the Lucide packages (paths in `scripts/source-config.mjs`) by
   deleting `raw/vendor.json` and running the data generator once with the
   Lucide source available:

   ```bash
   node scripts/generate-data.mjs   # writes raw/vendor.json on first run
   ```

   The generator fails loudly with `Unresolved requested names: …` rather than
   silently shipping an empty icon.
3. **Dedupe is automatic.** Exact glyph duplicates are merged and the duplicate
   names become aliases on the kept icon (`XIcon` → `X`, `TriangleAlert` →
   `AlertTriangle`). You do not edit the alias list manually.
4. **Assign an animation preset** in `scripts/generate-data.mjs`:
   - directional icons → `NUDGE.down` / `.left` / `.up` / `.up-right` …
   - semantic groups → `PRESET_GROUPS.spin` / `.ring` / `.shake` / …
   - no match → the generator warns and defaults to `pop`.
5. **Regenerate the dataset and SVGs:**

   ```bash
   node scripts/generate-data.mjs
   ```

6. **Regenerate every consumer package** (all read the same dataset):

   ```bash
   node scripts/generate-all.mjs
   ```

   Or step by step:

   ```bash
   node scripts/generate-react.mjs
   node scripts/generate-js.mjs
   node scripts/generate-go.mjs
   node scripts/generate-rust.mjs
   ```

7. **Rebuild the gallery** (self-contained single file):

   ```bash
   node gallery/build.mjs
   ```

8. **Run the verification suite** (below) and commit the regenerated files
   together — generated output and source in the same commit.

## Add a category

Categories are authored in `data/categories.json` and mapped onto icons by the
data generator when the file exists:

```json
{
  "categories": [
    { "id": "communication", "label": "Communication", "description": "…", "icons": ["Bell", "Mail"] }
  ]
}
```

- The generator writes `meta.categories` + per-icon membership into
  `data/icons.json`, and generates category entry points
  (`dist/categories/<id>.js`), `CATEGORIES` metadata (React array, JS record),
  and Go/Rust category tables.
- Every icon named in a category must exist in the dataset; unknown names are
  reported during generation.
- Regenerate with `node scripts/generate-all.mjs`; category imports work across
  React/JS (`@sairamanapb/icons/<id>`), Go (`Categories`/`ByCategory`) and Rust
  (`categories`/`by_category`/`category_icons`).

## Illustrations and GPUI

These are separate artefacts, not generated from the icon pipeline:

- `illustrations/` — 12 authored duotone SVGs + `manifest.json` + `preview.html`
  + `tools/`; see [../illustrations/README.md](../illustrations/README.md).
- `rust/gpui/` — `nexa-icons-gpui`, a separate crate over `nexa-icons`
  (GPUI 0.2.2). Develop/verify with
  `CARGO_TARGET_DIR=/tmp/nexa-gpui-target cargo test` inside `rust/gpui/`;
  see [gpui.md](gpui.md).

## Add a swap pair

Swap/morph pairs are hand-maintained in `data/swaps.json` (not generated):

```json
{
  "version": 1,
  "pairs": [["ArrowLeft", "ArrowRight", "mirror"]]
}
```

- Each entry is `[from, to, mode]`; the reverse pair is added automatically
  unless you define an explicit reverse.
- `mode` is one of `mirror`, `flip`, `rotate`, `slide`, `fade`.
- Both icons must exist in `data/icons.json` — the React/JS generators fail with
  `swaps.json: unknown icon "…"` otherwise.
- Regenerate (`node scripts/generate-all.mjs`) so `src/swaps.ts`, the JS API and
  the gallery pick it up.
- `data/swaps.json` ships in the package and is exported as
  `@sairamanapb/icons/data/swaps.json` for tooling that needs the pair table.

## Remove an icon

Delete its line from `raw/requested-names.txt`, then rerun steps 5–8. Removing a
name that is an alias owner leaves the duplicate as the new primary; check
`data/report.json` → `duplicates` after regeneration.

## Regenerate from scratch (offline)

`raw/vendor.json` is committed precisely so regeneration does not need network
access or the Lucide monorepo. As long as `raw/vendor.json` exists, every
generator runs offline from `data/icons.json`.

If you do need to re-vendor from upstream, restore the paths in
`scripts/source-config.mjs` (`/tmp/lucide-src/...` in this environment) and run
`node scripts/generate-data.mjs`; only then is network/upstream state required.

## Verify

```bash
# dataset shape: must print 650 / 650 / 0
node -e "const d=require('./data/icons.json'); console.log(d.icons.length, d.meta.requested, d.meta.duplicates)"

# every icon has a kebab file and no empty geometry
node -e "const fs=require('fs'),d=require('./data/icons.json'); const miss=d.icons.filter(i=>!i.inner||!fs.existsSync('icons/'+i.kebab+'.svg')); console.log(miss.length?'MISSING '+miss.map(i=>i.name):'icons OK')"

# sprite is well-formed XML and has 650 symbols
xmllint --noout sprite.svg && grep -o '<symbol ' sprite.svg | wc -l

# no hard-coded colors anywhere in generated SVGs
! grep -rEi '#[0-9a-f]{3,8}|rgb\(|hsl\(' icons sprite.svg

# language packages
(cd go && go vet ./... && go test ./...)
(cd rust && cargo test)

# one-shot full regeneration + verification
node scripts/generate-all.mjs
npm test && npm run typecheck
node scripts/verify.mjs
node bench/bench.mjs
bash scripts/package-managers.sh
```

Then run the package-level checks in [troubleshooting.md](troubleshooting.md)
and your app's visual regression pass for both themes.

## Rules

- **Do not** edit `icons/`, `sprite.svg`, or `data/` by hand.
- **Do not** add an icon that already exists under a different name — request
  the name, let dedupe create the alias.
- **Keep the public name.** The app imports Lucide-style names; the `kebab` may
  differ from the name (`Loader2` → `loader-circle`), and that is fine.
- **Keep the geometry.** Icons are 24×24 / 2px padding / stroke-only /
  `currentColor`; the generator enforces root attributes, so edit `raw/vendor.json`
  only if you truly need custom geometry, and document why.


## Non-Lucide icons (`raw/custom-icons.json`)

Icons that do not exist in the vendored Lucide snapshot (brand marks, identity
documents, invoice, crest) are authored in `raw/custom-icons.json` and merged by
`scripts/generate-data.mjs` after the Lucide set. Each entry is:

```json
{
  "name": "Passport",
  "kebab": "passport",
  "categories": ["security"],
  "keywords": ["passport", "identity", "travel"],
  "preset": "pop",
  "trigger": "hover",
  "fillSafe": false,
  "nodes": [["path", { "d": "M7 3.5h10v17H7z" }]]
}
```

Filled brand marks use `{"fill": "currentColor", "stroke": "none"}` on their
paths and `fillSafe: true`. Categories are persisted into
`data/categories.json` automatically. Brand geometry is CC0 via Simple Icons but
the marks remain trademarks of their owners (see NOTICE); only add marks you
have the right to redistribute.
