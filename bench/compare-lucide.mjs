#!/usr/bin/env node
/**
 * Fair, like-for-like bundle comparison: Nexa vs Lucide.
 *
 * Both sides use the same esbuild settings (ESM, minified, React external,
 * platform=neutral), the same icon names and the same gzip/brotli quality.
 * Measures the *whole first-icon bundle* (factory + icon data) and the
 * *marginal* cost of each extra icon, plus the 168-name original catalog.
 *
 * Lucide is optional: pass LUCIDE_REACT or --lucide=/path/to/lucide-react.mjs.
 *   npm i -D lucide-react@1.70.0   # or point at an extracted tarball
 *   node bench/compare-lucide.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { gzipSync, brotliCompressSync } from "node:zlib";
import { createRequire } from "node:module";

const ROOT = process.cwd();
const require = createRequire(import.meta.url);
const esbuild = require(join(ROOT, "node_modules/esbuild"));

const argLucide = process.argv.find((a) => a.startsWith("--lucide="))?.split("=")[1];
const candidates = [
  argLucide,
  process.env.LUCIDE_REACT,
  join(ROOT, "node_modules/lucide-react/dist/esm/lucide-react.mjs"),
  "/tmp/lucide-src/react/package/dist/esm/lucide-react.mjs",
].filter(Boolean);
const lucideEntry = candidates.find((candidate) => {
  try {
    return readFileSync(candidate).length > 0;
  } catch {
    return false;
  }
});

const requested = readFileSync(join(ROOT, "raw/requested-names.txt"), "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const realistic = requested.slice(0, 30);
const measure = {
  async bundle(entry, alias) {
    const out = await esbuild.build({
      stdin: { contents: entry, resolveDir: ROOT, loader: "tsx" },
      bundle: true,
      minify: true,
      format: "esm",
      platform: "neutral",
      external: ["react"],
      write: false,
      logLevel: "silent",
      alias,
    });
    const bytes = out.outputFiles[0].contents;
    return {
      raw: bytes.length,
      gzip: gzipSync(bytes, { level: 9 }).length,
      brotli: brotliCompressSync(bytes).length,
    };
  },
};

const nexaEntry = (names) =>
  `import { ${names.join(", ")} } from "./dist/index.js";\nconsole.log(${names.join(", ")});`;
const lucideEntrySource = (names) =>
  `import { ${names.join(", ")} } from "lucide-react";\nconsole.log(${names.join(", ")});`;

async function main() {
  if (!lucideEntry) {
    console.log(
      "Lucide React not found. Install it for the comparison:\n" +
        "  npm i -D lucide-react@1.70.0\n" +
        "or run: node bench/compare-lucide.mjs --lucide=/path/to/lucide-react.mjs"
    );
    return;
  }
  const rows = [];
  for (const count of [1, 2, 5, 10, 13, 20, 30]) {
    const names = realistic.slice(0, count);
    const nexa = await measure.bundle(nexaEntry(names));
    const lucide = await measure.bundle(lucideEntrySource(names), { "lucide-react": lucideEntry });
    rows.push({ count, nexa, lucide });
  }
  const nexa168 = await measure.bundle(nexaEntry(requested));
  const lucide168 = await measure.bundle(lucideEntrySource(requested), { "lucide-react": lucideEntry });

  const first = rows[0];
  console.log("Nexa vs Lucide — same esbuild config, React external, minified ESM\n");
  console.log("icons | Nexa br | Lucide br | Nexa gzip | Lucide gzip");
  console.log("-----:|--------:|----------:|----------:|------------:");
  for (const row of rows) {
    console.log(
      `${String(row.count).padStart(5)} | ${String(row.nexa.brotli).padStart(7)} | ${String(
        row.lucide.brotli
      ).padStart(9)} | ${String(row.nexa.gzip).padStart(9)} | ${String(row.lucide.gzip).padStart(11)}`
    );
  }
  console.log("\nmarginal cost per extra icon (brotli):");
  for (let i = 1; i < rows.length; i++) {
    const n = rows[i].count - rows[i - 1].count;
    console.log(
      `${rows[i].count} icons: Nexa ${Math.round((rows[i].nexa.brotli - rows[i - 1].nexa.brotli) / n)} B/icon, Lucide ${Math.round(
        (rows[i].lucide.brotli - rows[i - 1].lucide.brotli) / n
      )} B/icon`
    );
  }
  console.log("\n168-icon original catalog:");
  console.log(`  Nexa:   ${nexa168.raw} raw / ${nexa168.gzip} gzip / ${nexa168.brotli} brotli`);
  console.log(`  Lucide: ${lucide168.raw} raw / ${lucide168.gzip} gzip / ${lucide168.brotli} brotli`);
  console.log(
    `  gzip delta: ${(((lucide168.gzip - nexa168.gzip) / lucide168.gzip) * 100).toFixed(1)}% lighter with Nexa`
  );

  const report = {
    generatedAt: new Date().toISOString(),
    config: { format: "esm", minify: true, react: "external", brotliQuality: 11, gzipLevel: 9 },
    rows,
    catalog168: { nexa: nexa168, lucide: lucide168 },
  };
  writeFileSync(join(ROOT, "bench/comparison.json"), JSON.stringify(report, null, 2));
  console.log("\nwrote bench/comparison.json");
}

await main();
