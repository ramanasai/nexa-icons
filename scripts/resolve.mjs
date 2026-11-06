import fs from "node:fs";
const REACT = "/tmp/lucide-src/react/package/dist/esm/lucide-react.mjs";
const NODES = "/tmp/lucide-src/package/icon-nodes.json";
const TAGS = "/tmp/lucide-src/package/tags.json";

const src = fs.readFileSync(REACT, "utf8");
const nameToKebab = new Map();
for (const m of src.matchAll(/export\s*\{([^}]+)\}\s*from\s*'\.\/icons\/([^']+)\.mjs'/g)) {
  const kebab = m[2];
  for (const part of m[1].split(",")) {
    const mm = part.trim().match(/(?:default\s+as\s+)?([A-Za-z0-9_$]+)$/);
    if (mm) nameToKebab.set(mm[1], kebab);
  }
}
const nodes = JSON.parse(fs.readFileSync(NODES, "utf8"));
const tags = JSON.parse(fs.readFileSync(TAGS, "utf8"));
const requested = fs.readFileSync("raw/requested-names.txt", "utf8").split("\n").map(s => s.trim()).filter(Boolean);

const byGlyph = new Map();
const resolved = [];
const unresolved = [];
for (const name of requested) {
  const kebab = nameToKebab.get(name) ?? nameToKebab.get(`${name}Icon`);
  if (!kebab || !nodes[kebab]) { unresolved.push(name); continue; }
  const glyph = JSON.stringify(nodes[kebab]);
  resolved.push({ name, kebab, alias: name !== kebab && !["Image"].includes(name), glyph, keywords: tags[kebab] ?? [] });
  if (!byGlyph.has(glyph)) byGlyph.set(glyph, []);
  byGlyph.get(glyph).push(name);
}
console.log("requested:", requested.length, "resolved:", resolved.length, "unresolved:", unresolved.length);
if (unresolved.length) console.log("UNRESOLVED:", unresolved.join(", "));
console.log("\nALIASED (requested name != canonical kebab):");
for (const r of resolved) if (r.name !== r.kebab) console.log(` ${r.name.padEnd(18)} -> ${r.kebab}`);
console.log("\nEXACT GLYPH DUPLICATES:");
for (const [g, names] of byGlyph) if (names.length > 1) console.log(" ", names.join(" == "));
fs.writeFileSync("raw/resolved.json", JSON.stringify({ requested, resolved, unresolved }, null, 1));
