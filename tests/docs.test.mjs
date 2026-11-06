/**
 * T9.7 — Docs and skill truthfulness for the Nexa rebrand: links, anchors,
 * labelled fences, skill frontmatter, documented imports and no legacy names.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { ROOT, p, markdownFiles, markdownLinks, exists, CATEGORY_IDS } from "./helpers.mjs";

const FILES = markdownFiles();
const dist = await import("../dist/index.js");
const js = await import("../js/index.mjs");

function slugify(heading) {
  return heading.toLowerCase().trim().replace(/[^\p{L}\p{N}\s_-]/gu, "").replace(/\s/g, "-");
}
function anchorsOf(markdown) {
  const anchors = new Set();
  for (const match of markdown.matchAll(/^#{1,6}\s+(.+)$/gm)) anchors.add(slugify(match[1]));
  for (const match of markdown.matchAll(/\bid="([^"]+)"/g)) anchors.add(match[1]);
  return anchors;
}

test("documentation set is complete for the Nexa package", () => {
  const required = [
    "README.md", "docs/api.md", "docs/animations.md", "docs/adding-icons.md",
    "docs/design.md", "docs/performance.md", "docs/theming.md", "docs/troubleshooting.md",
    "docs/migration-from-lucide.md", "docs/development.md",
    "docs/languages/go.md", "docs/languages/rust.md",
    "skills/nexa-icons/SKILL.md",
  ];
  assert.deepEqual(required.filter((file) => !exists(file)), []);
  assert.ok(FILES.length >= required.length);
});

test("every relative link in README/docs/skills resolves", () => {
  const missing = [];
  for (const file of FILES) {
    for (const link of markdownLinks(fs.readFileSync(p(file), "utf8"))) {
      const target = link.target;
      if (/^(https?:|mailto:|tel:|data:)/.test(target)) continue;
      const [pathPart] = target.split("#");
      if (!pathPart) continue;
      const resolved = path.resolve(path.dirname(p(file)), decodeURI(pathPart));
      if (!fs.existsSync(resolved)) missing.push(`${file}: ${target} -> ${path.relative(ROOT, resolved)}`);
    }
  }
  assert.deepEqual(missing, [], `broken relative links:\n${missing.join("\n")}`);
});

test("markdown anchors used in links exist in their target documents", () => {
  const bad = [];
  for (const file of FILES) {
    for (const link of markdownLinks(fs.readFileSync(p(file), "utf8"))) {
      const target = link.target;
      if (/^(https?:|mailto:|tel:|data:)/.test(target)) continue;
      const hash = target.indexOf("#");
      if (hash === -1) continue;
      const anchor = decodeURI(target.slice(hash + 1));
      if (!anchor) continue;
      const resolved = path.resolve(path.dirname(p(file)), decodeURI(target.slice(0, hash) || "."));
      if (!resolved.endsWith(".md") || !fs.existsSync(resolved)) continue;
      if (!anchorsOf(fs.readFileSync(resolved, "utf8")).has(anchor)) bad.push(`${file}: ${target}`);
    }
  }
  assert.deepEqual(bad, [], "broken markdown anchors");
});

test("every fenced code block declares a language", () => {
  const unlabeled = [];
  for (const file of FILES) {
    let open = false;
    fs.readFileSync(p(file), "utf8").split("\n").forEach((line, index) => {
      if (!/^\s*```/.test(line)) return;
      if (open) { open = false; return; }
      open = true;
      if (!line.replace(/^\s*```/, "").trim()) unlabeled.push(`${file}:${index + 1}`);
    });
    assert.equal(open, false, `${file}: unclosed code fence`);
  }
  assert.deepEqual(unlabeled, [], "unlabeled code fences");
});

test("skills/nexa-icons/SKILL.md has valid frontmatter with a when-to-use description", () => {
  const raw = fs.readFileSync(p("skills/nexa-icons/SKILL.md"), "utf8");
  assert.ok(raw.startsWith("---\n"));
  const end = raw.indexOf("\n---", 3);
  assert.ok(end > 0);
  const fields = {};
  let current = null;
  for (const line of raw.slice(4, end).split("\n")) {
    if (!line.trim()) continue;
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (keyMatch) { current = keyMatch[1]; fields[current] = keyMatch[2]; }
    else if (current && /^\s+/.test(line)) fields[current] = `${fields[current]} ${line.trim()}`.trim();
    else assert.fail(`invalid frontmatter line: ${line}`);
  }
  assert.equal(fields.name, "nexa-icons");
  const description = fields.description.replace(/^[>-]\s*/, "").trim();
  assert.ok(description.length >= 80);
  assert.match(description, /use when/i);
  assert.match(description, /icon|svg/i);
  const allowed = new Set(["name", "description", "license", "metadata", "allowed-tools"]);
  assert.deepEqual(Object.keys(fields).filter((key) => !allowed.has(key)), []);
});

test("documented Nexa imports resolve (root, /js and category entry points)", async () => {
  const reactNames = new Set(Object.keys(dist));
  const jsNames = new Set(Object.keys(js));
  const problems = [];
  const rootImport = /import\s*\{([^}]+)\}\s*from\s*["']@nexa\/icons["']/g;
  const jsImport = /import\s*\{([^}]+)\}\s*from\s*["']@nexa\/icons\/js["']/g;
  const categoryImport = /import\s*\{([^}]+)\}\s*from\s*["']@nexa\/icons\/([a-z-]+)["']/g;
  for (const file of FILES) {
    const text = fs.readFileSync(p(file), "utf8");
    for (const [regex, pool] of [[rootImport, reactNames], [jsImport, jsNames]]) {
      for (const match of text.matchAll(regex)) {
        for (const name of match[1].split(",").map((part) => part.trim().split(/\s+as\s+/)[0]).filter(Boolean)) {
          if (!pool.has(name)) problems.push(`${file}: ${name} not exported`);
        }
      }
    }
    for (const match of text.matchAll(categoryImport)) {
      if (!CATEGORY_IDS.includes(match[2])) continue; // /js, /react, /data, …
      const category = await import(`../dist/categories/${match[2]}.js`);
      for (const name of match[1].split(",").map((part) => part.trim()).filter(Boolean)) {
        if (!(name in category)) problems.push(`${file}: ${name} not in @nexa/icons/${match[2]}`);
      }
    }
  }
  assert.deepEqual(problems, [], "documented imports do not resolve");
});

test("docs state the real catalog size and use Nexa naming (legacy names only in the migration guide)", () => {
  const readme = fs.readFileSync(p("README.md"), "utf8");
  assert.match(readme, /1,000|1000/);
  assert.match(readme, /24 categor/i);
  const legacy = [];
  for (const file of FILES) {
    if (file === "docs/migration-from-lucide.md") continue;
    const text = fs.readFileSync(p(file), "utf8");
    if (/\bnjs\b|\bNJS\b|@njs\/|njs-/.test(text)) legacy.push(file);
  }
  assert.deepEqual(legacy, [], "legacy njs naming outside the migration guide");
});
