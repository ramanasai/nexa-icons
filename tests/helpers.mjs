/**
 * Shared QA helpers for the Nexa Icons test suite (650-icon, categorised,
 * rebranded tree).
 *
 * Dependency-free: node:* only. The suite is the independent contract check
 * for the shipped artefact tree, so it must not rely on the project's own
 * generators or on packages that could mask a defect.
 */
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const p = (...parts) => path.join(ROOT, ...parts);
export const read = (rel) => fs.readFileSync(p(rel), "utf8");
export const readBuf = (rel) => fs.readFileSync(p(rel));
export const exists = (rel) => fs.existsSync(p(rel));
export const stat = (rel) => fs.statSync(p(rel));

export const DATA = JSON.parse(read("data/icons.json"));
export const ICONS = DATA.icons;
export const META = DATA.meta;
export const CATEGORIES_DATA = JSON.parse(read("data/categories.json"));
export const SWAPS = JSON.parse(read("data/swaps.json"));
export const REPORT = JSON.parse(read("data/report.json"));
export const REQUESTED = read("raw/requested-names.txt").split("\n").map((s) => s.trim()).filter(Boolean);
export const RESOLVED = JSON.parse(read("raw/resolved.json")).resolved;

/** Canonical display names of the original 168 requested icons (166 unique). */
export const ORIGINAL_NAMES = [
  ...new Set(
    RESOLVED.map((entry) => ({ XIcon: "X", TriangleAlert: "AlertTriangle" }[entry.name] || entry.name))
  ),
];

/** 17 semantic presets referenced by the dataset (fade-in is a CSS helper). */
export const DATA_PRESETS = [
  "bounce", "flip", "float", "heartbeat", "nudge-down", "nudge-down-right",
  "nudge-left", "nudge-right", "nudge-up", "nudge-up-right", "pop", "pulse",
  "ring", "shake", "spin", "tilt", "wiggle",
];
export const ALL_PRESETS = [...DATA_PRESETS, "fade-in"];
export const TRIGGERS = ["hover", "focus", "press", "mount", "always", "manual", "inview"];
export const SWAP_MODES = ["mirror", "flip", "rotate", "slide", "fade"];
export const SHAPES = ["square", "rounded", "circle", "pill", "squircle", "hexagon", "diamond"];
export const FILL_VARIANTS = ["outline", "duotone", "solid"];
export const THREE_D = ["tilt", "flip", "extrude", "orbit"];

/** Rebrand constants — the shipped tree is @sairamanapb/icons / nexa-* everywhere. */
export const PKG_NAME = "@sairamanapb/icons";
export const SPRITE_PREFIX = "nexa-";
export const ICON_CLASS = "nexa-icon";
export const FRAME_CLASS = "nexa-icon-frame";
export const DATA_ATTR = "data-nexa-";

// Fill treatment is only safe on closed geometry; 44 of the 650 icons are flagged.
export const FILL_SAFE = new Set(ICONS.filter((icon) => icon.fillSafe).map((icon) => icon.name));

export const CATEGORIES = CATEGORIES_DATA.categories;
export const CATEGORY_IDS = CATEGORIES.map((category) => category.id);
export const ICON_CATEGORIES = CATEGORIES_DATA.iconCategories;

export const ALL_ALIASES = ICONS.flatMap((icon) => icon.aliases);
export const byKebab = new Map(ICONS.map((icon) => [icon.kebab, icon]));
export const byName = new Map(ICONS.map((icon) => [icon.name, icon]));
export const CATALOG_NAMES = ICONS.map((icon) => icon.name);
export const CATALOG_KEBABS = ICONS.map((icon) => icon.kebab);

/** normalise a name the same way the shipped APIs do (lowercase, strip spaces/_/-). */
export const compact = (s) => String(s).toLowerCase().replace(/[\s_-]+/g, "");

/** name | alias | kebab -> icon record (undefined when unknown). */
export const lookup = (name) => {
  if (typeof name !== "string") return undefined;
  const c = compact(name);
  return ICONS.find(
    (icon) =>
      icon.kebab.toLowerCase() === name.trim().toLowerCase() ||
      compact(icon.name) === c ||
      icon.aliases.some((alias) => compact(alias) === c)
  );
};

export const gzip = (buf) => zlib.gzipSync(buf, { level: 9 }).length;
export const brotli = (buf) =>
  zlib.brotliCompressSync(buf, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 } }).length;
export const bytes = (rel) => fs.statSync(p(rel)).size;

export function walk(dirRel, filter = () => true) {
  const abs = p(dirRel);
  const out = [];
  const visit = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) visit(full);
      else if (filter(full)) out.push(full);
    }
  };
  visit(abs);
  return out;
}

/* ------------------------------------------------------------------------- */
/* XML well-formedness                                                        */
/* ------------------------------------------------------------------------- */

let xmllintAvailable;
export function hasXmllint() {
  if (xmllintAvailable === undefined) {
    xmllintAvailable = spawnSync("xmllint", ["--version"], { stdio: "ignore" }).status === 0;
  }
  return xmllintAvailable;
}

const ENTITIES = /&(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);/g;

function fallbackXmlWellFormed(xml) {
  const src = String(xml).replace(/<!--[\s\S]*?-->/g, "");
  const tag = /<(\/?)([A-Za-z_][\w:.-]*)((?:\s+[\w:.-]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>/g;
  const stack = [];
  let roots = 0;
  let last = 0;
  let m;
  while ((m = tag.exec(src))) {
    if (m.index > last && /</.test(src.slice(last, m.index))) return { ok: false, error: `stray '<' before ${m[2]}` };
    last = tag.lastIndex;
    const closing = m[1] === "/";
    if (closing) {
      if (stack.pop() !== m[2]) return { ok: false, error: `mismatched </${m[2]}>` };
      if (stack.length === 0) roots += 1;
    } else {
      if (stack.length === 0) roots += 1;
      if (roots > 1) return { ok: false, error: "multiple root elements" };
      if (m[4] !== "/") stack.push(m[2]);
    }
  }
  if (stack.length) return { ok: false, error: `unclosed <${stack[stack.length - 1]}>` };
  if (roots !== 1) return { ok: false, error: `expected 1 root element, got ${roots}` };
  const stripped = src.replace(ENTITIES, "").replace(/&#x?[0-9a-fA-F]+;/g, "");
  if (/&/.test(stripped)) return { ok: false, error: "unescaped '&'" };
  return { ok: true };
}

/** Assert every {label, xml} document parses; batch through one xmllint call. */
export function checkXmlBatch(docs) {
  if (!docs.length) return { method: "none" };
  if (!hasXmllint()) {
    for (const doc of docs) {
      const result = fallbackXmlWellFormed(doc.xml);
      assert.ok(result.ok, `${doc.label}: ${result.error}`);
    }
    return { method: "fallback" };
  }
  const wrapper = `<qa-batch>${docs.map((doc) => doc.xml).join("\n")}</qa-batch>`;
  const all = spawnSync("xmllint", ["--noout", "-"], { input: wrapper, encoding: "utf8" });
  if (all.status === 0) return { method: "xmllint" };
  const bad = [];
  for (const doc of docs) {
    const result = spawnSync("xmllint", ["--noout", "-"], { input: doc.xml, encoding: "utf8" });
    if (result.status !== 0) bad.push(`${doc.label}: ${(result.stderr || "").trim().split("\n")[0]}`);
  }
  assert.fail(`${bad.length} of ${docs.length} XML document(s) are not well-formed:\n` + bad.slice(0, 25).join("\n"));
}

/* ------------------------------------------------------------------------- */
/* Markdown helpers (docs suite)                                             */
/* ------------------------------------------------------------------------- */

export function markdownFiles() {
  const list = [];
  if (exists("README.md")) list.push("README.md");
  for (const dir of ["docs", "skills"]) {
    if (!exists(dir)) continue;
    for (const file of walk(dir, (f) => f.endsWith(".md"))) list.push(path.relative(ROOT, file));
  }
  return list.sort();
}

/** Extract inline markdown links/images: [text](target) / ![alt](target). */
export function markdownLinks(text) {
  const out = [];
  const re = /(!?)\[([^\]]*)\]\(\s*(<[^>]*>|[^)\s]+)(?:\s+"[^"]*")?\s*\)/g;
  let m;
  while ((m = re.exec(text))) {
    let target = m[3];
    if (target.startsWith("<") && target.endsWith(">")) target = target.slice(1, -1);
    out.push({ image: m[1] === "!", label: m[2], target });
  }
  return out;
}
