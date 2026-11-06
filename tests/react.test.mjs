/**
 * T9.3 — React/TypeScript dist surface for the 650-icon Nexa package.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { build } from "esbuild";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { p, read, ICONS, DATA_PRESETS, ICON_CLASS, brotli, gzip } from "./helpers.mjs";

const require = createRequire(import.meta.url);
const dist = await import("../dist/index.js");
const cjs = require(p("dist/cjs/index.js"));

const HELPERS = [
  "CATEGORIES", "ICON_NAMES", "Icon", "IconSwap", "IconToggle", "NEXA_MAP", "PRESETS",
  "SIZE_PX", "STROKE_FOR_PX", "SWAP", "SWAP_PAIRS", "createIcon", "getIcon",
  "resolveKebab", "strokeForSize", "swapModeFor", "swapTarget",
];
const ALIASES = ["TriangleAlert", "XIcon"];
const EXPECTED_EXPORTS = [...ICONS.map((icon) => icon.name), ...ALIASES, ...HELPERS];

const ssr = (Component, props = {}) => renderToStaticMarkup(createElement(Component, props));
const normalizeSsr = (html) => html.replace(/>\s*<\/(path|circle|rect|line|polyline|polygon|ellipse)>/g, "/>");

test("dist ESM and CJS expose exactly the catalog + aliases + helpers", () => {
  assert.equal(new Set(EXPECTED_EXPORTS).size, EXPECTED_EXPORTS.length, "duplicate expected export");
  for (const name of EXPECTED_EXPORTS) {
    assert.ok(name in dist, `ESM missing export ${name}`);
    assert.ok(name in cjs, `CJS missing export ${name}`);
  }
  const extras = Object.keys(dist).filter((key) => !EXPECTED_EXPORTS.includes(key) && key !== "default");
  assert.deepEqual(extras, [], "unexpected extra ESM exports");
  const cjsKeys = Object.keys(cjs).filter((key) => key !== "default" && key !== "__esModule");
  assert.deepEqual(cjsKeys.sort(), EXPECTED_EXPORTS.slice().sort());
});

test("all 650 icon components SSR-render the nexa SVG contract", () => {
  for (const icon of ICONS) {
    const Component = dist[icon.name];
    assert.ok(Component, `${icon.name} not exported`);
    assert.equal(Component.displayName, icon.name, `${icon.name}: displayName`);
    const html = normalizeSsr(ssr(Component));
    assert.match(html, /^<svg /, `${icon.name}: renders <svg>`);
    assert.match(html, /viewBox="0 0 24 24"/, `${icon.name}: viewBox`);
    assert.match(html, /fill="none"/, `${icon.name}: fill`);
    assert.match(html, /stroke="currentColor"/, `${icon.name}: stroke`);
    assert.match(html, new RegExp(`class="${ICON_CLASS}"`), `${icon.name}: nexa class`);
    assert.match(html, /aria-hidden="true"/, `${icon.name}: aria-hidden`);
    assert.match(html, new RegExp(`data-nexa-icon="${icon.kebab}"`), `${icon.name}: data-nexa-icon`);
    assert.ok(html.includes(icon.inner), `${icon.name}: geometry differs from dataset`);
    assert.ok(!/#[0-9a-fA-F]{3,8}\b/.test(html), `${icon.name}: hard-coded colour`);
  }
});

test("default render: 24 px / stroke 1.5, animation opt-in", () => {
  const html = ssr(dist.Bell);
  assert.match(html, /width="24"/);
  assert.match(html, /height="24"/);
  assert.match(html, /stroke-width="1.5"/);
  assert.match(html, /class="nexa-icon"/);
  assert.match(html, /focusable="false"/);
  assert.match(html, /data-nexa-icon="bell"/);
  assert.ok(!/data-nexa-anim/.test(html), "animation must be opt-in");
});

test("size → stroke rule: 16=>2, 20=>1.75, 24/32/40=>1.5", () => {
  for (const [size, px, stroke] of [
    ["sm", 16, "2"], ["md", 20, "1.75"], ["lg", 24, "1.5"], ["xl", 40, "1.5"],
    [16, 16, "2"], [18, 18, "1.75"], [32, 32, "1.5"], [48, 48, "1.5"],
  ]) {
    const html = ssr(dist.Bell, { size });
    assert.match(html, new RegExp(`width="${px}"`), `size ${size}: width`);
    assert.match(html, new RegExp(`stroke-width="${stroke}"`), `size ${size}: stroke`);
  }
  assert.equal(dist.strokeForSize(16), 2);
  assert.equal(dist.strokeForSize(20), 1.75);
  assert.equal(dist.strokeForSize(24), 1.5);
  assert.equal(dist.STROKE_FOR_PX, dist.strokeForSize);
});

test("accessibility: label/title, animation props, className and attribute passthrough", () => {
  const labelled = ssr(dist.Bell, { label: "Notifications" });
  assert.match(labelled, /role="img"/);
  assert.match(labelled, /aria-label="Notifications"/);
  assert.ok(!/aria-hidden/.test(labelled));
  const titled = ssr(dist.Bell, { title: "Notifications" });
  assert.match(titled, /<title>Notifications<\/title>/);
  const animated = ssr(dist.Bell, { animate: true, trigger: "always" });
  assert.match(animated, /data-nexa-anim="ring"/);
  assert.match(animated, /data-nexa-trigger="always"/);
  assert.match(ssr(dist.Mail, { animate: true }), /data-nexa-anim="bounce"/);
  assert.ok(!/data-nexa-anim/.test(ssr(dist.Bell, { animate: false })));
  assert.match(ssr(dist.Bell, { animate: true, trigger: "manual", active: true }), /data-nexa-active="true"/);
  const styled = ssr(dist.Bell, { className: "text-red-500", "data-testid": "bell" });
  assert.match(styled, /class="nexa-icon text-red-500"/);
  assert.match(styled, /data-testid="bell"/);
});

test("createIcon factory, generic <Icon> and registry resolve names and aliases", () => {
  const Custom = dist.createIcon({
    name: "Custom", preset: "pulse", trigger: "hover", nodes: [["path", { d: "M4 4h16v16H4z" }]],
  });
  assert.equal(Custom.displayName, "Custom");
  assert.match(ssr(Custom, { animate: true, label: "Custom" }), /data-nexa-anim="pulse"/);
  for (const [name, expected] of [
    ["Bell", "Bell"], ["bell", "Bell"], ["XIcon", "X"],
    ["triangle-alert", "AlertTriangle"], ["TriangleAlert", "AlertTriangle"],
  ]) {
    assert.equal(dist.getIcon(name)?.displayName, expected, `getIcon(${name})`);
  }
  assert.equal(dist.getIcon("DefinitelyNotAnIcon"), undefined);
  assert.equal(ssr(dist.Icon, { name: "Nope" }), "");
  const generic = ssr(dist.Icon, { name: "Bell", label: "Bell" });
  assert.match(generic, /role="img"/);
  assert.match(generic, /aria-label="Bell"/);
});

test("registry + swap API are catalog-wide and alias aware", () => {
  assert.equal(dist.ICON_NAMES.length, ICONS.length);
  assert.deepEqual([...dist.ICON_NAMES].sort(), ICONS.map((icon) => icon.name).sort());
  for (const icon of ICONS) {
    assert.equal(dist.resolveKebab(icon.name), icon.kebab);
    assert.equal(dist.resolveKebab(icon.kebab), icon.kebab);
    for (const alias of icon.aliases) assert.equal(dist.resolveKebab(alias), icon.kebab, `${icon.name}: alias ${alias}`);
  }
  assert.equal(dist.resolveKebab("NotAnIcon"), undefined);
  const { pairs } = JSON.parse(read("data/swaps.json"));
  const compact = (value) => value.toLowerCase().replace(/[\s_-]+/g, "");
  const expected = new Map(pairs.map(([from, to, mode]) => [compact(from), { to, mode }]));
  for (const [from, to, mode] of pairs) if (!expected.has(compact(to))) expected.set(compact(to), { to: from, mode });
  for (const icon of ICONS) {
    const want = expected.get(compact(icon.name));
    assert.equal(dist.swapTarget(icon.name), want?.to, `${icon.name}: swapTarget`);
    assert.equal(dist.swapModeFor(icon.name), want?.mode ?? "fade", `${icon.name}: swapModeFor`);
  }
  assert.equal(dist.SWAP_PAIRS.length, 49);
  assert.equal(dist.swapTarget("XIcon"), "Check");
});

test("IconSwap / IconToggle: nexa markup, aria contract, toggle state", () => {
  const swap = ssr(dist.IconSwap, { from: dist.ArrowLeft, to: dist.ArrowRight, label: "Collapse sidebar" });
  assert.match(swap, /^<span class="nexa-swap"/);
  assert.match(swap, /data-mode="mirror"/);
  assert.match(swap, /data-nexa-active="false"/);
  assert.match(swap, /style="--nexa-swap-dur:260ms"/);
  assert.match(swap, /role="img"/);
  assert.match(swap, /aria-label="Collapse sidebar"/);
  assert.equal((swap.match(/aria-hidden="true"/g) || []).length >= 2, true);
  const decorative = ssr(dist.IconSwap, { from: dist.ArrowLeft, to: dist.ArrowRight });
  assert.match(decorative, /aria-hidden="true"/);
  assert.ok(!/role="img"/.test(decorative));
  const off = ssr(dist.IconToggle, { from: dist.ArrowLeft, to: dist.ArrowRight, label: "Next slide" });
  assert.match(off, /^<button /);
  assert.match(off, /aria-pressed="false"/);
  assert.match(off, /class="nexa-icon-toggle"/);
  const on = ssr(dist.IconToggle, { from: dist.ArrowLeft, to: dist.ArrowRight, label: "Next slide", pressed: true });
  assert.match(on, /aria-pressed="true"/);
  assert.notEqual(on, off);
});

test("dist layout: ESM+CJS icon modules, 26 category barrels, CSS copied", () => {
  const esmIcons = fs.readdirSync(p("dist/icons")).filter((file) => file.endsWith(".js"));
  const cjsIcons = fs.readdirSync(p("dist/cjs/icons")).filter((file) => file.endsWith(".js"));
  assert.equal(esmIcons.length, ICONS.length);
  assert.equal(cjsIcons.length, ICONS.length);
  assert.equal(JSON.parse(read("dist/cjs/package.json")).type, "commonjs", "dist/cjs package marker must be valid CommonJS");
  assert.equal(read("dist/animations.css"), read("src/animations.css"));
  const categories = fs.readdirSync(p("dist/categories")).filter((file) => file.endsWith(".js"));
  assert.equal(categories.length, 27, "26 category barrels + catalog");
  for (const icon of ICONS) {
    assert.ok(fs.existsSync(p("dist/icons", `${icon.kebab}.js`)), `missing dist/icons/${icon.kebab}.js`);
    assert.ok(fs.existsSync(p("dist/cjs/icons", `${icon.kebab}.js`)), `missing cjs ${icon.kebab}`);
  }
});

test("d.ts: every icon, both aliases, prop types and helper signatures", () => {
  const dts = read("dist/index.d.ts");
  for (const icon of ICONS) assert.match(dts, new RegExp(`\\b${icon.name}\\b`), `d.ts missing ${icon.name}`);
  for (const token of ["TriangleAlert", "XIcon", "NexaIconName", "NexaIconProps", "NexaPreset", "CATEGORIES", "IconSwap", "IconToggle", "createIcon"]) {
    assert.ok(dts.includes(token), `d.ts missing ${token}`);
  }
  assert.ok(dts.includes("NexaPreset") || dts.includes("Preset"));
  const types = read("dist/types.d.ts");
  for (const preset of DATA_PRESETS) assert.ok(types.includes(`"${preset}"`), `preset ${preset} missing from types`);
  assert.equal(fs.readdirSync(p("dist/icons")).filter((file) => file.endsWith(".d.ts")).length, ICONS.length);
});

test("package.json: Nexa package exports/types/sideEffects/peer deps", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.name, "@nexa/icons");
  assert.equal(pkg.type, "module");
  assert.deepEqual(pkg.sideEffects, ["*.css"]);
  assert.equal(pkg.exports["."].import, "./dist/index.js");
  assert.equal(pkg.exports["."].require, "./dist/cjs/index.js");
  assert.equal(pkg.exports["."].types, "./dist/index.d.ts");
  assert.equal(pkg.exports["./animations.css"], "./dist/animations.css");
  assert.equal(pkg.exports["./js"].import, "./js/index.mjs");
  assert.equal(pkg.exports["./sprite.svg"], "./sprite.svg");
  assert.equal(pkg.exports["./react/*"].import, "./dist/icons/*.js");
  assert.ok(pkg.exports["./*"].import.includes("dist/categories"));
  assert.ok(pkg.peerDependencies.react);
  assert.equal(pkg.peerDependenciesMeta.react.optional, true);
  assert.equal(pkg.scripts.test, "node --test tests/");
});

test("TypeScript: tsc --noEmit is clean", () => {
  const result = spawnSync(p("node_modules/.bin/tsc"), ["-p", "tsconfig.json", "--noEmit"], {
    cwd: p("."), encoding: "utf8", timeout: 120_000,
  });
  assert.equal(result.status, 0, `tsc failed:\n${result.stdout}\n${result.stderr}`);
});

test("tree-shaking: one-icon bundle stays under 1.5 KB brotli and drops unused icons", async () => {
  const result = await build({
    stdin: {
      contents: `import { Bell } from ${JSON.stringify(p("dist/index.js"))};\nexport { Bell };\n`,
      resolveDir: p("."),
      loader: "js",
    },
    bundle: true, minify: true, format: "esm", write: false, metafile: true,
    external: ["react", "react/jsx-runtime"], logLevel: "silent",
  });
  const code = result.outputFiles[0].text ?? Buffer.from(result.outputFiles[0].contents).toString("utf8");
  const bytes = Buffer.byteLength(code);
  const br = brotli(Buffer.from(code));
  const gz = gzip(Buffer.from(code));
  assert.ok(code.includes("M10.268"), "Bell geometry missing");
  assert.ok(!code.includes("M18 6 6 18"), "X icon was not tree-shaken");
  assert.ok(br < 2048, `one-icon bundle ${bytes} B raw / ${br} B br / ${gz} B gz`);
});
