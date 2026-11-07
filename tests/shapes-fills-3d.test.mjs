/**
 * T9.12 — Shape containers, fill variants and CSS-3D presentation.
 *
 * These are React/JS presentation features: the SVG stays the stroke glyph,
 * a wrapper span carries the frame/shape/3D contract, fill state is expressed
 * with data attributes + CSS and degrades safely on open geometry.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { read, SHAPES, FILL_VARIANTS, THREE_D, FILL_SAFE } from "./helpers.mjs";

const dist = await import("../dist/index.js");
const js = await import("../js/index.mjs");
const CSS = read("src/animations.css");
const ssr = (Component, props = {}) => renderToStaticMarkup(createElement(Component, props));

test("shape containers: every documented shape gets the frame + class, label moves to the frame", () => {
  for (const shape of SHAPES) {
    const html = ssr(dist.Bell, { shape });
    assert.match(html, /^<span class="nexa-icon-frame nexa-shape nexa-shape--/, `${shape}: frame markup`);
    assert.ok(html.includes(`nexa-shape--${shape}`), `${shape}: shape class`);
    assert.match(html, /style="width:1\.71em;height:(1\.71|1\.25)em;font-size:(var\(--nexa-icon-size, 1em\)|24px)"/, `${shape}: frame size`);
    assert.match(html, /aria-hidden="true"/, `${shape}: decorative frame`);
    assert.ok(!/role="img"/.test(html), `${shape}: unlabelled frame must not have role=img`);
  }
  // Default 24px icon → 41px frame (round(24 × 1.7)); inner SVG keeps 24px.
  const framed = ssr(dist.Bell, { shape: "circle", size: 24 });
  assert.match(framed, /width:1\.71em;height:1\.71em;font-size:24px/);
  assert.match(framed, /<svg[^>]*width="24"[^>]*height="24"/);
  // Meaningful icons put the accessible name on the frame; the glyph stays decorative.
  const labelled = ssr(dist.Bell, { shape: "circle", label: "Alerts" });
  const frame = labelled.match(/^<span[^>]*>/)[0];
  assert.match(frame, /role="img"/);
  assert.match(frame, /aria-label="Alerts"/);
  assert.ok(!/aria-hidden/.test(frame));
  assert.equal((labelled.match(/aria-hidden="true"/g) || []).length, 1, "only the inner SVG is aria-hidden");
  // No shape → plain SVG (no wrapper).
  assert.match(ssr(dist.Bell, { shape: "none" }), /^<svg /);
  assert.match(ssr(dist.Bell), /^<svg /);
});

test("fill variants: outline default, duotone/solid state, fillSafe degradation, animateFill", () => {
  const outline = ssr(dist.Bell);
  assert.ok(!/data-fill-state/.test(outline), "outline is the default (no state attr)");
  for (const filled of [true, "soft", false]) {
    const html = ssr(dist.Bell, { filled });
    if (filled === false) assert.match(html, /data-fill-state="false"/, "filled=false pins outline");
    else if (filled === "soft") assert.match(html, /data-fill-state="soft"/, "soft is duotone");
    else assert.match(html, /data-fill-state="true"[^>]*data-fill-fallback="body"/, "solid uses body fallback");
  }
  for (const variant of FILL_VARIANTS) {
    const html = ssr(dist.Bell, { variant });
    if (variant === "outline") assert.match(html, /data-fill-state="false"/);
    else if (variant === "duotone") assert.match(html, /data-fill-state="soft"/);
    else assert.match(html, /data-fill-state="true"[^>]*data-fill-fallback="body"/);
  }
  // Closed geometry (fillSafe) fills solid; open geometry never does.
  const safe = [...FILL_SAFE][0];
  assert.match(ssr(dist[safe], { filled: true }), /data-fill-state="true"/, `${safe} is fillSafe`);
  assert.match(ssr(dist[safe], { variant: "solid" }), /data-fill-state="true"/);
  assert.match(ssr(dist.Bell, { variant: "solid" }), /data-fill-state="true"[^>]*data-fill-fallback="body"/, "solid uses body fallback");
  const animated = ssr(dist.Heart, { filled: true, animateFill: true });
  assert.match(animated, /data-fill-anim="true"/);
  assert.match(ssr(dist.Heart, { filled: true }), /data-fill-state="true"/);
  // Fill is painted with currentColor and opacity in CSS only, on closed nodes.
  assert.ok(CSS.includes('.nexa-icon[data-fill-state="true"] [data-closed="true"]'), "solid fill targets closed nodes");
  assert.ok(CSS.includes('.nexa-icon[data-fill-state="soft"] [data-closed="true"]'), "soft fill targets closed nodes");
  assert.match(CSS, /fill-opacity:\s*0\.16/s);
  assert.match(CSS, /data-fill-anim="true"\][^{]*\{[^}]*transition:\s*fill-opacity/s);
});

test("CSS 3D presets: frame markup, data attributes, transform-only and reduced-motion safe", () => {
  for (const preset of THREE_D) {
    const html = ssr(dist.Bell, { threeD: preset });
    assert.match(html, /^<span class="nexa-icon-frame nexa-3d"/, `${preset}: frame`);
    assert.match(html, new RegExp(`data-nexa-3d="${preset}"`), `${preset}: data attr`);
    assert.match(html, /aria-hidden="true"/, `${preset}: decorative`);
  }
  const labelled = ssr(dist.Bell, { threeD: "tilt", label: "Alerts" });
  const frame = labelled.match(/^<span[^>]*>/)[0];
  assert.match(frame, /role="img"/);
  assert.match(frame, /aria-label="Alerts"/);
  // Only transform (and a static filter depth for extrude) is animated.
  assert.match(CSS, /\.nexa-3d\s*\{[^}]*perspective:\s*640px/s);
  for (const preset of THREE_D) {
    const rule = new RegExp(`\\.nexa-3d\\[data-nexa-3d="${preset}"\\][^{]*\\{[^}]*transform:`);
    assert.match(CSS, rule, `${preset}: transform rule`);
  }
  const animatedProps = [...CSS.matchAll(/\.nexa-3d[^{]*\{([^}]*)\}/g)]
    .flatMap((match) => [...match[1].matchAll(/([a-z-]+)\s*:/g)].map((prop) => prop[1]))
    .filter((prop) => ["margin", "padding", "width", "height", "top", "left", "background-color"].includes(prop));
  assert.deepEqual(animatedProps, [], "3D rules must not animate layout/paint");
});

test("reduced motion disables fill, 3D and shape transitions", () => {
  const reduced = [...CSS.matchAll(/@media \(prefers-reduced-motion: reduce\)\s*\{([\s\S]*?)\n\}/g)].map((match) => match[1]).join("\n");
  assert.match(reduced, /data-fill-anim="true"[^}]*transition:\s*none/s);
  assert.match(reduced, /\.nexa-3d \.nexa-icon[^}]*transition:\s*none/s);
  assert.match(reduced, /\.nexa-3d:is\(:hover, :focus-within\) \.nexa-icon[^}]*transform:\s*none/s);
});

test("JS API matches React for shapes, fill and 3D", () => {
  for (const shape of SHAPES) {
    const react = ssr(dist.Bell, { shape });
    const plain = js.svg("Bell", { shape });
    assert.match(plain, new RegExp(`nexa-shape--${shape}`));
    assert.match(react, new RegExp(`nexa-shape--${shape}`));
  }
  assert.match(js.svg("Circle", { filled: true }), /data-fill-state="true"/);
  assert.match(js.svg("Bell", { filled: true }), /data-fill-state="true"[^>]*data-fill-fallback="body"/);
  for (const preset of THREE_D) {
    assert.match(js.svg("Bell", { threeD: preset }), new RegExp(`data-nexa-3d="${preset}"`));
  }
});
