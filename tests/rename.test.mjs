/**
 * T9.13 — Rebrand guard: the shipped tree is Nexa everywhere (package, classes,
 * attributes, sprite ids, Go module, Rust crate). Legacy njs names may only
 * survive in the Lucide migration guide.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { p, read, walk, ICONS } from "./helpers.mjs";

const LEGACY = /njs|NJS|@njs/i;
// Migration documents may mention the pre-rebrand package/classes on purpose.
const ALLOW_LEGACY = new Set(["docs/migration-from-lucide.md", "AGENTS.md"]);

function filesToScan() {
  const files = [
    "README.md", "AGENTS.md", "sprite.svg", "data/icons.json", "data/categories.json",
    "data/swaps.json", "gallery/index.html", "gallery/app.js", "gallery/icons.data.js",
  ];
  for (const dir of ["src", "js", "dist", "icons", "docs", "skills"]) {
    if (!fs.existsSync(p(dir))) continue;
    for (const file of walk(dir, (entry) => /\.(ts|tsx|js|mjs|cjs|d\.ts|json|css|svg|md)$/.test(entry))) {
      files.push(path.relative(p("."), file));
    }
  }
  for (const file of walk("go", (entry) => entry.endsWith(".go") || entry.endsWith(".mod") || entry.endsWith(".md"))) {
    files.push(path.relative(p("."), file));
  }
  for (const file of walk("rust", (entry) => /(^|\/)(src|tests)\/.*\.rs$|Cargo\.toml$|README\.md$/.test(entry))) {
    files.push(path.relative(p("."), file));
  }
  return [...new Set(files)].filter((file) => !ALLOW_LEGACY.has(file));
}

test("shipped package/API names are Nexa, not njs", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.name, "@nexa/icons");
  assert.match(read("pkg" === "x" ? "" : "go/go.mod"), /github\.com\/nexa-icons\/nexa\/go/);
  assert.match(read("rust/Cargo.toml"), /name = "nexa-icons"/);
  assert.match(read("rust/src/lib.rs"), /nexa_icons|nexa-icons/);
});

test("no legacy njs class/attribute/sprite names leak into shipped markup", () => {
  const markupOffenders = [];
  const markup = /njs-icon|njs-swap|data-njs|#njs-|@njs\//;
  for (const file of filesToScan()) {
    if (ALLOW_LEGACY.has(file)) continue;
    if (markup.test(read(file))) markupOffenders.push(file);
  }
  assert.deepEqual(markupOffenders, [], "legacy njs markup/package names outside migration docs");
});

test("public TypeScript API uses Nexa* type names, not Njs*", () => {
  const offenders = [];
  for (const file of ["src/types.ts", "src/index.ts", "dist/types.d.ts", "dist/index.d.ts", "js/index.d.ts"]) {
    const text = read(file);
    const legacy = [...text.matchAll(/\bNjs[A-Za-z]+/g)].map((match) => match[0]);
    if (legacy.length) offenders.push(`${file}: ${[...new Set(legacy)].join(", ")}`);
  }
  assert.deepEqual(offenders, [], "legacy Njs* type names in the public API");
});

test("no legacy njs naming anywhere in shipped source/docs outside migration docs", () => {
  const offenders = [];
  for (const file of filesToScan()) {
    if (ALLOW_LEGACY.has(file)) continue;
    const matches = [...new Set([...read(file).matchAll(/\bNjs[A-Za-z]*|\bnjs[-A-Za-z]*|@njs\/[a-z-]+/g)].map((match) => match[0]))];
    if (matches.length) offenders.push(`${file}: ${matches.slice(0, 4).join(", ")}`);
  }
  assert.deepEqual(offenders, [], "legacy njs naming outside migration docs");
});

test("sprite ids, React classes and data attributes all use the nexa- prefix", () => {
  const sprite = read("sprite.svg");
  const ids = [...sprite.matchAll(/<symbol\b[^>]*\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, ICONS.length);
  for (const id of ids) assert.match(id, /^nexa-[a-z0-9-]+$/);
  const dts = read("dist/index.d.ts");
  assert.ok(dts.includes("data-nexa-icon") || read("dist/createIcon.js").includes("data-nexa-icon"));
  assert.ok(read("dist/createIcon.js").includes("nexa-icon"));
  assert.ok(read("dist/Swap.js").includes("nexa-swap"));
  assert.ok(!/data-njs-|njs-icon|njs-swap/.test(read("dist/createIcon.js") + read("dist/Swap.js")));
});

test("package exports expose the Nexa category and react entry points", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.exports["./js"].import, "./js/index.mjs");
  assert.equal(pkg.exports["./react/*"].import, "./dist/icons/*.js");
  assert.match(pkg.exports["./*"].import, /dist\/categories/);
  assert.equal(pkg.exports["./data/swaps.json"], "./data/swaps.json");
});
