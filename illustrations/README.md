# Nexa Icons — Illustrated set

Twelve expressive duotone illustrations for **empty states, feature cards,
onboarding and marketing** — the larger sibling of the Nexa stroke-icon set.
One consistent system: **64 × 64 viewBox, 2.5 px currentColor outlines, soft
duotone washes, one accent detail per illustration**, theme-safe on
`#fafafa` (light) and `#0c0c0e` (dark), grayscale-safe, and dependency-free.

```
illustrations/
├─ manifest.json          # machine-readable catalog (12 entries)
├─ preview.html           # self-contained gallery: light/dark, 48/96/192, accent, grayscale
├─ README.md              # this file
├─ *.svg                  # 12 standalone illustrations (this folder)
└─ tools/                 # preview builder, screenshot renderer, verifier
```

## 1. The set

| # | id | Title | Usage | Motif |
|---|---|---|---|---|
| 1 | `no-jobs` | No open roles | empty-state | briefcase + empty badge |
| 2 | `search` | No results found | empty-state | magnifier + empty document + accent cross |
| 3 | `resume-upload` | Upload your resume | onboarding | document + upload arrow + accent fold |
| 4 | `interview` | Interview conversation | feature | two speech bubbles + accent dots |
| 5 | `offer` | Offer letter | feature | letter + accent check + celebration sparks |
| 6 | `remote` | Remote workspace | feature | laptop + accent location pin + signal waves |
| 7 | `analytics` | Analytics report | feature | chart card + trend line + accent data point |
| 8 | `security` | Security and privacy | feature | shield + accent check |
| 9 | `empty-inbox` | Empty inbox | empty-state | inbox tray + floating accent dot |
| 10 | `welcome` | Welcome aboard | onboarding | paper plane + accent dotted flight path |
| 11 | `verified` | Verified success | feature | check medal with ribbon tails |
| 12 | `team` | Team and hiring | feature | three people + accent connection arc |

`manifest.json` is the single source of truth for galleries, docs and CMSs:

```json
{
  "id": "no-jobs",
  "title": "No open roles",
  "description": "An empty briefcase with a dashed empty badge — use when a job search or pipeline returns nothing.",
  "tags": ["jobs", "empty-state", "briefcase", "no-results", "hiring"],
  "file": "no-jobs.svg",
  "viewBox": "0 0 64 64",
  "themes": ["light", "dark"],
  "usage": "empty-state"
}
```

`file` is relative to this folder. `usage` is one of `empty-state` | `feature` |
`onboarding`.

## 2. Design system

The illustrations are one system, not twelve drawings. The rules:

| Token | Value | Notes |
|---|---|---|
| Canvas | `64 × 64`, live area 48 × 48 (8 px optical margin) | No 96 × 96 variant needed — every concept fits at 64. |
| Stage | circle `r=24` **or** rounded square `48 × 48, r=11`, `fill-opacity .07` | Circle = state/people/scene; square = surface/document/workplace. One stage per illustration. |
| Outline | `stroke="currentColor"`, `2.5` outline / `2` detail / `3` accent + emphasis, round caps + joins | Three-step weight scale — same optical family as the 24 px icon set. |
| Soft fill | `currentColor` at `fill-opacity .14` (primary object), `.10` (secondary), `.07` (stage), `.20` (accent fill), `.35` (decoration), `.45` (accent dots) | Six fixed steps only — no ad-hoc values. |
| Accent | exactly **one semantic focal detail** per illustration, via `--nexa-ill-accent` (stroke or soft fill) | Checks, pins, data points, the "empty" minus, the flight path, the connection arc. Never used for decoration. |
| Decoration | 4-point spark / dot at `fill-opacity .28–.38`, always `currentColor` | Keeps the set lively in grayscale; the accent stays meaningful. |
| Detail budget | 4–8 elements per illustration (plus the stage), 2–4 fills, ≤ 2 decorative specks, exactly one accent detail | Reads at 48 px and stays clean at 192 px. |

No gradients on purpose: layered flat opacities are more predictable across
renderers (SVG, `img`, CSS mask, forced colors) and keep every file under 1.1 KB.
The duotone depth comes from the opacity stack, which is also what makes the set
gracefully degrade to a single color.

### Theming contract

- Every stroke and fill references `currentColor` — **zero hex, zero rgb(), zero
  named colors** in the artwork.
- The optional tokens are CSS custom properties, resolved at the SVG:

| Token | Default | What it controls |
|---|---|---|
| `--nexa-ill-fg` | `currentColor` | optional override for the foreground (rarely needed — set `color` instead) |
| `--nexa-ill-soft` | `currentColor` | the soft duotone washes |
| `--nexa-ill-accent` | `currentColor` | the single semantic accent detail |

Because the fallback is `currentColor`, an unthemed surface looks correct
immediately: identical to the surrounding text color, with washes and accent as
opacity layers. Set the tokens to brand them.

## 3. Usage

### Plain HTML (recommended: inline SVG)

Inline SVG is the primary path: it inherits `color`, works with the CSS
variables, and has no extra request. Copy the file’s content between
`<svg …>` and `</svg>` into the page:

```html
<!-- light surface -->
<div class="empty-state" style="color:#3f3f46">
  <svg viewBox="0 0 64 64" width="96" height="96" aria-hidden="true" focusable="false">
    <!-- paste the contents of illustrations/no-jobs.svg -->
  </svg>
  <p>No open roles right now</p>
</div>

<!-- dark surface: only the color changes, the artwork follows -->
<div class="empty-state" style="color:#d4d4d8">…</div>
```

Alternatively load the file as a document (`<object data="no-jobs.svg">`) when
you need it isolated; that document cannot inherit `color`, so use the CSS-mask
recipe in §3 for theme-aware rendering.

### React

```tsx
// Vite / webpack 5 / Next.js: raw import, then inline
import noJobs from "@sairamanapb/icons/illustrations/no-jobs.svg?raw";

export function EmptyJobs() {
  return (
    <div className="empty" style={{ color: "var(--nexa-fg-muted)" }}>
      <span
        aria-hidden="true"
        style={{ display: "inline-block", width: 96, height: 96 }}
        dangerouslySetInnerHTML={{ __html: noJobs }}
      />
      <p>No open roles right now</p>
    </div>
  );
}
```

With SVGR (`import { ReactComponent as NoJobs } from "…/no-jobs.svg"`) or a
small wrapper that reads the manifest, the same pattern applies. A typed helper
can be generated from `manifest.json`:

```tsx
import manifest from "@sairamanapb/icons/illustrations/manifest.json";

const ILLUSTRATIONS = Object.fromEntries(
  manifest.map((item) => [item.id, item])
);
```

### Vanilla JS / Node

```js
const res = await fetch("/assets/illustrations/no-jobs.svg");
const markup = await res.text();
document.querySelector("#empty").innerHTML = markup;
// then size + color from CSS:
//   #empty svg { width: 96px; height: 96px; }
//   #empty       { color: var(--nexa-fg-muted); }
```

### `<img src>` (static contexts)

```html
<img src="/assets/illustrations/no-jobs.svg" width="96" height="96" alt="" />
```

`<img>`-embedded SVG is a separate document: it **cannot inherit `color`**, so
`currentColor` resolves to the initial color (black). Use `img` only when a fixed
single-color render is acceptable (e.g. light-only marketing images), and use
`alt=""` when the illustration is decorative.

### CSS mask (theme-aware monochrome)

For fully theme-aware “image-like” usage, use the file as an alpha mask painted
with `currentColor`:

```css
.nexa-ill-mask {
  display: inline-block;
  width: 96px;
  height: 96px;
  background-color: currentColor;      /* theme drives the whole illustration */
  -webkit-mask: url("/assets/illustrations/no-jobs.svg") no-repeat center / contain;
          mask: url("/assets/illustrations/no-jobs.svg") no-repeat center / contain;
  mask-mode: alpha;                    /* alpha: washes become faint, outlines solid */
}
```

This is how the same asset can be dropped into any theme without JavaScript.

## 4. Sizing

The 64 × 64 viewBox scales cleanly; these are the tested stops:

| Context | Size | Notes |
|---|---|---|
| Inline empty state, compact cards | 48 px | silhouette reads; details stay crisp |
| Feature cards, empty states, onboarding | 96 px | primary size |
| Hero / marketing blocks, mobile splash | 192 px | strokes become 7.5 px — intentional illustration weight |
| Icon-adjacent | 32 px | only for the boldest motifs (`search`, `analytics`, `verified`) |

Set the size on the SVG (`width`/`height` attributes or CSS) — never edit the
viewBox. Keep the optical margin: do not crop to the artwork bounds.

## 5. Accessibility

Illustrations are **decorative by default** in the shipped files (no `role`, no
`aria-*`). Add semantics at the usage site:

```html
<!-- decorative: next to a visible heading or label -->
<svg viewBox="0 0 64 64" width="96" height="96" aria-hidden="true" focusable="false">…</svg>

<!-- meaningful: the only content of the block -->
<svg viewBox="0 0 64 64" width="96" height="96" role="img" aria-label="No open roles">
  <title>No open roles</title>
  …
</svg>
```

- `aria-hidden="true"` + `focusable="false"` for decoration — this is the normal
  case for empty states beside text.
- `role="img"` + `aria-label` (or a `<title>` child) when the illustration is
  the only content. Use the manifest `title`/`description` for the text.
- `<img>`: `alt=""` for decorative, `alt="No open roles"` for meaningful.
- Illustrations never carry meaning through color alone: they pair with text.
- Forced colors: because everything is `currentColor`, the artwork maps to
  system colors automatically. In CSS-mask mode the mask shape remains.
- Keep the minimum target size of the surrounding section ≥ 40 × 40 px; the
  illustration itself is not interactive.

## 6. Sprite technique (optional)

`preview.html` demonstrates the zero-duplication approach: each file is wrapped
once in a `<symbol>` and instanced with `<use>`. This is useful when the same
illustrations appear repeatedly (docs, gallery, marketing pages):

```html
<svg aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <symbol id="ill-no-jobs" viewBox="0 0 64 64" fill="none">
    <!-- inner markup of no-jobs.svg -->
  </symbol>
</svg>

<svg class="nexa-ill" aria-hidden="true" style="width:96px;height:96px">
  <use href="#ill-no-jobs" />
</svg>
```

`currentColor` and the `--nexa-ill-*` variables both inherit through `<use>`.

## 7. Customizing accent and washes

```css
/* Brand the focal detail (checks, pins, data points, the empty badge, arcs) */
.feature-card { --nexa-ill-accent: var(--nexa-accent); }

/* Tone the duotone washes down/up per surface */
.hero { --nexa-ill-soft: color-mix(in srgb, var(--nexa-fg) 60%, transparent); }

/* Or go fully monochrome */
.empty-state { --nexa-ill-accent: currentColor; }
```

Because the fallback is `currentColor`, unsetting a token is always safe. The
accent is deliberately one detail per illustration — do not use it to encode
status by itself; pair it with text (WCAG 1.4.1).

## 8. Verification

```bash
# 1. Well-formed XML + design-system invariants + size budgets + manifest integrity
python3 illustrations/tools/verify.py

# 2. Rebuild the self-contained gallery after editing SVGs/manifest
python3 illustrations/tools/build_preview.py

# 3. Re-render the review sheets (48/96/192, light + dark)
python3 illustrations/tools/render_sheets.py
python3 illustrations/tools/shot_preview.py
```

`verify.py` enforces: `xmllint` well-formedness, 64 × 64 viewBox, no external
references (`http`, `url(`, `<script`, `<image>`, fonts, rasters), no hard-coded
colors (`#hex`, `rgb()`, `hsl()`), ≤ 4 KB per file, ≤ 30 KB total, unique ids,
manifest files present, preview gallery containing every id.

## 9. Screenshots

Screenshots are **generated, not committed** (they would add MBs to the repo and
the npm tarball). Render the current set on demand with the tools above:

```bash
python3 illustrations/tools/render_sheets.py    # contact sheets + per-icon rows
python3 illustrations/tools/shot_preview.py     # preview gallery light/dark/accent
open illustrations/screenshots/preview-dark.png
```

The renderer produces light/dark contact sheets, per-illustration rows at
48/96/192, accent and grayscale passes, and the mobile preview. `screenshots/`
is git-ignored.

## 10. License

Original Nexa artwork, released under the repository’s ISC license (see
`../LICENSE`). Not derived from the Lucide/Feather geometry used by the stroke
icon set. Illustration names and ids are stable API for galleries/docs.
