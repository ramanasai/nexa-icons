/**
 * Regression tests for the API/CSS review items:
 * aria-label handling, zero-specificity base CSS, size-less stroke defaults,
 * closed-node fills, fill-safe overrides, global attribute switches, parent
 * trigger, em-sized frames and the Lucide-compatible entry point.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { read, ICONS } from "./helpers.mjs";

const dist = await import("../dist/index.js");
const js = await import("../js/index.mjs");
const lucide = await import("../dist/lucide.js");
const CSS = read("src/animations.css");
const PKG = JSON.parse(read("package.json"));
const ssr = (Component, props = {}) => renderToStaticMarkup(createElement(Component, props));

test("aria-label makes the icon labelled; explicit aria-hidden=false is respected", () => {
  const labelled = ssr(dist.X, { "aria-label": "Close" });
  assert.match(labelled, /role="img"/);
  assert.match(labelled, /aria-label="Close"/);
  assert.ok(!/aria-hidden="true"/.test(labelled), "aria-label must drop aria-hidden");

  const hiddenOff = ssr(dist.X, { "aria-hidden": false });
  assert.match(hiddenOff, /aria-hidden="false"/, "aria-hidden={false} must render as false");

  const hiddenOn = ssr(dist.X, { "aria-hidden": true, label: "Close" });
  assert.match(hiddenOn, /aria-hidden="true"/);
});

test("size-less icons default to stroke 2; explicit sizes keep the optical scale", () => {
  assert.match(js.svg("Bell"), /stroke-width="2"/);
  assert.match(js.svg("Bell", { size: 24 }), /stroke-width="1.5"/);
  assert.match(js.svg("Bell", { size: 16 }), /stroke-width="2"/);
  assert.match(js.svg("Bell", { size: 16, strokeWidth: 2, absoluteStrokeWidth: true }), /stroke-width="3"/);
});

test("fills target closed nodes only and fill-safe overrides are applied", () => {
  const check = js.svg("Check", { filled: true });
  assert.ok(!/data-closed="true"/.test(check), "open Check has no fillable node");
  const heart = ICONS.find((icon) => icon.name === "Heart");
  assert.equal(heart.fillSafe, true);
  assert.match(js.svg("Heart", { filled: true }), /data-fill-state="true"/);
  for (const name of ["Palette", "KeyRound"]) {
    assert.equal(ICONS.find((icon) => icon.name === name).fillSafe, false, `${name}: not fill safe`);
    assert.match(js.svg(name, { variant: "solid" }), /data-fill-state="soft"/, `${name}: degrades`);
  }
});

test("global switches: fill, motion, stroke and parent trigger are shipped", () => {
  assert.match(CSS, /:where\(\.nexa-icon\)/, "base CSS has zero specificity");
  assert.ok(!/\.nexa-icon\s*\{[^}]*flex:\s*none/s.test(CSS), "base CSS must not force flex:none");
  assert.ok(!/\.nexa-icon\s*\{[^}]*overflow:\s*visible/s.test(CSS), "base CSS must not force overflow:visible");
  assert.match(CSS, /\[data-nexa-fill="solid"\]\s*\.nexa-icon:not\(\[data-fill-state\]\)\s*\[data-closed="true"\]/);
  assert.match(CSS, /\[data-nexa-fill="duotone"\]\s*\.nexa-icon:not\(\[data-fill-state\]\)\s*\[data-closed="true"\]/);
  assert.match(CSS, /\[data-nexa-motion="off"\]/);
  assert.ok(!CSS.includes('stroke-width: var(--nexa-stroke)'));
  assert.match(js.svg('Bell'), /style="stroke-width:var\(--nexa-stroke,2\)"/);
  assert.match(ssr(dist.Bell), /stroke-width:var\(--nexa-stroke, 2\)/);
  assert.match(CSS, /data-nexa-trigger="parent"/);
  assert.match(ssr(dist.Bell, { animate: true, trigger: "parent" }), /data-nexa-trigger="parent"/);
  assert.match(js.svg("Bell"), /data-nexa-fill-safe="false"/);
});

test("glass/shape frames scale in em, not fixed pixels", () => {
  const frame = ssr(dist.Bell, { glass: "frost", size: 24 });
  assert.match(frame, /width:1\.71em;height:1\.71em;font-size:24px/);
  const responsive = ssr(dist.Bell, { shape: "circle" });
  assert.match(responsive, /width:1\.71em;height:1\.71em;font-size:var\(--nexa-icon-size, 1em\)/);
});

test("Lucide-compatible entry point exists and matches the contract", () => {
  assert.ok(PKG.exports["./lucide"], "package export ./lucide");
  const html = ssr(lucide.Bell);
  assert.match(html, /class="nexa-icon lucide lucide-bell"/);
  assert.match(html, /stroke-width="2"/);
  assert.match(html, /stroke-width:var\(--nexa-stroke/);
  const styled = ssr(lucide.Bell, { color: "red", width: 20, height: 20 });
  assert.match(styled, /width="20"/);
  assert.match(styled, /height="20"/);
  assert.match(styled, /color:red/);
});
