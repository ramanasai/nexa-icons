# Nexa Icons 2.0

Nexa 2.0 is a visual-language upgrade: **Soft Precision · Balanced Weight ·
Distinctive Geometry**. It improves the icons themselves before adding
decorative treatments.

## Status

| Phase | State |
|---|---|
| A — Audit | ✅ [`nexa-2.0-audit.md`](nexa-2.0-audit.md) |
| B — Design system | ✅ [`nexa-2.0-design-system.md`](nexa-2.0-design-system.md) |
| C — 20-icon prototype | ✅ [`design/nexa-2.0/`](../design/nexa-2.0/README.md) |
| D — Studio integration | ✅ prototype preview/export at [`gallery/v2.html`](../gallery/v2.html) |
| E — Catalog rollout | ⏳ next; reviewed batches, starting with navigation + actions |
| F — 2.0 release | ⏳ after rollout validation |

## Prototype

20 representative icons, each with outline, solid and duotone geometry:
Home, Search, Settings, Bell, User, Shield, Database, Server, Cloud, Folder,
File, ArrowRight, Check, Close, Plus, Minus, Heart, Star, Calendar, Clock.

```bash
node design/nexa-2.0/build.mjs
node design/nexa-2.0/qa.mjs
```

Generated sheets:
- [comparison.html](../design/nexa-2.0/comparison.html) — v1 vs v2
- [contact-sheet.html](../design/nexa-2.0/contact-sheet.html) — variants/sizes
- [catalog-categories.html](../design/nexa-2.0/catalog-categories.html) — current
  catalog by category (outline baseline)
- `gallery/v2.html` — Studio v2 prototype with live size/variant controls

## What is deliberately not done yet

The remaining 1,014 icons are not rewritten blindly. The validated 2.0 geometry
is applied in reviewed batches with comparison sheets, then the package version
is bumped (2.0) and a migration note is published. Existing icon names, aliases,
APIs, animation presets and accessibility remain unchanged.

## Success criteria

- Recognisable Nexa silhouette at 16px.
- Consistent optical weight across categories.
- Designed solid/duotone variants, not generated fills.
- Neutral gallery preview where the geometry is the subject.
- Automated visual QA and human review before batch sign-off.
