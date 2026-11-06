#!/usr/bin/env node
/**
 * T5 — generate the Rust crate data table from the canonical dataset.
 *
 * Inputs
 *   data/icons.json      single source of truth (650 icons, Lucide 1.70, ISC)
 *   data/swaps.json      semantic swap pairs ([from, to, mode], reverse implied)
 *
 * Output
 *   rust/src/icons_gen.rs  ICONS + VERSION + the directed swap-pair table
 *                          (the public API lives in src/lib.rs)
 *
 * Run from anywhere:
 *
 *   node scripts/generate-rust.mjs
 *
 * Deterministic by construction: icons are emitted in data/icons.json order,
 * there are no timestamps, and path markup is embedded in Rust raw strings.
 * Running the generator twice produces byte-identical output.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_PATH = path.join(ROOT, "data", "icons.json");
const OUT_DIR = path.join(ROOT, "rust", "src");
const OUT_PATH = path.join(OUT_DIR, "icons_gen.rs");

const EXPECTED_COUNT = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "icons.json"), "utf8")).meta.count;
const HEX_COLOR = /#[0-9a-fA-F]{3,8}\b/;
const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// ---------------------------------------------------------------------------
// Load + validate. A bad dataset must never produce a crate that silently
// violates the Nexa design rules (stroke-only, currentColor, 24x24 grid).
// ---------------------------------------------------------------------------
const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
const icons = data.icons;

function fail(message) {
  console.error(`generate-rust: ${message}`);
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
  if (typeof icon.name !== "string" || !icon.name) fail("icon with missing name");
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

  // Rust raw strings (r#"..."#) cannot contain the closing delimiter.
  if (icon.inner.includes(`"#`)) fail(`${icon.name}: inner markup contains a raw-string delimiter`);
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
// Emit Rust.
// ---------------------------------------------------------------------------
function rustString(value) {
  let out = '"';
  for (const char of value) {
    const codePoint = char.codePointAt(0);
    switch (char) {
      case "\\":
        out += "\\\\";
        break;
      case '"':
        out += '\\"';
        break;
      case "\n":
        out += "\\n";
        break;
      case "\r":
        out += "\\r";
        break;
      case "\t":
        out += "\\t";
        break;
      default:
        if (codePoint < 0x20 || codePoint === 0x7f) {
          out += `\\u{${codePoint.toString(16)}}`;
        } else {
          out += char;
        }
    }
  }
  return `${out}"`;
}

const stringList = (values, indent) => {
  if (values.length === 1) return `&[${rustString(values[0])}]`;
  return `&[\n${values.map((value) => `${indent}    ${rustString(value)},`).join("\n")}\n${indent}]`;
};

function renderIcon(icon) {
  return `    Icon {
        name: ${rustString(icon.name)},
        kebab: ${rustString(icon.kebab)},
        preset: ${rustString(icon.anim.preset)},
        trigger: ${rustString(icon.anim.trigger)},
        aliases: ${stringList(icon.aliases, "        ")},
        keywords: ${stringList(icon.keywords, "        ")},
        inner: r#"${icon.inner}"#,
    },`;
}

const source = `// @generated by scripts/generate-rust.mjs from data/icons.json; DO NOT EDIT.
// Nexa Icons ${data.meta.version} — ${icons.length} stroke-only icons on a 24x24 grid.
// Geometry from ${data.meta.source}. The public API lives in src/lib.rs.

use crate::{Category, Icon, SwapPair};

/// Dataset version from \`data/icons.json\` meta.version.
pub const VERSION: &str = ${rustString(data.meta.version)};

/// Every Nexa icon in \`data/icons.json\` order. Use [\`crate::get\`] for
/// alias- and case-insensitive lookup.
#[rustfmt::skip]
pub const ICONS: &[Icon] = &[
${icons.map(renderIcon).join("\n")}
];

/// Category manifest (data/categories.json) mapped to canonical display names.
#[rustfmt::skip]
pub const CATEGORIES: &[Category] = &[
${(data.meta.categories ?? []).map((category) => `    Category { id: ${rustString(category.id)}, label: ${rustString(category.label)}, description: ${rustString(category.description ?? "")}, icons: &[${category.icons.map(rustString).join(", ")}] },`).join("\n")}
];

/// Directed swap pairs in \`data/swaps.json\` expansion order (both directions:
/// 49 directed edges from 26 explicit pairs), the same [from, to, mode] table
/// as the JavaScript SWAP_PAIRS.
#[rustfmt::skip]
pub(crate) const SWAP_PAIRS: &[SwapPair] = &[
${swapEdges.map((edge) => `    SwapPair { from: ${rustString(edge.from)}, to: ${rustString(edge.to)}, mode: ${rustString(edge.mode)} },`).join("\n")}
];
`;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_PATH, source);

const bytes = fs.statSync(OUT_PATH).size;
console.log(
  `generate-rust: wrote ${path.relative(ROOT, OUT_PATH)} (${icons.length} icons, ${swapEdges.length} directed swap pairs, ${bytes} bytes)`
);
