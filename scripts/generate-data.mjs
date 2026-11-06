#!/usr/bin/env node
/**
 * T1 — generate the canonical Nexa icon dataset.
 *
 * Inputs
 *   raw/requested-names.txt   the 168 names the app asked for
 *   raw/vendor.json           vendored Lucide 1.70 snapshot (auto-created on
 *                             first run from the lucide packages in /tmp)
 *
 * Outputs
 *   data/icons.json           single source of truth (names, nodes, keywords, animation)
 *   icons/<kebab>.svg         one optimized standalone SVG per icon
 *   sprite.svg                all icons as <symbol id="nexa-<kebab>">
 *   data/report.json          dedupe + size + preset report
 *
 * Rules baked in (see nexa-icon-styles-SKILL.md):
 *   - 24x24 grid, 2px padding, stroke-only, no fills, no hard-coded colors
 *   - stroke=currentColor so every theme works
 *   - round caps/joins, stroke-width 2 at the SVG level (components scale it)
 */
import fs from "node:fs";
import path from "node:path";
import { SOURCE } from "./source-config.mjs";

const ROOT = process.cwd();
const dirs = ["raw", "data", "icons"];
for (const d of dirs) fs.mkdirSync(path.join(ROOT, d), { recursive: true });

// ---------------------------------------------------------------------------
// 1. Resolve every requested name to a canonical glyph.
//    Requested names use legacy Lucide public names (e.g. AlertTriangle);
//    the export map tells us which canonical icon file each name points at.
// ---------------------------------------------------------------------------
const requestedPath = fs.existsSync(path.join(ROOT, "raw/catalog-names.txt"))
  ? path.join(ROOT, "raw/catalog-names.txt")
  : path.join(ROOT, "raw/requested-names.txt");
const requested = fs
  .readFileSync(requestedPath, "utf8")
  .split("\n")
  .map((s) => s.trim())
  .filter(Boolean);

const vendorPath = path.join(ROOT, "raw/vendor.json");
let vendor = fs.existsSync(vendorPath) ? JSON.parse(fs.readFileSync(vendorPath, "utf8")) : null;
const vendorCoversCatalog =
  vendor && vendor.legacyNames && requested.every((name) => vendor.names[name]);
if (!vendorCoversCatalog) {
  const iconNodes = JSON.parse(fs.readFileSync(SOURCE.iconNodes, "utf8"));
  const tags = JSON.parse(fs.readFileSync(SOURCE.tags, "utf8"));
  const exportSource = fs.readFileSync(SOURCE.reactExports, "utf8");

  const aliasMap = {};
  for (const m of exportSource.matchAll(
    /export\s*\{([^}]+)\}\s*from\s*'\.\/icons\/([^']+)\.mjs'/g
  )) {
    const kebab = m[2];
    for (const part of m[1].split(",")) {
      const mm = part.trim().match(/(?:default\s+as\s+)?([A-Za-z0-9_$]+)$/);
      if (mm) aliasMap[mm[1]] = kebab;
    }
  }

  // Vendor only what we need: the requested name -> kebab -> nodes chain.
  const compactKey = (value) => value.toLowerCase().replace(/[\s_-]+/g, "");
  const kebabByCompact = new Map();
  for (const kebab of Object.keys(iconNodes)) kebabByCompact.set(compactKey(kebab), kebab);
  const resolveKebab = (name) => {
    const direct = aliasMap[name] ?? aliasMap[`${name}Icon`];
    if (direct && iconNodes[direct]) return direct;
    const compact = compactKey(name);
    return kebabByCompact.get(compact) ?? kebabByCompact.get(compact + "icon");
  };
  const nodes = {};
  const resolvedNames = {};
  const legacyNames = {};
  const unresolved = [];
  for (const name of requested) {
    const kebab = resolveKebab(name);
    if (!kebab || !iconNodes[kebab]) {
      unresolved.push(name);
      continue;
    }
    resolvedNames[name] = kebab;
    nodes[kebab] = iconNodes[kebab];
    nodes[kebab + "__tags"] = tags[kebab] ?? [];
  }
  // The pre-expansion 168 names keep working as aliases on their canonical glyphs.
  const legacyPath = path.join(ROOT, "raw/requested-names.txt");
  if (fs.existsSync(legacyPath)) {
    for (const name of fs.readFileSync(legacyPath, "utf8").split("\n").map((x) => x.trim()).filter(Boolean)) {
      const kebab = resolveKebab(name);
      if (kebab) legacyNames[name] = kebab;
    }
  }
  if (unresolved.length) {
    console.error("Unresolved requested names (dropped from catalog):", unresolved.slice(0, 20), "… total", unresolved.length);
  }
  vendor = {
    source: SOURCE.name,
    version: SOURCE.version,
    license: SOURCE.license,
    url: SOURCE.url,
    featherNote: SOURCE.featherNote,
    names: resolvedNames,
    legacyNames,
    nodes,
  };
  fs.writeFileSync(vendorPath, JSON.stringify(vendor));
  console.log(`vendored ${Object.keys(resolvedNames).length} names -> raw/vendor.json`);
}

// ---------------------------------------------------------------------------
// 2. Dedupe by exact glyph. Keep the first requested name, record the rest
//    as importable aliases (XIcon === X, TriangleAlert === AlertTriangle).
// ---------------------------------------------------------------------------
const byGlyph = new Map();
const icons = [];
const duplicates = [];

for (const name of requested) {
  const kebab = vendor.names[name];
  const nodes = vendor.nodes[kebab];
  if (!kebab || !nodes) continue;
  const key = JSON.stringify(nodes);
  if (byGlyph.has(key)) {
    duplicates.push({ name, duplicateOf: byGlyph.get(key) });
    continue;
  }
  byGlyph.set(key, name);
  icons.push({ name, kebab, aliases: [name] });
}
for (const dup of duplicates) {
  const owner = icons.find((i) => i.name === dup.duplicateOf);
  owner.aliases.push(dup.name);
}
// Preserve the original public names (XIcon, TriangleAlert, Loader2, …) as aliases.
const byKebab = new Map(icons.map((icon) => [icon.kebab, icon]));
for (const [legacyName, kebab] of Object.entries(vendor.legacyNames ?? {})) {
  const icon = byKebab.get(kebab);
  if (!icon) continue;
  if (icon.name === legacyName || icon.aliases.includes(legacyName)) continue;
  icon.aliases.push(legacyName);
}

// ---------------------------------------------------------------------------
// 3. Semantic animation presets. The icon's meaning decides how it moves;
//    presets are CSS-only (transform/opacity) so nothing runs on the JS thread.
// ---------------------------------------------------------------------------
const NUDGE = {
  down: ["Archive", "ArrowDown", "ChevronDown", "Download", "Inbox", "TrendingDown"],
  "down-right": ["ArrowDownRight"],
  left: ["ArrowLeft", "ChevronLeft", "LogOut", "PanelLeftClose", "Undo2"],
  right: ["ArrowRight", "ChevronRight", "ChevronsLeftRight", "PanelLeftOpen"],
  up: ["ArrowUp", "ChevronUp", "FileUp", "TrendingUp", "Upload"],
  "up-right": ["ArrowUpRight", "ExternalLink", "Send"],
};
const PRESET_GROUPS = {
  spin: ["CalendarSync", "History", "LifeBuoy", "Loader2", "Radar", "RefreshCw", "RotateCcw", "Settings", "Sun"],
  ring: ["Bell"],
  heartbeat: ["Heart"],
  shake: ["AlertTriangle", "Ban", "Fingerprint", "HeartOff", "Lock", "ShieldAlert", "Trash2", "Vibrate", "X", "XCircle"],
  wiggle: ["Bold", "Code", "Copy", "Filter", "Hand", "Heading2", "Italic", "Key", "KeyRound", "Languages", "List", "ListOrdered", "Paperclip", "Palette", "PenSquare", "Pencil", "PencilLine", "Quote", "SlidersHorizontal", "Strikethrough", "Underline", "Wand2", "Wrench"],
  flip: ["ArrowUpDown", "ChevronsUpDown", "MoveHorizontal", "Repeat"],
  bounce: ["Mail", "MailCheck", "MailPlus", "MapPin", "Pin"],
  float: ["MoonStar", "Plane", "Rocket", "UploadCloud"],
  tilt: ["Briefcase", "Camera", "Moon", "StickyNote"],
  pulse: ["Activity", "AlertCircle", "BarChart2", "BarChart3", "CalendarClock", "ChartLine", "Circle", "Clock", "Eye", "EyeOff", "FileClock", "FileSearch", "FileSpreadsheet", "FileText", "Flame", "Gauge", "Globe", "Info", "Minus", "Monitor", "MoreHorizontal", "MoreVertical", "Newspaper", "Power", "Radio", "Rss", "ScrollText", "Search", "Shield", "Smartphone", "Square", "Target", "Timer", "Video"],
  pop: ["AtSign", "Share2", "Award", "BadgeCheck", "BookUser", "Bookmark", "Building", "Building2", "Calendar", "CalendarDays", "Check", "CheckCircle", "CheckCircle2", "CheckSquare", "Crown", "DollarSign", "FolderGit2", "FolderOpen", "Gift", "GraduationCap", "Grid3x3", "Home", "ImageIcon", "ImagePlus", "Layers", "LayoutDashboard", "LayoutGrid", "Link2", "LinkIcon", "Magnet", "MessageSquare", "Percent", "Plug", "Plus", "PlusCircle", "ShieldCheck", "Sparkles", "Star", "Tag", "ThumbsUp", "Trophy", "User", "UserCheck", "UserMinus", "UserPlus", "Users", "Zap"],
};
const presetOf = {};
for (const [preset, names] of Object.entries(PRESET_GROUPS)) {
  for (const n of names) presetOf[n] = preset;
}
for (const [dir, names] of Object.entries(NUDGE)) {
  for (const n of names) presetOf[n] = `nudge-${dir}`;
}
// Icons added in the expanded catalog fall back to sensible semantic presets.
const CATEGORY_PRESET = {
  time: "pulse", weather: "float", health: "pulse", finance: "pop", food: "wiggle",
  commerce: "pop", development: "wiggle", editing: "wiggle", files: "pulse",
  data: "pulse", devices: "pulse", people: "pop", places: "bounce", travel: "float",
  education: "pop", security: "pulse", communication: "bounce", media: "pulse",
  status: "pop", navigation: "pulse", layout: "wiggle", design: "wiggle", actions: "pop",
};

const presetFor = (name, keywords, cats) => {
  const explicit = presetOf[name];
  if (explicit) return explicit;
  const n = name.toLowerCase();
  const words = (keywords || []).join(" ").toLowerCase();
  const has = (re) => re.test(n) || re.test(words);
  if (/(loader|refresh|rotate|sync|history|spinner|cycle)/.test(n)) return "spin";
  if (has(/bell/)) return "ring";
  if (has(/heart/)) return "heartbeat";
  if (has(/trash|ban\b|alert|warning|vibrate|fingerprint|block|prohibit/)) return "shake";
  if (/(arrow|chevron|upload|download|trending|undo|redo|corner-|move-|skip-)/.test(n)) {
    if (/left/.test(n)) return "nudge-left";
    if (/right/.test(n)) return "nudge-right";
    if (/down/.test(n)) return "nudge-down";
    return "nudge-up";
  }
  if (has(/sparkles|sparkle|star|award|trophy|crown|gift|badge|zap|check|plus|bookmark|thumb/)) return "pop";
  if (has(/rocket|plane|cloud|sun|moon|leaf|bird|feather/)) return "float";
  if (has(/bold|italic|underline|strikethrough|pencil|pen|edit|heading|text|list|sliders|settings|wrench|key/)) return "wiggle";
  if (has(/camera|briefcase|sticky|note|moon/)) return "tilt";
  if (has(/mail|send|inbox|archive|pin|map-pin/)) return "bounce";
  if (/(chart|graph|activity|pulse|gauge|signal|wifi|radio|rss|eye|target|timer|clock)/.test(n)) return "pulse";
  if (/(square|circle|minus|shield|minus)/.test(n)) return "pulse";
  if (cats && cats.length) {
    for (const category of cats) {
      if (CATEGORY_PRESET[category]) return CATEGORY_PRESET[category];
    }
  }
  return "pop";
};

// Only loaders loop forever by default; everything else animates on hover.
const TRIGGER = { Loader2: "always", LoaderCircle: "always" };

// Nexa concept map (section 7 of the style skill) so the app has one fixed answer.
const NEXA_MAP = {
  jobs: "Briefcase", searchJobs: "Search", recommendations: "Sparkles",
  saved: "Bookmark", applied: "Send", company: "Building2", location: "MapPin",
  remote: "Globe", salary: "DollarSign", experience: "GraduationCap",
  categories: "Layers", alerts: "Bell", email: "Mail", pro: "Crown",
  profile: "User", admin: "ShieldCheck", settings: "Settings",
  resume: "FileText", upload: "Upload", sync: "RefreshCw", api: "Plug",
  external: "ArrowUpRight", signOut: "LogOut",
};

// ---------------------------------------------------------------------------
// 4. Build the data model.
// ---------------------------------------------------------------------------
const attributeString = (attrs) =>
  Object.entries(attrs)
    .map(([k, v]) => `${k}="${String(v).replace(/"/g, "&quot;")}"`)
    .join(" ");

// Closed geometry fills cleanly; open strokes (check marks, brackets) do not.
const isFillSafe = (nodes) =>
  nodes.every(([tag, attrs]) => {
    if (tag === "circle" || tag === "ellipse" || tag === "rect" || tag === "polygon") return true;
    if (tag !== "path") return false;
    const d = attrs.d ?? "";
    const moves = (d.match(/[Mm]/g) || []).length;
    const closes = (d.match(/[Zz]/g) || []).length;
    return moves > 0 && moves === closes;
  });

const missingPresets = [];
const categoryIdsByName = new Map();
{
  const categoriesPathEarly = path.join(ROOT, "data/categories.json");
  if (fs.existsSync(categoriesPathEarly)) {
    const rawCategories = JSON.parse(fs.readFileSync(categoriesPathEarly, "utf8"));
    const canonicalOf = new Map();
    for (const icon of icons) {
      canonicalOf.set(icon.name, icon.name);
      for (const alias of icon.aliases) canonicalOf.set(alias, icon.name);
    }
    for (const category of rawCategories.categories ?? []) {
      for (const candidate of category.icons ?? []) {
        const canonical = canonicalOf.get(candidate);
        if (!canonical) continue;
        const list = categoryIdsByName.get(canonical) ?? [];
        if (!list.includes(category.id)) list.push(category.id);
        categoryIdsByName.set(canonical, list);
      }
    }
  }
}

const built = icons.map(({ name, kebab, aliases }) => {
  const nodes = vendor.nodes[kebab].map(([tag, attrs]) => [tag, { ...attrs }]);
  const inner = nodes.map(([tag, attrs]) => `<${tag} ${attributeString(attrs)}/>`).join("");
  const keywords = vendor.nodes[`${kebab}__tags`] ?? [];
  const cats = categoryIdsByName.get(name) ?? [];
  const preset = presetFor(name, keywords, cats);
  if (!presetOf[name]) missingPresets.push(name);
  return {
    name,
    kebab,
    aliases,
    keywords,
    anim: {
      preset: preset ?? "pop",
      trigger: TRIGGER[name] ?? "hover",
    },
    fillSafe: isFillSafe(nodes),
    categories: cats,
    nodes,
    inner,
  };
});
// ---------------------------------------------------------------------------
// Custom catalog icons (brand marks, identity documents, billing) authored in
// raw/custom-icons.json. They live outside the vendored Lucide snapshot, so
// they are merged here before categories/meta are computed.
// ---------------------------------------------------------------------------
const customIconsPath = path.join(ROOT, "raw/custom-icons.json");
const customIcons = fs.existsSync(customIconsPath)
  ? JSON.parse(fs.readFileSync(customIconsPath, "utf8"))
  : [];
const takenKebabs = new Set(built.map((icon) => icon.kebab));
const takenNames = new Set(built.flatMap((icon) => [icon.name, ...icon.aliases]));
for (const def of customIcons) {
  if (!def || !def.kebab || !def.name || takenKebabs.has(def.kebab) || takenNames.has(def.name)) continue;
  const nodes = (def.nodes ?? []).map(([tag, attrs]) => [tag, { ...attrs }]);
  const inner = nodes.map(([tag, attrs]) => `<${tag} ${attributeString(attrs)}/>`).join("");
  built.push({
    name: def.name,
    kebab: def.kebab,
    aliases: [def.name],
    keywords: [...new Set((def.keywords ?? []).map((k) => String(k).trim()).filter(Boolean))],
    anim: { preset: def.preset ?? "pop", trigger: def.trigger ?? "hover" },
    fillSafe: def.fillSafe ?? isFillSafe(nodes),
    categories: def.categories ?? [],
    nodes,
    inner,
  });
  takenKebabs.add(def.kebab);
  takenNames.add(def.name);
}
// Persist custom category membership so data/categories.json stays the source
// of truth for category APIs (and its total matches the dataset).
if (customIcons.length) {
  const categoriesPathCustom = path.join(ROOT, "data/categories.json");
  if (fs.existsSync(categoriesPathCustom)) {
    const rawCustomCats = JSON.parse(fs.readFileSync(categoriesPathCustom, "utf8"));
    for (const def of customIcons) {
      for (const categoryId of def.categories ?? []) {
        const category = (rawCustomCats.categories ?? []).find((item) => item.id === categoryId);
        if (!category) continue;
        if (!category.icons.includes(def.name)) category.icons.push(def.name);
        category.icons.sort();
      }
      rawCustomCats.iconCategories ??= {};
      rawCustomCats.iconCategories[def.name] = [...def.categories];
    }
    rawCustomCats.total = built.length;
    fs.writeFileSync(categoriesPathCustom, JSON.stringify(rawCustomCats, null, 2) + "\n");
  }
}

if (missingPresets.length) {
  console.warn("Icons without a semantic preset (defaulted to pop):", missingPresets.join(", "));
}

// Categories are authored in data/categories.json (catalog-dev) and mapped onto
// the deduped canonical display names here.
let categoryMeta = [];
const byDisplayName = new Map(built.map((icon) => [icon.name, icon]));
const aliasToName = new Map();
for (const icon of built) for (const alias of icon.aliases) aliasToName.set(alias, icon.name);
// Custom icons own their category membership (they are not listed in the
// catalog category lists); rebuild category membership from the dataset so a
// moved icon cannot linger in its old category.
for (const def of customIcons) {
  const icon = byDisplayName.get(def.name);
  if (icon) icon.categories = [...def.categories];
}
const customNames = new Set(customIcons.map((def) => def.name));
const categoriesPath = path.join(ROOT, "data/categories.json");
if (fs.existsSync(categoriesPath)) {
  const raw = JSON.parse(fs.readFileSync(categoriesPath, "utf8"));
  for (const category of raw.categories ?? []) {
    const names = [];
    for (const candidate of category.icons ?? []) {
      const canonical = byDisplayName.has(candidate) ? candidate : aliasToName.get(candidate);
      if (!canonical) continue;
      if (!names.includes(canonical)) names.push(canonical);
    }
    if (!names.length) continue;
    categoryMeta.push({ id: category.id, label: category.label, description: category.description ?? "", icons: names });
    for (const name of names) {
      if (customNames.has(name)) continue;
      const icon = byDisplayName.get(name);
      if (!icon) continue;
      icon.categories ??= [];
      if (!icon.categories.includes(category.id)) icon.categories.push(category.id);
    }
  }
}

// Rebuild each category from the final icon.categories (custom icons are not
// listed in the catalog category lists, and moved icons must not linger).
for (const category of categoryMeta) {
  category.icons = built
    .filter((icon) => (icon.categories ?? []).includes(category.id))
    .map((icon) => icon.name)
    .sort();
}

// Final source-of-truth sync: category totals + per-icon category map must
// mirror the dataset exactly (this also covers moved/renamed memberships).
{
  const finalCategoriesPath = path.join(ROOT, "data/categories.json");
  if (fs.existsSync(finalCategoriesPath)) {
    const finalRaw = JSON.parse(fs.readFileSync(finalCategoriesPath, "utf8"));
    finalRaw.total = built.length;
    for (const category of finalRaw.categories ?? []) {
      category.icons = built
        .filter((icon) => (icon.categories ?? []).includes(category.id))
        .map((icon) => icon.name)
        .sort();
    }
    finalRaw.iconCategories = Object.fromEntries(
      built.map((icon) => [icon.name, [...(icon.categories ?? [])].sort()])
    );
    const categorized = new Set(finalRaw.categories.flatMap((category) => category.icons ?? []));
    finalRaw.uncategorized = built.filter((icon) => !categorized.has(icon.name)).map((icon) => icon.name);
    fs.writeFileSync(finalCategoriesPath, JSON.stringify(finalRaw, null, 2) + "\n");
  }
}

const meta = {
  name: "Nexa Icons",
  categories: categoryMeta,
  version: "1.0.0",
  count: built.length,
  requested: built.length,
  duplicates: duplicates.length,
  grid: 24,
  strokeWidth: 2,
  padding: 2,
  license: "ISC + MIT (see LICENSE)",
  source: `${SOURCE.name} ${SOURCE.version} (${SOURCE.license})`,
  sourceUrl: SOURCE.url,
  featherNote: SOURCE.featherNote,
  sizes: { sm: [16, 2], md: [20, 1.75], lg: [24, 1.5], xl: [40, 1.5] },
  nexaMap: NEXA_MAP,
  generatedAt: new Date().toISOString(),
};

const dataset = { meta, icons: built };
fs.writeFileSync(path.join(ROOT, "data/icons.json"), JSON.stringify(dataset));

// ---------------------------------------------------------------------------
// 5. Standalone SVGs.
// ---------------------------------------------------------------------------
const SVG_HEAD =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
// Prune orphan SVGs from previous catalog runs so icons/ mirrors the dataset.
const expectedSvgNames = new Set(built.map((icon) => `${icon.kebab}.svg`));
for (const file of fs.readdirSync(path.join(ROOT, "icons"))) {
  if (file.endsWith(".svg") && !expectedSvgNames.has(file)) {
    fs.rmSync(path.join(ROOT, "icons", file), { force: true });
  }
}

let svgBytes = 0;
for (const icon of built) {
  const svg = `${SVG_HEAD}${icon.inner}</svg>\n`;
  svgBytes += Buffer.byteLength(svg);
  fs.writeFileSync(path.join(ROOT, "icons", `${icon.kebab}.svg`), svg);
}

// ---------------------------------------------------------------------------
// 6. Sprite. Presentation attributes live on <symbol> and inherit, so <use>
//    stays tiny and the whole set is one cached request.
// ---------------------------------------------------------------------------
const SYMBOL_ATTRS =
  'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const symbols = built
  .map((i) => `<symbol id="nexa-${i.kebab}" ${SYMBOL_ATTRS}>${i.inner}</symbol>`)
  .join("");
const sprite = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:none">${symbols}</svg>\n`;
fs.writeFileSync(path.join(ROOT, "sprite.svg"), sprite);

// ---------------------------------------------------------------------------
// 7. Report.
// ---------------------------------------------------------------------------
const report = {
  requested: built.length,
  unique: built.length,
  duplicates,
  animation: Object.fromEntries(
    [...new Set(built.map((i) => i.anim.preset))].sort().map((p) => [
      p,
      built.filter((i) => i.anim.preset === p).map((i) => i.name),
    ])
  ),
  sizes: {
    datasetBytes: Buffer.byteLength(JSON.stringify(dataset)),
    svgTotalBytes: svgBytes,
    svgAvgBytes: Math.round(svgBytes / built.length),
    spriteBytes: Buffer.byteLength(sprite),
  },
};
fs.writeFileSync(path.join(ROOT, "data/report.json"), JSON.stringify(report, null, 2));

console.log(
  `OK ${built.length} unique icons (${requested.length} requested, ${duplicates.length} exact duplicates merged)`
);
console.log(`   dataset ${(report.sizes.datasetBytes / 1024).toFixed(1)} KB`);
console.log(`   svg avg ${report.sizes.svgAvgBytes} B, total ${(svgBytes / 1024).toFixed(1)} KB`);
console.log(`   sprite ${(report.sizes.spriteBytes / 1024).toFixed(1)} KB`);
console.log(`   presets: ${Object.keys(report.animation).length}`);
if (duplicates.length) console.log("   merged:", duplicates.map((d) => `${d.name}=${d.duplicateOf}`).join(", "));
