import type { NexaIconData } from "./types.js";
export declare const REGISTRY: Record<string, NexaIconData>;
/** Normalized name -> kebab id. Accepts PascalCase, kebab-case, aliases (XIcon, TriangleAlert). */
export declare const LOOKUP: Record<string, string>;
export declare const ICON_NAMES: readonly string[];
export declare function resolveKebab(input: string): string | undefined;
