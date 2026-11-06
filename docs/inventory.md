# Nexa Icons — inventory & what makes it different

Generated from the shipped dataset (`data/icons.json`), category manifest
(`data/categories.json`), swap table (`data/swaps.json`), illustrations manifest
and the built artefacts. All numbers below are measured from the repo, not
estimated.

## 1. Totals at a glance

| Asset | Count | Notes |
|---|---:|---|
| Stroke icons (unique glyphs) | **1,034** | 24-category catalog, 24×24 grid, `currentColor` |
| Importable names (icons + aliases) | **1,036** | every original pre-expansion name still resolves (`Loader2`, `Home`, `MoreHorizontal`, `XIcon`, `TriangleAlert`, …) |
| Categories | **26** | 1,267 category memberships; 233 icons live in >1 category |
| Animation presets | **17** semantic (+ `fade-in` helper = 18 CSS classes) | every icon has a semantic preset |
| Trigger modes | **7** | `hover`, `focus`, `press`, `mount`, `always`, `manual`, `inview` |
| Swap/morph pairs | **26** → **49 directed edges** | 5 modes: `mirror`, `flip`, `rotate`, `slide`, `fade` |
| Shape containers | **7** + none | square, rounded, circle, pill, squircle, hexagon, diamond |
| Fill treatments | **3** | outline, duotone, solid (with animated fill ↔ empty) |
| CSS-3D presets | **4** | tilt, flip, extrude, orbit (presentation presets, not pre-rendered 3D) |
| Glass presets | **7** | frost, ice, clear, steel, neon, jelly, aurora (frosted-glass surfaces, optional) |
| Glass animations | **3** | sheen, pulse, float (always or hover-triggered) |
| Glass body | **1** | `glassBody` thick filled body layer (all icons) |
| Gradient animation | **1** | `gradientAnim="hue"` (opt-in, reduced-motion safe) |
| Gradient presets | **8** | aurora, ice, sunset, emerald, ocean, candy, gold, mono (optional) |
| Illustrated icons | **12** | 64×64 duotone, empty-state/feature/onboarding |
| React/TS components | **1,034** | tree-shakeable, typed, + aliases |
| Standalone SVGs | **1,034** | plus one 650-symbol sprite |
| Language targets | **5** | HTML/sprite, JS (ESM+CJS), TS/React, Go, Rust (+ GPUI adapter) |

## 2. Filled / unfilled / animated fill

| Fill state | Icons | How |
|---|---:|---|
| Outline (default / "empty") | **1,034** | stroke-only, the shipped base |
| Duotone (soft fill) | **1,034** | `variant="duotone"` / `filled="soft"` — theme-safe at 16 % opacity |
| Solid ("filled") | **66** | only **closed-geometry** glyphs fill cleanly (`fillSafe`) |
| Solid request on open geometry | **968** | automatically degrades to duotone — never produces a broken blob |
| Fill ↔ empty animation | **1,034** | `animateFill` — 320 ms `fill-opacity` transition, reduced-motion safe |

```tsx
<Heart filled animateFill />          // 45 solid-capable glyphs
<Bell variant="duotone" />            // any glyph
<Bookmark filled={false} />           // outline
```

## 3. 3D inventory (honest scope)

| Item | Count | Detail |
|---|---:|---|
| Icons that support CSS-3D presets | **1,034** | every icon accepts `threeD` |
| 3D presets | **4** | `tilt`, `flip`, `orbit`, `extrude` |
| Icon × preset combinations | **4,136** | `1,034 × 4` |
| Pre-rendered/WebGL 3D models | **0** | deliberately CSS transforms; no WebGL/runtime compute, no extra bytes |
| Gallery 3D demos | 4 | keyboard-previewable (Enter/Space), reduced-motion disables all |

## 4. Shape containers

| Shape | Count available | Notes |
|---|---:|---|
| `square` | 1 | tight radius |
| `rounded` | 1 | 22 % radius |
| `circle` | 1 | 50 % |
| `pill` | 1 | true wide frame (1.7 × 1.25 × icon size) |
| `squircle` | 1 | 32 % radius |
| `hexagon` | 1 | real 1 px clipped edge layer |
| `diamond` | 1 | scaled so it fits its layout box |
| **Total presentations** | **1,034 × 8** (7 shapes + none) = **8,272** | all follow `currentColor`, tint 14 % / border 26 % |

Glass and gradients compose with shapes, fills, 3D and animation:
`1,034 × 7` glass surfaces = **7,238**, `1,034 × 8` gradient strokes = **8,272**, and
frosted-gradient tile combinations (`7 × 8`) — all opt-in via
`@sairamanapb/icons/effects.css` (8,468 B raw / 1,926 B brotli).

## 5. Animation presets (1,034 icons mapped)

| Preset | Icons | Preset | Icons |
|---|---:|---|---:|
| `wiggle` | 145 | `pop` | 123 |
| `pulse` | 113 | `shake` | 98 |
| `float` | 61 | `bounce` | 37 |
| `tilt` | 14 | `nudge-down` | 11 |
| `spin` | 10 | `nudge-up` | 10 |
| `nudge-left` | 6 | `heartbeat` | 6 |
| `flip` | 4 | `ring` | 4 |
| `nudge-right` | 4 | `nudge-up-right` | 3 |
| `nudge-down-right` | 1 | `fade-in` (helper) | any |
| **Total** | **1,034** | | |

Triggers: 649 icons animate on `hover` by default; 1 (`Loader2`/`LoaderCircle`) is
`always` (infinite spinner). `focus`, `press`, `inview`, `mount`, `manual` are
opt-in per instance.

## 6. Categories (26)

| Category | Icons | Import |
|---|---:|---|
| Health & Wellness | 45 | `@sairamanapb/icons/health` |
| Finance & Money | 46 | `@sairamanapb/icons/finance` |
| Food & Drink | 48 | `@sairamanapb/icons/food` |
| Weather & Nature | 43 | `@sairamanapb/icons/weather` |
| Education & Learning | 38 | `@sairamanapb/icons/education` |
| Travel & Transport | 48 | `@sairamanapb/icons/travel` |
| Shopping & Commerce | 59 | `@sairamanapb/icons/commerce` |
| Security & Privacy | 44 | `@sairamanapb/icons/security` |
| Communication | 59 | `@sairamanapb/icons/communication` |
| Media & Camera | 51 | `@sairamanapb/icons/media` |
| Files & Folders | 69 | `@sairamanapb/icons/files` |
| Data & Analytics | 45 | `@sairamanapb/icons/data` |
| Devices & Hardware | 63 | `@sairamanapb/icons/devices` |
| Development | 49 | `@sairamanapb/icons/development` |
| Editing & Text | 65 | `@sairamanapb/icons/editing` |
| Design & Shapes | 57 | `@sairamanapb/icons/design` |
| Time & Calendar | 36 | `@sairamanapb/icons/time` |
| People & Users | 44 | `@sairamanapb/icons/people` |
| Navigation & Maps | 40 | `@sairamanapb/icons/navigation` |
| Layout & UI | 59 | `@sairamanapb/icons/layout` |
| Status & Feedback | 56 | `@sairamanapb/icons/status` |
| Actions & Controls | 65 | `@sairamanapb/icons/actions` |
| Arrows & Direction | 59 | `@sairamanapb/icons/arrows` |
| Places & Work | 59 | `@sairamanapb/icons/places` |
| Brands & Sources | 13 | `@sairamanapb/icons/brands` |
| Government & Immigration | 7 | `@sairamanapb/icons/government` |
| **Total memberships** | **1267** | 233 icons in 2+ categories |

## 7. Illustrated icons (12, 64×64 duotone)

| Illustration | Use | Tags |
|---|---|---|
| `no-jobs` | empty-state | jobs, empty, hiring |
| `search` | empty-state | search, no-results |
| `empty-inbox` | empty-state | inbox, messages |
| `resume-upload` | onboarding | resume, upload, profile |
| `welcome` | onboarding | welcome, start, journey |
| `interview` | feature | interview, messages, recruiter |
| `offer` | feature | offer, success, celebrate |
| `remote` | feature | remote, hybrid, workspace |
| `analytics` | feature | analytics, chart, insights |
| `security` | feature | security, privacy, shield |
| `verified` | feature | success, verified, award |
| `team` | feature | hiring, people, referrals |

Total 10.6 KB of SVG; currentColor + 3 optional CSS variables; light/dark/grayscale verified.

## 8. Language surfaces

| Target | What ships | Notes |
|---|---|---|
| HTML | 650 SVGs + 1 sprite | `<svg><use href="#nexa-bell"/></svg>` |
| JavaScript | `@sairamanapb/icons/js` ESM + CJS | zero dependencies, `svg`/`sprite`/`categories`/`swapSvg` |
| TypeScript / React | `@sairamanapb/icons` | 650 components + `Icon`/`IconSwap`/`IconToggle`, `.d.ts`, deep import |
| Go | `github.com/nexa-icons/nexa/go` | zero deps, `Get`/`SVG`/`Symbol`/`Sprite`/`Categories`/`SwapSVG` |
| Rust | crate `nexa-icons` | zero deps, `get`/`svg`/`symbol_with`/`sprite_with`/`categories`/`swap_svg` |
| Rust + GPUI | `nexa-icons-gpui` | gpui 0.2.2 adapter, asset source, size-aware stroke, text-color inheritance |

## 9. Weight (measured, brotli q11)

| Artefact | Raw | Brotli |
|---|---:|---:|
| One tree-shaken React icon (incl. shape/fill/3D code) | 4,155 B | **1,828 B** |
| 8 icons / 50 icons | — | 2,308 B / 3,347 B |
| Full sprite (1,034 symbols) | 441,992 B | 45,293 B |
| Animation + shape/fill/3D CSS | 17,290 B | 3,583 B |
| Vanilla JS ESM (all 1,034, zero-dep) | 486,467 B | 62,847 B |
| Gallery shell / data / app (local files, 0 third-party) | 30,409 / 550,465 / 88,175 B | 7,247 / 76,020 / 18,757 B |

Reference point measured in the same harness: one Lucide icon tree-shaken =
Lucide 1,571 B brotli in the same harness; Nexa is **1,828 B** for the first icon (the extra accessibility, closed-fill and em-frame logic). At 168 icons Nexa is still ~19% lighter (9.9 KB vs 12.1 KB br).

## 10. What makes this different from typical icon packages

| Dimension | Nexa Icons | Typical icon package |
|---|---|---|
| **One source, five targets** | One JSON catalog code-generates React, ESM/CJS JS, Go, Rust and a GPUI adapter; Go/Rust render **byte-identical markup** to the JS reference (parity-tested) | Usually one language binding; ports drift |
| **Presentation layer is part of the library** | 17 semantic animations with 7 triggers, 49 swap/morph edges, 7 shape containers, outline/duotone/solid fill with animation, 4 CSS-3D presets, 7 frosted-glass surfaces and 8 gradient presets — all CSS/SVG only, reduced-motion/forced-colours safe | Usually static SVGs; animation is left to the app or a JS animation library |
| **Semantic motion, not generic effects** | Each of the 1,034 icons is mapped to a meaning-appropriate preset (bell rings, heart beats, arrows nudge in their direction, loaders spin) | Uniform “hover scale/rotate” or nothing |
| **Category-first imports** | `@sairamanapb/icons/communication` (and matching metadata in JS/Go/Rust) with 24 curated categories | Flat names only, or categories only in docs |
| **Tiny incremental payload** | ~48 B brotli per extra icon after the first; 13-icon page ≈2.37 KB br; no icon font or sprite fetch | Icon fonts (hundreds of KB), or per-icon modules |
| **Zero runtime dependencies** | JS path has none; React is an optional peer; Go/Rust have zero deps | Often a runtime/helper dependency |
| **Native Rust UI support** | `nexa-icons-gpui` — actual GPUI element, asset source, text-color inheritance, size-aware stroke | Icon packages rarely ship native GUI adapters |
| **Illustrated set built in** | 12 duotone illustrations in the same system as the UI icons (empty states, onboarding, features) | Separate illustration pack with a different visual language |
| **Correct-by-construction themes** | 100 % `currentColor`, no hard-coded hex in any glyph; light/dark/accents/high-contrast verified; 3:1 contrast | Hex colours embedded in SVG files |
| **Regeneration, not hand-maintenance** | Add an icon/pair/category once → codegen for every language + tests + gallery; generated files are marked and budget-gated | Mix of hand-edited SVG directories |
| **Honest performance numbers** | 1-icon/8/50 bundles, gallery first-paint, tree-shaking proof, no-WASM rationale, all reproducible in `bench/` | Marketing claims without harnesses |
| **Agent-ready** | `AGENTS.md` + `skills/nexa-icons/SKILL.md` + stable APIs for HTML/JS/TS/Go/Rust/GPUI | Docs for humans only |

**Not the goal:** replacing Lucide’s 1,600+ raw shapes, or being a general vector
editor. Nexa is an opinionated, product-grade *system*: a curated 1,034-icon
catalog, one visual language, and the presentation/accessibility/perf plumbing
already solved in five languages.
