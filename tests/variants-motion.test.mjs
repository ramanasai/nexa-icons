/** Visual variants + advanced motion + Studio shell. */
import test from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { read } from "./helpers.mjs";
const dist = await import("../dist/index.js");
const js = await import("../js/index.mjs");
const CSS = read("src/animations.css");
const ssr = (C, p = {}) => renderToStaticMarkup(createElement(C, p));

test("edges, weight, fill opacity and solid fallback", () => {
  const sharp = ssr(dist.Bell, { edges: "sharp" });
  assert.match(sharp, /stroke-linecap="butt"/);
  assert.match(sharp, /stroke-linejoin="miter"/);
  const light = js.svg("Bell", { size: 24, weight: "light" });
  assert.match(light, /stroke-width="1.2"/);
  const bold = js.svg("Bell", { size: 24, weight: "bold" });
  assert.match(bold, /stroke-width="2.025"/);
  const duotone = js.svg("Bell", { filled: "soft", fillOpacity: 0.3 });
  assert.match(duotone, /--nexa-fill-opacity:0.3/);
  const solid = js.svg("Bell", { filled: true });
  assert.match(solid, /data-fill-state="true"[^>]*data-fill-fallback="body"/);
  assert.match(solid, /nexa-icon-body/);
  // Detail-sensitive icons stay unfilled.
  assert.match(js.svg("KeyRound", { filled: true }), /data-fill-state="false"/);
});

test("advanced motion presets and pathLength are present", () => {
  for (const preset of ["draw", "spring", "success", "error", "progress"]) {
    assert.match(js.svg("Bell", { animate: preset }), new RegExp(`data-nexa-anim="${preset}"`));
  }
  for (const keyframe of ["nexa-draw", "nexa-spring", "nexa-success", "nexa-error", "nexa-progress"]) {
    assert.match(CSS, new RegExp(`@keyframes ${keyframe}`));
  }
  assert.match(CSS, /\[data-nexa-anim="draw"\] path/);
  assert.match(CSS, /stroke-dashoffset/);
  assert.match(js.svg("Bell"), /pathLength="1"/);
});

test("studio shell exists and loads the local dataset", () => {
  const studio = read("gallery/studio.html");
  assert.match(studio, /Nexa Studio/);
  assert.match(studio, /icons\.data\.js/);
  assert.match(studio, /data-export="png"/);
  assert.match(studio, /data-export="jsx"/);
  assert.match(studio, /prefers-reduced-motion/);
});

test("optical stroke table covers 16/20/24/32", () => {
  const sizes = [16, 20, 24, 32].map((size) => Number(js.svg("Bell", { size }).match(/stroke-width="([^"]+)"/)[1]));
  assert.deepEqual(sizes, [2, 1.75, 1.5, 1.5]);
});
