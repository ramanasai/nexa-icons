#!/usr/bin/env node
/**
 * Generate the Lucide-compatible entry point: @sairamanapb/icons/lucide.
 * Same 1,034 icons, but stroke 2 by default, `lucide lucide-<kebab>` classes and
 * Lucide-style `color`/`width`/`height` props. Intended as a drop-in import swap.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const data = JSON.parse(fs.readFileSync(path.join(ROOT, "data/icons.json"), "utf8"));
const lines = [
  "/**",
  " * Lucide-compatible entry point (generated — do not edit).",
  " *",
  " *   import { Bell } from \"@sairamanapb/icons/lucide\";",
  " *",
  " * stroke-width defaults to 2 and the class is `lucide lucide-bell`, so a",
  " * Lucide codebase can switch by changing the import path.",
  " */",
  "import { forwardRef } from \"react\";",
  "import type { NexaIconComponent, NexaIconProps } from \"./types.js\";",
  "",
];
lines.push("/** Alias for a Lucide-compatible icon component. */");
lines.push("export type LucideIcon = NexaIconComponent;");
lines.push("");
for (const icon of data.icons) {
  lines.push(`import { ${icon.name} as ${icon.name}Base } from "./icons/${icon.kebab}.js";`);
}
lines.push("");
for (const icon of data.icons) {
  lines.push(`export const ${icon.name}: LucideIcon = forwardRef<SVGSVGElement, NexaIconProps>(function ${icon.name}(props, ref) {`);
  lines.push("  const { className, ...rest } = props;");
  lines.push(`  return <${icon.name}Base ref={ref} {...rest} className={["lucide", "lucide-${icon.kebab}", className].filter(Boolean).join(" ")} />;`);
  lines.push("});");
  lines.push(`${icon.name}.displayName = "${icon.name}";`);
  lines.push("");
}
fs.writeFileSync(path.join(ROOT, "src", "lucide.tsx"), lines.join("\n"));
console.log(`wrote src/lucide.tsx (${data.icons.length} Lucide-compatible icons)`);
