/**
 * Glass + gradient effects — library surface, CSS contract and parity.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { p, read } from "./helpers.mjs";
import * as dist from "../dist/index.js";
import * as js from "../js/index.mjs";

const CSS = read("src/effects.css");
const ssr = (Icon, props) => renderToStaticMarkup(createElement(Icon, props));

test("effects stylesheet ships glass variants, gradient tokens and fallbacks", () => {
  assert.match(CSS, /\.nexa-icon-frame\.nexa-glass\b/);
  for (const preset of ["frost", "ice", "clear", "steel", "neon", "jelly", "aurora"]) {
    assert.match(CSS, new RegExp(`\\.nexa-glass--${preset}\\b`));
  }
  for (const gradient of ["aurora", "ice", "sunset", "emerald", "ocean", "candy", "gold", "mono"]) {
    assert.match(CSS, new RegExp(`\\.nexa-grad--${gradient}\\b`));
  }
  assert.match(CSS, /--nexa-grad-a:/);
  assert.match(CSS, /--nexa-grad-b:/);
  assert.match(CSS, /backdrop-filter:\s*blur\(/);
  assert.match(CSS, /@supports not \(\(backdrop-filter/);
  assert.match(CSS, /@media \(forced-colors: active\)/);
});

test("effects.css is built and exported from the package", () => {
  assert.ok(fs.existsSync(p("dist/effects.css")), "dist/effects.css missing");
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.exports["./effects.css"], "./dist/effects.css");
});

test("React: glass wraps the glyph in a frosted frame and keeps a11y on the frame", () => {
  const html = ssr(dist.Bell, { glass: true, label: "Alerts" });
  assert.match(html, /class="nexa-icon-frame nexa-glass nexa-glass--frost"/);
  assert.match(html, /role="img"/);
  assert.match(html, /aria-label="Alerts"/);
  assert.match(html, /aria-hidden="true"/); // inner svg stays decorative
  assert.match(html, /width:41px;height:41px/);

  const ice = ssr(dist.Bell, { glass: "ice", gradient: "aurora" });
  assert.match(ice, /nexa-glass--ice/);
  assert.match(ice, /nexa-grad--aurora/);
  assert.match(ice, /data-nexa-gradient="aurora"/);
});

test("React: gradient emits unique SVG defs per instance and applies the stroke", () => {
  const html = ssr(dist.Bell, { gradient: "aurora" });
  const id = html.match(/linearGradient id="([^"]+)"/)?.[1];
  assert.ok(id, "no linearGradient id");
  assert.match(html, new RegExp(`stroke="url\\(#${id}\\)"`));
  assert.match(html, /style="stroke:url\(#/);
  assert.match(html, /stop-color:var\(--nexa-grad-a\)/);
  const tree = createElement("div", null,
    createElement(dist.Bell, { gradient: "aurora" }),
    createElement(dist.Star, { gradient: "aurora" })
  );
  const two = renderToStaticMarkup(tree);
  const ids = [...two.matchAll(/linearGradient id="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, 2);
  assert.equal(new Set(ids).size, ids.length, "gradient ids must be unique per instance");
});

test("JS API matches React for glass and gradients", () => {
  for (const preset of ["frost", "ice", "clear", "steel", "neon", "jelly", "aurora"]) {
    assert.match(js.svg("Bell", { glass: preset }), new RegExp(`nexa-glass--${preset}`));
  }
  for (const gradient of ["aurora", "ice", "sunset", "emerald", "ocean", "candy", "gold", "mono"]) {
    const out = js.svg("Bell", { gradient });
    assert.match(out, new RegExp(`nexa-grad--${gradient}`));
    assert.match(out, /style="stroke:url\(#/);
  }
  const combined = js.svg("Bell", { glass: "frost", gradient: "sunset" });
  assert.match(combined, /nexa-glass--frost/);
  assert.match(combined, /data-nexa-gradient="sunset"/);
});

test("glass and gradient are configurable via props/objects", () => {
  const react = ssr(dist.Bell, {
    glass: { preset: "neon", blur: 8, tintA: "rgba(20,20,30,.6)", radius: 18 },
    gradient: { from: "#f0abfc", to: "#22d3ee", angle: 90 },
  });
  assert.match(react, /nexa-glass--neon/);
  assert.match(react, /--nexa-glass-blur:8px/);
  assert.match(react, /--nexa-glass-a:rgba\(20,20,30,\.6\)/);
  assert.match(react, /--nexa-glass-radius:18px/);
  assert.match(react, /--nexa-grad-a:#f0abfc/);
  assert.match(react, /--nexa-grad-b:#22d3ee/);
  assert.match(react, /x1="0\.5"/); // angle-derived coords

  const jsOut = js.svg("Bell", {
    glass: { preset: "jelly", tintB: "rgba(120,80,200,.25)" },
    gradient: { from: "#111827", to: "#7c3aed", angle: 45 },
  });
  assert.match(jsOut, /nexa-glass--jelly/);
  assert.match(jsOut, /--nexa-glass-b:rgba\(120,80,200,\.25\)/);
  assert.match(jsOut, /stop-color:#111827/);
  assert.match(jsOut, /stop-color:#7c3aed/);
  assert.match(CSS, /--nexa-glass-radius/);
  assert.match(CSS, /--nexa-glass-sheen/);
});

test("glass motion is optional, CSS-only and reduced-motion safe", () => {
  for (const mode of ["sheen", "pulse", "float"]) {
    assert.match(CSS, new RegExp(`data-nexa-glass-anim="${mode}"`));
  }
  assert.match(CSS, /@keyframes nexa-glass-sheen/);
  assert.match(CSS, /@keyframes nexa-glass-rim/);
  assert.match(CSS, /@keyframes nexa-glass-float/);
  assert.match(CSS, /prefers-reduced-motion: reduce[\s\S]*data-nexa-glass-anim/);
  const react = ssr(dist.Bell, { glass: "neon", glassAnim: "sheen", gradient: "aurora" });
  assert.match(react, /data-nexa-glass-anim="sheen"/);
  const jsOut = js.svg("Bell", { glass: "jelly", glassAnim: "float" });
  assert.match(jsOut, /data-nexa-glass-anim="float"/);
  assert.doesNotMatch(ssr(dist.Bell, { glass: "frost" }), /data-nexa-glass-anim/);
});

test("glass body, gradient hue animation and glass triggers are supported", () => {
  const body = ssr(dist.Bell, { glass: "jelly", glassBody: true });
  assert.match(body, /class="nexa-icon-body"/);
  assert.match(body, /stroke-width="(?:[5-9]|\d{2,})"/);
  const bodyJs = js.svg("Bell", { glass: "neon", glassBody: true });
  assert.match(bodyJs, /nexa-icon-body/);

  const hue = ssr(dist.Bell, { gradient: "aurora", gradientAnim: "hue" });
  assert.match(hue, /data-nexa-gradient-anim="hue"/);
  assert.match(CSS, /@keyframes nexa-grad-hue/);
  assert.match(CSS, /hue-rotate/);
  assert.match(CSS, /data-nexa-gradient-anim/);

  const hover = ssr(dist.Bell, { glass: "neon", glassAnim: "sheen", glassTrigger: "hover" });
  assert.match(hover, /data-nexa-glass-trigger="hover"/);
  assert.match(CSS, /data-nexa-glass-trigger="hover"/);
  assert.match(CSS, /:focus-within/);
  const defaultTrigger = ssr(dist.Bell, { glass: "neon", glassAnim: "sheen" });
  assert.match(defaultTrigger, /data-nexa-glass-trigger="always"/);
});

test("glass/gradient are opt-in: the plain icon is byte-unchanged", () => {
  const plain = js.svg("Bell");
  assert.doesNotMatch(plain, /nexa-glass|nexa-grad/);
  assert.doesNotMatch(ssr(dist.Bell, {}), /nexa-glass|nexa-grad/);
});
