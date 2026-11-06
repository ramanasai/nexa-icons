/**
 * T9.2 — Asset parity for the 650-icon catalog: every dataset icon has its
 * standalone SVG and sprite symbol, XML is well-formed, the nexa-* contract is
 * intact and the byte budgets hold.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { p, read, ICONS, CATALOG_KEBABS, checkXmlBatch, SPRITE_PREFIX, brotli } from "./helpers.mjs";

const ICON_FILES = fs.readdirSync(p("icons")).filter((file) => file.endsWith(".svg"));
const SPRITE = read("sprite.svg");
const normalize = (value) => String(value).replace(/>\s+</g, "><").trim();
const spriteBytes = Buffer.byteLength(SPRITE);

const perIcon = ICONS.map((icon) => {
  const file = `icons/${icon.kebab}.svg`;
  const xml = fs.existsSync(p(file)) ? read(file) : "";
  return { icon, file, xml, bytes: Buffer.byteLength(xml) };
});

test("one standalone SVG per dataset icon, no missing or orphan files", () => {
  const expected = new Set(CATALOG_KEBABS.map((kebab) => `${kebab}.svg`));
  const actual = new Set(ICON_FILES);
  assert.deepEqual([...expected].filter((file) => !actual.has(file)), [], "icons missing from icons/");
  assert.deepEqual([...actual].filter((file) => !expected.has(file)), [], "orphan SVGs in icons/");
  assert.equal(ICON_FILES.length, ICONS.length);
  const nonSvg = fs.readdirSync(p("icons")).filter((file) => !file.endsWith(".svg"));
  assert.deepEqual(nonSvg, [], "unexpected non-SVG files in icons/");
});

test("all standalone SVGs and the sprite are well-formed XML", () => {
  const docs = perIcon.map(({ file, xml }) => ({ label: file, xml }));
  docs.push({ label: "sprite.svg", xml: SPRITE });
  checkXmlBatch(docs);
});

test("standalone SVGs: 24×24, stroke-only currentColor, decorative by default", () => {
  for (const { icon, file, xml } of perIcon) {
    assert.ok(xml.length > 0, `${file}: missing`);
    const root = xml.match(/<svg\b[^>]*>/)?.[0];
    assert.ok(root, `${file}: no <svg> root`);
    assert.match(root, /viewBox="0 0 24 24"/, `${file}: viewBox`);
    assert.match(root, /\bwidth="24"/, `${file}: width`);
    assert.match(root, /\bheight="24"/, `${file}: height`);
    assert.match(root, /fill="none"/, `${file}: fill`);
    assert.match(root, /stroke="currentColor"/, `${file}: stroke`);
    assert.match(root, /stroke-width="2"/, `${file}: standalone stroke-width`);
    assert.match(root, /stroke-linecap="round"/, `${file}: linecap`);
    assert.match(root, /stroke-linejoin="round"/, `${file}: linejoin`);
    assert.match(root, /aria-hidden="true"/, `${file}: aria-hidden`);
    assert.match(root, /xmlns="http:\/\/www\.w3\.org\/2000\/svg"/, `${file}: xmlns`);
    assert.ok(xml.trim().endsWith("</svg>"), `${file}: single root`);
    const body = normalize(xml.replace(/^[\s\S]*?<svg\b[^>]*>/, "").replace(/<\/svg>\s*$/, ""));
    assert.equal(body, normalize(icon.inner), `${file}: inner markup differs from data/icons.json`);
    assert.ok(!/#[0-9a-fA-F]{3,8}\b/.test(xml), `${file}: hard-coded colour`);
    assert.ok(!/(?:stroke|fill)="(?!none|currentColor)[^"]*"/.test(xml), `${file}: non-currentColor paint`);
    assert.ok(!/https?:\/\/(?!www\.w3\.org\/2000\/svg)/.test(xml), `${file}: external URL`);
  }
});

test("sprite: one nexa-<kebab> symbol per icon, sorted/unique, valid viewBox", () => {
  const symbols = [...SPRITE.matchAll(/<symbol\b([^>]*)>([\s\S]*?)<\/symbol>/g)];
  assert.equal(symbols.length, ICONS.length);
  const root = SPRITE.match(/<svg\b[^>]*>/)?.[0] ?? "";
  assert.match(root, /aria-hidden="true"/);
  assert.match(root, /style="display:none"/);
  assert.match(root, /xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
  const ids = [];
  const bodies = new Map();
  for (const match of symbols) {
    const id = match[1].match(/\bid="([^"]+)"/)?.[1];
    assert.ok(id, "symbol without id");
    ids.push(id);
    assert.ok(id.startsWith(`${SPRITE_PREFIX}`), `${id}: must use the nexa- prefix`);
    assert.match(id, /^nexa-[a-z0-9-]+$/);
    assert.match(match[1], /viewBox="0 0 24 24"/, `${id}: viewBox`);
    assert.match(match[1], /stroke="currentColor"/, `${id}: stroke`);
    assert.match(match[1], /stroke-width="2"/, `${id}: symbol stroke-width`);
    bodies.set(id, normalize(match[2]));
  }
  assert.equal(new Set(ids).size, ICONS.length, "duplicate sprite ids");
  assert.deepEqual(
    ids.map((id) => id.slice(SPRITE_PREFIX.length)).sort(),
    CATALOG_KEBABS.slice().sort(),
    "sprite ids must match the dataset kebabs"
  );
  for (const icon of ICONS) {
    assert.equal(bodies.get(`${SPRITE_PREFIX}${icon.kebab}`), normalize(icon.inner), `sprite body ${icon.kebab}`);
  }
  const urls = [...SPRITE.matchAll(/https?:\/\/[^"'\s<>)]+/g)].map((match) => match[0]).filter((url) => url !== "http://www.w3.org/2000/svg");
  assert.deepEqual(urls, []);
  assert.ok(!/<image\b|<use\b|@import|url\(https?:/.test(SPRITE), "sprite must be self-contained");
});

test("budgets: per-icon SVG ≤ 1600 B, icons dir ≤ 450 KB, sprite ≤ 420 KB / 60 KB br", () => {
  const oversized = perIcon.filter(({ bytes }) => bytes > 1600).map(({ file, bytes }) => `${file}=${bytes} B`);
  assert.deepEqual(oversized, [], "standalone SVGs over the 1.6 KB budget");
  const total = perIcon.reduce((sum, { bytes }) => sum + bytes, 0);
  assert.ok(total <= 450 * 1024, `icons/ total ${total} B exceeds 300 KB`);
  assert.ok(spriteBytes <= 420 * 1024, `sprite.svg ${spriteBytes} B exceeds 260 KB`);
  assert.ok(brotli(Buffer.from(SPRITE)) <= 60 * 1024, "sprite.svg brotli exceeds 40 KB");
});
