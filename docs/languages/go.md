# Nexa Icons for Go

Zero-dependency Go module generated from `data/icons.json`.

```bash
go get github.com/nexa-icons/nexa/go
```

The package directory is `go` (a reserved word), and the package itself is named
`nexaicons`, so import it with the standard alias:

```go
import nexaicons "github.com/nexa-icons/nexa/go"
```

Requires Go 1.22+. No external dependencies (`go.mod` has no `require` block).

## Quick start

```go
package main

import (
	"fmt"

	nexaicons "github.com/nexa-icons/nexa/go"
)

func main() {
	icon, ok := nexaicons.Get("bell") // "Bell", "BELL", "bell" all match
	if !ok {
		panic("unknown icon")
	}

	// Decorative inline SVG at the Nexa button size (stroke derived: 20 => 1.75).
	fmt.Println(icon.SVG(nexaicons.Size(20)))

	// Labelled (meaningful) icon: role="img" + aria-label instead of aria-hidden.
	fmt.Println(icon.SVG(nexaicons.Size(24), nexaicons.Label("Alerts")))

	// Animated: the SVG carries the CSS animation contract.
	fmt.Println(icon.SVG(nexaicons.Anim("ring")))

	fmt.Println(icon.Preset, icon.Trigger) // ring hover
}
```

## API

| Symbol | Signature | Notes |
|---|---|---|
| `Icon` | struct | `Name`, `Kebab`, `Preset`, `Trigger`, `Aliases []string`, `Keywords []string`, `Inner string` |
| `Icons` | `map[string]Icon` | keyed by canonical name; prefer `Get` |
| `Get(name)` | `(Icon, bool)` | canonical name, kebab, alias; case-insensitive; separators ignored |
| `Names()` | `[]string` | 650 canonical names, sorted |
| `Symbol(name, opts ...SymbolOption)` | `(string, bool)` | one `<symbol id="nexa-…">`; stroke fixed at 2 unless overridden |
| `Sprite(opts ...SpriteOption)` | `string` | one inline `<svg>` with 650 `<symbol id="nexa-…">` |
| `Icon.SVG(opts ...Option)` | `string` | inline SVG (size-aware) |
| `Pair(name)` | `(SwapPair, bool)` | `{From, To, Mode}` swap counterpart |
| `Pairs()` | `[]SwapPair` | all 49 directed swap edges, incl. `From` |
| `SwapMode(name)` | `string` | mode for a pair, `"fade"` fallback |
| `SwapSVG(from, to, opts ...SwapOption)` | `string` | two-layer `.nexa-swap` widget; `""` if a name is unknown |
| `Categories()` | `[]Category` | all 24 categories in catalog order; `Category{ID, Label, Description, Icons}` |
| `ByCategory(id)` | `(Category, bool)` | one category by kebab id (e.g. `"communication"`) |

### Options

| Option | Default | Effect |
|---|---|---|
| `Size(px int)` | 24 | square `width`/`height`; viewBox stays `0 0 24 24`; stroke derives from size |
| `StrokeWidth(w float64)` | auto (16→2, 20→1.75, 24+→1.5) | explicit stroke override |
| `Class(name string)` | — | extra class, appended to the always-present `nexa-icon` |
| `Label(text string)` | — | `role="img"` + escaped `aria-label`; omit for `aria-hidden` |
| `Title(text string)` | — | adds a `<title>` child and makes the icon labelled |
| `Anim(preset string)` | — | adds `data-nexa-anim`, `data-nexa-trigger` |
| `Trigger(trigger string)` | icon's semantic trigger | overrides `data-nexa-trigger` when `Anim` is set |
| `Active(bool)` | `false` | adds `data-nexa-active="true"` when `Anim` is set |

Every `Icon.SVG` emits `class="nexa-icon"`, `focusable="false"` and
`data-nexa-icon="<kebab>"` — same contract as React/JS/Rust. Options are applied
in order; non-positive size/stroke values are ignored so defaults stay safe.

Sprite symbols are fixed at `stroke-width="2"` by default; override with
`SymbolStrokeWidth(w)` / `SpriteStrokeWidth(w)` when you need another weight
(the inline `Icon.SVG` stays size-aware). Load `animations.css` in the page for `Anim` to actually
move — the Go package only emits the attributes (`go test` proves this).

### Swap / morph

```go
pair, ok := nexaicons.Pair("ArrowLeft") // {From: "ArrowLeft", To: "ArrowRight", Mode: "mirror"}
mode := nexaicons.SwapMode("Sun")       // "rotate"

// Two-layer markup; flip data-nexa-active in your UI to animate.
html := nexaicons.SwapSVG("ArrowLeft", "ArrowRight",
    nexaicons.SwapActive(false),
    nexaicons.SwapDuration(260),
    nexaicons.SwapLabel("Direction"),
    nexaicons.SwapSize(20),
)
```

`SwapSVG` options: `SwapActive(bool)`, `SwapDuration(ms)`,
`SwapTransition(mode)` (`auto`/empty = pair mode), `SwapLabel`, `SwapClass`,
`SwapSize(px)`, `SwapStrokeWidth(w)` (auto size→stroke when unset). The markup
matches the React/JS contract (`nexa-swap`, `nexa-swap__a`, `nexa-swap__b` with
both layers `aria-hidden="true"`, `data-mode`, `data-nexa-active`). Unknown names return `""`; check `Get` first
for dynamic names.

## Lookup rules

`Get` resolves, case-insensitively:

1. canonical PascalCase name (`Bell`, `AlertTriangle`, `ImageIcon`)
2. kebab-case name (`bell`, `triangle-exclamation-point`)
3. alias (`XIcon` → `X`, `TriangleAlert` → `AlertTriangle`)

Separators are ignored entirely, matching JS/React: `"Triangle Alert"`,
`"Alert_Triangle"`, `"Alert-Triangle"` and `"RotateCcwClock"` all resolve.

```go
icon, ok := nexaicons.Get("TriangleAlert") // ok == true, icon.Name == "AlertTriangle"
```

## Sprite

```go
// inline once per page (e.g. in the layout template)
fmt.Fprint(w, nexaicons.Sprite())
```

```html
<svg class="nexa-icon" aria-hidden="true"><use href="#nexa-bell"/></svg>
```

`Sprite()` matches the canonical `sprite.svg` presentation attributes
(`fill="none" stroke="currentColor" stroke-width="2"` round caps/joins) and is
safe to inline in HTML.

## Verify

```bash
cd go
go vet ./...
go test ./...
```

The module test suite checks the 650-icon count, aliases, lookup rules, sprite
symbol completeness, option behaviour, XML well-formedness of every rendered
icon, and that no output contains a hard-coded color.

## Presentation features

Shape containers, fill variants and CSS 3D are **React/vanilla-JS only**; the Go
module renders the base stroke icon, sprite, swap and category APIs.

## Categories

```go
all := nexaicons.Categories()          // []Category, catalog order
communication, ok := nexaicons.ByCategory("communication")
fmt.Println(communication.Label, len(communication.Icons))
```

Categories are generated from `data/categories.json`: 24 categories today
(navigation, arrows, actions, communication, media, files, data, finance, people,
security, status, time, weather, devices, design, travel, places, education,
health, food, development, commerce, editing, layout).

## Notes

- The SVG output is built with `strings.Builder` and escaped with
  `html.EscapeString`; `Inner` is trusted generated markup.
- Rendering is allocation-light but not cached: call `Sprite()` once at startup,
  not per request.
- Animation, theming, sizing rules and accessibility are identical to the React
  package — see [api.md](../api.md), [animations.md](../animations.md),
  [theming.md](../theming.md).
