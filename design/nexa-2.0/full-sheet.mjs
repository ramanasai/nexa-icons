/* Full-catalog / category contact sheets for Nexa 2.0 background review. */
import fs from "node:fs";
import path from "node:path";
const ROOT = path.resolve(import.meta.dirname, "../..");
const OUT = path.join(ROOT, "design/nexa-2.0");
const data = JSON.parse(fs.readFileSync(path.join(ROOT, "data/icons.json"), "utf8"));
const cat = JSON.parse(fs.readFileSync(path.join(ROOT, "data/categories.json"), "utf8"));
const byCategory = new Map((cat.categories || []).map((c) => [c.id, []]));
for (const icon of data.icons) for (const id of icon.categories || []) if (byCategory.has(id)) byCategory.get(id).push(icon);
const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const svg = (icon, size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${size <= 16 ? 2 : size <= 20 ? 1.75 : 1.5}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon.inner}</svg>`;
const cell = (icon, size = 48) => `<figure class="cell"><div class="art">${svg(icon, size)}</div><figcaption>${esc(icon.name)}</figcaption></figure>`;
const page = (title, body) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><style>
:root{color-scheme:light dark;--bg:#fafafa;--surface:#fff;--text:#18181b;--muted:#71717a;--line:#e4e4e7}@media(prefers-color-scheme:dark){:root{--bg:#0c0c0e;--surface:#161618;--text:#f4f4f5;--muted:#a1a1aa;--line:#27272a}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:14px/1.5 ui-sans-serif,system-ui,sans-serif}header{padding:28px 32px;border-bottom:1px solid var(--line)}h1{margin:0;font-size:22px}h2{margin:28px 32px 10px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}p{margin:6px 0 0;color:var(--muted)}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:8px;padding:0 32px 24px}.cell{margin:0;text-align:center;border:1px solid var(--line);border-radius:10px;background:var(--surface);padding:8px 4px}figcaption{font-size:9px;color:var(--muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.art{display:grid;place-items:center;min-height:52px}code{font-size:12px}</style></head><body>${body}</body></html>`;
const summary = `<header><h1>Nexa 2.0 — current catalog baseline</h1><p>${data.icons.length} icons · ${(cat.categories || []).length} categories · outline baseline. The 2.0 variants exist only for the 20-icon prototype so far. Generated for visual audit; not a release artifact.</p></header>`;
let sections = "";
for (const category of cat.categories || []) {
  const icons = byCategory.get(category.id) || [];
  sections += `<h2>${esc(category.label || category.id)} · ${icons.length}</h2><div class="grid">${icons.map((i) => cell(i)).join("")}</div>`;
}
fs.writeFileSync(path.join(OUT, "catalog-categories.html"), page("Nexa 2.0 — catalog baseline", summary + sections));
fs.writeFileSync(path.join(OUT, "catalog-all.html"), page("Nexa 2.0 — all icons", summary + `<h2>All ${data.icons.length} icons</h2><div class="grid">${data.icons.map((i) => cell(i, 24)).join("")}</div>`));
const missingVariants = data.icons.filter((i) => !i.variants?.solid || !i.variants?.duotone).length;
fs.writeFileSync(path.join(OUT, "catalog-gap.json"), JSON.stringify({ total: data.icons.length, categories: (cat.categories || []).length, designedSolid: 20, designedDuotone: 20, missingDesignedVariants: missingVariants, fillSafe: data.icons.filter((i) => i.fillSafe).length, fillUnsafe: data.icons.filter((i) => i.fillUnsafe).length }, null, 2) + "\n");
console.log(`catalog sheets: ${data.icons.length} icons, ${(cat.categories || []).length} categories`);
