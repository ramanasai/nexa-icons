package nexaicons

import (
	"encoding/json"
	"encoding/xml"
	"os"
	"reflect"
	"regexp"
	"sort"
	"strings"
	"testing"
)

// expectedCount follows the dataset so the suite survives catalog growth.
var expectedCount = func() int {
	var doc struct {
		Icons []struct{}
	}
	raw, err := os.ReadFile("../data/icons.json")
	if err != nil {
		return 0
	}
	if err := json.Unmarshal(raw, &doc); err != nil {
		return 0
	}
	return len(doc.Icons)
}()

var (
	kebabPattern = regexp.MustCompile(`^[a-z0-9]+(?:-[a-z0-9]+)*$`)
	hexColor     = regexp.MustCompile(`#[0-9a-fA-F]{3,8}`)
	paintAttr    = regexp.MustCompile(`\b(?:fill|stroke)="([^"]*)"`)
)

// parseSVG asserts that markup is a single well-formed XML document and
// returns its root name and decoded inner markup.
func parseSVG(t *testing.T, markup string) (root string, inner string) {
	t.Helper()
	var doc struct {
		XMLName xml.Name
		Inner   string `xml:",innerxml"`
	}
	if err := xml.Unmarshal([]byte(markup), &doc); err != nil {
		t.Fatalf("output is not well-formed XML: %v\n%s", err, markup)
	}
	return doc.XMLName.Local, doc.Inner
}

func TestIconCountAndCanonicalMap(t *testing.T) {
	if got := len(Icons); got != expectedCount {
		t.Fatalf("len(Icons) = %d, want %d", got, expectedCount)
	}
	if got := len(generatedIcons); got != expectedCount {
		t.Fatalf("len(generatedIcons) = %d, want %d", got, expectedCount)
	}
	if Version == "" {
		t.Fatal("Version is empty")
	}
	for name, icon := range Icons {
		if name != icon.Name {
			t.Fatalf("Icons[%q] holds icon %q", name, icon.Name)
		}
	}
}

func TestAliasesMatchData(t *testing.T) {
	cases := []struct {
		name    string
		aliases []string
	}{
		{"Bell", []string{"Bell"}},
		{"X", []string{"X", "XIcon"}},
		{"AlertTriangle", []string{"AlertTriangle", "TriangleAlert"}},
	}
	for _, tc := range cases {
		icon, ok := Get(tc.name)
		if !ok {
			t.Fatalf("Get(%q) failed", tc.name)
		}
		if !reflect.DeepEqual(icon.Aliases, tc.aliases) {
			t.Errorf("%s aliases = %v, want %v", tc.name, icon.Aliases, tc.aliases)
		}
	}
	for _, icon := range generatedIcons {
		for _, alias := range icon.Aliases {
			got, ok := Get(alias)
			if !ok || got.Name != icon.Name {
				t.Fatalf("alias %q of %s does not resolve (%+v, %v)", alias, icon.Name, got, ok)
			}
		}
	}
	if icon, ok := Get("XIcon"); !ok || icon.Name != "X" {
		t.Fatalf("Get(XIcon) = %+v, %v; want X", icon, ok)
	}
	if icon, ok := Get("TriangleAlert"); !ok || icon.Name != "AlertTriangle" {
		t.Fatalf("Get(TriangleAlert) = %+v, %v; want AlertTriangle", icon, ok)
	}
}

func TestGetLenientNormalization(t *testing.T) {
	// Shared compact normalization with js/index.mjs: case-insensitive and
	// spaces/underscores/hyphens ignored.
	cases := map[string]string{
		"bell":                       "Bell",
		"BELL":                       "Bell",
		"  bElL  ":                   "Bell",
		"X":                          "X",
		"xicon":                      "X",
		"XICON":                      "X",
		"TriangleAlert":              "AlertTriangle",
		"trianglealert":              "AlertTriangle",
		"triangle-exclamation-point": "AlertTriangle",
		"TRIANGLE-EXCLAMATION-POINT": "AlertTriangle",
		"Triangle Exclamation Point": "AlertTriangle",
		"triangle exclamation point": "AlertTriangle",
		"triangle_exclamation_point": "AlertTriangle",
		"Triangle Alert":             "AlertTriangle",
		"Alert Triangle":             "AlertTriangle",
		"Alert-Triangle":             "AlertTriangle",
		"alert_triangle":             "AlertTriangle",
		"RotateCcwClock":             "History",
		"rotate-ccw-clock":           "History",
		"Grid3x3":                    "Grid3x3",
		"grid-3x3":                   "Grid3x3",
		"grid 3x3":                   "Grid3x3",
		"funnel":                     "Filter",
		"ImageIcon":                  "ImageIcon",
		"LinkIcon":                   "LinkIcon",
	}
	for query, want := range cases {
		icon, ok := Get(query)
		if !ok {
			t.Errorf("Get(%q) failed", query)
			continue
		}
		if icon.Name != want {
			t.Errorf("Get(%q) = %s, want %s", query, icon.Name, want)
		}
	}
	for _, query := range []string{"", "   ", "Nope", "definitely-not-an-icon", "FilterIcon", "funnel-icon", "ClockIcon", "nexa-bell", "<script>"} {
		if icon, ok := Get(query); ok {
			t.Errorf("Get(%q) unexpectedly returned %s", query, icon.Name)
		}
	}
}

func TestNamesSortedAndDeterministic(t *testing.T) {
	names := Names()
	if len(names) != expectedCount {
		t.Fatalf("len(Names()) = %d, want %d", len(names), expectedCount)
	}
	if !sort.StringsAreSorted(names) {
		t.Fatal("Names() is not sorted")
	}
	if second := Names(); !reflect.DeepEqual(names, second) {
		t.Fatal("Names() is not deterministic")
	}
	seen := make(map[string]bool, len(names))
	for _, name := range names {
		if seen[name] {
			t.Fatalf("duplicate name %q", name)
		}
		seen[name] = true
		if _, ok := Icons[name]; !ok {
			t.Fatalf("Names() returned unknown icon %q", name)
		}
	}
}

func TestEveryIconRendersWellFormedSVG(t *testing.T) {
	for _, icon := range generatedIcons {
		svg := icon.SVG()
		root, inner := parseSVG(t, svg)
		if root != "svg" {
			t.Fatalf("%s: root element is %q", icon.Name, root)
		}
		if inner != icon.Inner {
			t.Fatalf("%s: rendered inner markup does not match data", icon.Name)
		}
		for _, want := range []string{
			`xmlns="http://www.w3.org/2000/svg"`,
			`width="24"`,
			`height="24"`,
			`viewBox="0 0 24 24"`,
			`fill="none"`,
			`stroke="currentColor"`,
			`stroke-width="1.5"`,
			`stroke-linecap="round"`,
			`stroke-linejoin="round"`,
			`class="nexa-icon"`,
			`aria-hidden="true"`,
			`focusable="false"`,
			`data-nexa-icon="` + icon.Kebab + `"`,
		} {
			if !strings.Contains(svg, want) {
				t.Errorf("%s: SVG missing %s", icon.Name, want)
			}
		}
		if strings.Contains(svg, `role="img"`) {
			t.Errorf("%s: decorative SVG has role=img", icon.Name)
		}
		if strings.Contains(svg, "data-nexa-anim") {
			t.Errorf("%s: decorative SVG has animation data", icon.Name)
		}
		if hexColor.MatchString(icon.Inner) || hexColor.MatchString(svg) {
			t.Errorf("%s: hard-coded hex color found", icon.Name)
		}
		for _, match := range paintAttr.FindAllStringSubmatch(svg, -1) {
			if match[1] != "currentColor" && match[1] != "none" {
				t.Errorf("%s: paint value %q is not currentColor/none", icon.Name, match[1])
			}
		}
	}
}

func TestSVGExactMarkupContract(t *testing.T) {
	bell, ok := Get("Bell")
	if !ok {
		t.Fatal("Bell not found")
	}
	want := `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ` +
		`fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" ` +
		`stroke-linejoin="round" class="nexa-icon" aria-hidden="true" focusable="false" ` +
		`data-nexa-icon="bell">` + bell.Inner + `</svg>`
	if got := bell.SVG(); got != want {
		t.Fatalf("default SVG does not match the JS contract\n got: %s\nwant: %s", got, want)
	}
}

func TestSizeDerivesStrokeWidth(t *testing.T) {
	bell, _ := Get("Bell")
	cases := []struct {
		name    string
		options []Option
		size    string
		stroke  string
	}{
		{"default", nil, `width="24"`, `stroke-width="1.5"`},
		{"size 16", []Option{Size(16)}, `width="16"`, `stroke-width="2"`},
		{"size 20", []Option{Size(20)}, `width="20"`, `stroke-width="1.75"`},
		{"size 24", []Option{Size(24)}, `width="24"`, `stroke-width="1.5"`},
		{"size 40", []Option{Size(40)}, `width="40"`, `stroke-width="1.5"`},
		{"size 0 fallback", []Option{Size(0)}, `width="24"`, `stroke-width="1.5"`},
		{"explicit wins", []Option{Size(20), StrokeWidth(2.5)}, `width="20"`, `stroke-width="2.5"`},
		{"explicit 16", []Option{Size(16), StrokeWidth(1.5)}, `width="16"`, `stroke-width="1.5"`},
		{"invalid stroke ignored", []Option{Size(20), StrokeWidth(0)}, `width="20"`, `stroke-width="1.75"`},
	}
	for _, tc := range cases {
		svg := bell.SVG(tc.options...)
		if !strings.Contains(svg, tc.size) || !strings.Contains(svg, tc.stroke) {
			t.Errorf("%s: want %s and %s in %s", tc.name, tc.size, tc.stroke, svg)
		}
	}
}

func TestEveryIconSVGIsDeterministic(t *testing.T) {
	for _, icon := range generatedIcons {
		if first, second := icon.SVG(), icon.SVG(); first != second {
			t.Fatalf("%s: SVG() is not deterministic", icon.Name)
		}
	}
}

func TestOptions(t *testing.T) {
	bell, _ := Get("Bell")

	// Class is always merged after the mandatory nexa-icon class.
	classed := bell.SVG(Class("hero"))
	if !strings.Contains(classed, `class="nexa-icon hero"`) {
		t.Errorf("Class: missing merged class in %s", classed)
	}

	// Label/TItle expose the icon to assistive tech and drop aria-hidden.
	labelled := bell.SVG(Label("Alerts"))
	parseSVG(t, labelled)
	if !strings.Contains(labelled, `role="img"`) ||
		!strings.Contains(labelled, `aria-label="Alerts"`) ||
		strings.Contains(labelled, `aria-hidden`) {
		t.Errorf("Label: wrong accessibility contract: %s", labelled)
	}
	escaped := bell.SVG(Label(`a"b&c<d>e'f`))
	parseSVG(t, escaped)
	if !strings.Contains(escaped, `aria-label="a&quot;b&amp;c&lt;d&gt;e&#39;f"`) {
		t.Errorf("Label: value was not escaped like JS: %s", escaped)
	}

	titled := bell.SVG(Title("Notifications"))
	parseSVG(t, titled)
	if !strings.Contains(titled, `role="img"`) ||
		strings.Contains(titled, `aria-hidden`) ||
		strings.Contains(titled, `aria-label=`) ||
		!strings.Contains(titled, `<title>Notifications</title>`) {
		t.Errorf("Title: wrong contract: %s", titled)
	}
	both := bell.SVG(Label("Alerts"), Title("Notifications"))
	if !strings.Contains(both, `aria-label="Alerts"`) || !strings.Contains(both, `<title>Notifications</title>`) {
		t.Errorf("Label+Title: missing label/title: %s", both)
	}
	escapedTitle := bell.SVG(Title(`A & B "quoted" <tag>`))
	parseSVG(t, escapedTitle)
	if !strings.Contains(escapedTitle, `<title>A &amp; B &quot;quoted&quot; &lt;tag&gt;</title>`) {
		t.Errorf("Title: value was not escaped: %s", escapedTitle)
	}

	// Animation data contract, including trigger override and active state.
	animated := bell.SVG(Anim("ring"))
	parseSVG(t, animated)
	for _, want := range []string{
		`data-nexa-anim="ring"`,
		`data-nexa-trigger="hover"`,
	} {
		if !strings.Contains(animated, want) {
			t.Errorf("Anim: missing %s", want)
		}
	}
	if strings.Contains(animated, "data-nexa-active") {
		t.Error("Anim: active attribute must be opt-in")
	}
	focus := bell.SVG(Anim("pulse"), Trigger("focus"))
	if !strings.Contains(focus, `data-nexa-trigger="focus"`) {
		t.Errorf("Trigger: override lost: %s", focus)
	}
	manual := bell.SVG(Anim("ring"), Trigger("manual"))
	if !strings.Contains(manual, `data-nexa-trigger="manual"`) {
		t.Errorf("Trigger: manual lost: %s", manual)
	}
	active := bell.SVG(Anim("ring"), Active(true))
	if !strings.Contains(active, `data-nexa-active="true"`) {
		t.Errorf("Active: missing data-nexa-active: %s", active)
	}
	// Matches JS: data-nexa-active only travels with an animation preset.
	if inactiveOnly := bell.SVG(Active(true)); strings.Contains(inactiveOnly, "data-nexa-active") {
		t.Errorf("Active without Anim should not emit data-nexa-active: %s", inactiveOnly)
	}

	// The "always" trigger comes from the icon data, not a hard-coded hover.
	var always *Icon
	for i := range generatedIcons {
		if generatedIcons[i].Trigger == "always" {
			always = &generatedIcons[i]
			break
		}
	}
	if always == nil {
		t.Fatal("no icon uses the always trigger")
	}
	if got := always.SVG(Anim(always.Preset)); !strings.Contains(got, `data-nexa-trigger="always"`) {
		t.Errorf("Anim: always-trigger icon rendered %s", got)
	}
}

func TestSymbols(t *testing.T) {
	bell, _ := Get("Bell")
	symbol, ok := Symbol("Bell")
	if !ok {
		t.Fatal("Symbol(Bell) failed")
	}
	want := `<symbol id="nexa-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" ` +
		`stroke-width="2" stroke-linecap="round" stroke-linejoin="round">` + bell.Inner + `</symbol>`
	if symbol != want {
		t.Fatalf("Symbol markup mismatch\n got: %s\nwant: %s", symbol, want)
	}
	parseSVG(t, symbol)

	thin, ok := Symbol("bell", SymbolStrokeWidth(1.5))
	if !ok || !strings.Contains(thin, `stroke-width="1.5"`) {
		t.Errorf("SymbolStrokeWidth(1.5) = %q, %v", thin, ok)
	}
	if got, ok := Symbol("XIcon"); !ok || !strings.Contains(got, `id="nexa-x"`) {
		t.Errorf("Symbol should accept aliases: %q, %v", got, ok)
	}
	if _, ok := Symbol("Nope"); ok {
		t.Error("Symbol(Nope) should be false")
	}
}

func TestSpriteParsesAndMatchesIcons(t *testing.T) {
	sprite := Sprite()
	if sprite != Sprite() {
		t.Fatal("Sprite() is not deterministic")
	}
	if !strings.HasPrefix(sprite, `<svg xmlns="http://www.w3.org/2000/svg"`) {
		t.Fatalf("sprite does not start with an svg root: %.80s", sprite)
	}
	if !strings.Contains(sprite, `aria-hidden="true"`) {
		t.Fatal("sprite root is not aria-hidden")
	}
	if !strings.Contains(sprite, `stroke-width="2"`) {
		t.Fatal("sprite symbols should default to a fixed 2px stroke")
	}

	var doc struct {
		XMLName xml.Name
		Symbols []struct {
			ID      string `xml:"id,attr"`
			ViewBox string `xml:"viewBox,attr"`
			Stroke  string `xml:"stroke-width,attr"`
		} `xml:"symbol"`
	}
	if err := xml.Unmarshal([]byte(sprite), &doc); err != nil {
		t.Fatalf("sprite is not well-formed XML: %v", err)
	}
	if doc.XMLName.Local != "svg" {
		t.Fatalf("sprite root is %q, want svg", doc.XMLName.Local)
	}
	if len(doc.Symbols) != expectedCount {
		t.Fatalf("sprite has %d symbols, want %d", len(doc.Symbols), expectedCount)
	}
	seen := make(map[string]bool, len(doc.Symbols))
	want := make(map[string]bool, len(generatedIcons))
	for _, icon := range generatedIcons {
		want["nexa-"+icon.Kebab] = true
	}
	for _, symbol := range doc.Symbols {
		if symbol.ViewBox != "0 0 24 24" {
			t.Errorf("symbol %q viewBox = %q", symbol.ID, symbol.ViewBox)
		}
		if symbol.Stroke != "2" {
			t.Errorf("symbol %q stroke-width = %q, want 2", symbol.ID, symbol.Stroke)
		}
		if !strings.HasPrefix(symbol.ID, "nexa-") || seen[symbol.ID] {
			t.Errorf("bad or duplicate symbol id %q", symbol.ID)
		}
		seen[symbol.ID] = true
		if !want[symbol.ID] {
			t.Errorf("unexpected symbol %q", symbol.ID)
		}
	}
	for id := range want {
		if !seen[id] {
			t.Errorf("missing symbol %q", id)
		}
	}

	// SpriteStrokeWidth forwards a fixed stroke to every symbol, like JS
	// sprite({ strokeWidth }).
	thin := Sprite(SpriteStrokeWidth(1.5))
	if strings.Contains(thin, `stroke-width="2"`) || !strings.Contains(thin, `stroke-width="1.5"`) {
		t.Error("SpriteStrokeWidth(1.5) was not applied")
	}
}

// ---------------------------------------------------------------------------
// Swap / morph support (data/swaps.json)
// ---------------------------------------------------------------------------

// declaredSwaps mirrors data/swaps.json: 26 explicit [from, to, mode] entries.
// Reverse edges are implied by the generators; the test derives them with the
// same first-declaration-wins rule and compares against the generated table.
var declaredSwaps = [][3]string{
	{"ArrowLeft", "ArrowRight", "mirror"},
	{"ArrowUp", "ArrowDown", "flip"},
	{"ChevronLeft", "ChevronRight", "mirror"},
	{"ChevronUp", "ChevronDown", "flip"},
	{"ChevronsLeftRight", "ChevronsUpDown", "rotate"},
	{"PanelLeftClose", "PanelLeftOpen", "fade"},
	{"Plus", "Minus", "fade"},
	{"PlusCircle", "XCircle", "fade"},
	{"Check", "X", "fade"},
	{"CheckCircle", "XCircle", "fade"},
	{"CheckCircle2", "XCircle", "fade"},
	{"Heart", "HeartOff", "fade"},
	{"Eye", "EyeOff", "fade"},
	{"Sun", "Moon", "rotate"},
	{"Upload", "Download", "fade"},
	{"ArrowUpRight", "ArrowDownRight", "flip"},
	{"TrendingUp", "TrendingDown", "flip"},
	{"MoreHorizontal", "MoreVertical", "rotate"},
	{"Lock", "Key", "fade"},
	{"Mail", "MailCheck", "fade"},
	{"Star", "Bookmark", "fade"},
	{"Shield", "ShieldCheck", "fade"},
	{"MessageSquare", "Mail", "slide"},
	{"Filter", "SlidersHorizontal", "slide"},
	{"Square", "Circle", "fade"},
	{"Bold", "Italic", "slide"},
}

var validSwapModes = map[string]bool{
	"mirror": true,
	"flip":   true,
	"rotate": true,
	"slide":  true,
	"fade":   true,
}

// compactSwapKey mirrors the JS/React generators: lowercase, drop separators.
func compactSwapKey(value string) string {
	return compactKey(value)
}

// expandSwaps replays the generators' directed expansion for the declared
// pairs and returns the ordered edges plus an index by canonical source.
func expandSwaps(t *testing.T) ([]SwapPair, map[string]SwapPair) {
	t.Helper()
	var pairs []SwapPair
	index := make(map[string]SwapPair)
	keys := make(map[string]bool)
	add := func(fromName, toName, mode string, onlyIfMissing bool) {
		from, ok := Get(fromName)
		if !ok {
			t.Fatalf("declared swap source %q is not an icon", fromName)
		}
		to, ok := Get(toName)
		if !ok {
			t.Fatalf("declared swap target %q is not an icon", toName)
		}
		if !validSwapModes[mode] {
			t.Fatalf("declared swap mode %q is invalid", mode)
		}
		pair := SwapPair{From: from.Name, To: to.Name, Mode: mode}
		added := false
		for _, key := range []string{
			strings.ToLower(from.Name),
			compactSwapKey(from.Name),
			from.Kebab,
			compactSwapKey(from.Kebab),
		} {
			if onlyIfMissing && keys[key] {
				continue
			}
			keys[key] = true
			added = true
		}
		if added {
			pairs = append(pairs, pair)
			index[from.Name] = pair
		}
	}
	for _, declared := range declaredSwaps {
		add(declared[0], declared[1], declared[2], false)
		add(declared[1], declared[0], declared[2], true)
	}
	return pairs, index
}

func TestSwapPairsMatchData(t *testing.T) {
	if len(declaredSwaps) != 26 {
		t.Fatalf("declared swaps = %d, want 26", len(declaredSwaps))
	}
	expected, expectedIndex := expandSwaps(t)
	if len(expected) != 49 {
		t.Fatalf("expected 49 directed swap edges, derived %d", len(expected))
	}

	pairs := Pairs()
	if len(pairs) != len(expected) {
		t.Fatalf("len(Pairs()) = %d, want %d", len(pairs), len(expected))
	}
	for i := range expected {
		if pairs[i] != expected[i] {
			t.Fatalf("Pairs()[%d] = %+v, want %+v", i, pairs[i], expected[i])
		}
		if pairs[i].From == "" || pairs[i].To == "" {
			t.Fatalf("Pairs()[%d] is missing from/to: %+v", i, pairs[i])
		}
	}
	// Pairs() returns a copy: mutating it must not corrupt later reads.
	if len(pairs) > 0 {
		pairs[0] = SwapPair{From: "Broken", To: "Broken", Mode: "broken"}
		if Pairs()[0].From != expected[0].From {
			t.Fatal("Pairs() does not return a fresh slice")
		}
	}

	for from, want := range expectedIndex {
		got, ok := Pair(from)
		if !ok || got != want {
			t.Fatalf("Pair(%q) = %+v, %v; want %+v", from, got, ok, want)
		}
		if _, ok := Get(want.To); !ok {
			t.Fatalf("pair target %q is not an icon", want.To)
		}
		if _, ok := Pair(want.To); !ok {
			t.Fatalf("pair target %q has no pair of its own", want.To)
		}
	}

	// Both directions of a declared pair resolve. The reverse may be claimed by
	// an earlier declaration (e.g. XCircle -> PlusCircle wins over CheckCircle).
	for _, declared := range declaredSwaps {
		from, _ := Get(declared[0])
		to, _ := Get(declared[1])
		pair, ok := Pair(from.Name)
		if !ok || pair.To != to.Name || pair.Mode != declared[2] || pair.From != from.Name {
			t.Fatalf("Pair(%s) = %+v, %v; want {%s %s %s}", from.Name, pair, ok, from.Name, to.Name, declared[2])
		}
		reverse, ok := Pair(to.Name)
		if !ok {
			t.Fatalf("reverse of %s -> %s does not resolve", from.Name, to.Name)
		}
		if reverse.To == from.Name {
			if reverse.Mode != declared[2] {
				t.Fatalf("reverse mode of %s -> %s = %q, want %q", to.Name, from.Name, reverse.Mode, declared[2])
			}
		} else if reverse != expectedIndex[to.Name] {
			t.Fatalf("Pair(%s) = %+v does not resolve back to %s or an earlier pair", to.Name, reverse, from.Name)
		}
	}

	// Lookup is case-, kebab- and alias-aware, with compact normalization.
	cases := map[string]SwapPair{
		"arrow-left":          {From: "ArrowLeft", To: "ArrowRight", Mode: "mirror"},
		"ARROWLEFT":           {From: "ArrowLeft", To: "ArrowRight", Mode: "mirror"},
		"arrow left":          {From: "ArrowLeft", To: "ArrowRight", Mode: "mirror"},
		"arrow_left":          {From: "ArrowLeft", To: "ArrowRight", Mode: "mirror"},
		"xicon":               {From: "X", To: "Check", Mode: "fade"},
		"X":                   {From: "X", To: "Check", Mode: "fade"},
		"ellipsis":            {From: "MoreHorizontal", To: "MoreVertical", Mode: "rotate"},
		"funnel":              {From: "Filter", To: "SlidersHorizontal", Mode: "slide"},
		"circle-plus":         {From: "PlusCircle", To: "XCircle", Mode: "fade"},
		"circle plus":         {From: "PlusCircle", To: "XCircle", Mode: "fade"},
		"Chevron Left":        {From: "ChevronLeft", To: "ChevronRight", Mode: "mirror"},
		"chevrons_left_right": {From: "ChevronsLeftRight", To: "ChevronsUpDown", Mode: "rotate"},
	}
	for query, want := range cases {
		got, ok := Pair(query)
		if !ok || got != want {
			t.Errorf("Pair(%q) = %+v, %v; want %+v", query, got, ok, want)
		}
	}
	for _, query := range []string{"", "   ", "Bell", "TriangleAlert", "definitely-not-an-icon"} {
		if pair, ok := Pair(query); ok {
			t.Errorf("Pair(%q) unexpectedly returned %+v", query, pair)
		}
	}

	// Alias handling matches Get: XIcon aliases X, which has a pair; an icon
	// without a semantic pair still returns false / falls back to "fade".
	if got := SwapMode("XIcon"); got != "fade" {
		t.Errorf("SwapMode(XIcon) = %q, want fade", got)
	}
	if got := SwapMode("TriangleAlert"); got != "fade" {
		t.Errorf("SwapMode(TriangleAlert) = %q, want fade", got)
	}
	modeCases := map[string]string{
		"ArrowLeft":              "mirror",
		"arrow left":             "mirror",
		"Sun":                    "rotate",
		"chevron up":             "flip",
		"sliders-horizontal":     "slide",
		"Bell":                   "fade",
		"definitely-not-an-icon": "fade",
	}
	for query, want := range modeCases {
		if got := SwapMode(query); got != want {
			t.Errorf("SwapMode(%q) = %q, want %q", query, got, want)
		}
	}
	for _, pair := range Pairs() {
		if !validSwapModes[pair.Mode] {
			t.Errorf("Pairs() contains invalid mode %q", pair.Mode)
		}
	}
}

func TestSwapSVGMarkup(t *testing.T) {
	const from, to = "ArrowLeft", "ArrowRight"

	markup := SwapSVG(from, to)
	parseSVG(t, markup)
	if markup != SwapSVG(from, to) {
		t.Fatal("SwapSVG is not deterministic")
	}
	if !strings.HasPrefix(markup, `<span class="nexa-swap"`) {
		t.Fatalf("swap markup does not start with the wrapper: %.80s", markup)
	}
	openTag := markup[:strings.Index(markup, "><span")]
	for _, want := range []string{
		`data-mode="mirror"`,
		`data-nexa-active="false"`,
		`style="--nexa-swap-dur:260ms"`,
		`aria-hidden="true"`,
	} {
		if !strings.Contains(openTag, want) {
			t.Errorf("wrapper missing %s in %s", want, openTag)
		}
	}
	if strings.Contains(openTag, `role="img"`) {
		t.Error("decorative wrapper must not have role=img")
	}
	if strings.Count(markup, "<svg ") != 2 || strings.Count(markup, "</svg>") != 2 {
		t.Error("swap markup must contain exactly two inner SVGs")
	}
	aIndex := strings.Index(markup, `<span class="nexa-swap__a" aria-hidden="true">`)
	bIndex := strings.Index(markup, `<span class="nexa-swap__b" aria-hidden="true">`)
	if aIndex < 0 || bIndex < 0 || aIndex > bIndex {
		t.Error("swap markup must contain decorative layer a before layer b")
	}
	if !strings.HasSuffix(markup, "</span></span>") {
		t.Error("swap markup must close both layers and the wrapper")
	}
	if !strings.Contains(markup, `class="nexa-icon"`) || !strings.Contains(markup, `data-nexa-icon="arrow-left"`) {
		t.Error("inner icons must carry the full inline SVG contract")
	}

	// Auto modes are semantic per pair, not always fade.
	autoModes := map[[2]string]string{
		{"Sun", "Moon"}:                         "rotate",
		{"Mail", "MailCheck"}:                   "fade",
		{"MessageSquare", "Mail"}:               "slide",
		{"Bold", "Italic"}:                      "slide",
		{"Upload", "Download"}:                  "fade",
		{"ChevronsLeftRight", "ChevronsUpDown"}: "rotate",
	}
	for pair, mode := range autoModes {
		got := SwapSVG(pair[0], pair[1])
		if !strings.Contains(got, `data-mode="`+mode+`"`) {
			t.Errorf("SwapSVG(%s, %s) missing auto mode %q", pair[0], pair[1], mode)
		}
	}

	// Options: active, duration, explicit mode, class, label, size, stroke.
	opts := SwapSVG(from, to,
		SwapActive(true),
		SwapDuration(400),
		SwapTransition("slide"),
		SwapClass("hero"),
	)
	parseSVG(t, opts)
	for _, want := range []string{
		`class="nexa-swap hero"`,
		`data-mode="slide"`,
		`data-nexa-active="true"`,
		`style="--nexa-swap-dur:400ms"`,
	} {
		if !strings.Contains(opts, want) {
			t.Errorf("option markup missing %s", want)
		}
	}
	if got := SwapSVG(from, to, SwapDuration(0)); !strings.Contains(got, `style="--nexa-swap-dur:0ms"`) {
		t.Error("SwapDuration(0) should render 0ms")
	}
	if got := SwapSVG(from, to, SwapDuration(-5)); !strings.Contains(got, `style="--nexa-swap-dur:260ms"`) {
		t.Error("negative SwapDuration should keep the default")
	}
	if got := SwapSVG(from, to, SwapTransition("auto")); !strings.Contains(got, `data-mode="mirror"`) {
		t.Error(`SwapTransition("auto") should resolve the semantic mode`)
	}
	if got := SwapSVG(from, to, SwapTransition("bogus")); !strings.Contains(got, `data-mode="bogus"`) {
		t.Errorf("explicit swap mode should pass through like JS: %s", got)
	}

	// Labels switch the wrapper to role=img + escaped aria-label.
	labelled := SwapSVG(from, to, SwapLabel("Toggle sidebar"))
	parseSVG(t, labelled)
	labelTag := labelled[:strings.Index(labelled, "><span")]
	if !strings.Contains(labelTag, `role="img"`) || !strings.Contains(labelTag, `aria-label="Toggle sidebar"`) {
		t.Errorf("labelled wrapper missing role/aria-label: %s", labelTag)
	}
	if strings.Contains(labelTag, "aria-hidden") {
		t.Error("labelled wrapper must not be aria-hidden")
	}
	escapedLabel := SwapSVG(from, to, SwapLabel(`a"b&c<d>e'f`))
	parseSVG(t, escapedLabel)
	if !strings.Contains(escapedLabel, `aria-label="a&quot;b&amp;c&lt;d&gt;e&#39;f"`) {
		t.Error("swap label was not attribute-escaped like JS")
	}

	// Size and stroke are forwarded to both inner icons; stroke auto-scales by
	// size (16 => 2, 20 => 1.75, 24+ => 1.5) unless overridden.
	sized := SwapSVG(from, to, SwapSize(20))
	if strings.Count(sized, `width="20"`) != 2 || strings.Count(sized, `stroke-width="1.75"`) != 2 {
		t.Errorf("SwapSize(20) did not forward size/stroke: %s", sized)
	}
	sized = SwapSVG(from, to, SwapSize(16))
	if strings.Count(sized, `stroke-width="2"`) != 2 {
		t.Errorf("SwapSize(16) should auto-scale stroke to 2: %s", sized)
	}
	explicit := SwapSVG(from, to, SwapSize(20), SwapStrokeWidth(2.5))
	if strings.Count(explicit, `stroke-width="2.5"`) != 2 {
		t.Errorf("SwapStrokeWidth(2.5) was not forwarded: %s", explicit)
	}

	// Alias/kebab/case input works for both icons.
	if got := SwapSVG("arrow-left", "xicon"); got == "" || !strings.Contains(got, `data-mode="mirror"`) {
		t.Errorf("SwapSVG should accept kebab/alias input: %.80s", got)
	}

	// Unknown icons are rejected.
	for _, bad := range [][2]string{{"Nope", to}, {from, "Nope"}, {"", ""}} {
		if got := SwapSVG(bad[0], bad[1]); got != "" {
			t.Errorf("SwapSVG(%q, %q) should be empty, got %.80s", bad[0], bad[1], got)
		}
	}

	// No hard-coded colors anywhere in the swap markup.
	if hexColor.MatchString(markup) || hexColor.MatchString(opts) || hexColor.MatchString(labelled) {
		t.Error("swap markup contains a hex color")
	}
	for _, match := range paintAttr.FindAllStringSubmatch(markup, -1) {
		if match[1] != "currentColor" && match[1] != "none" {
			t.Errorf("swap paint value %q is not currentColor/none", match[1])
		}
	}
}

func TestDataIntegrity(t *testing.T) {
	names := make(map[string]bool, len(generatedIcons))
	kebabs := make(map[string]bool, len(generatedIcons))
	presets := make(map[string]bool)
	for _, icon := range generatedIcons {
		if icon.Name == "" || icon.Kebab == "" {
			t.Fatal("icon with empty name or kebab")
		}
		if !kebabPattern.MatchString(icon.Kebab) {
			t.Errorf("%s: kebab %q is not lower-kebab-case", icon.Name, icon.Kebab)
		}
		if names[icon.Name] {
			t.Errorf("duplicate name %q", icon.Name)
		}
		if kebabs[icon.Kebab] {
			t.Errorf("duplicate kebab %q", icon.Kebab)
		}
		names[icon.Name] = true
		kebabs[icon.Kebab] = true
		presets[icon.Preset] = true
		if icon.Preset == "" || icon.Trigger == "" {
			t.Errorf("%s: missing animation preset/trigger", icon.Name)
		}
		if !contains(icon.Aliases, icon.Name) {
			t.Errorf("%s: aliases must include the canonical name", icon.Name)
		}
		if len(icon.Keywords) == 0 {
			t.Errorf("%s: missing keywords", icon.Name)
		}
		if len(icon.Inner) == 0 || !strings.HasPrefix(icon.Inner, "<") {
			t.Errorf("%s: missing inner markup", icon.Name)
		}
	}
	if len(presets) < 2 {
		t.Fatalf("expected several animation presets, got %d", len(presets))
	}
}

func contains(haystack []string, needle string) bool {
	for _, value := range haystack {
		if value == needle {
			return true
		}
	}
	return false
}
