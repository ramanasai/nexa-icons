# nexa-icons (Go)

Zero-dependency Go module for the **Nexa Icons** set: **650** stroke-only icons on
a 24x24 grid, derived from [Lucide 1.70](https://lucide.dev/license) (ISC, with
the Feather MIT derivation notice) and shipped with Nexa animation and swap
metadata.

Every inline icon renders as SVG with `fill="none"`, `stroke="currentColor"`,
round caps/joins and no hard-coded colors, so it inherits the surrounding text
color in light and dark themes. The rendered markup (attribute set, order and
values) matches the JavaScript reference implementation in `js/index.mjs`.

## Install

```bash
go get github.com/nexa-icons/nexa/go
```

```go
import nexaicons "github.com/nexa-icons/nexa/go"
```

The package is named `nexaicons` because `go` is a reserved word in Go.

## Quick start

```go
package main

import (
	"fmt"

	nexaicons "github.com/nexa-icons/nexa/go"
)

func main() {
	icon, ok := nexaicons.Get("bell") // Bell / BELL / "Bell" all match
	if !ok {
		panic("unknown icon")
	}

	// Inline SVG at the Nexa "button" size; stroke follows the size rule.
	fmt.Println(icon.SVG(
		nexaicons.Size(20),
		nexaicons.StrokeWidth(1.75), // optional; 1.75 is already derived from 20px
		nexaicons.Label("Alerts"),
	))

	// Animated + titled + active: motion is CSS, the SVG carries the data contract.
	fmt.Println(icon.SVG(
		nexaicons.Anim(icon.Preset),
		nexaicons.Trigger("focus"),
		nexaicons.Active(true),
		nexaicons.Title("Notifications"),
	))

	// Sprite helpers (fixed 2px stroke symbols).
	symbol, _ := nexaicons.Symbol("Bell") // one <symbol id="nexa-bell">…
	fmt.Println(symbol)
	fmt.Println(nexaicons.Sprite())       // inline once, then <use href="#nexa-bell"/>
	fmt.Println(nexaicons.Sprite(nexaicons.SpriteStrokeWidth(1.5)))
}
```

## API

### Icons and lookup

| Symbol | Description |
| --- | --- |
| `type Icon struct { Name, Kebab, Preset, Trigger string; Aliases, Keywords []string; Inner string }` | One icon record from `data/icons.json`. `Inner` is ready-to-embed SVG child markup. |
| `var Icons map[string]Icon` | All 650 icons keyed by canonical name. |
| `func Get(name string) (Icon, bool)` | Case-insensitive lookup by canonical name, kebab or alias. |
| `func Names() []string` | All canonical names, sorted, deterministic. |
| `const Version` | Dataset version from `data/icons.json`. |

`Get` uses the same normalization as the JavaScript package: it lower-cases and
strips every space, underscore and hyphen. All of these resolve to
`AlertTriangle`: `AlertTriangle`, `triangle-exclamation-point`,
`TRIANGLE-EXCLAMATION-POINT`, `Triangle Alert`, `Alert Triangle`,
`Alert-Triangle`, `triangle_exclamation_point`. `XIcon` resolves to `X`;
`RotateCcwClock` resolves to `History` (via its kebab).

### Inline SVG

| Symbol | Description |
| --- | --- |
| `func (i Icon) SVG(opts ...Option) string` | Standalone SVG string matching the JS markup contract. |
| `Size(n int)` | Square width/height in px (default 24). Stroke is derived from the size unless overridden. |
| `StrokeWidth(w float64)` | Explicit stroke width override. |
| `Class(s string)` | Extra class added after the mandatory `nexa-icon` class. |
| `Label(s string)` | `role="img"` + escaped `aria-label`. |
| `Title(s string)` | `role="img"` + `<title>` child. May be combined with `Label`. |
| `Anim(preset string)` | Adds `data-nexa-anim` and `data-nexa-trigger`. |
| `Trigger(s string)` | Overrides `data-nexa-trigger` when `Anim` is set (`hover`, `focus`, `manual`, `press`, `inview`, `always`, …). |
| `Active(bool)` | Adds `data-nexa-active="true"` when `Anim` is set. |

Defaults: 24px, decorative (`aria-hidden="true"`), `class="nexa-icon"`,
`focusable="false"` and `data-nexa-icon="<kebab>"`. Attribute set/order matches JS:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
     fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
     stroke-linejoin="round" class="nexa-icon" aria-hidden="true" focusable="false"
     data-nexa-icon="bell">…</svg>
```

### Nexa size → stroke rule

| Use | Size | Stroke |
| --- | --- | --- |
| Inline text, table cells, badges | 16px | 2 |
| Buttons, inputs, nav items | 20px | 1.75 |
| Section headers, cards | 24px | 1.5 |
| Feature tiles, empty states | 32-48px | 1.5 |

`Icon.SVG` applies this rule automatically from `Size`; pass `StrokeWidth` only
to override it.

### Symbols and sprite

| Symbol | Description |
| --- | --- |
| `func Symbol(name string, opts ...SymbolOption) (string, bool)` | One `<symbol id="nexa-<kebab>">`; bool is false for unknown icons. |
| `SymbolStrokeWidth(w float64)` | Symbol stroke-width, default **2**. |
| `func Sprite(opts ...SpriteOption) string` | All 650 icons as one inline SVG sprite. |
| `SpriteStrokeWidth(w float64)` | Sprite symbol stroke-width, default **2**. |

**Fixed vs size-aware:** sprite symbols are a definition container and use a
fixed stroke width of **2 by default** (matching `sprite.svg` and JS
`sprite()`), independent of how large the `<use>` is. Inline icons rendered by
`Icon.SVG` are size-aware (16 => 2, 20 => 1.75, 24+ => 1.5). Use
`SpriteStrokeWidth`/`SymbolStrokeWidth` when a sprite is consumed at a different
weight.

### Swap / morph pairs

| Symbol | Description |
| --- | --- |
| `type SwapPair struct { From, To, Mode string }` | One directed edge: canonical source, counterpart, CSS transition. |
| `func Pair(name string) (SwapPair, bool)` | Semantic counterpart for a click toggle; alias/kebab/case-insensitive. |
| `func Pairs() []SwapPair` | All 49 directed edges (26 declared + implied reverses), `[from, to, mode]` like JS `SWAP_PAIRS`. |
| `func SwapMode(name string) string` | Transition mode for a pair; falls back to `"fade"`. |
| `func SwapSVG(from, to string, opts ...SwapOption) string` | Two-layer swap widget matching JS/React; `""` for unknown icons. |
| `SwapActive(bool)`, `SwapDuration(ms int)`, `SwapTransition(mode string)`, `SwapLabel(string)`, `SwapClass(string)`, `SwapSize(int)`, `SwapStrokeWidth(float64)` | Swap options. |

```go
pair, _ := nexaicons.Pair("ArrowLeft") // {ArrowLeft ArrowRight mirror}
mode := nexaicons.SwapMode("Sun")      // "rotate"
markup := nexaicons.SwapSVG("ArrowLeft", "ArrowRight",
	nexaicons.SwapActive(open),
	nexaicons.SwapLabel("Toggle sidebar"),
)
```

```html
<span class="nexa-swap" data-mode="mirror" data-nexa-active="false"
      style="--nexa-swap-dur:260ms" aria-hidden="true"
><span class="nexa-swap__a" aria-hidden="true"><svg …/></span
><span class="nexa-swap__b" aria-hidden="true"><svg …/></span
></span>
```

The transition itself is CSS-only (flip `data-nexa-active` from a click handler).
`SwapTransition` is named that way because `SwapMode` is the pair-mode query.

### Accessibility

Decorative icons are `aria-hidden="true"` by default. Pass `Label(...)` and/or
`Title(...)` for icon-only controls and standalone illustrations. Never use an
icon alone to convey status; pair it with text.

## Regeneration

`icons_gen.go` is generated from `data/icons.json` + `data/swaps.json`. Do not
edit it by hand.

```bash
node scripts/generate-go.mjs   # requires Node and gofmt on PATH
cd go && gofmt -l . && go vet ./... && go test ./...
```

The generator is deterministic: re-running it produces byte-identical output and
fails loudly if counts, kebab-case, aliases, swap modes or color rules drift.

## Notes

- No external dependencies; standard library only.
- `Pair`/`SwapSVG` read the generated swap table; all lookups share `Get`'s
  compact normalization.
- No hard-coded colors anywhere: icons paint with `currentColor` only.

## License

ISC. Icon geometry from Lucide 1.70 (ISC); a subset derives from
[Feather](https://feathericons.com) (MIT). See the repository `LICENSE`/`NOTICE`.
