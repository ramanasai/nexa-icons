// Independent QA probe for the Go package.
//
// Runs against the real module via a local `replace` (never modifying go/):
// checks generated-data parity with data/icons.json, the SVG/aria contract,
// the sprite, and the swap API.
package main

import (
	"encoding/json"
	"fmt"
	"os"
	"reflect"
	"sort"
	"strings"

	nexa "github.com/nexa-icons/nexa/go"
)

type iconData struct {
	Name     string   `json:"name"`
	Kebab    string   `json:"kebab"`
	Aliases  []string `json:"aliases"`
	Keywords []string `json:"keywords"`
	Anim     struct {
		Preset  string `json:"preset"`
		Trigger string `json:"trigger"`
	} `json:"anim"`
	Inner string `json:"inner"`
}

type dataset struct {
	Meta struct {
		Count     int `json:"count"`
		Requested int `json:"requested"`
	} `json:"meta"`
	Icons []iconData `json:"icons"`
}

type swapFile struct {
	Pairs [][3]string `json:"pairs"`
}

type categoryFile struct {
	Categories []struct {
		ID          string   `json:"id"`
		Label       string   `json:"label"`
		Description string   `json:"description"`
		Icons       []string `json:"icons"`
	} `json:"categories"`
}

var (
	errors   []string
	checks   int
	fail     = func(format string, args ...any) { errors = append(errors, fmt.Sprintf(format, args...)) }
	expect   = func(ok bool, format string, args ...any) {
		checks++
		if !ok {
			fail(format, args...)
		}
	}
)

func readJSON(path string, out any) error {
	raw, err := os.ReadFile(path)
	if err != nil {
		return err
	}
	return json.Unmarshal(raw, out)
}

func main() {
	var data dataset
	if err := readJSON("../../../data/icons.json", &data); err != nil {
		fmt.Println(`{"ok":false,"errors":["cannot read dataset: ` + err.Error() + `"]}`)
		os.Exit(1)
	}
	var swaps swapFile
	if err := readJSON("../../../data/swaps.json", &swaps); err != nil {
		fail("cannot read swaps: %v", err)
	}
	var cats categoryFile
	if err := readJSON("../../../data/categories.json", &cats); err != nil {
		fail("cannot read categories: %v", err)
	}

	expect(len(data.Icons) > 0, "dataset is empty")
	iconCount := len(data.Icons)
	expect(len(nexa.Icons) == iconCount, "nexa.Icons has %d icons, want %d", len(nexa.Icons), iconCount)
	names := nexa.Names()
	expect(len(names) == iconCount, "Names() returned %d entries, want %d", len(names), iconCount)
	expect(sort.StringsAreSorted(names), "Names() is not sorted")

	// Per-icon parity with the canonical dataset.
	byName := map[string]iconData{}
	for _, di := range data.Icons {
		byName[di.Name] = di
		icon, ok := nexa.Get(di.Name)
		expect(ok, "Get(%q) not found", di.Name)
		if !ok {
			continue
		}
		expect(icon.Name == di.Name, "%s: Name=%q", di.Name, icon.Name)
		expect(icon.Kebab == di.Kebab, "%s: Kebab=%q want %q", di.Name, icon.Kebab, di.Kebab)
		expect(icon.Preset == di.Anim.Preset, "%s: Preset=%q want %q", di.Name, icon.Preset, di.Anim.Preset)
		expect(icon.Trigger == di.Anim.Trigger, "%s: Trigger=%q want %q", di.Name, icon.Trigger, di.Anim.Trigger)
		expect(reflect.DeepEqual(icon.Aliases, di.Aliases), "%s: Aliases differ", di.Name)
		expect(reflect.DeepEqual(icon.Keywords, di.Keywords), "%s: Keywords differ", di.Name)
		expect(icon.Inner == di.Inner, "%s: Inner differs", di.Name)

		// Lookup by kebab and every alias, case-insensitively.
		for _, key := range append([]string{di.Kebab, strings.ToUpper(di.Name), strings.ToLower(di.Kebab)}, di.Aliases...) {
			got, ok := nexa.Get(key)
			expect(ok, "Get(%q) not found", key)
			if ok {
				expect(got.Name == di.Name, "Get(%q)=%q want %q", key, got.Name, di.Name)
			}
		}

		// SVG contract (parity with React/JS: class, focusable, data-nexa-icon).
		svg := icon.SVG()
		expect(strings.Contains(svg, di.Inner), "%s: SVG omits inner geometry", di.Name)
		expect(strings.Contains(svg, `viewBox="0 0 24 24"`), "%s: SVG viewBox", di.Name)
		expect(strings.Contains(svg, `stroke="currentColor"`), "%s: SVG stroke", di.Name)
		expect(strings.Contains(svg, `aria-hidden="true"`), "%s: SVG must be aria-hidden by default", di.Name)
		expect(strings.Contains(svg, `class="nexa-icon"`), "%s: SVG class", di.Name)
		expect(strings.Contains(svg, `focusable="false"`), "%s: SVG focusable", di.Name)
		expect(strings.Contains(svg, `data-nexa-icon="`+di.Kebab+`"`), "%s: SVG data-nexa-icon", di.Name)
		expect(!strings.Contains(svg, "#"), "%s: SVG contains a hard-coded colour", di.Name)
		labelled := icon.SVG(nexa.Size(20), nexa.Label("Alerts"))
		expect(strings.Contains(labelled, `role="img"`), "%s: labelled SVG role", di.Name)
		expect(strings.Contains(labelled, `aria-label="Alerts"`), "%s: labelled SVG aria-label", di.Name)
		expect(!strings.Contains(labelled, `aria-hidden`), "%s: labelled SVG must not be aria-hidden", di.Name)
		titled := icon.SVG(nexa.Title("Notifications"))
		expect(strings.Contains(titled, `<title>Notifications</title>`), "%s: title element", di.Name)

		animated := icon.SVG(nexa.Anim("pulse"))
		expect(strings.Contains(animated, `data-nexa-anim="pulse"`), "%s: anim attr", di.Name)
		expect(strings.Contains(animated, `data-nexa-trigger="`+di.Anim.Trigger+`"`), "%s: anim trigger", di.Name)
		expect(strings.Contains(icon.SVG(nexa.Anim("pulse"), nexa.Active(true)), `data-nexa-active="true"`), "%s: active attr", di.Name)
	}
	expect(len(byName) == iconCount, "dataset names not unique")

	// Size/stroke rule (parity: 16=>2, 20=>1.75, 24+=>1.5, explicit override wins).
	bell, _ := nexa.Get("Bell")
	for _, c := range []struct {
		size   int
		stroke string
	}{{16, "2"}, {20, "1.75"}, {24, "1.5"}, {40, "1.5"}} {
		svg := bell.SVG(nexa.Size(c.size))
		expect(strings.Contains(svg, fmt.Sprintf(`width="%d"`, c.size)), "Bell(%d): width", c.size)
		expect(strings.Contains(svg, `stroke-width="`+c.stroke+`"`), "Bell(%d): stroke %s", c.size, c.stroke)
	}
	expect(strings.Contains(bell.SVG(nexa.Size(16), nexa.StrokeWidth(1.25)), `stroke-width="1.25"`), "explicit StrokeWidth must win")
	swap16 := nexa.SwapSVG("Sun", "Moon", nexa.SwapSize(16))
	expect(strings.Contains(swap16, `width="16"`), "SwapSVG(Size 16): width")
	expect(strings.Contains(swap16, `stroke-width="2"`), "SwapSVG(Size 16): auto stroke rule")

	// Symbol / Sprite parity: fixed default stroke 2, overridable, exact sprite.svg.
	if symbol, ok := nexa.Symbol("Bell"); !ok || !strings.Contains(symbol, `stroke-width="2"`) || !strings.Contains(symbol, `id="nexa-bell"`) || !strings.Contains(symbol, bell.Inner) {
		fail("Symbol(Bell) contract mismatch")
	}
	if symbol, ok := nexa.Symbol("Bell", nexa.SymbolStrokeWidth(1.5)); !ok || !strings.Contains(symbol, `stroke-width="1.5"`) {
		fail("Symbol(Bell, SymbolStrokeWidth) contract mismatch")
	}
	if _, ok := nexa.Symbol("Nope"); ok {
		fail("Symbol(unknown) must be false")
	}
	if raw, err := os.ReadFile("../../../sprite.svg"); err == nil {
		if nexa.Sprite() != strings.TrimRight(string(raw), "\n") {
			fail("Sprite() differs from sprite.svg")
		}
	}
	expect(strings.Contains(nexa.Sprite(nexa.SpriteStrokeWidth(1.75)), `stroke-width="1.75"`), "SpriteStrokeWidth override")
	expect(!strings.Contains(nexa.Sprite(nexa.SpriteStrokeWidth(1.75)), `stroke-width="2"`), "SpriteStrokeWidth must replace default")

	// Category API parity with data/categories.json.
	goCategories := nexa.Categories()
	expect(len(goCategories) == len(cats.Categories), "Categories()=%d want %d", len(goCategories), len(cats.Categories))
	for _, cat := range cats.Categories {
		got, ok := nexa.ByCategory(cat.ID)
		expect(ok, "ByCategory(%q) not found", cat.ID)
		if !ok {
			continue
		}
		expect(got.ID == cat.ID, "ByCategory(%q).ID=%q", cat.ID, got.ID)
		expect(got.Label == cat.Label, "ByCategory(%q).Label=%q want %q", cat.ID, got.Label, cat.Label)
		expect(len(got.Icons) == len(cat.Icons), "ByCategory(%q) has %d icons want %d", cat.ID, len(got.Icons), len(cat.Icons))
		for index, name := range cat.Icons {
			if index < len(got.Icons) {
				expect(got.Icons[index].Name == name, "ByCategory(%q)[%d]=%q want %q", cat.ID, index, got.Icons[index].Name, name)
			}
		}
	}
	if _, ok := nexa.ByCategory("not-a-category"); ok {
		fail("ByCategory(unknown) unexpectedly found a category")
	}

	// Sprite must match the canonical sprite.svg byte-for-byte (minus newline).
	if raw, err := os.ReadFile("../../../sprite.svg"); err == nil {
		want := strings.TrimRight(string(raw), "\n")
		expect(nexa.Sprite() == want, "Sprite() differs from sprite.svg")
		expect(strings.Count(nexa.Sprite(), "<symbol") == iconCount, "Sprite() has %d symbols, want %d", strings.Count(nexa.Sprite(), "<symbol"), iconCount)
	} else {
		fail("cannot read sprite.svg: %v", err)
	}

	// Swap table: 26 declared + 23 implied reverses.
	type pair struct{ to, mode string }
	expected := map[string]pair{}
	for _, p := range swaps.Pairs {
		expected[p[0]] = pair{p[1], p[2]}
	}
	for _, p := range swaps.Pairs {
		if _, exists := expected[p[1]]; !exists {
			expected[p[1]] = pair{p[0], p[2]}
		}
	}
	expect(len(expected) == 49, "expected 49 directed swaps, got %d", len(expected))
	for from, want := range expected {
		got, ok := nexa.Pair(from)
		expect(ok, "Pair(%q) not found", from)
		if ok {
			expect(got.To == want.to, "Pair(%q).To=%q want %q", from, got.To, want.to)
			expect(got.Mode == want.mode, "Pair(%q).Mode=%q want %q", from, got.Mode, want.mode)
		}
	}
	expect(len(nexa.Pairs()) == 49, "Pairs() returned %d entries", len(nexa.Pairs()))
	for _, p := range nexa.Pairs() {
		expect(p.From != "" && p.To != "" && p.Mode != "", "Pairs(): %+v has an empty field", p)
	}
	if pair, ok := nexa.Pair("XIcon"); !ok || pair.From != "X" || pair.To != "Check" {
		fail("Pair(XIcon) must be alias-aware: got %+v ok=%v", pair, ok)
	}
	for _, p := range swaps.Pairs {
		from, to := p[0], p[1]
		fi, _ := nexa.Get(from)
		ti, _ := nexa.Get(to)
		swap := nexa.SwapSVG(from, to)
		expect(strings.Contains(swap, fi.Inner), "%s->%s: from glyph missing", from, to)
		expect(strings.Contains(swap, ti.Inner), "%s->%s: to glyph missing", from, to)
		expect(strings.Contains(swap, `data-mode="`+p[2]+`"`), "%s->%s: mode", from, to)
		expect(strings.Contains(swap, `aria-hidden="true"`), "%s->%s: decorative", from, to)
		labelled := nexa.SwapSVG(from, to, nexa.SwapLabel("Toggle"))
		expect(strings.Contains(labelled, `role="img"`), "%s->%s: labelled role", from, to)
	}
	expect(nexa.SwapSVG("Nope", "Bell") == "", "SwapSVG with unknown icon must be empty")
	if _, ok := nexa.Get("Nope"); ok {
		fail("Get(unknown) unexpectedly found an icon")
	}
	// Lenient lookup parity (spaces/hyphens/underscores).
	if x, ok := nexa.Get("XIcon"); !ok || x.Name != "X" {
		fail("Get(XIcon) must resolve to X")
	}
	for _, query := range []string{"TriangleAlert", "Triangle Alert", "triangle-alert", "Alert_Triangle"} {
		if ta, ok := nexa.Get(query); !ok || ta.Name != "AlertTriangle" {
			fail("Get(%q) must resolve to AlertTriangle", query)
		}
	}
	if swap := nexa.SwapSVG("XIcon", "Check"); swap == "" || !strings.Contains(swap, `data-mode="fade"`) {
		fail("SwapSVG must resolve aliases (XIcon->Check)")
	}

	out := map[string]any{"ok": len(errors) == 0, "checks": checks, "errors": errors}
	encoded, _ := json.Marshal(out)
	fmt.Println(string(encoded))
	if len(errors) > 0 {
		os.Exit(1)
	}
}
