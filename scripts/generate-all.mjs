#!/usr/bin/env node
/**
 * One command to regenerate every target from the single source of truth.
 *
 *   data/icons.json + data/swaps.json  (canonical)
 *     -> src/        React/TypeScript components, registry, swap map
 *     -> js/         zero-dependency ESM + CJS API
 *     -> go/         Go module
 *     -> rust/       Rust crate
 *     -> gallery/    single-file viewer
 *     -> dist/       built package (ESM + CJS + d.ts + CSS)
 *
 * Usage: node scripts/generate-all.mjs [--skip-build]
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const skipBuild = process.argv.includes("--skip-build");
const run = (label, args) => {
  const started = performance.now();
  process.stdout.write(`\n▸ ${label}\n`);
  execFileSync(process.execPath, args, { cwd: ROOT, stdio: "inherit" });
  process.stdout.write(`  done in ${(performance.now() - started).toFixed(0)} ms\n`);
};

run("canonical dataset (166 icons, sprite, SVGs)", ["scripts/generate-data.mjs"]);
run("React/TypeScript components + swap map", ["scripts/generate-react.mjs"]);
run("vanilla JS API (ESM + CJS + types)", ["scripts/generate-js.mjs"]);

if (fs.existsSync(path.join(ROOT, "scripts/generate-go.mjs"))) {
  run("Go module", ["scripts/generate-go.mjs"]);
}
if (fs.existsSync(path.join(ROOT, "scripts/generate-rust.mjs"))) {
  run("Rust crate", ["scripts/generate-rust.mjs"]);
}
if (fs.existsSync(path.join(ROOT, "gallery/build.mjs"))) {
  run("single-file gallery", ["gallery/build.mjs"]);
}
if (!skipBuild) {
  run("dist package (ESM + CJS + d.ts, budget-gated)", ["scripts/build.mjs"]);
}

console.log("\nAll targets regenerated.");
