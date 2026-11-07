#!/usr/bin/env node
/**
 * gallery/build.mjs — Nexa Icons gallery builder
 * ---------------------------------------------------------------------------
 * The gallery is split for speed:
 *
 *   gallery/index.html     tiny static SHELL: chrome, controls, skeletons,
 *                          lazy-section placeholders, drawer markup, critical
 *                          CSS + the canonical animations.css, ~30 KB raw.
 *                          It paints with zero blocking JS and zero requests
 *                          beyond itself.
 *   gallery/icons.data.js  classic deferred script: compact dataset + inlined
 *                          sprite (`window.NEXA_DATA`). Local file: works from
 *                          file:// (no CORS, unlike ES modules).
 *   gallery/app.js         classic deferred script: virtualization, search,
 *                          filters, lazy sections, drawer, HUD. Also local.
 *
 * Because data/app are deferred local files, the browser paints the shell
 * before it evaluates a single line of gallery JS. The only inline script is a
 * ~0.3 KB timing/paint-observer boot.
 *
 * Sources:
 *   data/icons.json, data/swaps.json, data/categories.json (optional),
 *   src/animations.css, illustrations/manifest.json (optional), package.json,
 *   gallery/src/{index.html,shell.css,components.css,drawer.html,app.js}
 *   sprite.svg is validated for consistency but not shipped (the gallery renders
 *   inline path markup from the data file; the product sprite stays unchanged).
 *
 * Build-time normalizations (documented on the page):
 *  1. Inlined sprite symbols drop their repeated stroke-width/fill/stroke/caps
 *     attributes; `.nexa-icon` sets them once so the gallery's NJS/Nexa
 *     size→weight table (16→2, 20→1.75, 24/32/48→1.5) works from the SVG root.
 *     sprite.svg itself is untouched.
 *  2. Icons are stored as compact tuples; sprite + payload live in
 *     icons.data.js, not the shell.
 *  3. Category records come from meta.categories (data/categories.json). If the
 *     category manifest is not in the tree yet, the gallery falls back to the
 *     authored Nexa concept map (meta.nexaMap) as "collections" so a filter
 *     still works; the categories section and chips switch automatically when
 *     meta.categories appears.
 *  4. Illustrations: illustrations/manifest.json if present, otherwise every
 *     illustrations/*.svg is auto-registered (name from filename). If neither
 *     exists the section stays hidden.
 *
 * Usage: node gallery/build.mjs
 */

import { readFileSync, writeFileSync, existsSync, statSync, readdirSync, copyFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { brotliCompressSync, gzipSync, constants as zlibConstants } from 'node:zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC = join(__dirname, 'src');
const OUT_HTML = join(__dirname, 'index.html');
const OUT_DATA = join(__dirname, 'icons.data.js');
const OUT_APP = join(__dirname, 'app.js');
const SHELL_BUDGET = 40 * 1024;

const t0 = performance.now();
const fail = (message) => {
  console.error('✗ build failed: ' + message);
  process.exit(1);
};
const read = (path) => readFileSync(path, 'utf8');
const brotli = (buffer) => brotliCompressSync(buffer, {
  params: { [zlibConstants.BROTLI_PARAM_QUALITY]: zlibConstants.BROTLI_MAX_QUALITY }
}).length;
const gzip = (buffer) => gzipSync(buffer, { level: 9 }).length;
const kb = (bytes) => (bytes / 1024).toFixed(1) + ' KB';

/* ---------------------------------------------------------------- inputs */
const required = [
  [join(ROOT, 'data/icons.json'), 'data/icons.json'],
  [join(ROOT, 'data/swaps.json'), 'data/swaps.json'],
  [join(ROOT, 'src/animations.css'), 'src/animations.css'],
  [join(ROOT, 'src/effects.css'), 'src/effects.css'],
  [join(SRC, 'index.html'), 'gallery/src/index.html'],
  [join(SRC, 'shell.css'), 'gallery/src/shell.css'],
  [join(SRC, 'components.css'), 'gallery/src/components.css'],
  [join(SRC, 'drawer.html'), 'gallery/src/drawer.html'],
  [join(SRC, 'app.js'), 'gallery/src/app.js']
];
for (const [path, label] of required) if (!existsSync(path)) fail('missing input: ' + label);

const iconsDoc = JSON.parse(read(join(ROOT, 'data/icons.json')));
const icons = iconsDoc.icons;
if (!Array.isArray(icons) || !icons.length) fail('data/icons.json has no icons array');
const byName = new Map(icons.map((icon) => [icon.name, icon]));
const byKebab = new Map(icons.map((icon) => [icon.kebab, icon]));
const kebabs = new Set(icons.map((icon) => icon.kebab));
if (kebabs.size !== icons.length) fail('duplicate kebab in data/icons.json');

let version = (iconsDoc.meta && iconsDoc.meta.version) || '1.0.0';
if (existsSync(join(ROOT, 'package.json'))) {
  try {
    const pkg = JSON.parse(read(join(ROOT, 'package.json')));
    if (pkg.version) version = pkg.version;
  } catch (err) {
    console.warn('! package.json not parseable:', err.message);
  }
}

const animCss = read(join(ROOT, 'src/animations.css')).trim();
const effectsCss = read(join(ROOT, 'src/effects.css')).trim();
const swapsDoc = JSON.parse(read(join(ROOT, 'data/swaps.json')));
const swapPairs = [];
for (const [fromName, toName, mode] of swapsDoc.pairs || []) {
  const from = byName.get(fromName);
  const to = byName.get(toName);
  if (!from || !to) {
    console.warn(`! swap pair skipped (unknown icon): ${fromName} -> ${toName}`);
    continue;
  }
  swapPairs.push([from.kebab, to.kebab, mode]);
}
const pairedKebabs = new Set();
for (const [from, to] of swapPairs) {
  pairedKebabs.add(from);
  pairedKebabs.add(to);
}

/* ---------------------------------------------------------------- sprite */
// The fast gallery renders inline paths from the data file, so the inlined
// sprite is not shipped here. Validate that the shipped sprite still matches the
// dataset (it stays the product's zero-request consumption format).
let spriteOk = true;
if (existsSync(join(ROOT, 'sprite.svg'))) {
  const sprite = read(join(ROOT, 'sprite.svg'));
  const symbolIds = [...sprite.matchAll(/<symbol id="nexa-([a-z0-9-]+)"/g)].map((m) => m[1]);
  if (symbolIds.length !== icons.length || new Set(symbolIds).size !== icons.length) spriteOk = false;
  for (const kebab of kebabs) if (!symbolIds.includes(kebab)) spriteOk = false;
}
if (!spriteOk) console.warn('! sprite.svg does not match data/icons.json (gallery renders inline paths, so build continues)');

/* -------------------------------------------------------------- icons data */
const categories = [];
const categoryIds = new Set();
const iconCategories = new Map();
const metaCategories = Array.isArray(iconsDoc.meta && iconsDoc.meta.categories) ? iconsDoc.meta.categories : [];
for (const category of metaCategories) {
  if (!category || !category.id) continue;
  const members = [];
  for (const candidate of category.icons || []) {
    const icon = byName.get(candidate) || byKebab.get(candidate);
    if (!icon) continue;
    if (!members.includes(icon.kebab)) members.push(icon.kebab);
  }
  if (!members.length) continue;
  categories.push({ id: category.id, label: category.label || category.id, description: category.description || '', icons: members });
  categoryIds.add(category.id);
  for (const kebab of members) {
    if (!iconCategories.has(kebab)) iconCategories.set(kebab, []);
    iconCategories.get(kebab).push(category.id);
  }
}
// Icons can also carry `categories` directly (when the catalog generator adds it).
for (const icon of icons) {
  if (!Array.isArray(icon.categories)) continue;
  for (const id of icon.categories) {
    if (!categoryIds.has(id)) continue;
    if (!iconCategories.has(icon.kebab)) iconCategories.set(icon.kebab, []);
    if (!iconCategories.get(icon.kebab).includes(id)) iconCategories.get(icon.kebab).push(id);
  }
}

// Fallback filter when the category manifest is not in the tree yet: the
// authored Nexa concept map (meta.nexaMap) becomes "collections" chips.
const collections = [];
const nexaMap = (iconsDoc.meta && iconsDoc.meta.nexaMap) || {};
if (!categories.length && Object.keys(nexaMap).length) {
  for (const [id, displayName] of Object.entries(nexaMap)) {
    const icon = byName.get(displayName);
    if (!icon) continue;
    collections.push({ id, label: id.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()).trim(), icons: [icon.kebab] });
  }
}

/* ---------------------------------------------------------- illustrations */
let illustrations = [];
const manifestPath = join(ROOT, 'illustrations/manifest.json');
if (existsSync(manifestPath)) {
  try {
    const manifest = JSON.parse(read(manifestPath));
    const entries = Array.isArray(manifest) ? manifest : manifest.illustrations || manifest.items || [];
    for (const entry of entries) {
      const src = entry.file || entry.src || entry.path || '';
      const name = entry.name || entry.id || (src ? src.replace(/^.*\//, '').replace(/\.\w+$/, '') : '');
      if (!name) continue;
      const abs = src ? join(ROOT, 'illustrations', src) : join(ROOT, 'illustrations', name + '.svg');
      if (!existsSync(abs)) continue;
      const isSvg = abs.endsWith('.svg');
      let inlineSvg = '';
      if (isSvg) {
        inlineSvg = read(abs).trim()
          .replace(/^<svg\b[^>]*>/, (tag) => tag
            .replace(/\s+xmlns="[^"]*"/, '')
            .replace(/\s+width="[^"]*"/, '')
            .replace(/\s+height="[^"]*"/, ''))
          .replace(/<!--[\s\S]*?-->/g, '');
      }
      illustrations.push({
        id: entry.id || name,
        name,
        title: entry.title || entry.label || name,
        description: entry.description || '',
        tags: Array.isArray(entry.tags) ? entry.tags : [],
        usage: entry.usage || '',
        themes: Array.isArray(entry.themes) ? entry.themes : ['light', 'dark'],
        viewBox: entry.viewBox || '0 0 64 64',
        svg: inlineSvg,
        src: isSvg ? '' : '../illustrations/' + (src || name)
      });
    }
  } catch (err) {
    console.warn('! illustrations/manifest.json ignored:', err.message);
  }
} else if (existsSync(join(ROOT, 'illustrations'))) {
  // No manifest yet: auto-register every SVG so the section appears when assets land.
  for (const file of readdirSync(join(ROOT, 'illustrations')).sort()) {
    if (!file.endsWith('.svg')) continue;
    const id = file.replace(/\.svg$/, '');
    const inlineSvg = read(join(ROOT, 'illustrations', file)).trim()
      .replace(/^<svg\b[^>]*>/, (tag) => tag.replace(/\s+xmlns="[^"]*"/, '').replace(/\s+width="[^"]*"/, '').replace(/\s+height="[^"]*"/, ''));
    illustrations.push({
      id,
      name: id,
      title: id.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      description: '',
      tags: [],
      usage: '',
      themes: ['light', 'dark'],
      viewBox: '0 0 64 64',
      svg: inlineSvg,
      src: ''
    });
  }
}

/* ---------------------------------------------------------------- payload */
const presets = [...new Set(icons.map((icon) => icon.anim && icon.anim.preset).filter(Boolean))].sort();
const triggerSet = new Set(icons.map((icon) => (icon.anim && icon.anim.trigger) || 'hover'));
for (const t of ['hover', 'always', 'press', 'inview']) triggerSet.add(t);
const payload = {
  v: version,
  count: icons.length,
  presets,
  triggers: [...triggerSet],
  sizes: { 16: 2, 20: 1.75, 24: 1.5, 32: 1.5, 48: 1.5 },
  categories,
  collections,
  swaps: swapPairs,
  illustrations,
  icons: icons.map((icon) => [
    icon.kebab,
    icon.name,
    icon.aliases.length === 1 && icon.aliases[0] === icon.name ? '' : icon.aliases.join('|'),
    (icon.keywords || []).join('|'),
    (icon.anim && icon.anim.preset) || 'pop',
    (icon.anim && icon.anim.trigger) || 'hover',
    icon.fillSafe ? 1 : 0,
    (iconCategories.get(icon.kebab) || []).join('|')
  ]),
  // Inline path markup per icon: rendering is `<svg>…paths…</svg>` (no <use>,
  // no 650-symbol DOM injection), which is faster for a 600+ icon catalog.
  paths: icons.map((icon) => icon.inner)
};
const dataCode = 'window.__NEXA_DATA_T0__=performance.now();window.NEXA_DATA=' +
  JSON.stringify(payload).replace(/<\//g, '<\\/') +
  ';window.__NEXA_DATA_T1__=performance.now();\n';

/* ------------------------------------------------------------------- app */
const componentsCss = read(join(SRC, 'components.css')).trim();
const drawerHtml = read(join(SRC, 'drawer.html')).trim();
// animations.css ships inside app.js: it is only needed once icons render, so
// keeping it out of the shell lets the shell stay under the 25 KB target.
// Ship the LLM-facing summary at the site root (Pages serves gallery/).
const llmsSrc = join(ROOT, 'llms.txt');
const llmsOut = join(ROOT, 'gallery', 'llms.txt');
if (existsSync(llmsSrc)) copyFileSync(llmsSrc, llmsOut);
// accepted alias for tools that look for llm.txt
const llmSrc = join(ROOT, 'llm.txt');
if (existsSync(llmSrc)) copyFileSync(llmSrc, join(ROOT, 'gallery', 'llm.txt'));

// Studio is a static editor shell that loads the same local dataset.
const studioSrc = join(ROOT, 'gallery', 'src', 'studio.html');
const studioOut = join(ROOT, 'gallery', 'studio.html');
if (existsSync(studioSrc)) copyFileSync(studioSrc, studioOut);

const injectedCss = minifyCss(animCss) + '\n' + minifyCss(effectsCss) + '\n' + minifyCss(componentsCss);
let appSource = read(join(SRC, 'app.js')).trim();
if (!appSource.includes('/*@COMPONENTS_CSS@*/')) fail('gallery/src/app.js is missing the /*@COMPONENTS_CSS@*/ marker');
if (!appSource.includes('/*@DRAWER_HTML@*/')) fail('gallery/src/app.js is missing the /*@DRAWER_HTML@*/ marker');
appSource = appSource
  .replace('/*@COMPONENTS_CSS@*/', () => JSON.stringify(injectedCss))
  .replace('/*@DRAWER_HTML@*/', () => JSON.stringify(drawerHtml));
const minifyJs = (js) => js
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line.length && !line.startsWith('//'))
  .join('\n');
const appCode = '/* Nexa Icons gallery app — generated by gallery/build.mjs */\n' + minifyJs(appSource) + '\n';

/* ---------------------------------------------------------------- shell */
const template = read(join(SRC, 'index.html'));
const shellCss = minifyCss(read(join(SRC, 'shell.css')));
// Shell whitespace trim: no text nodes depend on newlines between tags.
const leanTemplate = template
  .split('\n')
  .map((line) => line.replace(/^\s+/, ''))
  .filter((line) => line.length)
  .join('\n')
  .replace(/>\n</g, '><');

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>])\s*/g, '$1')
    .trim();
}

const dataBytes = Buffer.byteLength(dataCode, 'utf8');
const appBytes = Buffer.byteLength(appCode, 'utf8');
const buildMs = Number((performance.now() - t0).toFixed(1));

function compose(pageBytes) {
  const meta = '<meta name="nexa-gallery" content="shellBytes=' + pageBytes +
    ';dataBytes=' + dataBytes + ';appBytes=' + appBytes + ';icons=' + icons.length +
    ';version=' + version + ';buildMs=' + buildMs + '">';
  return leanTemplate
    .replace('/*@SHELL_CSS@*/', () => shellCss)
    .replace(/__NEXA_COUNT__/g, () => String(icons.length))
    .replace(/__NEXA_VERSION__/g, () => version)
    .replace(/__NEXA_DATA_BYTES__/g, () => String(dataBytes))
    .replace(/__NEXA_APP_BYTES__/g, () => String(appBytes))
    .replace(/__NEXA_BUILD_MS__/g, () => String(buildMs))
    .replace('<meta name="nexa-gallery" content="__NEXA_META__">', () => meta);
}

// Fixed point for the shell's own byte count (it embeds the number).
let shellBytes = 0;
let html = '';
let iterations = 0;
for (;;) {
  iterations += 1;
  html = compose(shellBytes);
  const actual = Buffer.byteLength(html, 'utf8');
  if (actual === shellBytes) break;
  if (iterations > 12) fail('shell byte count did not converge');
  shellBytes = actual;
}

/* ------------------------------------------------------------------ checks */
if (shellBytes > SHELL_BUDGET) fail(`shell is ${kb(shellBytes)} — over the 40 KB budget`);
if (html.includes('class="card"')) fail('shell must not prerender icon cards');
if (html.includes('<use href=')) fail('shell must not include icon <use> instances');
if (html.includes('undefined') || html.includes('NaN')) fail('shell contains undefined/NaN');
if (/https?:\/\//.test(html)) fail('shell contains an external URL');
if (!html.includes('id="grid"')) fail('shell is missing the grid mount point');
for (const id of ['q', 'result-count', 'size-seg', 'theme-seg', 'color-seg', 'preset-filter', 'trigger-filter',
  'grid', 'hud-shell', 'announcer', 'category-filter', 'sec-swaps', 'sec-shapes', 'sec-fills',
  'sec-3d', 'sec-illustrations', 'sec-categories', 'trigger-demo', 'sprite-host']) {
  if (!html.includes('id="' + id + '"')) fail('shell is missing #' + id);
}

if (payload.icons.length !== icons.length) fail('payload icon count mismatch');
if (payload.paths.length !== icons.length || payload.paths.some((path) => !path)) fail('payload paths are incomplete');
if (!dataCode.includes('window.NEXA_DATA=') || !dataCode.trimEnd().endsWith(';')) fail('icons.data.js shape is wrong');
const dataUrls = [...dataCode.matchAll(/https?:\/\/[^\s"'<>]+/g)].map((m) => m[0].replace(/[\\"')]+$/, ''));
const badDataUrls = dataUrls.filter((url) => !url.startsWith('http://www.w3.org/2000/svg'));
if (badDataUrls.length) fail('external URLs in icons.data.js: ' + badDataUrls.slice(0, 3).join(', '));
if (!appCode.includes('NEXA_DATA')) fail('app.js does not read NEXA_DATA');
if (!appCode.includes('.nexa-icon')) fail('app.js is missing the components CSS payload');

/* ------------------------------------------------------------------- write */
writeFileSync(OUT_DATA, dataCode, 'utf8');
writeFileSync(OUT_APP, appCode, 'utf8');
writeFileSync(OUT_HTML, html, 'utf8');
execFileSync(process.execPath, ['--check', OUT_APP], { stdio: 'pipe' });
execFileSync(process.execPath, ['--check', OUT_DATA], { stdio: 'pipe' });
if (statSync(OUT_HTML).size !== shellBytes) fail('shell byte count drifted after write');

/* ------------------------------------------------------------------ report */
const htmlBuffer = readFileSync(OUT_HTML);
const dataBuffer = readFileSync(OUT_DATA);
const appBuffer = readFileSync(OUT_APP);
const report = {
  generatedBy: 'gallery/build.mjs',
  builtAt: new Date().toISOString(),
  icons: icons.length,
  swaps: swapPairs.length,
  categories: categories.length,
  collections: collections.length,
  illustrations: illustrations.length,
  files: {
    'index.html': { raw: htmlBuffer.length, brotli: brotli(htmlBuffer), gzip: gzip(htmlBuffer) },
    'icons.data.js': { raw: dataBuffer.length, brotli: brotli(dataBuffer), gzip: gzip(dataBuffer) },
    'app.js': { raw: appBuffer.length, brotli: brotli(appBuffer), gzip: gzip(appBuffer) }
  },
  shellBudget: SHELL_BUDGET,
  buildMs: Number((performance.now() - t0).toFixed(1))
};
writeFileSync(join(__dirname, 'build-report.json'), JSON.stringify(report, null, 2) + '\n');

console.log('Nexa gallery built');
console.log(`  icons            ${icons.length} (${categories.length} categories, ${collections.length} fallback collections, ${swapPairs.length} swaps, ${illustrations.length} illustrations)`);
console.log(`  render           inline paths from icons.data.js (no sprite DOM, no <use>) — sprite.svg validated: ${spriteOk ? 'ok' : 'mismatch'}`);
console.log(`  shell            gallery/index.html  ${shellBytes} B (${kb(shellBytes)}) · brotli ${brotli(htmlBuffer)} B · gzip ${gzip(htmlBuffer)} B · budget ${SHELL_BUDGET / 1024} KB`);
console.log(`  data             gallery/icons.data.js ${dataBytes} B (${kb(dataBytes)}) · brotli ${brotli(dataBuffer)} B`);
console.log(`  app              gallery/app.js ${appBytes} B (${kb(appBytes)}) · brotli ${brotli(appBuffer)} B (includes animations.css + component CSS + drawer markup)`);
console.log(`  shell checks     no cards/<use>, 0 external URLs, all mount points present`);
console.log(`  build            ${report.buildMs} ms, ${iterations} byte-count iteration(s)`);
