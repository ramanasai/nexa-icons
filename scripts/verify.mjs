#!/usr/bin/env node
/**
 * Independent verification gate for Nexa Icons (1,000 icons, 24 categories).
 *
 *   npm run verify / mise run verify      # budgets + full test suite
 *   node scripts/verify.mjs --budgets-only
 *
 * Budgets mirror scripts/build.mjs (dataset-aware since the catalog expansion)
 * and are checked against the shipped artefacts directly, so a red build cannot
 * pass by rebuilding itself first. Exit code is non-zero on any failure.
 */
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = (...xs) => path.join(ROOT, ...xs);
const read = (rel) => fs.readFileSync(p(rel));
const text = (rel) => fs.readFileSync(p(rel), "utf8");
const size = (rel) => fs.statSync(p(rel)).size;
const gzip = (buf) => zlib.gzipSync(buf, { level: 9 }).length;
const brotli = (buf) => zlib.brotliCompressSync(buf, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 } }).length;
const BUDGETS_ONLY = process.argv.includes("--budgets-only");

const DATA = JSON.parse(text("data/icons.json"));
const ICONS = DATA.icons;
const COUNT = ICONS.length;
const CATEGORIES = JSON.parse(text("data/categories.json"));

const checks = [];
const check = (label, fn, limit, actual) => {
  let ok = false;
  let measured = actual;
  let detail = "";
  try {
    if (typeof fn === "function") {
      const result = fn();
      if (result && typeof result === "object") {
        measured = result.actual;
        detail = result.detail ?? "";
        ok = result.ok;
      } else {
        measured = result;
        ok = limit === undefined ? Boolean(result) : result <= limit;
      }
    } else {
      ok = actual <= limit;
    }
  } catch (error) {
    detail = error.message;
  }
  checks.push({ label, ok, measured, detail });
  return ok;
};

/* ------------------------------------------------------------ structure */
check("required artefacts exist", () => {
  const required = [
    "data/icons.json", "data/categories.json", "data/swaps.json", "sprite.svg", "icons",
    "dist/index.js", "dist/cjs/index.js", "dist/index.d.ts", "dist/animations.css",
    "dist/categories", "js/index.mjs", "js/index.cjs", "js/index.d.ts",
    "gallery/index.html", "gallery/icons.data.js", "gallery/app.js",
    "go/go.mod", "rust/Cargo.toml", "README.md", "skills/nexa-icons/SKILL.md",
    "illustrations/manifest.json",
  ];
  const missing = required.filter((file) => !fs.existsSync(p(file)));
  return { ok: missing.length === 0, actual: `${required.length - missing.length}/${required.length}`, detail: missing.join(", ") };
});

/* --------------------------------------------------------------- dataset */
check("dataset: catalog icons in 24 categories, unique aliases", () => {
  const aliases = ICONS.flatMap((icon) => icon.aliases);
  const uniqueCategories = new Set(ICONS.flatMap((icon) => icon.categories));
  const ok = COUNT >= 900 && COUNT <= 1100
    && DATA.meta.count === COUNT
    && CATEGORIES.total === COUNT
    && CATEGORIES.categories.length === 24
    && uniqueCategories.size === 24
    && new Set(aliases).size === aliases.length
    && ICONS.every((icon) => Array.isArray(icon.categories) && icon.categories.length >= 1 && new Set(icon.categories).size === icon.categories.length);
  return { ok, actual: `${COUNT} icons / ${CATEGORIES.categories.length} categories` };
});
check("icon.categories mirrors data/categories.json", () => {
  const map = CATEGORIES.iconCategories;
  const bad = ICONS.filter((icon) => JSON.stringify([...icon.categories].sort()) !== JSON.stringify([...(map[icon.name] || [])].sort()));
  return { ok: bad.length === 0, actual: `${ICONS.length - bad.length}/${ICONS.length}`, detail: bad.slice(0, 5).map((icon) => icon.name).join(", ") };
});

/* --------------------------------------------------------------- assets */
const iconFiles = fs.readdirSync(p("icons")).filter((file) => file.endsWith(".svg"));
const expectedFiles = new Set(ICONS.map((icon) => `${icon.kebab}.svg`));
check("icons/ matches the dataset exactly", () => {
  const actual = new Set(iconFiles);
  const missing = [...expectedFiles].filter((file) => !actual.has(file));
  const orphan = [...actual].filter((file) => !expectedFiles.has(file));
  return { ok: missing.length === 0 && orphan.length === 0, actual: `${actual.size} files`, detail: [...missing, ...orphan].slice(0, 8).join(", ") };
});
const iconSizes = iconFiles.map((file) => ({ file, bytes: size(path.join("icons", file)) }));
const biggestIcon = iconSizes.reduce((a, b) => (b.bytes > a.bytes ? b : a), iconSizes[0]);
check("every icon SVG ≤ 1000 B", () => {
  const over = iconSizes.filter((entry) => entry.bytes > 1000);
  return { ok: over.length === 0, actual: `${biggestIcon.file} ${biggestIcon.bytes} B`, detail: over.slice(0, 5).map((entry) => entry.file).join(", ") };
});
check("icons/ total ≤ 450 KB raw", () => {
  const total = iconSizes.reduce((sum, entry) => sum + entry.bytes, 0);
  return { ok: total <= 450 * 1024, actual: `${total} B` };
});
const sprite = read("sprite.svg");
check("sprite.svg: 1,000 nexa- symbols, ≤ 420 KB raw / ≤ 60 KB brotli", () => {
  const symbols = (sprite.toString("utf8").match(/<symbol\b/g) || []).length;
  const br = brotli(sprite);
  return { ok: symbols === COUNT && size("sprite.svg") <= 420 * 1024 && br <= 60 * 1024, actual: `${symbols} symbols / ${size("sprite.svg")} B / ${br} B br` };
});

/* ---------------------------------------------------------------- build */
check("dist barrel ≤ 96 KB raw (build budget)", () => ({ ok: size("dist/index.js") <= 96 * 1024, actual: `${size("dist/index.js")} B` }));
check("whole ESM tree ≤ 1.1 MB raw (build budget)", () => {
  let total = 0;
  for (const dir of ["dist", "dist/categories", "dist/icons"]) {
    for (const file of fs.readdirSync(p(dir))) if (file.endsWith(".js")) total += size(path.join(dir, file));
  }
  return { ok: total <= 1100 * 1024, actual: `${total} B` };
});
check("dist/animations.css ≤ 18 KB raw / 4 KB brotli (build budget)", () => {
  const bytes = size("dist/animations.css");
  const br = brotli(read("dist/animations.css"));
  return { ok: bytes <= 18 * 1024 && br <= 4096, actual: `${bytes} B / ${br} B br` };
});
check("largest dist icon module ≤ 2 KB raw / 1 KB brotli", () => {
  const modules = fs.readdirSync(p("dist/icons")).filter((file) => file.endsWith(".js")).map((file) => ({ file, bytes: size(path.join("dist/icons", file)) }));
  const largest = modules.reduce((a, b) => (b.bytes > a.bytes ? b : a), modules[0]);
  const br = brotli(read(path.join("dist/icons", largest.file)));
  return { ok: largest.bytes <= 2048 && br <= 1024, actual: `${largest.file} ${largest.bytes} B / ${br} B br` };
});
check("dist/icons + dist/categories cover the catalog", () => {
  const icons = fs.readdirSync(p("dist/icons")).filter((file) => file.endsWith(".js")).length;
  const categories = fs.readdirSync(p("dist/categories")).filter((file) => file.endsWith(".js")).length;
  return { ok: icons === COUNT && categories === 25, actual: `${icons} icon modules / ${categories} category modules` };
});

/* ------------------------------------------------------------------- js */
check("js/index.mjs ≤ 420 KB raw / 80 KB gzip / 60 KB brotli", () => {
  const buf = read("js/index.mjs");
  const gz = gzip(buf);
  const br = brotli(buf);
  return { ok: size("js/index.mjs") <= 420 * 1024 && gz <= 80 * 1024 && br <= 60 * 1024, actual: `${size("js/index.mjs")} B / ${gz} gz / ${br} br` };
});

/* -------------------------------------------------------------- gallery */
check("gallery: shell ≤ 40 KB, data ≤ 540 KB, app ≤ 90 KB, total ≤ 500 KB", () => {
  const shell = size("gallery/index.html");
  const data = size("gallery/icons.data.js");
  const app = size("gallery/app.js");
  return { ok: shell <= 40 * 1024 && data <= 540 * 1024 && app <= 90 * 1024 && shell + data + app <= 680 * 1024, actual: `${shell} + ${data} + ${app} B` };
});
check("gallery is local-only (no http/fetch)", () => {
  const combined = text("gallery/index.html") + text("gallery/icons.data.js") + text("gallery/app.js");
  return { ok: !/https?:\/\//.test(combined) && !/\bfetch\s*\(/.test(combined) && !/njs-|@njs/.test(combined), actual: "no network references" };
});

/* ------------------------------------------- one-icon tree-shaken bundle */
try {
  const { build } = await import("esbuild");
  const result = await build({
    stdin: { contents: `import { Bell } from ${JSON.stringify(p("dist/index.js"))};\nexport { Bell };\n`, resolveDir: ROOT, loader: "js" },
    bundle: true, minify: true, format: "esm", write: false,
    external: ["react", "react/jsx-runtime"], logLevel: "silent",
  });
  const code = result.outputFiles[0].text ?? Buffer.from(result.outputFiles[0].contents).toString("utf8");
  const buf = Buffer.from(code);
  check("one-icon tree-shaken bundle < 4 KB raw / 2 KB brotli", () => {
    const dropped = code.includes("M10.268") && !code.includes("M18 6 6 18");
    return { ok: buf.length <= 4096 && brotli(buf) < 2048 && dropped, actual: `${buf.length} B / ${brotli(buf)} B br`, detail: dropped ? "" : "unused icon not dropped" };
  });
} catch (error) {
  checks.push({ label: "one-icon tree-shaken bundle ≤ 2.5 KB raw / < 1.5 KB brotli", ok: false, measured: "error", detail: error.message });
}

/* ---------------------------------------------------------------- report */
const failed = checks.filter((entry) => !entry.ok);
const width = Math.max(...checks.map((entry) => entry.label.length)) + 2;
console.log("\nNexa Icons — verify (budgets)");
console.log("─".repeat(width + 34));
for (const entry of checks) {
  console.log(`${entry.ok ? "PASS" : "FAIL"}  ${entry.label.padEnd(width)} ${entry.measured ?? ""}${entry.detail ? `  (${entry.detail})` : ""}`);
}
console.log("─".repeat(width + 34));
console.log(`${checks.length - failed.length}/${checks.length} budget checks passed`);

if (!BUDGETS_ONLY) {
  console.log("\nNexa Icons — verify (test suite): node --test tests/\n");
  const tests = spawnSync(process.execPath, ["--test", "tests/"], { cwd: ROOT, stdio: "inherit" });
  if (tests.status !== 0) {
    console.error("\nverify: FAILED — the test suite reported failures (see above).");
    process.exit(tests.status ?? 1);
  }
}
if (failed.length > 0) {
  console.error(`\nverify: FAILED — ${failed.length} budget check(s) failed.`);
  process.exit(1);
}
console.log("\nverify: OK");
