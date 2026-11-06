/* Type definitions for @sairamanapb/icons/js — hand-written, matches js/index.mjs. */

export type NexaPreset =
  | "spin"
  | "pulse"
  | "ring"
  | "shake"
  | "wiggle"
  | "flip"
  | "bounce"
  | "float"
  | "tilt"
  | "heartbeat"
  | "pop"
  | "fade-in"
  | "nudge-up"
  | "nudge-down"
  | "nudge-left"
  | "nudge-right"
  | "nudge-up-right"
  | "nudge-down-right";

export type NexaTrigger = "hover" | "focus" | "press" | "mount" | "always" | "manual" | "inview" | "parent";

export type SwapMode = "mirror" | "flip" | "rotate" | "slide" | "fade";

export type NexaSize = "sm" | "md" | "lg" | "xl";

export type NexaShape = "square" | "rounded" | "circle" | "pill" | "squircle" | "hexagon" | "diamond";
export type NexaFill = "outline" | "duotone" | "solid";
export type Nexa3D = "tilt" | "flip" | "extrude" | "orbit";
export type NexaGlassAnim = "sheen" | "pulse" | "float";
export type NexaGlassTrigger = "always" | "hover";
export type NexaGradientAnim = "hue";

export type NexaGlass =
  | "frost"
  | "ice"
  | "clear"
  | "steel"
  | "neon"
  | "jelly"
  | "aurora";
export type NexaGradient = "aurora" | "ice" | "sunset" | "emerald" | "ocean" | "candy" | "gold" | "mono";

export interface IconData {
  readonly kebab: string;
  readonly name: string;
  readonly aliases: readonly string[];
  readonly preset: NexaPreset;
  readonly trigger: NexaTrigger;
  readonly inner: string;
  readonly fillSafe?: boolean;
}

export interface SvgOptions {
  /** Named step ("sm"|"md"|"lg"|"xl") or pixels. Default 24. */
  size?: NexaSize | number;
  /** Size-less (CSS-sized) icons default to 2; explicit size maps 16=>2, 20=>1.75, 24+=>1.5. */
  strokeWidth?: number;
  /** Keep the rendered stroke at strokeWidth * 24 / size. */
  absoluteStrokeWidth?: boolean;
  /** Explicit SVG width/height (Lucide compatibility). */
  width?: number | string;
  height?: number | string;
  /** Force aria-hidden on/off. */
  ariaHidden?: boolean;
  /** Preset name, or `true` for the icon's semantic default. CSS-only. */
  animate?: NexaPreset | boolean;
  /** When the animation runs. Defaults to the icon's semantic trigger. */
  trigger?: NexaTrigger;
  /** For trigger="manual": play while true. */
  active?: boolean;
  /** Accessible name. Without it the SVG is aria-hidden (decorative). */
  label?: string;
  /** Adds a <title> (also makes the icon labelled). */
  title?: string;
  /** Extra class names, merged with .nexa-icon. */
  class?: string;
  /** Alias of `class`. */
  className?: string;
  /** Inline color (optional). Prefer currentColor + a themed parent. */
  color?: string;
  /** Optional container shape behind the glyph. */
  shape?: NexaShape | "none";
  /** Fill treatment. */
  variant?: NexaFill;
  /** Controlled fill state: false outline, true solid, "soft" duotone. */
  filled?: boolean | "soft";
  /** Animate fill <-> empty (CSS only). */
  animateFill?: boolean;
  /** CSS-3D presentation preset. */
  threeD?: Nexa3D | false;
  /** Frosted-glass surface around the glyph (import effects.css). */
  glass?: boolean | NexaGlass;
  /** Gradient stroke preset; also tints the glass surface when combined. */
  gradient?: NexaGradient | false;
  /** Animate the glass surface: sheen | pulse | float. */
  glassAnim?: NexaGlassAnim;
  /** When glassAnim runs: always (default) or only on hover/focus. */
  glassTrigger?: NexaGlassTrigger;
  /** Thick glass body behind the stroke (jelly look). */
  glassBody?: boolean;
  /** Animate a gradient stroke (hue rotation). */
  gradientAnim?: NexaGradientAnim;
  /** Any extra attribute is passed through to the <svg>. */
  [attribute: string]: unknown;
}

export interface SwapOptions {
  size?: NexaSize | number;
  strokeWidth?: number;
  /** Controlled state: false shows `from`, true shows `to`. Default false. */
  active?: boolean;
  /** Transition style. "auto" (default) uses the pair's semantic mode. */
  mode?: SwapMode | "auto";
  /** Transition duration in ms. Default 260. */
  duration?: number;
  /** Accessible name for the group. */
  label?: string;
  class?: string;
  className?: string;
}

export const meta: {
  readonly name: string;
  readonly version: string;
  readonly count: number;
  readonly grid: number;
  readonly source: string;
  readonly license: string;
  readonly sizes: Readonly<Record<NexaSize, readonly [number, number]>>;
  readonly nexaMap: Readonly<Record<string, string>>;
};

/** Raw icon records, keyed by kebab id. Search `keywords` live in data/icons.json. */
export const ICONS: Readonly<Record<string, Omit<IconData, "kebab">>>;

export interface NexaCategory {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly icons: readonly string[];
}

export const CATEGORIES: Readonly<Record<string, NexaCategory>>;

export const PRESETS: readonly NexaPreset[];
export const SWAP_PAIRS: readonly (readonly [string, string, SwapMode])[];

/** Compact display name -> semantic counterpart + transition mode. */
export const SWAP: Readonly<Record<string, { readonly to: string; readonly mode: SwapMode }>>;

export const SIZE_PX: Readonly<Record<NexaSize, number>>;

/** Normalized name/kebab/alias -> kebab id (built once on load; exposed for tooling). */
export const LOOKUP: ReadonlyMap<string, string>;

/** Resolve a name (PascalCase, kebab, alias) to a frozen IconData, or undefined. */
export function getIcon(name: string): IconData | undefined;
export function hasIcon(name: string): boolean;
/** Sorted display names (PascalCase), e.g. ["Activity", ..., "Zap"]. */
export function names(): string[];
/** Sorted kebab ids. */
export function ids(): string[];
/** All category records, or one by id. */
export function categories(): NexaCategory[];
export function categories(id: string): NexaCategory | undefined;
/** Render a standalone inline SVG string. Throws RangeError for unknown names. */
export function svg(name: string, options?: SvgOptions): string;
/** Render one <symbol id="nexa-<kebab>">. */
export interface SymbolOptions {
  /** Sprite glyph stroke width. Default 2 (sprite convention; inline SVG uses size-aware 1.5). */
  strokeWidth?: number;
}
export function symbol(name: string, options?: SymbolOptions): string;
/** The full sprite (650 symbols) as a single inline <svg>; cached after first call. */
export function sprite(options?: SymbolOptions): string;
/** Nexa stroke rule. */
export function strokeForSize(sizePx: number): number;
/**
 * Render a two-layer swap/morph widget. Toggle `data-nexa-active` on the
 * returned root (or re-render with active:true) to animate to the other glyph.
 */
export function swapSvg(from: string, to: string, options?: SwapOptions): string;
/** Semantic counterpart of an icon for click toggle, e.g. pairFor("ArrowLeft") === "ArrowRight". */
export function pairFor(name: string): string | undefined;
/** Animations mode for an icon's pair: mirror | flip | rotate | slide | fade. */
export function swapModeFor(name: string): SwapMode;
