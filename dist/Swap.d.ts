import type { ButtonHTMLAttributes, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react";
import type { NexaIconComponent, NexaSize } from "./types.js";
import { type SwapMode } from "./swaps.js";
export interface IconSwapProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color" | "children"> {
    /** Icon shown at rest. */
    from: NexaIconComponent;
    /** Icon shown when active. */
    to: NexaIconComponent;
    /** Controlled state. */
    active?: boolean;
    /** Uncontrolled initial state. */
    defaultActive?: boolean;
    /** Transition style. "auto" picks the semantic mode for the pair. */
    mode?: SwapMode | "auto";
    /** Transition duration in ms (default 260). */
    duration?: number;
    /** Accessible name for the whole swap group. */
    label?: string;
    /** Named step (sm/md/lg/xl) or pixels, forwarded to both icons. */
    size?: NexaSize | number;
    /** Stroke override, forwarded to both icons. */
    strokeWidth?: number;
}
export declare const IconSwap: ForwardRefExoticComponent<IconSwapProps & RefAttributes<HTMLSpanElement>>;
export interface IconToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "color"> {
    from: NexaIconComponent;
    to: NexaIconComponent;
    /** Required: icon-only buttons need an accessible name. */
    label: string;
    size?: NexaSize | number;
    strokeWidth?: number;
    mode?: SwapMode | "auto";
    duration?: number;
    /** Controlled pressed state. */
    pressed?: boolean;
    defaultPressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
}
/**
 * Accessible icon-only toggle: a real <button> with aria-pressed that swaps
 * its glyph and animates the change (e.g. left arrow -> right arrow).
 */
export declare const IconToggle: ForwardRefExoticComponent<IconToggleProps & RefAttributes<HTMLButtonElement>>;
/** Convenience types for consumers. */
export type NexaIconSwap = ForwardRefExoticComponent<IconSwapProps & RefAttributes<HTMLSpanElement>>;
export type NexaIconToggle = ForwardRefExoticComponent<IconToggleProps & RefAttributes<HTMLButtonElement>>;
