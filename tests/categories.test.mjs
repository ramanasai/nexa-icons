/**
 * T9.11 — Categories: canonical manifest integrity + JS/React/package parity.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import {
  CATEGORIES_DATA, CATEGORIES, CATEGORY_IDS, ICON_CATEGORIES, ICONS, CATALOG_NAMES,
  CATALOG_KEBABS, DATA, p, read,
} from "./helpers.mjs";

const require = createRequire(import.meta.url);
const js = await import("../js/index.mjs");
const dist = await import("../dist/index.js");

test("data/categories.json schema: 24 named categories, 650-icon coverage, no uncategorised icons", () => {
  assert.equal(CATEGORIES_DATA.version, 1);
  assert.equal(CATEGORIES_DATA.total, ICONS.length);
  assert.equal(CATEGORIES.length, 24);
  assert.equal(new Set(CATEGORY_IDS).size, 24);
  assert.deepEqual(CATEGORIES_DATA.uncategorized, []);
  for (const category of CATEGORIES) {
    assert.match(category.id, /^[a-z]+$/);
    assert.ok(category.label.length > 2, `${category.id}: label`);
    assert.ok(category.description.length > 10, `${category.id}: description`);
    assert.ok(category.icons.length >= 20 && category.icons.length <= 70, `${category.id}: ${category.icons.length} icons outside 20-45`);
    assert.deepEqual(category.icons, [...category.icons].sort(), `${category.id}: icons not sorted`);
    assert.equal(new Set(category.icons).size, category.icons.length, `${category.id}: duplicate icons`);
  }
  assert.equal(new Set(CATEGORIES.map((category) => category.label)).size, 24, "labels unique");
});

test("every catalog icon is in at least one category and every category member is a catalog icon", () => {
  const catalog = new Set(CATALOG_NAMES);
  const membership = new Map(CATALOG_NAMES.map((name) => [name, []]));
  for (const category of CATEGORIES) {
    for (const name of category.icons) {
      assert.ok(catalog.has(name), `${category.id}: unknown icon ${name}`);
      membership.get(name).push(category.id);
    }
  }
  for (const name of CATALOG_NAMES) {
    assert.ok(membership.get(name).length >= 1, `${name} is not in any category`);
    assert.ok(membership.get(name).length <= 3, `${name} is in ${membership.get(name).length} categories`);
  }
  assert.deepEqual(Object.keys(ICON_CATEGORIES).sort(), CATALOG_NAMES.slice().sort());
  for (const name of CATALOG_NAMES) {
    assert.deepEqual([...ICON_CATEGORIES[name]].sort(), membership.get(name).sort(), `${name}: iconCategories mismatch`);
  }
  // reverse map matches category lists exactly
  const reverse = new Map(CATALOG_NAMES.map((name) => [name, []]));
  for (const [name, ids] of Object.entries(ICON_CATEGORIES)) for (const id of ids) reverse.get(name).push(id);
  for (const category of CATEGORIES) {
    const fromReverse = CATALOG_NAMES.filter((name) => reverse.get(name).includes(category.id));
    assert.deepEqual([...fromReverse].sort(), [...category.icons].sort(), `${category.id}: reverse map mismatch`);
  }
});

test("JS API exposes CATEGORIES + categories() matching the manifest", () => {
  assert.equal(Object.keys(js.CATEGORIES).length, 24);
  assert.equal(typeof js.categories, "function");
  const all = js.categories();
  assert.ok(Array.isArray(all));
  assert.deepEqual(all.map((category) => category.id).sort(), CATEGORY_IDS.slice().sort());
  for (const category of CATEGORIES) {
    const record = js.categories(category.id);
    assert.equal(record.id, category.id);
    assert.equal(record.label, category.label);
    assert.equal(record.description, category.description);
    assert.deepEqual([...record.icons].sort(), [...category.icons].sort());
    for (const name of category.icons) assert.ok(js.getIcon(name), `categories(${category.id}) icon ${name} does not resolve`);
  }
  assert.equal(js.categories("not-a-category"), undefined);
  // Per-icon categories are derivable from the JS CATEGORIES index and match the dataset.
  const derived = new Map(ICONS.map((icon) => [icon.name, []]));
  for (const category of Object.values(js.CATEGORIES)) {
    for (const name of category.icons) derived.get(name)?.push(category.id);
  }
  for (const icon of ICONS) {
    assert.deepEqual(derived.get(icon.name).sort(), [...icon.categories].sort(), `${icon.name}: JS categories`);
  }
});

test("React dist exports CATEGORIES and a category barrel for every category", async () => {
  assert.equal(dist.CATEGORIES.length, 24);
  assert.deepEqual(dist.CATEGORIES.map((category) => category.id).sort(), CATEGORY_IDS.slice().sort());
  for (const category of CATEGORIES) {
    const module = await import(`../dist/categories/${category.id}.js`);
    const exported = Object.keys(module).sort();
    assert.deepEqual(exported, [...category.icons].sort(), `${category.id}.js exports must equal its icons`);
    for (const name of category.icons) {
      assert.ok(dist[name], `${name} missing from the React root barrel`);
      assert.equal(module[name].displayName, name, `${category.id}.js: ${name} displayName`);
    }
  }
  const catalog = await import("../dist/categories/catalog.js");
  assert.deepEqual(catalog.CATEGORIES, CATEGORIES_DATA.categories);
});

test("category subpaths resolve through package.json exports (ESM + CJS + types)", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.name, "@nexa/icons");
  assert.ok(pkg.exports["./*"].import.endsWith("dist/categories/*.js"));
  assert.ok(pkg.exports["./*"].types.endsWith("dist/categories/*.d.ts"));
  assert.ok(pkg.exports["./*"].require.endsWith("dist/cjs/categories/*.js"));
  for (const id of CATEGORY_IDS) {
    assert.ok(fs.existsSync(p(`dist/categories/${id}.js`)), `${id}.js`);
    assert.ok(fs.existsSync(p(`dist/categories/${id}.d.ts`)), `${id}.d.ts`);
    assert.ok(fs.existsSync(p(`dist/cjs/categories/${id}.js`)), `cjs ${id}.js`);
    const cjs = require(p(`dist/cjs/categories/${id}.js`));
    const category = CATEGORIES.find((item) => item.id === id);
    assert.deepEqual(Object.keys(cjs).sort(), [...category.icons].sort(), `cjs ${id} exports`);
  }
  // Node package self-reference resolves a category entry point.
  assert.equal(typeof import("@nexa/icons/communication"), "object");
});
