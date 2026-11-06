# Migrating from Lucide

Nexa Icons is a curated icon set derived from **Lucide 1.70** (ISC), re-packaged
for Nexa. The current catalog is 650 icons in 24 categories. If your app already imports `lucide-react`, migration is a package swap
plus one import-path change — the exported component names are the same names
your code already uses.

- 650 icons ship in 24 categories (plus the legacy `XIcon`/`TriangleAlert` aliases).
- Two requested names were exact duplicates and are kept as aliases:
  `XIcon === X`, `TriangleAlert === AlertTriangle`.
- All requested public names remain importable.

## 1. Why the names still work

The requested names in `raw/requested-names.txt` are Lucide's public export
names. The dataset keeps the requested name as the component name and the
canonical Lucide file name as `kebab`. Some canonical files were renamed
upstream (for example `AlertTriangle` → `triangle-exclamation-point`), but the
public name you import did not change.

| You import | Canonical glyph file | Notes |
|---|---|---|
| `AlertTriangle` | `triangle-exclamation-point.svg` | alias `TriangleAlert` also works |
| `AlertCircle` | `circle-exclamation-point.svg` | |
| `Loader2` | `loader-circle.svg` | `animate` spins forever (`trigger="always"`) |
| `ImageIcon` | `image.svg` | |
| `X` | `x.svg` | alias `XIcon` also works |
| `Building2` | `building-complex.svg` | |
| `DollarSign` | `dollar-sign.svg` | Nexa salary icon |

The same pattern applies to the other renamed upstream files (`Bold` →
`letter-b`, `Home` → `house`, `Filter` → `funnel`, `History` →
`rotate-ccw-clock`, `MoreHorizontal` → `ellipsis`, …). Public imports never need
to change.

## 2. React / TypeScript: package swap

```diff
- import { Bell, Briefcase, Loader2 } from "lucide-react";
+ import { Bell, Briefcase, Loader2 } from "@nexa/icons";
```

```tsx
import { Bell, Briefcase, Loader2 } from "@nexa/icons";

<Bell aria-hidden="true" />
<Briefcase size="md" />
<Loader2 animate />      {/* spins forever: trigger defaults to "always" */}
```

Keep your one wrapper component and point it at the Nexa `Icon` (or keep passing
the icon component through). The React components default to **24px / 1.5
stroke** — the same default as JS/Go/Rust — and apply the Nexa size→stroke table
automatically. Full props: [api.md](api.md).

## 3. Vanilla JS / HTML

`lucide` (vanilla) users get the equivalent inline-SVG and sprite APIs:

```js
import { svg, getIcon, names } from "@nexa/icons/js";

document.querySelector("#bell").innerHTML = svg("Bell", { size: 20 });
console.log(names().length); // 650 (names() lists canonical names)
```

Before: `createIcons()` scanned the DOM for `data-lucide` attributes. In Nexa you
either inject `svg()` output, use [`icons/*.svg`](../icons/bell.svg) files directly, or
inline the sprite once and use `<use href="#nexa-bell">`. See
[api.md](api.md) and the README quick start.

## 4. Behaviour differences to expect

| Area | Lucide default | Nexa Icons |
|---|---|---|
| Default size / stroke | no default; `size` is inherited | 24px / 1.5 stroke (React `lg`, same in JS/Go/Rust) |
| Stroke at 24px | 2 | 1.5 (Nexa optical table; standalone SVGs keep 2) |
| Size API | numeric `size` | tokens `sm`/`md`/`lg`/`xl` **or** numbers (16→2, 20→1.75, 24+→1.5) |
| Colors | `currentColor` | same — no change |
| Animation | none | 17 CSS-only presets; opt in with `animate` |
| Aliases | some `*Icon` aliases | `XIcon` and `TriangleAlert` kept for the requested set |
| Runtime deps | none | none (React package: React as peer only) |

If a screen looks lighter after the swap, it is the optical stroke rule: the
default is now 24px / 1.5 (Lucide's default at 24px was 2). Pass
`strokeWidth={2}` or use `size="sm"`/`"md"` rather than editing the SVG.

## 4b. Presentation features Lucide does not have

Nexa adds CSS-only presentation props on top of the Lucide geometry — you can
adopt them incrementally:

```tsx
<Bell shape="rounded" />        // shape container
<Heart filled animateFill />    // fill variant + fill transition
<Crown threeD="tilt" />         // CSS 3D preset
```

They are opt-in and reduced-motion safe; see [animations.md](animations.md).
The base `<Bell />` still renders the same stroke icon you migrated.

## 4c. Upgrading from the pre-rename package

If your app used the earlier package name/tokens, map them:

| Old | New |
|---|---|
| `@njs/icons`, `njs-icons` | `@nexa/icons` |
| `njs-icon`, `njs-*` classes | `nexa-icon`, `nexa-*` |
| `data-njs-*` attributes | `data-nexa-*` |
| `#njs-<kebab>` sprite ids | `#nexa-<kebab>` |
| `github.com/nextjobstep/njs-icons/go` | `github.com/nexa-icons/nexa/go` |
| `njs-icon-styles-SKILL.md` | `nexa-icon-styles-SKILL.md` |

The React/JS/Go/Rust APIs are otherwise unchanged, so the Lucide migration above
applies on top of this rename.

## 5. Concepts: use the Nexa map, not Lucide habits

The Nexa concept→icon map (`meta.nexaMap`) is fixed. If your app previously used a
different Lucide icon for a concept, switch to the mapped one while you migrate:

| Concept | Nexa icon |
|---|---|
| Jobs / job listing | `Briefcase` |
| Search jobs | `Search` |
| Recommendations | `Sparkles` |
| Saved / bookmarked | `Bookmark` |
| Applied | `Send` |
| Company | `Building2` |
| Location / remote | `MapPin` / `Globe` |
| Salary | `DollarSign` |
| Experience | `GraduationCap` |
| Categories | `Layers` |
| Alerts / new jobs | `Bell` |
| Email | `Mail` |
| Pro plan | `Crown` |
| Profile | `User` |
| Admin | `ShieldCheck` |
| Settings | `Settings` |
| Resume | `FileText` |
| Upload | `Upload` |
| Scraper / sync | `RefreshCw` |
| AI / MCP / API | `Plug` |
| External link | `ArrowUpRight` |
| Sign out | `LogOut` |

## 6. Migration checklist

1. Replace the dependency (`lucide-react` → `@nexa/icons`; `lucide` →
   `@nexa/icons/js`). Uninstall the old package so both sets can't drift.
2. Update imports only — no icon renames needed for requested names.
3. Replace wrapper defaults with the Nexa `Icon`/`size` tokens so stroke follows
   the Nexa table ([design.md](design.md) §3).
4. Move active-state styling to the Nexa rule (filled or 10–15% tinted square).
5. Grep for removed imports: `rg 'lucide-react|data-lucide|createIcons'`.
6. Run your existing visual/tests and check both themes at 3:1
   ([theming.md](theming.md)).
7. Delete any local copies of Lucide icons so there is exactly one set.
