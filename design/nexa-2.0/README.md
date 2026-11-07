# Nexa 2.0 prototype

The first 20 representative icons in the 2.0 visual language, with outline,
solid and duotone variants and optical sizes 16/20/24/32/48.

## Source of truth

- `catalog.mjs` — hand-authored geometry, variants and optical overrides.
- `build.mjs` — writes SVGs, JSON, Studio data and the contact sheets.

```bash
node design/nexa-2.0/build.mjs
open design/nexa-2.0/comparison.html
open design/nexa-2.0/contact-sheet.html
```

## Outputs

| Path | Purpose |
|---|---|
| `icons/<name>-outline.svg` | 24px outline master |
| `icons/<name>-solid.svg` | designed filled variant |
| `icons/<name>-duotone.svg` | soft + primary variant |
| `catalog.json` | metadata + SVG strings for tooling |
| `comparison.html` | v1 vs v2 side by side, sizes and variants |
| `contact-sheet.html` | 20 × 3 variants × 5 sizes |

## Rules

See [docs/nexa-2.0-design-system.md](../../docs/nexa-2.0-design-system.md) and
the audit in [docs/nexa-2.0-audit.md](../../docs/nexa-2.0-audit.md).

The prototype is intentionally not wired into the shipping catalog yet. Phase E
rolls it out in reviewed batches; existing APIs and names stay unchanged.
