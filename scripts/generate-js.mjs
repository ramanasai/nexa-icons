#!/usr/bin/env node
/**
 * T3 — generate the zero-dependency vanilla JS API from data/icons.json.
 *
 * Emits js/index.mjs (ESM) and js/index.cjs (CJS) with the full icon data
 * embedded. One file, no fetch, no dependencies: an SVG string is available
 * synchronously on first call.
 *
 * Trade-off, on purpose: the string API needs the dataset (~15 KB brotli for
 * all 650 icons) because icons are requested by runtime name. For per-icon
 * tree-shaking use the React entry or import the .svg files directly.
 *
 * Also embeds the semantic swap map (data/swaps.json) and the swap renderer.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const data = JSON.parse(fs.readFileSync(path.join(ROOT, "data/icons.json"), "utf8"));
const swapSource = JSON.parse(fs.readFileSync(path.join(ROOT, "data/swaps.json"), "utf8"));
const outDir = path.join(ROOT, "js");
fs.mkdirSync(outDir, { recursive: true });

const compact = (s) => s.toLowerCase().replace(/[\s_-]+/g, "");
const byName = new Map(data.icons.map((icon) => [icon.name, icon]));
const MODES = new Set(["mirror", "flip", "rotate", "slide", "fade"]);

// Validate + expand the directed swap map. Reverse entries are added unless an
// explicit reverse already exists (first declaration wins).
const SWAP = {};
const SWAP_PAIRS = [];
const addSwap = (fromName, toName, mode, onlyIfMissing = false) => {
  const from = byName.get(fromName);
  const to = byName.get(toName);
  if (!from) throw new Error(`swaps.json: unknown icon "${fromName}"`);
  if (!to) throw new Error(`swaps.json: unknown icon "${toName}"`);
  if (!MODES.has(mode)) throw new Error(`swaps.json: bad mode "${mode}"`);
  const keys = [from.name.toLowerCase(), compact(from.name), from.kebab, compact(from.kebab)];
  const entry = { to: to.name, mode };
  let added = 0;
  for (const key of keys) {
    if (onlyIfMissing && key in SWAP) continue;
    SWAP[key] = entry;
    added += 1;
  }
  if (added > 0) SWAP_PAIRS.push([from.name, to.name, mode]);
};
for (const [a, b, mode] of swapSource.pairs) {
  addSwap(a, b, mode);
  addSwap(b, a, mode, true);
}
// Aliases share the canonical icon's pair (XIcon behaves exactly like X).
for (const icon of data.icons) {
  const entry = SWAP[compact(icon.name)];
  if (!entry) continue;
  for (const alias of icon.aliases) SWAP[compact(alias)] = entry;
}

const CATEGORIES = {};
for (const category of data.meta.categories ?? []) {
  CATEGORIES[category.id] = {
    id: category.id,
    label: category.label,
    description: category.description,
    icons: category.icons,
  };
}

const serializeAttrs = (attrs) =>
  Object.entries(attrs)
    .map(([key, value]) => `${key}="${String(value).replace(/"/g, '&quot;')}"`)
    .join(' ');
const isClosedNode = (node) => {
  if (node[0] === 'circle' || node[0] === 'ellipse' || node[0] === 'rect' || node[0] === 'polygon') return true;
  if (node[0] !== 'path') return false;
  const d = (node[1] && node[1].d) || '';
  const subpaths = d.match(/[Mm][^Mm]*/g) || [];
  return subpaths.length > 0 && subpaths.every((subpath) => /[Zz]/.test(subpath));
};

const ICONS = {};
for (const icon of data.icons) {
  const inner = icon.nodes
    .map(([tag, attrs]) => `<${tag} ${serializeAttrs({ ...attrs, 'data-closed': icon.fillUnsafe === true ? 'false' : icon.fillSafe === true || isClosedNode([tag, attrs]) ? 'true' : 'false' })}/>`)
    .join('');
  // `keywords` stay in data/icons.json (search metadata) but are not shipped
  // in the runtime payload: nothing in the JS API reads them at runtime.
  ICONS[icon.kebab] = {
    name: icon.name,
    aliases: icon.aliases,
    preset: icon.anim.preset,
    trigger: icon.anim.trigger,
    fillSafe: icon.fillSafe !== false,
    fillUnsafe: icon.fillUnsafe === true,
    inner,
  };
}

const BODY = `
const META = ${JSON.stringify({
  name: data.meta.name,
  version: data.meta.version,
  count: data.meta.count,
  grid: data.meta.grid,
  source: data.meta.source,
  license: data.meta.license,
  sizes: data.meta.sizes,
  nexaMap: data.meta.nexaMap,
})};

const ICONS = ${JSON.stringify(ICONS)};

const CATEGORIES = ${JSON.stringify(CATEGORIES)};

const SWAP = ${JSON.stringify(SWAP)};

const SWAP_PAIRS = ${JSON.stringify(SWAP_PAIRS)};

const SIZE_PX = { sm: 16, md: 20, lg: 24, xl: 40 };
const PRESETS = ${JSON.stringify([...new Set([...data.icons.map((i) => i.anim.preset), "fade-in"])].sort())};

/** Nexa stroke rule: 16px => 2, 20px => 1.75, 24px+ => 1.5. */
function strokeForSize(px) {
  if (px <= 16) return 2;
  if (px <= 20) return 1.75;
  return 1.5;
}

const compact = (s) => String(s).toLowerCase().replace(/[\\s_-]+/g, "");

/** name/kebab/alias -> kebab id. Built once (650 icons, <0.5ms). */
const LOOKUP = new Map();
for (const kebab of Object.keys(ICONS)) {
  const icon = ICONS[kebab];
  for (const key of [
    kebab,
    compact(kebab),
    icon.name.toLowerCase(),
    compact(icon.name),
    ...icon.aliases.flatMap((a) => [a.toLowerCase(), compact(a)]),
  ]) {
    LOOKUP.set(key, kebab);
  }
}

const cache = new Map();
let gradientSeq = 0;

/** Look up an icon (case/alias/kebab aware). Returns a frozen record or undefined. */
function getIcon(name) {
  if (typeof name !== "string") return undefined;
  const kebab = LOOKUP.get(name.trim().toLowerCase()) ?? LOOKUP.get(compact(name));
  if (!kebab) return undefined;
  let icon = cache.get(kebab);
  if (!icon) {
    icon = Object.freeze({ kebab, ...ICONS[kebab] });
    cache.set(kebab, icon);
  }
  return icon;
}

function hasIcon(name) {
  return getIcon(name) !== undefined;
}

/** All icon names in display (PascalCase) form, sorted. */
function names() {
  return Object.values(ICONS).map((i) => i.name).sort();
}

/** All kebab ids, sorted. */
function ids() {
  return Object.keys(ICONS).sort();
}

/** Attributes owned by the renderer; never duplicated through the rest escape hatch. */
const RESERVED = new Set([
  'xmlns', 'width', 'height', 'viewBox', 'fill', 'stroke', 'stroke-width',
  'stroke-linecap', 'stroke-linejoin', 'class', 'role', 'aria-hidden',
  'aria-label', 'focusable',
]);

const ESCAPE = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ESCAPE[c]);

/**
 * Render an icon as a standalone inline SVG string.
 * @param {string} name icon name, kebab id or alias
 * @param {object} [options] size, strokeWidth, animate, trigger, active, label, title, class, color
 * @returns {string} SVG markup
 */
function svg(name, options = {}) {
  const icon = getIcon(name);
  if (!icon) throw new RangeError('[nexa-icons] Unknown icon: "' + name + '"');
  const {
    size,
    strokeWidth,
    absoluteStrokeWidth,
    ariaHidden,
    "aria-label": ariaLabelOption,
    animate,
    trigger,
    active,
    label,
    title,
    class: className,
    className: classNameAlt,
    color,
    shape,
    variant,
    filled,
    animateFill,
    threeD,
    glass,
    gradient,
    glassAnim,
    glassTrigger,
    glassBody,
    gradientAnim,
    ...rest
  } = options;

  const explicitSize = size !== undefined;
  const px = typeof size === 'string' ? SIZE_PX[size] || 24 : Number(size) || 24;
  const baseStroke = strokeWidth == null ? (explicitSize ? strokeForSize(px) : 2) : Number(strokeWidth);
  const stroke = absoluteStrokeWidth ? (strokeWidth == null ? 2 : Number(strokeWidth)) * (24 / px) : baseStroke;
  const glassConfig = glass && typeof glass === 'object' ? glass : null;
  const glassPreset =
    glass === true ? 'frost' : typeof glass === 'string' ? glass : glassConfig ? glassConfig.preset || 'frost' : null;
  const gradientConfig = gradient && typeof gradient === 'object' ? gradient : null;
  const gradientPreset = typeof gradient === 'string' ? gradient : gradientConfig ? 'custom' : null;
  const gradientId = gradientPreset ? 'nexa-g' + (++gradientSeq) : null;
  const gradientAngle = ((gradientConfig && gradientConfig.angle != null ? gradientConfig.angle : 135) * Math.PI) / 180;
  const gx = Math.cos(gradientAngle) / 2;
  const gy = Math.sin(gradientAngle) / 2;
  const glassStyle = [];
  if (glassConfig) {
    if (glassConfig.blur != null) glassStyle.push('--nexa-glass-blur:' + Number(glassConfig.blur) + 'px');
    if (glassConfig.tintA) glassStyle.push('--nexa-glass-a:' + esc(glassConfig.tintA));
    if (glassConfig.tintB) glassStyle.push('--nexa-glass-b:' + esc(glassConfig.tintB));
    if (glassConfig.edge) glassStyle.push('--nexa-glass-edge:' + esc(glassConfig.edge));
    if (glassConfig.radius != null) glassStyle.push('--nexa-glass-radius:' + Number(glassConfig.radius) + 'px');
  }
  if (gradientConfig) {
    glassStyle.push('--nexa-grad-a:' + esc(gradientConfig.from));
    glassStyle.push('--nexa-grad-b:' + esc(gradientConfig.to));
  }
  const fill =
    filled === true ? 'solid' : filled === 'soft' ? 'duotone' : variant || 'outline';
  const fillExplicit = variant !== undefined || filled !== undefined;
  const preset = animate === true ? icon.preset : typeof animate === 'string' ? animate : null;
  const when = preset ? trigger || icon.trigger : null;
  const accessibleLabel = label != null ? label : title != null ? title : ariaLabelOption;
  const labelled = accessibleLabel != null;
  const hasShape = shape != null && shape !== 'none';
  const wrapped = hasShape || Boolean(threeD) || Boolean(glassPreset);

  const attrs = [];
  attrs.push('xmlns="http://www.w3.org/2000/svg"');
  attrs.push('width="' + (options.width != null ? esc(options.width) : px) + '"');
  attrs.push('height="' + (options.height != null ? esc(options.height) : px) + '"');
  attrs.push('viewBox="0 0 24 24"');
  attrs.push('fill="none"');
  attrs.push('stroke="' + (gradientId ? 'url(#' + gradientId + ')' : 'currentColor') + '"');
  attrs.push('stroke-width="' + stroke + '"');
  attrs.push('stroke-linecap="round"');
  attrs.push('stroke-linejoin="round"');
  attrs.push('class="' + esc(
    ['nexa-icon', gradientPreset ? 'nexa-grad--' + gradientPreset : '', className || classNameAlt]
      .filter(Boolean)
      .join(' ')
  ) + '"');
  {
    var styleBits = [];
    if (strokeWidth == null && !absoluteStrokeWidth) styleBits.push('stroke-width:var(--nexa-stroke,' + baseStroke + ')');
    if (color != null) styleBits.push('color:' + esc(color));
    if (gradientId) styleBits.push('stroke:url(#' + gradientId + ')');
    if (styleBits.length) attrs.push('style="' + styleBits.join(';') + '"');
  }
  if (labelled && !wrapped) {
    attrs.push('role="img"');
    attrs.push('aria-label="' + esc(accessibleLabel) + '"');
    if (ariaHidden === false) attrs.push('aria-hidden="false"');
  } else if (ariaHidden !== false) {
    attrs.push('aria-hidden="true"');
  }
  attrs.push('focusable="false"');
  attrs.push('data-nexa-icon="' + icon.kebab + '"');
  attrs.push('data-nexa-fill-safe="' + (icon.fillSafe === false ? 'false' : 'true') + '"');
  if (gradientPreset && gradientAnim) attrs.push('data-nexa-gradient-anim="' + esc(gradientAnim) + '"');
  if (preset) {
    attrs.push('data-nexa-anim="' + esc(preset) + '"');
    attrs.push('data-nexa-trigger="' + esc(when) + '"');
    if (active) attrs.push('data-nexa-active="true"');
  }
  for (const [k, v] of Object.entries(rest)) {
    if (v == null || k === 'children' || RESERVED.has(k)) continue;
    attrs.push(esc(k) + '="' + esc(v) + '"');
  }

  const titleMarkup = title != null ? '<title>' + esc(title) + '</title>' : '';
  if (fillExplicit) {
    attrs.push('data-fill-state="' + (fill === 'outline' ? 'false' : fill === 'solid' ? (icon.fillSafe === false ? 'soft' : 'true') : 'soft') + '"');
  }
  if (fillExplicit && fill !== 'outline' && animateFill) attrs.push('data-fill-anim="true"');
  const gradientStops = gradientConfig
    ? '<stop offset="0%" style="stop-color:' + esc(gradientConfig.from) + '"/>' +
      '<stop offset="100%" style="stop-color:' + esc(gradientConfig.to) + '"/>'
    : '<stop offset="0%" style="stop-color:var(--nexa-grad-a)"/>' +
      '<stop offset="100%" style="stop-color:var(--nexa-grad-b)"/>';
  const gradientCoords = gradientConfig
    ? 'x1="' + Number((0.5 - gx).toFixed(4)) + '" y1="' + Number((0.5 - gy).toFixed(4)) + '" x2="' + Number((0.5 + gx).toFixed(4)) + '" y2="' + Number((0.5 + gy).toFixed(4)) + '"'
    : 'x1="0" y1="0" x2="1" y2="1"';
  const gradientDefs = gradientId
    ? '<defs><linearGradient id="' + gradientId + '" ' + gradientCoords + '>' + gradientStops + '</linearGradient></defs>'
    : '';
  const bodyMarkup = glassBody && glassPreset
    ? '<g class="nexa-icon-body" fill="none" stroke="' + (gradientId ? 'url(#' + gradientId + ')' : 'currentColor') +
      '" stroke-width="' + Math.max(5, stroke * 3.2) + '" stroke-linecap="round" stroke-linejoin="round">' + icon.inner + '</g>'
    : '';
  const svgMarkup = '<svg ' + attrs.join(' ') + '>' + gradientDefs + bodyMarkup + titleMarkup + icon.inner + '</svg>';

  if (!wrapped) return svgMarkup;
  const box = Math.round(px * 1.7);
  const frameHeight = shape === 'pill' ? Math.round(px * 1.25) : box;
  const frameClass = [
    'nexa-icon-frame',
    hasShape ? 'nexa-shape nexa-shape--' + shape : '',
    threeD ? 'nexa-3d' : '',
    glassPreset ? 'nexa-glass nexa-glass--' + glassPreset : '',
    gradientPreset ? 'nexa-grad--' + gradientPreset : '',
  ]
    .filter(Boolean)
    .join(' ');
  const frameAttrs = ['class="' + esc(frameClass) + '"'];
  if (threeD) frameAttrs.push('data-nexa-3d="' + esc(threeD) + '"');
  if (gradientPreset) frameAttrs.push('data-nexa-gradient="' + esc(gradientPreset) + '"');
  if (glassPreset && glassAnim) {
    frameAttrs.push('data-nexa-glass-anim="' + esc(glassAnim) + '"');
    frameAttrs.push('data-nexa-glass-trigger="' + esc(glassTrigger || 'always') + '"');
  }
  const frameStyle = [];
  if (hasShape || glassPreset) {
    frameStyle.push('width:' + (box / px).toFixed(2) + 'em', 'height:' + (frameHeight / px).toFixed(2) + 'em');
    frameStyle.push('font-size:' + (explicitSize ? px + 'px' : 'var(--nexa-icon-size, 1em)'));
  }
  for (var si = 0; si < glassStyle.length; si++) frameStyle.push(glassStyle[si]);
  if (frameStyle.length) frameAttrs.push('style="' + frameStyle.join(';') + '"');
  if (labelled) {
    frameAttrs.push('role="img" aria-label="' + esc(accessibleLabel) + '"');
    if (ariaHidden === false) frameAttrs.push('aria-hidden="false"');
  } else if (ariaHidden !== false) {
    frameAttrs.push('aria-hidden="true"');
  }
  return '<span ' + frameAttrs.join(' ') + '>' + svgMarkup + '</span>';
}

/** Render one <symbol id="nexa-<kebab>"> (for embedding in an existing sprite). */
function symbol(name, options = {}) {
  const icon = getIcon(name);
  if (!icon) throw new RangeError('[nexa-icons] Unknown icon: "' + name + '"');
  const stroke = options.strokeWidth == null ? 2 : Number(options.strokeWidth);
  return (
    '<symbol id="nexa-' + icon.kebab + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="' + stroke + '" stroke-linecap="round" stroke-linejoin="round">' + icon.inner + '</symbol>'
  );
}

let spriteCache = null;

/**
 * The complete sprite. Inline it once in <body> (or SSR output), then use
 * <svg class="nexa-icon"><use href="#nexa-bell"/></svg> anywhere — zero requests.
 */
function sprite(options = {}) {
  const stroke = options.strokeWidth == null ? null : Number(options.strokeWidth);
  if (spriteCache == null || stroke != null) {
    const markup =
      '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:none">' +
      Object.keys(ICONS)
        .map((kebab) => symbol(kebab, stroke == null ? undefined : { strokeWidth: stroke }))
        .join('') +
      '</svg>';
    if (stroke == null) spriteCache = markup;
    return markup;
  }
  return spriteCache;
}

/** Category manifest, or one category's records. */
function categories(id) {
  return id == null ? Object.values(CATEGORIES) : CATEGORIES[id];
}

/** Semantic counterpart for a click toggle, e.g. pairFor("ArrowLeft") === "ArrowRight". */
function pairFor(name) {
  const entry = SWAP[compact(name)];
  return entry ? entry.to : undefined;
}

/** Transition mode for an icon's semantic pair. */
function swapModeFor(name) {
  const entry = SWAP[compact(name)];
  return entry ? entry.mode : 'fade';
}

/**
 * Two-layer swap/morph widget. Update data-nexa-active on the root to animate.
 * @param {string} from glyph shown at rest
 * @param {string} to glyph shown when active
 * @param {object} [options] size, strokeWidth, active, mode, duration, label, class
 * @returns {string} markup with class nexa-swap
 */
function swapSvg(from, to, options = {}) {
  if (!hasIcon(from)) throw new RangeError('[nexa-icons] Unknown icon: "' + from + '"');
  if (!hasIcon(to)) throw new RangeError('[nexa-icons] Unknown icon: "' + to + '"');
  const {
    size = 24,
    strokeWidth,
    active = false,
    mode = 'auto',
    duration = 260,
    label,
    class: className,
    className: classNameAlt,
  } = options;
  const resolved = mode === 'auto' ? swapModeFor(from) : mode;
  const extra = className || classNameAlt;
  const cls = 'nexa-swap' + (extra ? ' ' + extra : '');
  const a = svg(from, { size, strokeWidth });
  const b = svg(to, { size, strokeWidth });
  const labelled = label != null;
  return (
    '<span class="' + esc(cls) + '" data-mode="' + esc(resolved) + '" data-nexa-active="' + (active ? 'true' : 'false') + '" ' +
    'style="--nexa-swap-dur:' + Number(duration) + 'ms"' + (labelled ? ' role="img" aria-label="' + esc(label) + '"' : ' aria-hidden="true"') + '>' +
    '<span class="nexa-swap__a" aria-hidden="true">' + a + '</span>' +
    '<span class="nexa-swap__b" aria-hidden="true">' + b + '</span>' +
    '</span>'
  );
}
`;

const ESM_EXPORTS = `
export {
  META as meta,
  ICONS,
  SWAP,
  SWAP_PAIRS,
  PRESETS,
  SIZE_PX,
  LOOKUP,
  getIcon,
  hasIcon,
  names,
  ids,
  CATEGORIES,
  categories,
  svg,
  symbol,
  sprite,
  strokeForSize,
  pairFor,
  swapModeFor,
  swapSvg,
};
`;

const CJS_EXPORTS = `
module.exports = {
  meta: META,
  ICONS,
  SWAP,
  SWAP_PAIRS,
  PRESETS,
  SIZE_PX,
  LOOKUP,
  getIcon,
  hasIcon,
  names,
  ids,
  CATEGORIES,
  categories,
  svg,
  symbol,
  sprite,
  strokeForSize,
  pairFor,
  swapModeFor,
  swapSvg,
};
`;

const banner = `/* Generated by scripts/generate-js.mjs from data/icons.json + data/swaps.json — do not edit.
 * Nexa Icons — zero-dependency, currentColor-only icon rendering. */\n`;

fs.writeFileSync(path.join(outDir, "index.mjs"), banner + BODY + ESM_EXPORTS);
fs.writeFileSync(path.join(outDir, "index.cjs"), banner + BODY + CJS_EXPORTS);

const bytes = (f) => fs.statSync(path.join(outDir, f)).size;
console.log(
  `js/index.mjs ${(bytes("index.mjs") / 1024).toFixed(1)} KB, js/index.cjs ${(bytes("index.cjs") / 1024).toFixed(1)} KB, swap pairs ${SWAP_PAIRS.length}`
);
