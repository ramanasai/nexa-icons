export type SwapMode = "mirror" | "flip" | "rotate" | "slide" | "fade";
/** Directed swap edges as [from, to, mode]; implicit reverses are added unless that source already has a pair. */
export declare const SWAP_PAIRS: readonly (readonly [string, string, SwapMode])[];
/** Compact display name -> counterpart + transition mode. */
export declare const SWAP: Record<string, {
    readonly to: string;
    readonly mode: SwapMode;
}>;
/** Semantic counterpart for a click toggle, e.g. swapTarget("ArrowLeft") => "ArrowRight". */
export declare function swapTarget(name: string): string | undefined;
/** Transition mode for an icon's semantic pair (falls back to "fade"). */
export declare function swapModeFor(name: string): SwapMode;
