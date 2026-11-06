---
name: nexa-icons
description: >-
  Use when adding, choosing, styling, animating, or reviewing any icon, UI icon,
  SVG, spinner, empty-state, nav, or button icon in a Nexa
  project — or when importing the @sairamanapb/icons package from HTML, vanilla JS,
  TypeScript/React, Go, or Rust. Covers the Nexa concept→icon map, 24px grid and
  size→stroke rules, currentColor theming, shape containers, fill variants,
  CSS 3D presets, the 17 CSS animation presets, accessibility, categories, and
  the add/regenerate workflow.
---

# Nexa Icons

One stroke-first icon language for Nexa: **1,034 icons in 26 categories**, plus 12
duotone illustrations and a Rust GPUI adapter. 24×24 grid, 2px padding,
stroke-first, `currentColor`, round caps/joins, 17 CSS-only animation presets,
CSS swap/morph transitions, shape containers, fill variants and CSS 3D
presentation presets.

Repo: `data/icons.json` is the canonical dataset; `nexa-icon-styles-SKILL.md` is
the app-level style guide; `docs/` has the full reference.

## Non-negotiables

1. **One set only.** Never mix another icon library into an Nexa surface.
2. **24×24 grid, 2px padding, 20×20 live area.** Never redraw on a different grid.
3. **Stroke-first.** Root is `fill="none"`, `stroke="currentColor"`, round
   caps/joins. Fill variants (`outline`/`duotone`/`solid`) are presentation
   state via `filled`/`variant`; `solid` only for `fillSafe` geometry (others
   degrade to duotone). Tiny detail dots in `KeyRound`, `Palette`, `Tag` always
   use `fill="currentColor"`.
4. **Stroke width follows size** (React/JS do it automatically; Go/Rust take
   an explicit stroke width):

   | Size token | px | Stroke |
   |---|---|---|
   | `sm` | 16 | 2 |
   | `md` | 20 | 1.75 |
   | `lg` | 24 | 1.5 |
   | `xl` | 40 | 1.5 |

   Numeric sizes are allowed; any size above 20px uses stroke 1.5.

5. **`currentColor` only.** No hex, no color prop, no per-theme SVG.
6. **Decorative → `aria-hidden="true"`** (every API's default). Meaningful
   standalone icon → pass a `label` (gets `role="img"` + `aria-label`).
7. **Icon-only buttons need `aria-label` + tooltip**, hit area ≥40×40px.
8. **Respect reduced motion.** Do not re-enable animation with `!important`.
9. **Use the Nexa concept→icon map** below; don't invent a new icon per screen.
10. **Both themes must pass 3:1**: light `#fafafa`, dark `#0c0c0e`.

## Mandatory imports

React / TSX (package root — imports React; React ≥18 is an optional peer):

```tsx
import { Bell, Briefcase, Loader2, Icon, IconSwap, IconToggle } from "@sairamanapb/icons";
import { Bell } from "@sairamanapb/icons/react/bell"; // or deep-import one module
import "@sairamanapb/icons/animations.css"; // once, app entry
```

Vanilla JS / ESM (subpath — **no React needed**, zero dependencies):

```js
import { svg, sprite, getIcon, names, swapSvg, pairFor } from "@sairamanapb/icons/js";
```

If the project does not use React, never import `@sairamanapb/icons`; use
`@sairamanapb/icons/js` (or the Go/Rust package) instead.

HTML (no build step):

```html
<!-- inline one symbol set once (sprite.svg or sprite()), then reference -->
<svg class="nexa-icon" aria-hidden="true"><use href="#nexa-bell"/></svg>
<img src="icons/bell.svg" alt="" width="24" height="24"> <!-- no theming -->
```

Go:

```go
import nexaicons "github.com/nexa-icons/nexa/go"

bell, ok := nexaicons.Get("Bell")
if ok {
    html := bell.SVG(nexaicons.Size(20)) // 20px => stroke 1.75 (auto)
}
swap := nexaicons.SwapSVG("ArrowLeft", "ArrowRight", nexaicons.SwapLabel("Direction"))
```

Rust:

```rust
use nexa_icons::{get, SvgOptions};

let bell = get("Bell").expect("Bell");
let svg = bell.svg(SvgOptions::new().size(20)); // 20px => stroke 1.75 (auto)
let swap = nexa_icons::swap_svg("ArrowLeft", "ArrowRight", nexa_icons::SwapOptions::new());
```

Exact signatures live in [references/api-cheatsheet.md](references/api-cheatsheet.md)
and `docs/api.md`. Do not guess props — read the source (`src/Icon.tsx`,
`src/types.ts`, `js/index.mjs`, `go/icons.go`, `rust/src/lib.rs`) if unsure.

## Choose the icon (Nexa concept map)

| Concept | Icon | Concept | Icon |
|---|---|---|---|
| Jobs / listing | `Briefcase` | Alerts / new jobs | `Bell` |
| Search jobs | `Search` | Email | `Mail` |
| Recommendations | `Sparkles` | Pro plan | `Crown` |
| Saved / bookmarked | `Bookmark` | Profile | `User` |
| Applied | `Send` | Admin | `ShieldCheck` |
| Company | `Building2` | Settings | `Settings` |
| Location / remote | `MapPin` / `Globe` | Resume | `FileText` |
| Salary | `DollarSign` | Upload | `Upload` |
| Experience | `GraduationCap` | Scraper / sync | `RefreshCw` |
| Categories | `Layers` | AI / MCP / API | `Plug` |
| External link | `ArrowUpRight` | Sign out | `LogOut` |

Source of truth: `meta.nexaMap` in `data/icons.json`. Need something else? Search
the dataset by keyword:

```bash
node -e "const d=require('./data/icons.json');for(const i of d.icons)if(i.keywords.join(' ').includes('trash'))console.log(i.name, i.kebab, i.anim.preset)"
```

Aliases that must keep working: `XIcon` → `X`, `TriangleAlert` → `AlertTriangle`.

## Size, color, states

- Tokens `sm|md|lg|xl` = 16/20/24/40px; numeric sizes work too (1.5 stroke
  above 20px). Default everywhere: **24px / stroke 1.5** (React `lg`).
- Color comes from the wrapper (`className`, `style`, inherited `color`); icons
  inside a `<button>` inherit its color.
- Active/selected: pick one — 10–15% tint in a rounded square, a `shape`
  container, or `filled`/`variant="solid"` (only for `fillSafe` glyphs).
- Disabled: 40% opacity. Loading: replace with `Loader2` at the same size — never
  shift layout.
- Accent is reserved: primary action, active nav, status (success/warning/
  danger/info). Never tint a whole icon row.

## Shape, fill and 3D

```tsx
<Bell shape="rounded" />     {/* square|rounded|circle|pill|squircle|hexagon|diamond */}
<Heart filled animateFill /> {/* true = solid (fillSafe), "soft" = duotone */}
<Crown threeD="tilt" />      {/* tilt|flip|extrude|orbit — CSS, not WebGL */}
```

- Shape/3D wrap the SVG (`.nexa-icon-frame` / `.nexa-3d`); frame is
  `round(size × 1.7)` tinted with `color-mix(currentColor 14%)`; put `label` on
  the wrapper.
- Fill: `filled`/`variant` → `data-fill-state="true|soft"`; `animateFill`
  transitions `fill-opacity` (320ms, reduced-motion safe). Solid on open
  geometry degrades to duotone by design.
- 3D is CSS presentation (perspective 640px, hover/focus-within): one moment per
  view, never the only feedback. Go/Rust expose base stroke/sprite/swap only.

## Categories, illustrations, GPUI

**1,034 icons in 26 categories** with tree-shakeable category imports:

```tsx
import { Bell } from "@sairamanapb/icons/communication"; // React/JS
import { CATEGORIES } from "@sairamanapb/icons";         // array (JS: record + categories(id))
```

Go: `Categories()` / `ByCategory(id)`; Rust: `categories()` / `by_category()` /
`category_icons()`. **Illustrations**: 12 duotone 64×64 SVGs in
`illustrations/` (+ manifest/preview/README), inline with `currentColor` and
`--nexa-ill-fg/soft/accent` tokens. **GPUI**: `nexa-icons-gpui` renders icons in
GPUI windows (`icon("bell")`, `NexaIconAssets`, GPUI 0.2.2 pre-1.0 — pin it);
web animation/shape/fill/3D are not replayed. See [docs/gpui.md](../../docs/gpui.md)
and [illustrations/README.md](../../illustrations/README.md).

## Animation

17 presets, all CSS (`transform`/`opacity` only, no JS thread work):
`spin`, `pulse`, `ring`, `shake`, `wiggle`, `flip`, `bounce`, `float`, `tilt`,
`heartbeat`, `pop`, and 6 directional nudges (`nudge-up`, `nudge-up-right`,
`nudge-right`, `nudge-down-right`, `nudge-down`, `nudge-left`). `fade-in` is an
extra 18th class for mount reveals.

- Animation is **opt-in**: `<Bell />` is static. `<Bell animate />` plays the
  icon's semantic preset (`ring` for Bell).
- Triggers: `hover` (default, includes keyboard/`:focus-visible` and **parent
  button/link focus**), `focus`, `press`, `inview` (CSS scroll-driven), `mount`,
  `always`, `manual` — all CSS, no JS listeners. `Loader2`'s semantic trigger is
  `always`.
- `pop`/`bounce` use spring easing (with a cubic-bezier fallback).
- **Swap/morph** (`ArrowLeft ↔ ArrowRight`, `Plus ↔ Minus`, …): React
  `IconSwap`/`IconToggle`, vanilla `swapSvg`/`pairFor`/`swapModeFor`; modes
  `mirror`, `flip`, `rotate`, `slide`, `fade`, `auto`.
- `prefers-reduced-motion: reduce` disables preset/fill/swap/3D motion.
- Sprite symbols are fixed at `stroke-width="2"`; override with JS
  `sprite({ strokeWidth: 1.75 })` / `symbol(name,{strokeWidth})`, Go
  `Sprite(SpriteStrokeWidth(1.75))`, or Rust `sprite_with(1.75)`. Use the inline
  API (size-aware) for 16/20px icons.
- Full semantics, class names and custom hooks:
  [references/animation-presets.md](references/animation-presets.md).

```tsx
<Bell />                                {/* static */}
<Bell animate />                        {/* ring, hover */}
<Bell animate trigger="focus" />        {/* :focus-visible */}
<Bell animate="pulse" trigger="inview" /><!-- scroll reveal -->
<Loader2 animate trigger="always" />    {/* spinner */}
<Trash2 animate="shake" trigger="manual" active={confirming} />
<IconToggle from={ArrowLeft} to={ArrowRight} label="Next page" />
<IconSwap from={Plus} to={Minus} active={open} label="Section" />
```

Use `IconToggle` for click-to-toggle glyphs: it is a real `<button>` with
`aria-pressed` and a required `label`. Use `IconSwap` only for controlled,
non-button swaps (or add your own accessible wrapper).

## Add or regenerate an icon

1. Append the Lucide public name to `raw/requested-names.txt` (or confirm
   `raw/vendor.json` already has it).
2. Assign its semantic preset in `scripts/generate-data.mjs`
   (`NUDGE.*` / `PRESET_GROUPS.*`); unmatched icons warn and default to `pop`.
3. `node scripts/generate-data.mjs` → regenerates `data/icons.json`,
   `icons/*.svg`, `sprite.svg`, `data/report.json`.
4. Regenerate consumers: `generate-react.mjs`, `generate-js.mjs`,
   `generate-go.mjs`, `generate-rust.mjs`; rebuild `gallery/build.mjs`.
5. Verify: 650/650/0 counts, 26 categories, sprite XML, no hex colors, `go test`, `cargo test`, GPUI crate tests.
   Full checklist: `docs/adding-icons.md`. Never hand-edit generated files.

## Review checklist

1. One set, one glyph per concept, mapped from `meta.nexaMap`.
2. Size/stroke from the table; no hand-set width/stroke.
3. `currentColor` only — no hex/raw `fill`; use `filled`/`variant` for fill.
4. Decorative → `aria-hidden`; meaningful → `label` + `role="img"`.
5. Icon-only controls: `aria-label`, ≥40px hit area, focus ring.
6. Animation/shape/fill/3D semantic, opt-in, reduced-motion honored.
7. 3:1 on both themes + forced-colors; status never icon/color alone.
8. Click-to-toggle uses `IconToggle`/`aria-pressed`, not a bare swap.

## Common mistakes

| Mistake | Fix |
|---|---|
| Importing `lucide-react` alongside this package | Remove the old package; one set only |
| Hard-coding `stroke`/`fill` colors | Use `currentColor` + `color`, or `filled`/`variant` |
| Setting `width`/`stroke-width` manually | Use `size`; the API applies the stroke table |
| Re-exporting icons with new names | Use the public names/aliases; map lives in the dataset |
| Animating every icon / using 3D everywhere | Interaction-only; `always` only for spinners, one 3D moment per view |
| Icons only, no labels, in status cells | Pair with text; icons decorate, they don't explain |
| Bare glyph swap on a toggle button | Use `IconToggle` (aria-pressed + label) |
| `aria-hidden` on the only content of a button | Give the button `aria-label`, keep icon hidden |
| Editing `icons/` or `sprite.svg` by hand | Edit the source and regenerate |

## References

- [references/api-cheatsheet.md](references/api-cheatsheet.md) — per-language API.
- [references/animation-presets.md](references/animation-presets.md) — presets/triggers.
- [docs/design.md](../../docs/design.md) · [docs/theming.md](../../docs/theming.md) — rules/theming.
- [docs/adding-icons.md](../../docs/adding-icons.md) — regeneration.
- [AGENTS.md](../../AGENTS.md) · [nexa-icon-styles-SKILL.md](../../nexa-icon-styles-SKILL.md) — guides.
