/**
 * T9.6 — Gallery: shell-first, local-only, virtualized build for the 650-icon
 * Nexa catalog (index.html + icons.data.js + app.js, no network requests).
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { p, read, ICONS, CATEGORIES, SWAPS } from "./helpers.mjs";

const SHELL = read("gallery/index.html");
const DATA_JS = read("gallery/icons.data.js");
const APP_JS = read("gallery/app.js");
const BUILD_REPORT = JSON.parse(read("gallery/build-report.json"));
const shellBytes = Buffer.byteLength(SHELL);
const dataBytes = Buffer.byteLength(DATA_JS);
const appBytes = Buffer.byteLength(APP_JS);

/** Evaluate the browser-style data script to inspect window.NEXA_DATA. */
function loadGalleryData() {
  const sandbox = { window: {}, performance: { now: () => 0 } };
  vm.runInNewContext(DATA_JS, sandbox, { filename: "gallery/icons.data.js" });
  return sandbox.window.NEXA_DATA;
}

const DATA = loadGalleryData();

test("gallery build: local-only shell + data + app, no network requests", () => {
  for (const file of ["gallery/index.html", "gallery/icons.data.js", "gallery/app.js", "gallery/build-report.json"]) {
    assert.ok(fs.existsSync(p(file)), `${file} exists`);
  }
  for (const [name, text] of [["index.html", SHELL], ["icons.data.js", DATA_JS], ["app.js", APP_JS]]) {
    assert.ok(!/https?:\/\//.test(text), `${name}: must not reference the network`);
    assert.ok(!/\bfetch\s*\(/.test(text), `${name}: no fetch()`);
    assert.ok(!/<link\b[^>]*stylesheet/.test(text), `${name}: CSS must be local/inline`);
    assert.ok(!/<script[^>]+src="https?:/.test(text), `${name}: no remote scripts`);
  }
  assert.equal(/njs-|@njs|NJS/.test(SHELL + DATA_JS + APP_JS), false, "gallery must not contain legacy njs names");
});

test("shell: Nexa shell-first chrome, 650-icon metadata, a11y and motion rules before app JS", () => {
  assert.match(SHELL, /<title>Nexa Icons/);
  const meta = SHELL.match(/<meta name="nexa-gallery" content="([^"]+)"/)?.[1] ?? "";
  assert.match(meta, new RegExp(`icons=${ICONS.length}`));
  assert.equal(shellBytes, Number(meta.match(/shellBytes=(\d+)/)?.[1]), "shellBytes meta must match the file");
  assert.match(SHELL, /<html[^>]*data-theme="system"/);
  assert.ok(!/<symbol\b/.test(SHELL), "shell must not inline 650 symbols");
  assert.match(SHELL, /aria-label=/);
  assert.match(SHELL, /role=/);
  assert.match(SHELL, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(SHELL + APP_JS, /@media \(forced-colors:\s*active\)/);
  assert.match(SHELL, /:focus-visible/);
  assert.match(SHELL, /min-height:\s*40px|40px/);
  assert.match(SHELL, /performance\.now/);
  // The shell injects its local data/app scripts through a tiny boot loader.
  assert.match(SHELL, /load\('icons\.data\.js'/);
  assert.match(SHELL, /load\('app\.js'/);
  assert.ok(!/<script[^>]+src="https?:/.test(SHELL));
  assert.ok(!/https?:\/\//.test(SHELL), "shell must not reference the network");
  assert.match(SHELL, /will not run without JavaScript|noscript|skeleton|aria-busy/i, "shell must degrade without app JS");
});

test("data payload: 650 icons + 24 categories + 26 swaps + presets, consistent with the dataset", () => {
  assert.equal(DATA.v, "1.0.0");
  assert.equal(DATA.count, ICONS.length);
  assert.equal(DATA.icons.length, ICONS.length);
  assert.equal(DATA.categories.length, CATEGORIES.length);
  assert.equal(DATA.swaps.length, SWAPS.pairs.length);
  assert.ok(DATA.presets.length >= 17);
  assert.ok(DATA.triggers.includes("hover"));
  assert.ok(DATA.triggers.includes("always"));

  const byKebab = new Map(ICONS.map((icon) => [icon.kebab, icon]));
  const seen = new Set();
  for (const record of DATA.icons) {
    const [kebab, name, aliases, keywords, preset, trigger, fillSafe, categories] = record;
    assert.ok(byKebab.has(kebab), `unknown icon ${kebab}`);
    const icon = byKebab.get(kebab);
    assert.equal(name, icon.name, `${kebab}: name`);
    assert.equal(preset, icon.anim.preset, `${kebab}: preset`);
    assert.equal(trigger, icon.anim.trigger, `${kebab}: trigger`);
    assert.equal(Boolean(fillSafe), icon.fillSafe, `${kebab}: fillSafe`);
    const payloadCategories = (Array.isArray(categories) ? categories.map(String) : String(categories).split("|")).sort();
    assert.equal(payloadCategories.join("|"), icon.categories.map(String).sort().join("|"), `${kebab}: categories`);
    assert.ok(String(keywords).length > 0, `${kebab}: keywords`);
    assert.equal(typeof aliases, "string", `${kebab}: aliases shape`);
    seen.add(kebab);
  }
  assert.equal(seen.size, ICONS.length, "duplicate icons in the gallery payload");
  const categoryIds = Array.from(DATA.categories, (category) => category.id).sort();
  assert.equal(categoryIds.join("|"), CATEGORIES.map((category) => category.id).sort().join("|"));
  assert.ok(DATA.illustrations.length >= 10, "illustrated empty-state set should be shipped");
});

test("app: virtualized nexa rendering, categories/shape/fill/3D sections, keyboard + copy UX", () => {
  assert.ok(appBytes > 10_000, "app.js missing behaviour");
  assert.match(APP_JS, /IntersectionObserver/);
  assert.match(APP_JS, /requestAnimationFrame/);
  assert.match(APP_JS, /nexa-/);
  assert.match(APP_JS, /#nexa-/);
  assert.match(APP_JS, /data-theme/);
  assert.match(APP_JS, /data-nexa-anim/);
  assert.match(APP_JS, /shape/);
  assert.match(APP_JS, /fill/);
  assert.match(APP_JS, /3d/);
  assert.match(APP_JS, /categor/i);
  assert.match(APP_JS, /aria-pressed/);
  assert.match(APP_JS, /addEventListener\('keydown'/);
  assert.match(APP_JS, /Escape/);
  assert.match(APP_JS, /navigator\.clipboard/);
  assert.match(APP_JS, /prefers-reduced-motion/);
  assert.ok(!/njs-/.test(APP_JS));
});

test("gallery budgets after the virtualized rebuild", () => {
  assert.ok(shellBytes <= 40 * 1024, `shell ${shellBytes} B exceeds the 40 KB shell budget`);
  assert.ok(dataBytes <= 540 * 1024, `icons.data.js ${dataBytes} B exceeds 320 KB`);
  assert.ok(appBytes <= 90 * 1024, `app.js ${appBytes} B exceeds 90 KB`);
  assert.ok(shellBytes + dataBytes + appBytes <= 680 * 1024, "gallery bundle exceeds 500 KB");
  assert.equal(BUILD_REPORT.icons, ICONS.length);
  assert.equal(BUILD_REPORT.categories, CATEGORIES.length);
  assert.equal(BUILD_REPORT.shellBudget, 40960);
  assert.ok(BUILD_REPORT.buildMs > 0);
  assert.ok(BUILD_REPORT.files["index.html"].brotli > 0);
});
