/**
 * T9.4 — Zero-dependency JS API (js/index.mjs + js/index.cjs + js/index.d.ts)
 * for the 650-icon Nexa catalog, including categories and shape/fill/3D options.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import {
  p, read, ICONS, CATALOG_KEBABS, CATEGORIES, DATA_PRESETS, SHAPES, THREE_D,
  checkXmlBatch, compact, gzip, brotli, SPRITE_PREFIX,
} from "./helpers.mjs";

const js = await import("../js/index.mjs");
const require = createRequire(import.meta.url);
const cjs = require(p("js/index.cjs"));

const RUNTIME_EXPORTS = [
  "CATEGORIES", "ICONS", "LOOKUP", "PRESETS", "SIZE_PX", "SWAP", "SWAP_PAIRS",
  "categories", "getIcon", "hasIcon", "ids", "meta", "names", "pairFor", "sprite",
  "strokeForSize", "svg", "swapModeFor", "swapSvg", "symbol",
];

function expectedPairs() {
  const { pairs } = JSON.parse(read("data/swaps.json"));
  const map = new Map();
  for (const [from, to, mode] of pairs) map.set(compact(from), { to, mode });
  for (const [from, to, mode] of pairs) if (!map.has(compact(to))) map.set(compact(to), { to: from, mode });
  return map;
}

test("ESM and CJS expose the same Nexa surface", () => {
  assert.deepEqual(Object.keys(js).sort(), RUNTIME_EXPORTS.slice().sort());
  const cjsKeys = Object.keys(cjs).filter((key) => key !== "default" && key !== "__esModule").sort();
  assert.deepEqual(cjsKeys, RUNTIME_EXPORTS.slice().sort());
  assert.equal(cjs.svg("Bell"), js.svg("Bell"));
  assert.equal(cjs.sprite(), js.sprite());
});

test("metadata, categories, names/ids and alias-aware lookup cover all 650 icons", () => {
  assert.equal(js.meta.count, ICONS.length);
  assert.equal(js.meta.name, "Nexa Icons");
  assert.equal(Object.keys(js.ICONS).length, ICONS.length);
  assert.equal(js.names().length, ICONS.length);
  assert.deepEqual(js.names(), [...js.names()].sort());
  assert.deepEqual(js.ids(), CATALOG_KEBABS.slice().sort());
  assert.deepEqual(js.names(), ICONS.map((icon) => icon.name).sort());
  for (const preset of DATA_PRESETS) assert.ok(js.PRESETS.includes(preset), `PRESETS missing ${preset}`);
  assert.equal(Object.keys(js.CATEGORIES).length, 26);
  assert.equal(js.categories("communication").id, "communication");

  for (const icon of ICONS) {
    for (const key of [icon.name, icon.kebab, ...icon.aliases, icon.name.toUpperCase()]) {
      const found = js.getIcon(key);
      assert.ok(found, `getIcon(${key}) undefined`);
      assert.equal(found.kebab, icon.kebab, `getIcon(${key}) resolved to ${found.kebab}`);
      assert.ok(js.hasIcon(key));
    }
  }
  assert.equal(js.getIcon("Nope"), undefined);
  assert.equal(js.hasIcon("Nope"), false);
  assert.ok(Object.isFrozen(js.getIcon("Bell")));
  assert.equal(js.strokeForSize(16), 2);
  assert.equal(js.strokeForSize(20), 1.75);
  assert.equal(js.strokeForSize(24), 1.5);
});

test("svg(): all 650 icons produce valid nexa SVG (currentColor, decorative)", () => {
  const docs = [];
  for (const icon of ICONS) {
    const out = js.svg(icon.name);
    docs.push({ label: `svg(${icon.name})`, xml: out });
    assert.match(out, /^<svg /, `${icon.name}: root`);
    assert.match(out, /viewBox="0 0 24 24"/, `${icon.name}: viewBox`);
    assert.match(out, /width="24"/, `${icon.name}: width`);
    assert.match(out, /fill="none"/, `${icon.name}: fill`);
    assert.match(out, /stroke="currentColor"/, `${icon.name}: stroke`);
    assert.match(out, /stroke-width="1.5"/, `${icon.name}: stroke width`);
    assert.match(out, /class="nexa-icon"/, `${icon.name}: nexa class`);
    assert.match(out, /aria-hidden="true"/, `${icon.name}: aria-hidden`);
    assert.match(out, new RegExp(`data-nexa-icon="${icon.kebab}"`), `${icon.name}: data-nexa-icon`);
    assert.ok(out.includes(icon.inner), `${icon.name}: geometry`);
    assert.ok(!/#[0-9a-fA-F]{3,8}\b/.test(out), `${icon.name}: hard-coded colour`);
  }
  checkXmlBatch(docs);
  assert.equal(js.svg("XIcon"), js.svg("X"));
  assert.equal(js.svg("TriangleAlert"), js.svg("AlertTriangle"));
});

test("svg() options: sizing, a11y, animation, colour, escaping, shapes, fill, 3D", () => {
  for (const [size, px, stroke] of [
    ["sm", 16, "2"], ["md", 20, "1.75"], ["lg", 24, "1.5"], ["xl", 40, "1.5"],
    [16, 16, "2"], [18, 18, "1.75"], [32, 32, "1.5"],
  ]) {
    const out = js.svg("Bell", { size });
    assert.match(out, new RegExp(`width="${px}"`), `size ${size}: width`);
    assert.match(out, new RegExp(`stroke-width="${stroke}"`), `size ${size}: stroke`);
  }
  assert.match(js.svg("Bell", { strokeWidth: 2.5 }), /stroke-width="2.5"/);
  const labelled = js.svg("Bell", { label: "Notifications" });
  assert.match(labelled, /role="img"/);
  assert.match(labelled, /aria-label="Notifications"/);
  assert.ok(!/aria-hidden/.test(labelled));
  assert.match(js.svg("Bell", { title: "Notifications" }), /<title>Notifications<\/title>/);
  assert.match(js.svg("Bell", { animate: true }), /data-nexa-anim="ring"/);
  assert.match(js.svg("Bell", { animate: "spin", trigger: "always" }), /data-nexa-trigger="always"/);
  assert.match(js.svg("Bell", { animate: true, trigger: "manual", active: true }), /data-nexa-active="true"/);
  assert.ok(!/data-nexa-anim/.test(js.svg("Bell", { animate: false })));
  assert.match(js.svg("Bell", { color: "tomato" }), /color:tomato/);
  assert.match(js.svg("Bell", { class: "my-icon" }), /class="nexa-icon my-icon"/);
  const evil = js.svg("Bell", { label: '"><script>alert(1)</script>' });
  assert.ok(!evil.includes("<script>"));
  assert.match(evil, /&quot;&gt;&lt;script&gt;/);

  for (const shape of SHAPES) {
    const out = js.svg("Bell", { shape });
    assert.match(out, /^<span class="nexa-icon-frame nexa-shape nexa-shape--/, `${shape}: wrapper`);
    assert.ok(out.includes(`nexa-shape--${shape}`), `${shape}: class`);
    assert.match(out, /aria-hidden="true"/, `${shape}: decorative frame`);
  }
  assert.match(js.svg("Bell", { label: "Alerts", shape: "circle" }), /^<span[^>]*role="img"[^>]*aria-label="Alerts"/);
  assert.match(js.svg("Bell", { variant: "duotone" }), /data-fill-state="soft"/);
  assert.match(js.svg("Circle", { filled: true }), /data-fill-state="true"/, "fillSafe icon fills solid");
  assert.match(js.svg("Bell", { filled: true }), /data-fill-state="soft"/, "open glyph degrades to duotone");
  assert.match(js.svg("Heart", { filled: true, animateFill: true }), /data-fill-anim="true"/);
  for (const preset of THREE_D) {
    const out = js.svg("Bell", { threeD: preset });
    assert.match(out, new RegExp(`class="nexa-icon-frame nexa-3d"`), `${preset}: 3D frame`);
    assert.match(out, new RegExp(`data-nexa-3d="${preset}"`), `${preset}: data-nexa-3d`);
  }
});

test("svg()/symbol() throw RangeError for unknown icons", () => {
  assert.throws(() => js.svg("Nope"), (error) => error instanceof RangeError && /Unknown icon/.test(error.message));
  assert.throws(() => js.svg(42), (error) => error instanceof RangeError);
  assert.throws(() => js.symbol("Nope"), (error) => error instanceof RangeError);
});

test("sprite()/symbol(): 650 nexa- symbols, exact sprite.svg parity, strokeWidth override", () => {
  const file = fs.readFileSync(p("sprite.svg"), "utf8");
  assert.equal(js.sprite(), file.replace(/\n$/, ""));
  assert.equal((js.sprite().match(/<symbol\b/g) || []).length, ICONS.length);
  for (const icon of ICONS) {
    const symbol = js.symbol(icon.kebab);
    assert.ok(symbol.startsWith(`<symbol id="${SPRITE_PREFIX}${icon.kebab}"`), `${icon.kebab}: symbol id`);
    assert.ok(js.sprite().includes(symbol), `${icon.kebab}: symbol missing from sprite()`);
    assert.match(symbol, /viewBox="0 0 24 24"/);
    assert.match(symbol, /stroke-width="2"/);
    assert.ok(symbol.includes(icon.inner));
  }
  assert.match(js.symbol("Bell", { strokeWidth: 1.25 }), /stroke-width="1.25"/);
  const thin = js.sprite({ strokeWidth: 1.75 });
  assert.match(thin, /stroke-width="1.75"/);
  assert.ok(!/stroke-width="2"/.test(thin));
  assert.equal((thin.match(/<symbol\b/g) || []).length, ICONS.length);
});

test("swap helpers: 49 directed edges matching data/swaps.json, alias-aware", () => {
  const expected = expectedPairs();
  assert.equal(js.SWAP_PAIRS.length, 49);
  for (const icon of ICONS) {
    const want = expected.get(compact(icon.name));
    assert.equal(js.pairFor(icon.name), want?.to, `${icon.name}: pairFor`);
    assert.equal(js.swapModeFor(icon.name), want?.mode ?? "fade", `${icon.name}: swapModeFor`);
  }
  assert.equal(js.pairFor("XIcon"), "Check");
  assert.equal(js.pairFor("TriangleAlert"), undefined);
  const docs = [];
  for (const [from, to, mode] of JSON.parse(read("data/swaps.json")).pairs) {
    const out = js.swapSvg(from, to);
    docs.push({ label: `swapSvg(${from},${to})`, xml: out });
    assert.match(out, /^<span class="nexa-swap"/, `${from}->${to}: wrapper`);
    assert.match(out, new RegExp(`data-mode="${mode}"`), `${from}->${to}: mode`);
    assert.match(out, /data-nexa-active="false"/);
    assert.ok(out.includes(ICONS.find((icon) => icon.name === from).inner));
    assert.ok(out.includes(ICONS.find((icon) => icon.name === to).inner));
    assert.equal((out.match(/<svg /g) || []).length, 2);
  }
  checkXmlBatch(docs);
  const labelled = js.swapSvg("ArrowLeft", "ArrowRight", { label: "Toggle sidebar" });
  assert.match(labelled.match(/^<span[^>]*>/)[0], /role="img"/);
  assert.match(labelled.match(/^<span[^>]*>/)[0], /aria-label="Toggle sidebar"/);
  assert.match(js.swapSvg("Sun", "Moon", { active: true, mode: "slide", duration: 500 }), /data-nexa-active="true"/);
  assert.match(js.swapSvg("Sun", "Moon", { mode: "slide", duration: 500 }), /data-mode="slide"[\s\S]*--nexa-swap-dur:500ms/);
});

test("js/index.d.ts declares every runtime export and Nexa types", () => {
  const dts = read("js/index.d.ts");
  for (const name of RUNTIME_EXPORTS) {
    assert.match(dts, new RegExp(`export (?:declare )?(?:function|const|interface|type|class)\\s+${name}\\b`), `d.ts missing ${name}`);
  }
  for (const preset of DATA_PRESETS) assert.ok(dts.includes(`"${preset}"`), `NexaPreset missing ${preset}`);
  for (const shape of SHAPES) assert.ok(dts.includes(`"${shape}"`), `shape ${shape} missing from d.ts`);
  assert.match(dts, /NexaPreset|NexaPreset/);
});

test("size budgets: full 650-icon payload stays within honest limits", () => {
  const esm = fs.readFileSync(p("js/index.mjs"));
  assert.ok(esm.length <= 420 * 1024, `js/index.mjs raw ${esm.length} B exceeds 250 KB`);
  assert.ok(gzip(esm) <= 80 * 1024, `js/index.mjs gzip ${gzip(esm)} B exceeds 60 KB`);
  assert.ok(brotli(esm) <= 60 * 1024, `js/index.mjs brotli ${brotli(esm)} B exceeds 45 KB`);
  assert.ok(Math.abs(gzip(fs.readFileSync(p("js/index.cjs"))) - gzip(esm)) < 1024, "CJS mirror should not be materially heavier");
});
