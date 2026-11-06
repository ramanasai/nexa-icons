#!/usr/bin/env node
/**
 * Build the package — three artefacts, all generated from src/:
 *
 *   1. dist/*.js        ESM, one module per source file (tree-shakeable)
 *   2. dist/cjs/*.js    CommonJS mirror (for `require("@nexa/icons")`, yarn PnP
 *                       consumers and older bundlers) + a local package.json
 *                       that marks the folder as commonjs
 *   3. dist/*.d.ts      TypeScript declarations
 *   4. dist/animations.css  copied verbatim
 *
 * React stays external (peer dependency); nothing else is imported.
 * Size budgets are enforced so the package cannot silently get fat.
 */
import { build } from "esbuild";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist");
const CJS = path.join(DIST, "cjs");

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
const brotli = (file) => zlib.brotliCompressSync(fs.readFileSync(file)).length;
const gzip = (file) => zlib.gzipSync(fs.readFileSync(file), { level: 9 }).length;

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

const sources = walk(SRC).filter((f) => /\.(ts|tsx)$/.test(f));
const cssFiles = walk(SRC).filter((f) => f.endsWith(".css"));
const started = performance.now();

// ESM + CSS
await build({
  entryPoints: [...sources, ...cssFiles],
  outbase: SRC,
  outdir: DIST,
  bundle: false,
  format: "esm",
  target: "es2020",
  jsx: "automatic",
  loader: { ".css": "copy" },
  logLevel: "warning",
});

// CJS mirror (.js inside dist/cjs, marked commonjs by its own package.json).
await build({
  entryPoints: sources,
  outbase: SRC,
  outdir: CJS,
  bundle: false,
  format: "cjs",
  target: "es2020",
  jsx: "automatic",
  logLevel: "warning",
});
fs.writeFileSync(path.join(CJS, "package.json"), '{"type":"commonjs"}\n');

// Declarations
const tsc = path.join(ROOT, "node_modules", ".bin", "tsc");
execFileSync(tsc, ["-p", path.join(ROOT, "tsconfig.json")], { stdio: "inherit" });

const js = walk(DIST).filter((f) => f.endsWith(".js") && !f.includes(`${path.sep}cjs${path.sep}`));
const dts = walk(DIST).filter((f) => f.endsWith(".d.ts"));
const esmBytes = js.reduce((a, f) => a + fs.statSync(f).size, 0);
const cssPath = path.join(DIST, "animations.css");
const cssBytes = fs.statSync(cssPath).size;
const barrelPath = path.join(DIST, "index.js");

// ---------------------------------------------------------------------------
// Budgets. If one of these trips, the builder fails: no silent regressions.
// ---------------------------------------------------------------------------
const budgets = [];
const budget = (label, actual, limit, unit = "B") => {
  const ok = actual <= limit;
  budgets.push({ label, actual, limit, ok, unit });
  return ok;
};
const biggestIcon = js
  .filter((f) => f.includes(`${path.sep}icons${path.sep}`))
  .sort((a, b) => fs.statSync(b).size - fs.statSync(a).size)[0];
const biggestIconBytes = fs.statSync(biggestIcon).size;
const biggestBr = brotli(biggestIcon);

let failed = false;
if (!budget("largest single icon module (raw)", biggestIconBytes, 2048)) failed = true;
if (!budget("largest single icon module (brotli)", biggestBr, 1024)) failed = true;
if (!budget("barrel dist/index.js (raw)", fs.statSync(barrelPath).size, 96 * 1024)) failed = true;
// 18 KB raw: ~3 KB brotli. Shape containers, fill variants and CSS-3D add
// rules but the wire cost stays ~3 KB brotli.
if (!budget("animations.css (raw)", cssBytes, 18 * 1024)) failed = true;
if (!budget("animations.css (brotli)", brotli(cssPath), 4096)) failed = true;
// 650 icons × ~1.1 KB per tree-shakeable module.
if (!budget("whole ESM tree (raw)", esmBytes, 1536 * 1024)) failed = true;

console.log(`dist built in ${(performance.now() - started).toFixed(0)} ms`);
console.log(`  ${js.length} ESM modules (${kb(esmBytes)} raw, ${(esmBytes / 166).toFixed(0)} B avg/icon)`);
console.log(`  ${walk(CJS).filter((f) => f.endsWith(".js")).length} CJS modules`);
console.log(`  ${dts.length} declaration files`);
console.log(`  dist/animations.css ${kb(cssBytes)} raw, ${brotli(cssPath)} B brotli`);
console.log(`  dist/index.js ${kb(fs.statSync(barrelPath).size)} raw, ${brotli(barrelPath)} B brotli`);
console.log(`  largest icon: ${path.relative(DIST, biggestIcon)} ${biggestIconBytes} B raw / ${biggestBr} B brotli`);
console.log("  budgets:");
for (const b of budgets) console.log(`    ${b.ok ? "PASS" : "FAIL"}  ${b.label}: ${b.actual} B <= ${b.limit} B`);
if (failed) {
  console.error("BUDGET FAILURE — package size regression, refusing to ship.");
  process.exit(1);
}
console.log(`  gzip sanity: dist/index.js ${gzip(barrelPath)} B gzip`);
