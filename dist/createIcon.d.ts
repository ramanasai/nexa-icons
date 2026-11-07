import type { NexaIconComponent, NexaIconData } from "./types.js";
/** Named size steps. 16/20/24/40 are the Nexa scale. */
export declare const SIZE_PX: {
    readonly sm: 16;
    readonly md: 20;
    readonly lg: 24;
    readonly xl: 40;
};
/** All CSS animation presets understood by animations.css. */
export declare const PRESETS: readonly ["spin", "pulse", "ring", "shake", "wiggle", "flip", "bounce", "float", "tilt", "heartbeat", "pop", "fade-in", "nudge-up", "nudge-down", "nudge-left", "nudge-right", "nudge-up-right", "nudge-down-right", "draw", "spring", "success", "error", "progress"];
/**
 * Nexa stroke rule: stroke gets optically lighter as the icon grows.
 * 16px => 2, 20px => 1.75, 24px and up => 1.5.
 */
export declare function strokeForSize(px: number): number;
/** Alias kept for tree-shakeable named imports. */
export declare const STROKE_FOR_PX: typeof strokeForSize;
/**
 * Turn a static icon description into a forwardRef component.
 * Called once at module scope; the annotation in generated files lets bundlers
 * drop the whole component when it is not imported.
 */
export declare function createIcon(data: NexaIconData): NexaIconComponent;
