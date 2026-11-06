/**
 * T9.1 — Dataset integrity for the expanded (650-icon) Nexa catalog.
 *
 * Every count is derived from data/icons.json; no hardcoded 166/168 values.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  DATA, ICONS, META, REPORT, SWAPS, CATEGORIES_DATA, ICON_CATEGORIES, CATEGORY_IDS,
  DATA_PRESETS, TRIGGERS, SWAP_MODES, ALL_ALIASES, ORIGINAL_NAMES, byName, byKebab,
  compact, p,
} from "./helpers.mjs";

const COUNT = ICONS.length;

test("meta: Nexa Icons, dataset-derived counts, 24 grid, categories manifest", () => {
  assert.equal(META.name, "Nexa Icons");
  assert.equal(META.count, COUNT, "meta.count must match icons.length");
  assert.equal(META.requested, COUNT, "expanded catalog has no unresolved requested names");
  assert.equal(META.duplicates, 0, "expanded catalog has no merged duplicates");
  assert.equal(META.grid, 24);
  assert.equal(META.version, JSON.parse(fs.readFileSync(p("package.json"), "utf8")).version);
  assert.match(META.source, /Lucide/i);
  assert.ok(COUNT >= 900 && COUNT <= 1100, `catalog total ${COUNT} outside 900-1100`);
  assert.ok(Array.isArray(META.categories), "meta.categories must be embedded");
  assert.deepEqual(META.categories, CATEGORIES_DATA.categories, "meta.categories must equal data/categories.json");
});

test("every icon has a unique kebab and a unique display name", () => {
  const kebabs = ICONS.map((icon) => icon.kebab);
  const names = ICONS.map((icon) => icon.name);
  assert.equal(new Set(kebabs).size, COUNT);
  assert.equal(new Set(names).size, COUNT);
  for (const kebab of kebabs) assert.match(kebab, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `bad kebab: ${kebab}`);
  for (const name of names) assert.match(name, /^[A-Z][A-Za-z0-9]*$/, `bad display name: ${name}`);
});

test("alias table: one alias per icon plus exactly the two legacy merges", () => {
  assert.equal(ALL_ALIASES.length, COUNT + 2, "650 names + XIcon + TriangleAlert");
  assert.equal(new Set(ALL_ALIASES).size, ALL_ALIASES.length, "aliases must be globally unique");
  for (const icon of ICONS) assert.equal(icon.aliases[0], icon.name, `${icon.kebab}: aliases[0]`);
  assert.equal(byName.get("X")?.aliases.includes("XIcon"), true);
  assert.equal(byName.get("AlertTriangle")?.aliases.includes("TriangleAlert"), true);
  const extra = ICONS.filter((icon) => icon.aliases.length > 1).map((icon) => [icon.name, icon.aliases.slice(1)]);
  assert.deepEqual(extra.sort((a, b) => a[0].localeCompare(b[0])), [
    ["AlertTriangle", ["TriangleAlert"]],
    ["X", ["XIcon"]],
  ]);
  // The original 166 requested icons must all still be present.
  assert.equal(ORIGINAL_NAMES.length, 166);
  for (const name of ORIGINAL_NAMES) assert.ok(byName.has(name), `original ${name} missing from dataset`);
});

test("every icon record is complete (name, kebab, keywords, anim, fillSafe, categories, nodes, inner)", () => {
  for (const icon of ICONS) {
    assert.ok(icon.name && typeof icon.name === "string", `${icon.kebab}: name`);
    assert.ok(Array.isArray(icon.keywords) && icon.keywords.length > 0, `${icon.name}: keywords`);
    assert.ok(icon.anim && DATA_PRESETS.includes(icon.anim.preset), `${icon.name}: preset`);
    assert.ok(TRIGGERS.includes(icon.anim.trigger), `${icon.name}: trigger`);
    assert.equal(typeof icon.fillSafe, "boolean", `${icon.name}: fillSafe must be boolean`);
    assert.ok(Array.isArray(icon.categories) && icon.categories.length >= 1, `${icon.name}: categories`);
    assert.ok(Array.isArray(icon.nodes) && icon.nodes.length > 0, `${icon.name}: nodes`);
    assert.ok(typeof icon.inner === "string" && icon.inner.trim().length > 0, `${icon.name}: inner`);
  }
});

test("icon.categories is de-duplicated, valid and mirrors data/categories.json", () => {
  const duplicates = ICONS.filter((icon) => new Set(icon.categories).size !== icon.categories.length);
  assert.deepEqual(duplicates.map((icon) => icon.name), [], "icon.categories must not repeat ids");
  for (const icon of ICONS) {
    for (const id of icon.categories) assert.ok(CATEGORY_IDS.includes(id), `${icon.name}: unknown category ${id}`);
    const fromFile = ICON_CATEGORIES[icon.name];
    assert.ok(fromFile, `${icon.name}: missing from data/categories.json iconCategories`);
    assert.deepEqual([...icon.categories].sort(), [...fromFile].sort(), `${icon.name}: categories disagree`);
  }
});

test("keywords are non-empty unique strings", () => {
  for (const icon of ICONS) {
    for (const keyword of icon.keywords) {
      assert.equal(typeof keyword, "string", `${icon.name}: keyword type`);
      assert.ok(keyword.trim().length > 0, `${icon.name}: empty keyword`);
    }
    assert.equal(new Set(icon.keywords).size, icon.keywords.length, `${icon.name}: duplicate keywords`);
  }
});

test("animation: every preset is one of the 17 shipped presets and all 17 are used", () => {
  const used = new Set();
  for (const icon of ICONS) {
    assert.ok(DATA_PRESETS.includes(icon.anim.preset), `${icon.name}: unknown preset ${icon.anim.preset}`);
    used.add(icon.anim.preset);
  }
  assert.deepEqual([...used].sort(), [...DATA_PRESETS].sort());
  assert.deepEqual([...new Set(ICONS.map((icon) => icon.anim.trigger))].sort(), ["always", "hover"]);
});

test("no hard-coded colours: only currentColor paint and documented detail fills", () => {
  const hex = /#[0-9a-fA-F]{3,8}\b/;
  const paintAttrs = /(?:stroke|fill|stop-color|color)="([^"]*)"/g;
  for (const icon of ICONS) {
    assert.ok(!hex.test(icon.inner), `${icon.name}: inline hex colour`);
    assert.ok(!/\b(?:rgb|rgba|hsl|hsla)\(/.test(icon.inner), `${icon.name}: functional colour`);
    for (const match of icon.inner.matchAll(paintAttrs)) {
      assert.ok(["currentColor", "none"].includes(match[1]), `${icon.name}: paint ${match[1]}`);
    }
  }
});

test("geometry: nodes are well-formed and basic shapes stay inside the 24 grid", () => {
  const allowedTags = new Set(["path", "circle", "rect", "line", "polyline", "polygon", "ellipse"]);
  const numericAttrs = new Set(["x", "y", "cx", "cy", "x1", "x2", "y1", "y2", "r", "rx", "ry", "width", "height"]);
  for (const icon of ICONS) {
    for (const node of icon.nodes) {
      assert.ok(Array.isArray(node) && node.length === 2, `${icon.name}: node shape`);
      const [tag, attrs] = node;
      assert.ok(allowedTags.has(tag), `${icon.name}: unexpected tag <${tag}>`);
      for (const [attr, value] of Object.entries(attrs)) {
        if (!numericAttrs.has(attr)) continue;
        const number = Number.parseFloat(value);
        assert.ok(Number.isFinite(number), `${icon.name}: ${attr}="${value}"`);
        assert.ok(number >= 0 && number <= 24, `${icon.name}: ${attr}=${value} outside 24 grid`);
      }
    }
    const tags = [...icon.inner.matchAll(/<([a-z]+)\b/g)].map((match) => match[1]);
    assert.deepEqual(tags, icon.nodes.map(([tag]) => tag), `${icon.name}: inner tag order`);
  }
});

test("no duplicate glyphs (each inner markup is unique)", () => {
  const seen = new Map();
  for (const icon of ICONS) {
    const key = icon.inner.replace(/\s+/g, "");
    assert.ok(!seen.has(key), `${icon.name} duplicates the glyph of ${seen.get(key)}`);
    seen.set(key, icon.name);
  }
});

test("swaps.json: 26 declared pairs with valid icons and modes", () => {
  assert.equal(SWAPS.pairs.length, 26);
  const sources = new Set();
  for (const [from, to, mode] of SWAPS.pairs) {
    assert.ok(byName.has(from), `swap source ${from}`);
    assert.ok(byName.has(to), `swap target ${to}`);
    assert.ok(SWAP_MODES.includes(mode), `swap mode ${mode}`);
    assert.notEqual(from, to);
    assert.ok(!sources.has(from), `duplicate swap source ${from}`);
    sources.add(from);
  }
});

test("data/report.json is consistent with data/icons.json", () => {
  assert.equal(REPORT.unique, COUNT);
  assert.equal(REPORT.requested, META.requested);
  assert.deepEqual(REPORT.duplicates, []);
  const names = Object.values(REPORT.animation).flat();
  assert.equal(names.length, COUNT, "animation map must cover every icon exactly once");
  for (const icon of ICONS) assert.ok(REPORT.animation[icon.anim.preset]?.includes(icon.name), `${icon.name}: report animation`);
  const total = ICONS.reduce((sum, icon) => sum + fs.statSync(p("icons", `${icon.kebab}.svg`)).size, 0);
  assert.equal(REPORT.sizes.svgTotalBytes, total, "report.sizes.svgTotalBytes is stale");
  assert.equal(REPORT.sizes.spriteBytes, fs.statSync(p("sprite.svg")).size, "report.sizes.spriteBytes is stale");
});
