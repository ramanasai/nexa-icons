/**
 * T9.8 — Accessibility and motion safety for the Nexa presentation layer.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { read, ALL_PRESETS, DATA_PRESETS, ICON_CLASS } from "./helpers.mjs";

const CSS = read("src/animations.css");
const CSS_NO_COMMENTS = CSS.replace(/\/\*[\s\S]*?\*\//g, "");
const DIST_CSS = read("dist/animations.css");
const SHELL = read("gallery/index.html");
const APP = read("gallery/app.js");

test("animation layer ships all 17 presets plus fade-in", () => {
  const keyframes = new Set([...CSS.matchAll(/@keyframes\s+([a-z-]+)/g)].map((match) => match[1]));
  for (const preset of ALL_PRESETS) assert.ok(keyframes.has(`njs-${preset}`) || keyframes.has(`nexa-${preset}`), `missing keyframes for ${preset}`);
  assert.equal(DATA_PRESETS.length, 17);
  assert.equal(DIST_CSS, CSS);
  assert.ok(keyframes.size >= 18);
});

test("keyframes are compositor-only except draw-on stroke-dashoffset", () => {
  const blocks = [...CSS.matchAll(/@keyframes\s+[a-z-]+\s*\{([\s\S]*?)\n\}/g)];
  assert.ok(blocks.length >= 16, `only ${blocks.length} keyframe blocks parsed`);
  const allowed = new Set(["transform", "opacity", "animation-timing-function", "stroke-dashoffset"]);
  const violations = [];
  for (const block of blocks) for (const match of block[1].matchAll(/([a-z-]+)\s*:/g)) if (!allowed.has(match[1])) violations.push(match[1]);
  assert.deepEqual([...new Set(violations)], []);
  const willChange = [...CSS.matchAll(/will-change\s*:\s*([^;}]+)/g)].map((match) => match[1].trim());
  assert.deepEqual(willChange.filter((value) => value !== "auto"), [], "do not spray will-change");
});

test("prefers-reduced-motion disables animations, swaps, fills and 3D", () => {
  const blocks = [...CSS.matchAll(/@media \(prefers-reduced-motion: reduce\)\s*\{([\s\S]*?)\n\}/g)].map((match) => match[1]);
  assert.ok(blocks.length >= 4, `expected ≥4 reduced-motion blocks, got ${blocks.length}`);
  const joined = blocks.join("\n");
  assert.match(joined, /animation:\s*none\s*!important/);
  assert.match(joined, /transition:\s*none\s*!important/);
  assert.match(joined, /data-fill-anim="true"[^}]*transition:\s*none/s);
  assert.match(joined, /\.nexa-3d[^}]*transform:\s*none/s);
  assert.match(SHELL, /prefers-reduced-motion/);
  assert.match(APP, /prefers-reduced-motion/);
});

test("forced-colors support uses system colours", () => {
  assert.match(CSS, /@media \(forced-colors:\s*active\)/);
  assert.match(CSS, /forced-color-adjust/);
  assert.match(SHELL + APP, /@media \(forced-colors:\s*active\)/);
  assert.match(SHELL + APP, /CanvasText|LinkText|Highlight|ButtonText|Canvas|forced-color-adjust/);
});

test("animation layer is theme-agnostic (no hard-coded colours)", () => {
  assert.deepEqual(CSS_NO_COMMENTS.match(/#[0-9a-fA-F]{3,8}\b/g) || [], []);
  assert.deepEqual(CSS_NO_COMMENTS.match(/\b(?:rgba?|hsla?)\(/g) || [], []);
  const colorDecls = [...CSS_NO_COMMENTS.matchAll(/(?:^|[;{\s])(background(?:-color)?|fill|color)\s*:\s*([^;{}]+);/g)];
  for (const match of colorDecls) {
    const value = match[2].trim();
    assert.ok(
      ["inherit", "none", "transparent", "currentColor", "CanvasText", "Canvas", "ButtonText", "LinkText", "Highlight"].includes(value) || value.includes("color-mix"),
      `unexpected ${match[1]}: ${value}`
    );
  }
});

test("swap, toggle and focus semantics use the nexa-* contract", () => {
  for (const mode of ["fade", "mirror", "flip", "rotate", "slide"]) assert.ok(CSS.includes(`[data-mode="${mode}"]`), `swap mode ${mode}`);
  assert.match(CSS, /\.nexa-swap\s*\{[^}]*position:\s*relative/s);
  assert.match(CSS, /\.nexa-swap__a,\s*\n\.nexa-swap__b\s*\{[^}]*grid-area:\s*1\s*\/\s*1/s);
  assert.match(CSS, /\.nexa-icon-toggle:focus-visible/);
  assert.match(CSS, /data-nexa-active="true"|data-njs-active="true"/);
  assert.ok(!/\.njs-icon|njs-swap/.test(CSS), "legacy njs classes in CSS");
});

test("React/JS render the a11y invariant (decorative default, labelled role=img)", async () => {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const dist = await import("../dist/index.js");
  const js = await import("../js/index.mjs");
  assert.match(renderToStaticMarkup(createElement(dist.Bell)), /aria-hidden="true"/);
  assert.match(renderToStaticMarkup(createElement(dist.Bell, { label: "Alerts" })), /role="img"[^>]*aria-label="Alerts"|aria-label="Alerts"[^>]*role="img"/);
  assert.match(js.svg("Bell"), new RegExp(`class="${ICON_CLASS}"`));
  assert.match(js.svg("Bell"), /aria-hidden="true"/);
  assert.match(js.svg("Bell", { label: "Alerts" }), /role="img"/);
  assert.match(read("dist/createIcon.js"), /aria-hidden/);
  assert.match(read("dist/Swap.js"), /aria-pressed/);
});

test("gallery keeps 40px hit targets, focus-visible and ARIA controls", () => {
  assert.match(SHELL, /min-height:\s*4[0-9]px/);
  assert.match(SHELL, /:focus-visible/);
  assert.match(SHELL, /aria-label/);
  assert.match(SHELL, /role=/);
  assert.match(SHELL + APP, /aria-pressed/);
  assert.match(APP, /keydown/);
  assert.match(APP, /Escape/);
});
