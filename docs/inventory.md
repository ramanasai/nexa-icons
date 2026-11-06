# Nexa Icons — inventory & what makes it different

Generated from the shipped dataset (`data/icons.json`), category manifest
(`data/categories.json`), swap table (`data/swaps.json`), illustrations manifest
and the built artefacts. All numbers below are measured from the repo, not
estimated.

## 1. Totals at a glance

| Asset | Count | Notes |
|---|---:|---|
| Stroke icons (unique glyphs) | **1,000** | 24-category catalog, 24×24 grid, `currentColor` |
| Importable names (icons + aliases) | **1,002** | every original pre-expansion name still resolves (`Loader2`, `Home`, `MoreHorizontal`, `XIcon`, `TriangleAlert`, …) |
| Categories | **24** | 1,233 category memberships; 233 icons live in >1 category |
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
| React/TS components | **1,000** | tree-shakeable, typed, + aliases |
| Standalone SVGs | **1,000** | plus one 650-symbol sprite |
| Language targets | **5** | HTML/sprite, JS (ESM+CJS), TS/React, Go, Rust (+ GPUI adapter) |

## 2. Filled / unfilled / animated fill

| Fill state | Icons | How |
|---|---:|---|
| Outline (default / "empty") | **1,000** | stroke-only, the shipped base |
| Duotone (soft fill) | **1,000** | `variant="duotone"` / `filled="soft"` — theme-safe at 16 % opacity |
| Solid ("filled") | **58** | only **closed-geometry** glyphs fill cleanly (`fillSafe`) |
| Solid request on open geometry | **942** | automatically degrades to duotone — never produces a broken blob |
| Fill ↔ empty animation | **1,000** | `animateFill` — 320 ms `fill-opacity` transition, reduced-motion safe |

```tsx
<Heart filled animateFill />          // 45 solid-capable glyphs
<Bell variant="duotone" />            // any glyph
<Bookmark filled={false} />           // outline
```

## 3. 3D inventory (honest scope)

| Item | Count | Detail |
|---|---:|---|
| Icons that support CSS-3D presets | **1,000** | every icon accepts `threeD` |
| 3D presets | **4** | `tilt`, `flip`, `orbit`, `extrude` |
| Icon × preset combinations | **4,000** | `1,000 × 4` |
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
| **Total presentations** | **1,000 × 8** (7 shapes + none) = **5,200** | all follow `currentColor`, tint 14 % / border 26 % |

Glass and gradients compose with shapes, fills, 3D and animation:
`1,000 × 7` glass surfaces = **4,550**, `1,000 × 8` gradient strokes = **5,200**, and
frosted-gradient tile combinations (`7 × 8`) — all opt-in via
`@nexa/icons/effects.css` (8,468 B raw / 1,926 B brotli).

## 5. Animation presets (1,000 icons mapped)

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
| **Total** | **1,000** | | |

Triggers: 649 icons animate on `hover` by default; 1 (`Loader2`/`LoaderCircle`) is
`always` (infinite spinner). `focus`, `press`, `inview`, `mount`, `manual` are
opt-in per instance.

## 6. Categories (24)

| Category | Icons | Import |
|---|---:|---|
| Health & Wellness | 45 | `@nexa/icons/health` |
| Finance & Money | 44 | `@nexa/icons/finance` |
| Food & Drink | 48 | `@nexa/icons/food` |
| Weather & Nature | 43 | `@nexa/icons/weather` |
| Education & Learning | 37 | `@nexa/icons/education` |
| Travel & Transport | 48 | `@nexa/icons/travel` |
| Shopping & Commerce | 59 | `@nexa/icons/commerce` |
| Security & Privacy | 44 | `@nexa/icons/security` |
| Communication | 59 | `@nexa/icons/communication` |
| Media & Camera | 51 | `@nexa/icons/media` |
| Files & Folders | 65 | `@nexa/icons/files` |
| Data & Analytics | 45 | `@nexa/icons/data` |
| Devices & Hardware | 63 | `@nexa/icons/devices` |
| Development | 49 | `@nexa/icons/development` |
| Editing & Text | 65 | `@nexa/icons/editing` |
| Design & Shapes | 58 | `@nexa/icons/design` |
| Time & Calendar | 36 | `@nexa/icons/time` |
| People & Users | 44 | `@nexa/icons/people` |
| Navigation & Maps | 40 | `@nexa/icons/navigation` |
| Layout & UI | 59 | `@nexa/icons/layout` |
| Status & Feedback | 51 | `@nexa/icons/status` |
| Actions & Controls | 65 | `@nexa/icons/actions` |
| Arrows & Direction | 59 | `@nexa/icons/arrows` |
| Places & Work | 56 | `@nexa/icons/places` |
| **Total memberships** | **1233** | 233 icons in 2+ categories |

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
| JavaScript | `@nexa/icons/js` ESM + CJS | zero dependencies, `svg`/`sprite`/`categories`/`swapSvg` |
| TypeScript / React | `@nexa/icons` | 650 components + `Icon`/`IconSwap`/`IconToggle`, `.d.ts`, deep import |
| Go | `github.com/nexa-icons/nexa/go` | zero deps, `Get`/`SVG`/`Symbol`/`Sprite`/`Categories`/`SwapSVG` |
| Rust | crate `nexa-icons` | zero deps, `get`/`svg`/`symbol_with`/`sprite_with`/`categories`/`swap_svg` |
| Rust + GPUI | `nexa-icons-gpui` | gpui 0.2.2 adapter, asset source, size-aware stroke, text-color inheritance |

## 9. Weight (measured, brotli q11)

| Artefact | Raw | Brotli |
|---|---:|---:|
| One tree-shaken React icon (incl. shape/fill/3D code) | 3,500 B | **1,544 B** |
| 8 icons / 50 icons | — | 2,036 B / 3,347 B |
| Full sprite (1,000 symbols) | 343,455 B | 41,198 B |
| Animation + shape/fill/3D CSS | 16,198 B | 3,270 B |
| Vanilla JS ESM (all 1,000, zero-dep) | 359,069 B | 57,507 B |
| Gallery shell / data / app (local files, 0 third-party) | 30,402 / 444,244 / 87,603 B | 7,054 / 71,291 / 18,645 B |

Reference point measured in the same harness: one Lucide icon tree-shaken =
1,782 B brotli — Nexa is **1,544 B** for the same job.

## 10. What makes this different from typical icon packages

| Dimension | Nexa Icons | Typical icon package |
|---|---|---|
| **One source, five targets** | One JSON catalog code-generates React, ESM/CJS JS, Go, Rust and a GPUI adapter; Go/Rust render **byte-identical markup** to the JS reference (parity-tested) | Usually one language binding; ports drift |
| **Presentation layer is part of the library** | 17 semantic animations with 7 triggers, 49 swap/morph edges, 7 shape containers, outline/duotone/solid fill with animation, 4 CSS-3D presets, 7 frosted-glass surfaces and 8 gradient presets — all CSS/SVG only, reduced-motion/forced-colours safe | Usually static SVGs; animation is left to the app or a JS animation library |
| **Semantic motion, not generic effects** | Each of the 1,000 icons is mapped to a meaning-appropriate preset (bell rings, heart beats, arrows nudge in their direction, loaders spin) | Uniform “hover scale/rotate” or nothing |
| **Category-first imports** | `@nexa/icons/communication` (and matching metadata in JS/Go/Rust) with 24 curated categories | Flat names only, or categories only in docs |
| **Tiny per-icon payload** | 1,544 B brotli for one icon incl. the whole presentation factory; no icon font, no sprite fetch needed | Icon fonts (hundreds of KB), or ~1.8 KB per icon |
| **Zero runtime dependencies** | JS path has none; React is an optional peer; Go/Rust have zero deps | Often a runtime/helper dependency |
| **Native Rust UI support** | `nexa-icons-gpui` — actual GPUI element, asset source, text-color inheritance, size-aware stroke | Icon packages rarely ship native GUI adapters |
| **Illustrated set built in** | 12 duotone illustrations in the same system as the UI icons (empty states, onboarding, features) | Separate illustration pack with a different visual language |
| **Correct-by-construction themes** | 100 % `currentColor`, no hard-coded hex in any glyph; light/dark/accents/high-contrast verified; 3:1 contrast | Hex colours embedded in SVG files |
| **Regeneration, not hand-maintenance** | Add an icon/pair/category once → codegen for every language + tests + gallery; generated files are marked and budget-gated | Mix of hand-edited SVG directories |
| **Honest performance numbers** | 1-icon/8/50 bundles, gallery first-paint, tree-shaking proof, no-WASM rationale, all reproducible in `bench/` | Marketing claims without harnesses |
| **Agent-ready** | `AGENTS.md` + `skills/nexa-icons/SKILL.md` + stable APIs for HTML/JS/TS/Go/Rust/GPUI | Docs for humans only |

**Not the goal:** replacing Lucide’s 1,600+ raw shapes, or being a general vector
editor. Nexa is an opinionated, product-grade *system*: a curated 1,000-icon
catalog, one visual language, and the presentation/accessibility/perf plumbing
already solved in five languages.
