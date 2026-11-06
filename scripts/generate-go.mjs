#!/usr/bin/env node
/**
 * T4 — generate the Go module data table from the canonical dataset.
 *
 * Inputs
 *   data/icons.json   single source of truth (650 icons, Lucide 1.70, ISC)
 *   data/swaps.json   semantic swap pairs ([from, to, mode], reverse implied)
 *
 * Output
 *   go/icons_gen.go   gofmt'd Go source with the icon table, version and the
 *                     directed swap-pair table
 *
 * The hand-written API lives in go/icons.go; this script only emits data so
 * hand edits and generated data never fight. Run from anywhere:
 *
 *   node scripts/generate-go.mjs
 *
 * Deterministic by construction: icons are emitted in data/icons.json order,
 * no timestamps, and the output is normalised with `gofmt` (child_process).
 * Running the generator twice must produce byte-identical files.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_PATH = path.join(ROOT, "data", "icons.json");
const OUT_DIR = path.join(ROOT, "go");
const OUT_PATH = path.join(OUT_DIR, "icons_gen.go");

const EXPECTED_COUNT = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "icons.json"), "utf8")).meta.count;
const HEX_COLOR = /#[0-9a-fA-F]{3,8}\b/;
const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// ---------------------------------------------------------------------------
// Load + validate the dataset. Never emit a stream that could produce broken
// Go or markup that violates the Nexa design rules; fail loudly instead.
// ---------------------------------------------------------------------------
const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
const icons = data.icons;

function fail(message) {
  console.error(`generate-go: ${message}`);
  process.exit(1);
}

// Lookup normalization shared with the runtime API and the JS package: lower
// case, then strip every space/underscore/hyphen. Used to guarantee that the
// compact keys of names, kebabs and aliases stay unambiguous.
const compactKey = (value) => value.trim().toLowerCase().replace(/[\s_-]+/g, "");

if (!Array.isArray(icons)) fail("data/icons.json has no icons array");
if (icons.length !== EXPECTED_COUNT) {
  fail(`expected ${EXPECTED_COUNT} icons, data/icons.json has ${icons.length}`);
}
if (data.meta?.count !== icons.length) {
  fail(`meta.count (${data.meta?.count}) does not match icons.length (${icons.length})`);
}

const names = new Set();
const kebabs = new Set();
const lookupKeys = new Map();

for (const icon of icons) {
  const where = icon?.name ?? "<unnamed icon>";
  if (typeof icon.name !== "string" || !icon.name) fail(`${where}: missing name`);
  if (typeof icon.kebab !== "string" || !KEBAB.test(icon.kebab)) {
    fail(`${icon.name}: kebab "${icon.kebab}" is not lower-kebab-case`);
  }
  if (typeof icon.anim?.preset !== "string" || !icon.anim.preset) {
    fail(`${icon.name}: missing anim.preset`);
  }
  if (typeof icon.anim?.trigger !== "string" || !icon.anim.trigger) {
    fail(`${icon.name}: missing anim.trigger`);
  }
  if (!Array.isArray(icon.aliases) || icon.aliases.length === 0) {
    fail(`${icon.name}: missing aliases array`);
  }
  if (!Array.isArray(icon.keywords) || icon.keywords.length === 0) {
    fail(`${icon.name}: missing keywords array`);
  }
  if (typeof icon.inner !== "string" || !icon.inner.startsWith("<")) {
    fail(`${icon.name}: missing or malformed inner markup`);
  }
  if (names.has(icon.name)) fail(`duplicate icon name: ${icon.name}`);
  if (kebabs.has(icon.kebab)) fail(`duplicate kebab: ${icon.kebab}`);
  names.add(icon.name);
  kebabs.add(icon.kebab);

  if (icon.aliases.some((a) => typeof a !== "string" || !a)) {
    fail(`${icon.name}: empty alias`);
  }
  if (!icon.aliases.includes(icon.name)) {
    fail(`${icon.name}: aliases must include the canonical name`);
  }
  if (icon.keywords.some((k) => typeof k !== "string" || !k)) {
    fail(`${icon.name}: empty keyword`);
  }

  // Nexa design rules: no hard-coded colors, ever.
  if (HEX_COLOR.test(icon.inner)) fail(`${icon.name}: inner markup contains a hex color`);
  if (/rgb\(|hsl\(|oklch\(/i.test(icon.inner)) {
    fail(`${icon.name}: inner markup contains a non-currentColor color function`);
  }
  for (const match of icon.inner.matchAll(/\b(?:fill|stroke)="([^"]*)"/g)) {
    if (match[1] !== "currentColor" && match[1] !== "none") {
      fail(`${icon.name}: paint value "${match[1]}" is not currentColor/none`);
    }
  }

  // Go raw string literals are delimited with backticks and cannot contain CR.
  if (icon.inner.includes("`")) fail(`${icon.name}: inner markup contains a backtick`);
  if (/[\r\u0000]/.test(icon.inner)) fail(`${icon.name}: unsupported control character`);

  for (const key of [icon.name, icon.kebab, ...icon.aliases]) {
    const compact = compactKey(key);
    if (!compact) fail(`${icon.name}: empty lookup key`);
    const owner = lookupKeys.get(compact);
    if (owner && owner !== icon.name) {
      fail(`compact lookup collision for "${key}": ${owner} vs ${icon.name}`);
    }
    lookupKeys.set(compact, icon.name);
  }
}

// ---------------------------------------------------------------------------
// Swap pairs (data/swaps.json). 26 explicit [from, to, mode] entries; reverse
// entries are implied unless the reverse source already has a pair (first
// declaration wins). This mirrors the JS/React generators exactly, so all
// language packages expose the same 49 directed edges in the same order.
// ---------------------------------------------------------------------------
const SWAP_MODES = new Set(["mirror", "flip", "rotate", "slide", "fade"]);
const compact = (value) => value.toLowerCase().replace(/[\s_-]+/g, "");
const byName = new Map(icons.map((icon) => [icon.name, icon]));
const SWAPS_PATH = path.join(ROOT, "data", "swaps.json");
if (!fs.existsSync(SWAPS_PATH)) fail("missing data/swaps.json");
const swapSource = JSON.parse(fs.readFileSync(SWAPS_PATH, "utf8"));
if (!Array.isArray(swapSource.pairs)) fail("data/swaps.json has no pairs array");

const swapIndex = new Map();
const swapEdges = [];
const addSwap = (fromName, toName, mode, onlyIfMissing = false) => {
  const from = byName.get(fromName);
  const to = byName.get(toName);
  if (!from) fail(`data/swaps.json: unknown icon "${fromName}"`);
  if (!to) fail(`data/swaps.json: unknown icon "${toName}"`);
  if (!SWAP_MODES.has(mode)) fail(`data/swaps.json: unknown mode "${mode}"`);
  const keys = [from.name.toLowerCase(), compact(from.name), from.kebab, compact(from.kebab)];
  const entry = { to: to.name, mode };
  let added = 0;
  for (const key of keys) {
    if (onlyIfMissing && swapIndex.has(key)) continue;
    swapIndex.set(key, entry);
    added += 1;
  }
  if (added > 0) swapEdges.push({ from: from.name, to: to.name, mode });
};

for (const entry of swapSource.pairs) {
  if (!Array.isArray(entry) || entry.length !== 3) {
    fail("data/swaps.json: pair entries must be [from, to, mode]");
  }
  const [fromName, toName, mode] = entry;
  addSwap(fromName, toName, mode);
  addSwap(toName, fromName, mode, true);
}

const swapFroms = new Set();
for (const edge of swapEdges) {
  if (swapFroms.has(edge.from)) fail(`data/swaps.json: duplicate directed edge from "${edge.from}"`);
  swapFroms.add(edge.from);
}
if (swapEdges.length === 0) fail("data/swaps.json: no swap pairs");

// ---------------------------------------------------------------------------
// Emit Go. Helpers: JSON.stringify gives us valid double-quoted Go string
// literals for the ASCII metadata; inner markup uses raw string literals.
// ---------------------------------------------------------------------------
const goString = (value) => JSON.stringify(value);

function renderIcon(icon) {
  const aliases = icon.aliases.map(goString).join(", ");
  const keywords = icon.keywords.map(goString).join(", ");
  // gofmt aligns the field names inside the literal.
  return [
    "\t{",
    `\t\tName:     ${goString(icon.name)},`,
    `\t\tKebab:    ${goString(icon.kebab)},`,
    `\t\tPreset:   ${goString(icon.anim.preset)},`,
    `\t\tTrigger:  ${goString(icon.anim.trigger)},`,
    `\t\tAliases:  []string{${aliases}},`,
    `\t\tKeywords: []string{${keywords}},`,
    `\t\tInner:    \`${icon.inner}\`,`,
    "\t},",
  ].join("\n");
}

const categories = data.meta.categories ?? [];
const renderCategory = (category) => [
  "\t{",
  `\t\tID:          ${goString(category.id)},`,
  `\t\tLabel:       ${goString(category.label)},`,
  `\t\tDescription: ${goString(category.description ?? "")},`,
  `\t\tIcons:       []string{${category.icons.map(goString).join(", ")}},`,
  "\t},",
].join("\n");

const source = `// Code generated by scripts/generate-go.mjs from data/icons.json; DO NOT EDIT.
// Nexa Icons ${data.meta.version} — ${icons.length} stroke-only icons on a 24x24 grid.
// Geometry from ${data.meta.source}. See go/icons.go for the hand-written API.

package nexaicons

// Version is the icon dataset version from data/icons.json meta.version.
const Version = ${goString(data.meta.version)}

// generatedIcons is the canonical icon table in data/icons.json order.
// Every lookup (Icons, Get, Names, Sprite) is derived from it.
var generatedIcons = []Icon{
${icons.map(renderIcon).join("\n")}
}

// generatedSwapPairs is the directed swap table in data/swaps.json expansion
// order (both directions; 49 directed edges from 26 explicit pairs), the same
// [from, to, mode] table as the JavaScript SWAP_PAIRS.
var generatedSwapPairs = []SwapPair{
${swapEdges.map((edge) => `\t{From: ${goString(edge.from)}, To: ${goString(edge.to)}, Mode: ${goString(edge.mode)}},`).join("\n")}
}

// generatedCategories is the category manifest (data/categories.json) mapped to
// canonical display names; the public API in icons.go turns it into []Category.
var generatedCategories = []struct {
\tID          string
\tLabel       string
\tDescription string
\tIcons       []string
}{
${categories.map(renderCategory).join("\n")}
}
`;

let formatted;
try {
  formatted = execFileSync("gofmt", [], {
    input: source,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
} catch (error) {
  console.error("generate-go: gofmt failed — install Go and make sure gofmt is on PATH");
  throw error;
}

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_PATH, formatted);

const bytes = fs.statSync(OUT_PATH).size;
console.log(
  `generate-go: wrote ${path.relative(ROOT, OUT_PATH)} (${icons.length} icons, ${swapEdges.length} directed swap pairs, ${bytes} bytes, gofmt'd)`
);
