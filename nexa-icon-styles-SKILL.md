---
name: nexa-icon-styles
description: >-
  Use when designing, choosing, drawing, or reviewing icons for
  Nexa: UI icons, empty states, feature cards, nav, buttons,
  favicons, or social/OG graphics. The implementation lives in @nexa/icons
  (1,034 icons, currentColor, CSS-only animation); never mix another icon set in.
---
# Nexa icon styles

One consistent icon language for Nexa (Next.js app, light theme `#fafafa`, dark theme `#0c0c0e`). The icons ship in `@nexa/icons` — 1,034 unique icons generated from one canonical dataset (`data/icons.json`). Follow these rules on every screen.

## 1. Library

- **Use `@nexa/icons` for every icon. Never mix another set on one screen** (no Lucide, no Heroicons, no hand-drawn one-offs).
- Import icons individually (`import { Briefcase } from "@nexa/icons"`) so unused icons tree-shake out.
- Import the animation stylesheet once in the app entry: `import "@nexa/icons/animations.css"`.
- Import the `Icon` wrapper only when the icon name is dynamic (it pulls the full registry — see [docs/performance.md](docs/performance.md)).
- Full API: [docs/api.md](docs/api.md). Skill for agents: [skills/nexa-icons/SKILL.md](skills/nexa-icons/SKILL.md).

## 2. Grid and geometry

- 24×24 grid with 2px padding (20×20 live area), stroke-only, no fills.
- `stroke-linecap="round"`, `stroke-linejoin="round"`, corner radius ≈2px on rectangles.
- Simple shapes (≈4 strokes max) so the icon still reads at 16px.
- Do not redraw or restyle a glyph — if a concept is missing, add it to the dataset ([docs/adding-icons.md](docs/adding-icons.md)).

## 3. Sizes and stroke weight

| Use | Size token | Size | Stroke |
|---|---|---|---|
| Inline text, table cells, badges | `sm` | 16px | 2 |
| Buttons, inputs, nav items | `md` | 20px | 1.75 |
| Section headers, cards | `lg` | 24px | 1.5 |
| Feature tiles, empty states | `xl` | 32–48px | 1.5 |

`<Icon size="md" />` sets both; a numeric size derives the stroke automatically (16→2, 20→1.75, 24+→1.5). The default is `lg` (24px).

## 4. Color

- Icons paint with `currentColor` and inherit the parent's color. **Never hard-code a hex in an icon, and never pass a color prop to “fix” an icon** — set `color` on the container.
- Default: muted foreground (`--text-muted`); hover/active: full foreground.
- Accent only for the primary action, active nav item, and status:
  - success (applied, saved): green
  - warning (expiring, closing soon): amber
  - danger (rejected, delete): red
  - info / new jobs / Pro: brand accent
- Check both themes: icons must hit **3:1** contrast on `#fafafa` and on `#0c0c0e`, and remain legible in OS forced-colors mode (the CSS handles `forced-color-adjust`).

## 5. States

- Default: outline. Active/selected (nav tab, saved job, bookmarked): fill the glyph or put a 10–15% accent tint behind it in a rounded square (radius 8px).
- Disabled: 40% opacity, no hover.
- Loading: swap to `Loader2` at the same size (`<Loader2 animate />` spins forever via `trigger="always"`); never shift layout.
- Click-to-toggle glyphs (left↔right arrow, plus↔minus, play-ish pairs, saved/heart) use `IconToggle` / `IconSwap`, which animate with CSS only and expose `aria-pressed` — see [docs/animations.md](docs/animations.md).

## 6. Containers (feature cards, empty states)

- Rounded square: 40px box / 20px icon or 48px box / 24px icon, radius 10–12px, background = accent at 10% (light) or 15% (dark), icon in accent.
- One container style per page section.

## 7. Nexa icon map (keep these fixed)

| Concept | Icon |
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
| Role pool / categories | `Layers` |
| Alerts / new jobs | `Bell` (dot badge for unread) |
| Email / mailing | `Mail` |
| Pro plan | `Crown` |
| Profile / account | `User` |
| Admin | `ShieldCheck` |
| Settings | `Settings` |
| Resume / upload | `FileText` / `Upload` |
| Scraper / sync | `RefreshCw` |
| AI / MCP / API | `Plug` |
| External link | `ArrowUpRight` |
| Sign out | `LogOut` |
| Loading | `Loader2` |
| Empty state | `Inbox` / `FileSearch` |
| Success / saved | `CheckCircle2` |
| Error / rejected | `XCircle` / `AlertTriangle` |
| Warning / expiring | `AlertTriangle` |

Add a new concept to this table instead of picking a different icon each time.

## 8. Animation

- Motion is opt-in and CSS-only: `<Bell animate="ring" />`, `<Loader2 animate />` (always on), `<RefreshCw animate="spin" trigger="hover" />`.
- 17 presets: `spin pulse ring shake wiggle flip bounce float tilt heartbeat pop` + 8 `nudge-*` directions, plus `fade-in`.
- Triggers: `hover` (default), `focus`, `press`, `mount`, `always` (loops), `manual` (+ `active`), `inview` (CSS scroll-driven).
- Only animate `transform`/`opacity`; never animate layout properties. `prefers-reduced-motion: reduce` disables everything — do not override it.
- Do not animate more than one icon per row at once, and never animate as the only signal that something happened.

## 9. Accessibility

- Decorative icons: `aria-hidden="true"` (the default). Icons that carry meaning on their own: pass `label` (gets `role="img"` + `aria-label`).
- Icon-only buttons: `aria-label` + tooltip, hit area ≥40×40px.
- Never use an icon alone to convey status; pair with text or a label.
- Icon-only toggles need `aria-pressed` — use `IconToggle`.

## 10. Brand marks

- Favicon/app icon: the Nexa mark on a rounded square, exported as SVG, 32px and 180px PNG, 512px for PWA; test at 16px.
- OG/social images may use filled or duotone illustration, but UI icons stay outline.
- Icons are generatable for static assets from `icons/<kebab>.svg` (24px) or `sprite.svg`.

## 11. Review checklist

1. Every icon is imported from `@nexa/icons` — no other library, no inline path soup?
2. Sizes and strokes match the table?
3. `currentColor`, readable in both themes and forced-colors?
4. Active states filled or tinted consistently?
5. Concept uses the icon from the map?
6. Labels on icon-only buttons; `aria-pressed` on toggles?
7. `animations.css` imported once; motion respects reduced motion?
8. No hard-coded colors, no duplicate `stroke-width` fights with the sprite?

## Sample component

```tsx
import { Bell, Briefcase, Loader2, IconToggle, ArrowLeft, ArrowRight } from "@nexa/icons";

<Bell size="sm" />                       {/* 16px / stroke 2, decorative */}
<Briefcase size="lg" />                  {/* 24px / stroke 1.5 */}
<Loader2 size={20} animate />            {/* 20px / stroke 1.75, loops */}
<Bell size="md" animate="ring" label="Alerts" />  {/* accessible, animates on hover */}
<IconToggle from={ArrowLeft} to={ArrowRight} label="Next direction" />
```

Every icon is also available in plain HTML (`sprite.svg` + `<use>`), vanilla JS (`@nexa/icons/js`), Go and Rust — see [README.md](README.md).
