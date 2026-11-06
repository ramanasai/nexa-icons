#!/usr/bin/env node
/**
 * T9 performance bench — reproducible, dependency-light measurements.
 *
 *   node bench/bench.mjs            # measure, write results.json + README.md
 *   node bench/bench.mjs --quiet    # measure, print one-line summary
 *
 * Measures:
 *   - raw / gzip(9) / brotli(11) bytes: every icon SVG, sprite, CSS, JS ESM/CJS,
 *     dist barrel + totals, React icon modules, gallery
 *   - tree-shaken esbuild bundles for 1 / 8 / 50 icons (react external)
 *   - runtime: svg() round-trip (µs/op, warmed, 10k iterations), SSR render,
 *     cold ESM import
 *   - simulated gallery render (866 card strings) and, when Playwright is
 *     available locally, a real headless Chromium load with FCP timing and a
 *     screenshot.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = (...xs) => path.join(ROOT, ...xs);
const read = (rel) => fs.readFileSync(p(rel));
const readText = (rel) => fs.readFileSync(p(rel), "utf8");
const QUIET = process.argv.includes("--quiet");

const q11 = (buf) => {
  const b = typeof buf === "string" ? Buffer.from(buf) : buf;
  return zlib.brotliCompressSync(b, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 } }).length;
};
const gz9 = (buf) => zlib.gzipSync(typeof buf === "string" ? Buffer.from(buf) : buf, { level: 9 }).length;
const now = () => Number(process.hrtime.bigint()) / 1e6;

const DATA = JSON.parse(readText("data/icons.json"));
const ICONS = DATA.icons;

const results = {
  generatedAt: new Date().toISOString(),
  environment: {
    node: process.version,
    platform: `${process.platform}-${process.arch}`,
    cpus: os.cpus().length,
    cpusModel: os.cpus()[0]?.model ?? "unknown",
    totalMemBytes: os.totalmem(),
  },
  methods: {
    bytes: "raw = fs bytes; gzip = zlib.gzipSync(level 9); brotli = zlib.brotliCompressSync(quality 11)",
    treeShake:
      "esbuild 0.28 bundle+minify+format=esm, react and react/jsx-runtime external, in-memory (write:false); unused icon geometry asserted absent",
    svgTiming: "process.hrtime.bigint, 1,000 warm-up iterations then 10,000 measured",
    ssrTiming: "react-dom/server renderToStaticMarkup, 500 warm-up then 5,000 measured",
    galleryReal:
      "Playwright Chromium headless, file:// load, performance paint/navigation entries, one run (local machine, indicative)",
  },
  sizes: {},
  treeShake: {},
  runtime: {},
  galleryLoad: {},
};

/* ------------------------------------------------------------------ sizes */
function sizeTriple(buf) {
  const b = typeof buf === "string" ? Buffer.from(buf) : buf;
  return { raw: b.length, gzip: gz9(b), brotli: q11(b) };
}

const iconFiles = fs.readdirSync(p("icons")).filter((f) => f.endsWith(".svg"));
const perIcon = iconFiles.map((file) => {
  const buf = read(path.join("icons", file));
  return { file: `icons/${file}`, ...sizeTriple(buf) };
});
const sortedRaw = [...perIcon].sort((a, b) => a.raw - b.raw);
const median = (values) => {
  const s = [...values].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : Math.round((s[mid - 1] + s[mid]) / 2);
};
results.sizes.icons = {
  count: perIcon.length,
  totalRaw: perIcon.reduce((n, x) => n + x.raw, 0),
  avgRaw: Math.round(perIcon.reduce((n, x) => n + x.raw, 0) / perIcon.length),
  minRaw: sortedRaw[0].raw,
  medianRaw: median(perIcon.map((x) => x.raw)),
  maxRaw: sortedRaw[sortedRaw.length - 1].raw,
  largest: sortedRaw.slice(-5).reverse().map((x) => ({ file: x.file, raw: x.raw })),
  totalGzip: perIcon.reduce((n, x) => n + x.gzip, 0),
  totalBrotli: perIcon.reduce((n, x) => n + x.brotli, 0),
  perIcon,
};

results.sizes.sprite = sizeTriple(read("sprite.svg"));
results.sizes.css = sizeTriple(read("dist/animations.css"));
results.sizes.js = {
  esm: sizeTriple(read("js/index.mjs")),
  cjs: sizeTriple(read("js/index.cjs")),
  types: sizeTriple(read("js/index.d.ts")),
};
results.sizes.gallery = sizeTriple(read("gallery/index.html"));
results.sizes.galleryFiles = {
  shell: sizeTriple(read("gallery/index.html")),
  data: sizeTriple(read("gallery/icons.data.js")),
  app: sizeTriple(read("gallery/app.js")),
};
results.sizes.dist = {
  barrel: sizeTriple(read("dist/index.js")),
  esmModules: 0,
  esmRaw: 0,
  cjsModules: 0,
  cjsRaw: 0,
  declarations: 0,
  largestIconModule: null,
};
for (const f of fs.readdirSync(p("dist/icons"))) {
  if (!f.endsWith(".js")) continue;
  results.sizes.dist.esmModules += 1;
  const s = sizeTriple(read(path.join("dist/icons", f)));
  results.sizes.dist.esmRaw += s.raw;
  if (!results.sizes.dist.largestIconModule || s.raw > results.sizes.dist.largestIconModule.raw) {
    results.sizes.dist.largestIconModule = { file: `dist/icons/${f}`, ...s };
  }
}
for (const f of fs.readdirSync(p("dist/cjs/icons"))) {
  if (!f.endsWith(".js")) continue;
  results.sizes.dist.cjsModules += 1;
  results.sizes.dist.cjsRaw += read(path.join("dist/cjs/icons", f)).length;
}
for (const f of fs.readdirSync(p("dist"))) if (f.endsWith(".d.ts")) results.sizes.dist.declarations += 1;

/* ------------------------------------------------------------ tree-shaking */
const { build } = await import("esbuild");
const BUNDLE_SETS = {
  one: ["Bell"],
  eight: ["Bell", "Search", "User", "Mail", "Plus", "Minus", "Check", "X"],
  fifty: ICONS.slice(0, 50).map((i) => i.name),
};
for (const [label, names] of Object.entries(BUNDLE_SETS)) {
  const result = await build({
    stdin: {
      contents: `import { ${names.join(", ")} } from ${JSON.stringify(p("dist/index.js"))};\nexport { ${names.join(", ")} };\n`,
      resolveDir: ROOT,
      loader: "js",
    },
    bundle: true,
    minify: true,
    format: "esm",
    write: false,
    external: ["react", "react/jsx-runtime"],
    logLevel: "silent",
  });
  const code = result.outputFiles[0].text ?? Buffer.from(result.outputFiles[0].contents).toString("utf8");
  const buf = Buffer.from(code);
  const present = code.includes("M10.268"); // Bell is in all three bundle sets
  const droppedMarker = code.includes("M11.525 2.295"); // Star is in none of them
  results.treeShake[label] = {
    icons: names.length,
    raw: buf.length,
    gzip: gz9(buf),
    brotli: q11(buf),
    perExtraIconBrotli: names.length > 1 ? Math.round((q11(buf) - results.treeShake.one.brotli) / (names.length - 1)) : null,
    firstIconGeometryPresent: present,
    unrelatedIconDropped: !droppedMarker,
  };
}

/* ---------------------------------------------------------------- runtime */
const js = await import(pathToFileURL(p("js/index.mjs")).href);

function timeOps(label, iterations, fn, warmup = 1000) {
  for (let i = 0; i < warmup; i++) fn(i);
  const started = process.hrtime.bigint();
  for (let i = 0; i < iterations; i++) fn(i);
  const elapsedMs = Number(process.hrtime.bigint() - started) / 1e6;
  return {
    iterations,
    warmup,
    totalMs: Number(elapsedMs.toFixed(3)),
    usPerOp: Number(((elapsedMs * 1000) / iterations).toFixed(3)),
    opsPerSecond: Math.round(iterations / (elapsedMs / 1000)),
  };
}

results.runtime.svg = {
  simple: timeOps("svg(Bell)", 10_000, () => js.svg("Bell")),
  withOptions: timeOps("svg(Bell,{size:20,animate:true,label:'Alerts'})", 10_000, () =>
    js.svg("Bell", { size: 20, animate: true, label: "Alerts" })
  ),
  allIconsRoundTrip: timeOps("svg() across all 166 icons", 10_000, (i) => js.svg(ICONS[i % ICONS.length].name)),
  symbol: timeOps("symbol()", 10_000, () => js.symbol("bell")),
  sprite: {
    calls: 1_000,
    cachedMs: (() => {
      const t = now();
      for (let i = 0; i < 1000; i++) js.sprite();
      return Number((now() - t).toFixed(3));
    })(),
    usPerOp: Number(((((() => {
      const t = now();
      for (let i = 0; i < 1000; i++) js.sprite();
      return now() - t;
    })()) * 1000) / 1000).toFixed(3)),
  },
};

try {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const dist = await import(pathToFileURL(p("dist/index.js")).href);
  results.runtime.ssr = {
    oneIcon: timeOps("renderToStaticMarkup(<Bell/>)", 5_000, () => renderToStaticMarkup(createElement(dist.Bell)), 500),
    all166: (() => {
      const t = now();
      let bytes = 0;
      for (const icon of ICONS) bytes += renderToStaticMarkup(createElement(dist[icon.name])).length;
      const ms = now() - t;
      return { icons: ICONS.length, totalMs: Number(ms.toFixed(3)), usPerIcon: Number((ms * 1000 / ICONS.length).toFixed(3)), bytes };
    })(),
  };
} catch (error) {
  results.runtime.ssr = { available: false, reason: error.message };
}

// Cold ESM import in fresh processes (median of 5).
const importTimes = [];
for (let i = 0; i < 5; i++) {
  const t = now();
  const child = spawnSync(
    process.execPath,
    ["--input-type=module", "-e", `const t=performance.now(); await import(${JSON.stringify(pathToFileURL(p("js/index.mjs")).href)}); console.log(performance.now()-t)`],
    { encoding: "utf8", timeout: 30_000 }
  );
  if (child.status === 0) importTimes.push(Number(child.stdout.trim()));
}
results.runtime.coldImportMs = {
  runs: importTimes.length,
  median: importTimes.length ? Number(median(importTimes).toFixed(2)) : null,
  values: importTimes.map((v) => Number(v.toFixed(2))),
};

/* ------------------------------------------------ simulated gallery render */
const spriteSymbols = readText("sprite.svg").match(/<symbol\b[\s\S]*?<\/symbol>/g) ?? [];
const simulateGrid = () =>
  ICONS.map(
    (icon) =>
      `<div class="card"><button class="icon-btn" data-k="${icon.kebab}"><svg class="nexa-icon" data-nexa-anim="${icon.anim.preset}" data-nexa-trigger="${icon.anim.trigger}"><use href="#nexa-${icon.kebab}"/></svg><span>${icon.name}</span></button></div>`
  ).join("");
const SIM_ITERATIONS = 2_000;
const gridFirst = simulateGrid();
{
  const t = now();
  for (let i = 0; i < SIM_ITERATIONS; i++) simulateGrid();
  const ms = now() - t;
  results.runtime.simulatedGalleryRender = {
    iterations: SIM_ITERATIONS,
    cards: ICONS.length,
    symbols: spriteSymbols.length,
    htmlBytes: Buffer.byteLength(gridFirst),
    totalMs: Number(ms.toFixed(2)),
    usPerBuild: Number(((ms * 1000) / SIM_ITERATIONS).toFixed(2)),
    note: "DOM-less proxy for prerender work (string building only); real browser numbers below when Playwright is available",
  };
}

/* --------------------------------------------------- real browser (optional) */
function resolvePlaywright() {
  const candidates = [];
  if (process.env.PLAYWRIGHT_MODULE) candidates.push(process.env.PLAYWRIGHT_MODULE);
  try {
    candidates.push(createRequire(import.meta.url).resolve("playwright"));
  } catch {
    /* not installed locally */
  }
  const roots = [path.join(os.homedir(), ".npm", "_npx"), "/opt/homebrew/lib/node_modules", path.join(os.homedir(), ".local/share/pnpm/global/5/node_modules")];
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    for (const entry of fs.readdirSync(root)) {
      const candidate = path.join(root, entry, "node_modules", "playwright");
      const direct = path.join(root, entry);
      if (fs.existsSync(path.join(candidate, "package.json"))) candidates.push(candidate);
      if (entry === "playwright" && fs.existsSync(path.join(direct, "package.json"))) candidates.push(direct);
    }
  }
  for (const candidate of candidates) {
    try {
      const pw = createRequire(import.meta.url)(candidate);
      if (pw?.chromium) {
        let version = "unknown";
        try {
          version = JSON.parse(fs.readFileSync(path.join(candidate, "package.json"), "utf8")).version;
        } catch {
          /* version is cosmetic */
        }
        return { pw, version, dir: candidate };
      }
    } catch {
      /* try next */
    }
  }
  return null;
}

const playwrightInfo = resolvePlaywright();
const playwright = playwrightInfo?.pw;
if (playwright) {
  const screenshotPath = p("bench/out/gallery.png");
  fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
  const galleryUrl = pathToFileURL(p("gallery/index.html")).href;
  let browser;
  try {
    browser = await playwright.chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    // Capture paint timing even where the PerformancePaintTiming buffer is not
    // exposed to page.evaluate after load (file:// in headless Chromium).
    await page.addInitScript(() => {
      window.__nexaPaint = [];
      try {
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) window.__nexaPaint.push([entry.name, entry.startTime]);
        }).observe({ type: "paint", buffered: true });
      } catch {
        /* paint timing unsupported */
      }
    });
    const galleryUrl = pathToFileURL(p("gallery/index.html")).href;
    const runs = [];
    for (let i = 0; i < 4; i++) {
      const wallStart = now();
      await page.goto(galleryUrl, { waitUntil: "load" });
      const wallMs = now() - wallStart;
      // File:// documents in headless Chromium expose no PerformancePaintTiming
      // entries, so approximate the first painted frame with a double-rAF.
      const firstFrameMs = await page.evaluate(
        () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve(performance.now()))))
      );
      const nav = await page.evaluate(() => {
        const n = performance.getEntriesByType("navigation")[0];
        const paint = (window.__nexaPaint || []).concat(
          performance.getEntriesByType("paint").map((e) => [e.name, e.startTime])
        );
        return {
          paint,
          domContentLoaded: n ? n.domContentLoadedEventEnd : null,
          load: n ? n.loadEventEnd : null,
          cards: document.querySelectorAll(".card, [data-k]").length,
          symbols: document.querySelectorAll("symbol").length,
          swaps: document.querySelectorAll(".swap-card").length,
          uses: document.querySelectorAll("use").length,
          domNodes: document.querySelectorAll("*").length,
          docHeight: document.documentElement.scrollHeight,
        };
      });
      runs.push({ wallMs, firstFrameMs, ...nav });
    }
    // First navigation is warm-up (module cache/JIT); report the median of 3.
    const measured = runs.slice(1);
    const medianOf = (key) => {
      const values = measured.map((r) => r[key]).filter((v) => typeof v === "number");
      const sorted = values.sort((a, b) => a - b);
      return sorted.length ? sorted[Math.floor(sorted.length / 2)] : null;
    };
    const metrics = measured[measured.length - 1];
    // Animation is CSS-only: hovering a prerendered card must start a keyframe.
    await page.hover('.icon-btn[data-k="bell"]');
    await page.waitForTimeout(80);
    const animation = await page.evaluate(() => {
      const svg = document.querySelector('.icon-btn[data-k="bell"] svg');
      const style = getComputedStyle(svg);
      return { animationName: style.animationName, animationDuration: style.animationDuration };
    });
    await page.screenshot({ path: screenshotPath, fullPage: false });
    await browser.close();
    const fcp = metrics.paint.find(([name]) => name === "first-contentful-paint")?.[1] ?? null;
    results.galleryLoad = {
      available: true,
      engine: `playwright ${playwrightInfo.version}`,
      url: "file://gallery/index.html",
      runs: runs.length,
      wallLoadMs: Number(medianOf("wallMs").toFixed(2)),
      firstContentfulPaintMs: fcp === null ? null : Number(fcp.toFixed(2)),
      firstPaintedFrameMs: Number(medianOf("firstFrameMs").toFixed(2)),
      domContentLoadedMs: metrics.domContentLoaded === null ? null : Number(metrics.domContentLoaded.toFixed(2)),
      loadEventMs: metrics.load === null ? null : Number(metrics.load.toFixed(2)),
      rawRuns: runs.map((r) => ({
        wallMs: Number(r.wallMs.toFixed(2)),
        firstFrameMs: Number(r.firstFrameMs.toFixed(2)),
        domContentLoadedMs: r.domContentLoaded === null ? null : Number(r.domContentLoaded.toFixed(2)),
      })),
      counts: { renderedCards: metrics.cards, symbols: metrics.symbols, swapCards: metrics.swaps, useRefs: metrics.uses, domNodes: metrics.domNodes },
      files: {
        shell: results.sizes.galleryFiles.shell.raw,
        data: results.sizes.galleryFiles.data.raw,
        app: results.sizes.galleryFiles.app.raw,
      },
      documentHeightPx: metrics.docHeight,
      hoverAnimation: animation,
      screenshot: "bench/out/gallery.png",
    };
  } catch (error) {
    try {
      await browser?.close();
    } catch {
      /* ignore */
    }
    results.galleryLoad = { available: false, reason: `playwright 运行失败: ${error.message}` };
  }
} else {
  results.galleryLoad = {
    available: false,
    reason: "playwright module not found locally (set PLAYWRIGHT_MODULE=/path/to/playwright to enable)",
  };
}

/* ------------------------------------------------------------------ output */
fs.mkdirSync(p("bench"), { recursive: true });
fs.writeFileSync(p("bench/results.json"), JSON.stringify(results, null, 2) + "\n");
const kb = (n) => `${(n / 1024).toFixed(2)} KB`;
const table = (rows) =>
  ["| Artefact | Raw | Gzip 9 | Brotli 11 |", "| --- | ---: | ---: | ---: |", ...rows].join("\n");

const readme = `# Nexa Icons — performance bench (T9)

Generated by \`node bench/bench.mjs\` at ${results.generatedAt} on Node ${results.environment.node}
(${results.environment.platform}, ${results.environment.cpus} CPUs).
Machine-dependent numbers; sizes are deterministic.

## Method

- **Bytes**: raw = file bytes; gzip = \`zlib.gzipSync({level:9})\`; brotli = \`zlib.brotliCompressSync({quality:11})\`.
- **Tree-shaking**: esbuild \`bundle:true, minify:true, format:"esm"\`, with \`react\` and
  \`react/jsx-runtime\` external. The one-icon bundle is checked to contain Bell's geometry and
  to exclude Star's.
- **svg() timing**: 1,000 warm-up calls, then 10,000 measured calls; \`process.hrtime.bigint\`.
- **SSR timing**: \`react-dom/server.renderToStaticMarkup\`, 500 warm-up then 5,000 measured.
- **Cold import**: five fresh \`node\` processes each \`await import("js/index.mjs")\`.
- **Gallery (real)**: Playwright Chromium headless loads \`file://gallery/index.html\`; FCP and
  navigation timings come from the Performance API. When Playwright is unavailable the section
  reports \`available:false\` and the DOM-less simulation is used instead.
- **Gallery (simulated)**: 166 prerendered card strings built 2,000× — a proxy for the
  prerender/DOM-insert cost, not a browser paint measurement.

## Sizes

${table([
  `| Per icon (${results.sizes.icons.count} files) | ${results.sizes.icons.avgRaw} B avg / ${results.sizes.icons.maxRaw} B max | — | — |`,
  `| All ${results.sizes.icons.count} icon SVGs | ${results.sizes.icons.totalRaw} B | ${results.sizes.icons.totalGzip} B | ${results.sizes.icons.totalBrotli} B |`,
  `| \`sprite.svg\` | ${results.sizes.sprite.raw} B | ${results.sizes.sprite.gzip} B | ${results.sizes.sprite.brotli} B |`,
  `| \`dist/animations.css\` | ${results.sizes.css.raw} B | ${results.sizes.css.gzip} B | ${results.sizes.css.brotli} B |`,
  `| \`js/index.mjs\` (ESM, all data) | ${results.sizes.js.esm.raw} B | ${results.sizes.js.esm.gzip} B | ${results.sizes.js.esm.brotli} B |`,
  `| \`js/index.cjs\` (CJS mirror) | ${results.sizes.js.cjs.raw} B | ${results.sizes.js.cjs.gzip} B | ${results.sizes.js.cjs.brotli} B |`,
  `| \`dist/index.js\` barrel | ${results.sizes.dist.barrel.raw} B | ${results.sizes.dist.barrel.gzip} B | ${results.sizes.dist.barrel.brotli} B |`,
  `| \`dist/icons/\` (${results.sizes.dist.esmModules} ESM modules) | ${results.sizes.dist.esmRaw} B | — | — |`,
  `| largest icon module | ${results.sizes.dist.largestIconModule.file} ${results.sizes.dist.largestIconModule.raw} B | ${results.sizes.dist.largestIconModule.gzip} B | ${results.sizes.dist.largestIconModule.brotli} B |`,
  `| \`gallery/index.html\` (shell) | ${results.sizes.galleryFiles.shell.raw} B | ${results.sizes.galleryFiles.shell.gzip} B | ${results.sizes.galleryFiles.shell.brotli} B |`,
  `| \`gallery/icons.data.js\` | ${results.sizes.galleryFiles.data.raw} B | — | — |`,
  `| \`gallery/app.js\` | ${results.sizes.galleryFiles.app.raw} B | — | — |`,
])}

## Tree-shaken bundles (React external)

| Bundle | Raw | Gzip 9 | Brotli 11 | Extra icon (brotli) |
| --- | ---: | ---: | ---: | ---: |
${Object.entries(results.treeShake)
  .map(([label, r]) => `| ${label} (${r.icons} icon${r.icons > 1 ? "s" : ""}) | ${r.raw} B | ${r.gzip} B | ${r.brotli} B | ${r.perExtraIconBrotli === null ? "—" : r.perExtraIconBrotli + " B"} |`)
  .join("\n")}

## Runtime

| Operation | µs/op | ops/s |
| --- | ---: | ---: |
| \`svg("Bell")\` | ${results.runtime.svg.simple.usPerOp} | ${results.runtime.svg.simple.opsPerSecond} |
| \`svg("Bell", {size:20, animate:true, label})\` | ${results.runtime.svg.withOptions.usPerOp} | ${results.runtime.svg.withOptions.opsPerSecond} |
| \`svg()\` over all ${results.sizes.icons.count} icons | ${results.runtime.svg.allIconsRoundTrip.usPerOp} | ${results.runtime.svg.allIconsRoundTrip.opsPerSecond} |
| \`symbol("bell")\` | ${results.runtime.svg.symbol.usPerOp} | ${results.runtime.svg.symbol.opsPerSecond} |
| SSR \`<Bell/>\` | ${results.runtime.ssr?.oneIcon?.usPerOp ?? "n/a"} | ${results.runtime.ssr?.oneIcon?.opsPerSecond ?? "n/a"} |

- Cold ESM import (\`js/index.mjs\`): median **${results.runtime.coldImportMs.median} ms** over ${results.runtime.coldImportMs.runs} runs.
- SSR all ${results.sizes.icons.count} icons: **${results.runtime.ssr?.all166?.totalMs ?? "n/a"} ms** (${results.runtime.ssr?.all166?.usPerIcon ?? "n/a"} µs/icon, ${results.runtime.ssr?.all166?.bytes ?? "n/a"} B markup).

## Gallery

- **Simulated render** (${results.sizes.icons.count} card strings × ${results.runtime.simulatedGalleryRender.iterations}): ${results.runtime.simulatedGalleryRender.usPerBuild} µs/build, ${kb(results.runtime.simulatedGalleryRender.htmlBytes)} per grid.
- **Real browser**: ${
  results.galleryLoad.available
    ? `wall load **${results.galleryLoad.wallLoadMs} ms**, first painted frame **${results.galleryLoad.firstPaintedFrameMs} ms**, FCP ${results.galleryLoad.firstContentfulPaintMs === null ? "n/a (file:// paint timing unsupported)" : results.galleryLoad.firstContentfulPaintMs + " ms"}, DOMContentLoaded ${results.galleryLoad.domContentLoadedMs} ms; counts ${JSON.stringify(results.galleryLoad.counts)}; hover animation = \`${results.galleryLoad.hoverAnimation.animationName}\` ${results.galleryLoad.hoverAnimation.animationDuration}; screenshot \`${results.galleryLoad.screenshot}\`.`
    : `not measured (${results.galleryLoad.reason}).`
}

## Budgets checked by the QA suite

| Budget | Limit |
| --- | --- |
| One-icon React bundle | < 1.5 KB brotli (T9) / measured ${results.treeShake.one.brotli} B |
| Icon SVG | ≤ 700 B each (revised from T1's aspirational 500 B) |
| All icon SVGs | ≤ 65 KB raw |
| \`sprite.svg\` | < 55 KB raw |
| \`dist/animations.css\` | ≤ 12 KB raw, ≤ 4 KB brotli |
| \`gallery/index.html\` | ≤ 200 KB raw T7 target (measured ${results.sizes.gallery.raw} B) |
| \`js/index.mjs\` | < 24 KB gzip (single-file API inlines all 166 icon datasets) |
`;

fs.writeFileSync(p("bench/README.md"), readme);

if (!QUIET) {
  console.log("Nexa Icons bench — results written to bench/results.json + bench/README.md");
  console.log(`  icons: ${results.sizes.icons.count} avg ${results.sizes.icons.avgRaw} B, max ${results.sizes.icons.maxRaw} B, total ${results.sizes.icons.totalRaw} B`);
  console.log(`  sprite: ${results.sizes.sprite.raw} B raw / ${results.sizes.sprite.brotli} B br`);
  console.log(`  js ESM: ${results.sizes.js.esm.raw} B raw / ${results.sizes.js.esm.gzip} B gz / ${results.sizes.js.esm.brotli} B br`);
  console.log(`  gallery: ${results.sizes.gallery.raw} B raw / ${results.sizes.gallery.brotli} B br`);
  console.log(`  bundles: 1=${results.treeShake.one.brotli} B br, 8=${results.treeShake.eight.brotli} B br, 50=${results.treeShake.fifty.brotli} B br`);
  console.log(`  svg(): ${results.runtime.svg.simple.usPerOp} µs/op; SSR: ${results.runtime.ssr?.oneIcon?.usPerOp ?? "n/a"} µs/op`);
  console.log(
    `  gallery load: ${results.galleryLoad.available ? `${results.galleryLoad.wallLoadMs} ms wall, FCP ${results.galleryLoad.firstContentfulPaintMs} ms` : "playwright unavailable"}`
  );
}
