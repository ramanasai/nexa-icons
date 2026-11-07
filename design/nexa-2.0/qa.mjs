/* Structural + visual-prep QA for the Nexa 2.0 prototype. */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "../..");
const OUT = path.join(ROOT, "design/nexa-2.0");
const catalog = JSON.parse(fs.readFileSync(path.join(OUT, "catalog.json"), "utf8"));
const failures = [];
const warnings = [];
const seenGeometry = new Map();

const shapes = new Set(["path", "circle", "ellipse", "rect", "line", "polyline", "polygon"]);
const allowedAttrs = new Set(["x", "y", "width", "height", "rx", "ry", "cx", "cy", "r", "x1", "y1", "x2", "y2", "d", "fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "fill-rule", "fill-opacity", "points"]);

function numbersIn(value) {
  return (String(value).match(/-?\d*\.?\d+/g) || []).map(Number);
}
function boundsOf(value) {
  const nums = numbersIn(value);
  if (!nums.length) return null;
  const xs = [], ys = [];
  for (let i = 0; i < nums.length; i += 2) { if (Number.isFinite(nums[i])) xs.push(nums[i]); if (Number.isFinite(nums[i + 1])) ys.push(nums[i + 1]); }
  return xs.length && ys.length ? { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) } : null;
}

if (catalog.icons.length !== 20) failures.push(`expected 20 prototype icons, found ${catalog.icons.length}`);
for (const icon of catalog.icons) {
  for (const variant of ["outline", "solid", "duotone"]) {
    const svg = icon.variants[variant];
    if (!svg) { failures.push(`${icon.name}: missing ${variant}`); continue; }
    if (!/viewBox="0 0 24 24"/.test(svg)) failures.push(`${icon.name}/${variant}: not a 24 grid`);
    const tags = [...svg.matchAll(/<(path|circle|ellipse|rect|line|polyline|polygon)\b([^>]*)\/>/g)];
    if (!tags.length) failures.push(`${icon.name}/${variant}: no geometry`);
    if (tags.length > 12) failures.push(`${icon.name}/${variant}: ${tags.length} nodes > 12`);
    if (variant !== "solid" && !/stroke-width="2"/.test(svg)) warnings.push(`${icon.name}/${variant}: non-default stroke in master SVG`);
    let pathChars = 0;
    const local = [];
    for (const [, tag, raw] of tags) {
      if (!shapes.has(tag)) failures.push(`${icon.name}/${variant}: unsupported ${tag}`);
      for (const attr of [...raw.matchAll(/([a-zA-Z-]+)="/g)].map((m) => m[1])) if (!allowedAttrs.has(attr)) failures.push(`${icon.name}/${variant}: unexpected attr ${attr}`);
      const d = raw.match(/ d="([^"]*)"/);
      if (d) {
        pathChars += d[1].length;
        if (d[1].length > 700) failures.push(`${icon.name}/${variant}: path data ${d[1].length} chars > 700`);
        if (!/^[Mm]/.test(d[1].trim())) failures.push(`${icon.name}/${variant}: path does not start with M/m`);
        const commands = (d[1].match(/[a-zA-Z]/g) || []).length;
        if (commands > 40) warnings.push(`${icon.name}/${variant}: ${commands} path commands`);
        local.push(d[1].replace(/[\d.]+/g, "#").replace(/\s+/g, ""));
      }
      const b = boundsOf(raw.replace(/ d="[^"]*"/, ""));
      if (b && (b.minX < 0.5 || b.maxX > 23.5 || b.minY < 0.5 || b.maxY > 23.5)) warnings.push(`${icon.name}/${variant}: shape bbox ${JSON.stringify(b)}`);
    }
    for (const geometry of local) {
      const key = icon.kebab + ":" + geometry;
      if (seenGeometry.has(key)) warnings.push(`${icon.name}/${variant}: duplicate geometry`);
      seenGeometry.set(key, true);
    }
  }
}
const report = {
  generatedAt: new Date().toISOString(),
  icons: catalog.icons.length,
  variants: 3,
  svgFiles: 60,
  failures,
  warnings,
  status: failures.length ? "fail" : "pass",
};
fs.writeFileSync(path.join(OUT, "qa-report.json"), JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ status: report.status, failures: failures.length, warnings: warnings.length, report: "design/nexa-2.0/qa-report.json" }, null, 2));
if (failures.length) { for (const failure of failures) console.error("FAIL", failure); process.exit(1); }
