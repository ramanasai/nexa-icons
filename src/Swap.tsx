/**
 * Swap / morph animation.
 *
 * Two glyphs are stacked in the same box; toggling `data-nexa-active` runs a
 * CSS-only transition between them (mirror, flip, rotate, slide or fade).
 * Nothing is animated in JavaScript — a click just flips one attribute.
 *
 * <IconSwap from={ArrowLeft} to={ArrowRight} active={open} />
 * <IconToggle from={Plus} to={Minus} label="Collapse section" />
 */
import { forwardRef, useState } from "react";
import type {
  ButtonHTMLAttributes,
  CSSProperties,
  ForwardRefExoticComponent,
  HTMLAttributes,
  MouseEvent,
  RefAttributes,
} from "react";
import type { NexaIconComponent, NexaSize } from "./types.js";
import { SWAP, type SwapMode } from "./swaps.js";

const compact = (value: string): string => value.toLowerCase().replace(/[\s_-]+/g, "");

/** Resolve "auto" mode from the icon's own name (displayName set by createIcon). */
const modeFor = (displayName: string | undefined): SwapMode => {
  if (!displayName) return "fade";
  return SWAP[compact(displayName)]?.mode ?? "fade";
};

export interface IconSwapProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color" | "children"> {
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

export const IconSwap = forwardRef<HTMLSpanElement, IconSwapProps>(function IconSwap(props, ref) {
  const {
    from: From,
    to: To,
    active,
    defaultActive = false,
    mode = "auto",
    duration = 260,
    size = 24,
    strokeWidth,
    label,
    className,
    style,
    ...rest
  } = props;

  const [uncontrolled] = useState(defaultActive);
  const isActive = active ?? uncontrolled;
  const resolvedMode = mode === "auto" ? modeFor(From.displayName) : mode;

  return (
    <span
      {...rest}
      ref={ref}
      className={className ? `nexa-swap ${className}` : "nexa-swap"}
      data-mode={resolvedMode}
      data-nexa-active={isActive ? "true" : "false"}
      style={{ "--nexa-swap-dur": `${duration}ms`, ...style } as CSSProperties}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <span className="nexa-swap__a" aria-hidden="true">
        <From size={size} strokeWidth={strokeWidth} />
      </span>
      <span className="nexa-swap__b" aria-hidden="true">
        <To size={size} strokeWidth={strokeWidth} />
      </span>
    </span>
  );
});
IconSwap.displayName = "NexaIconSwap";

export interface IconToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "color"> {
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
export const IconToggle = forwardRef<HTMLButtonElement, IconToggleProps>(
  function IconToggle(props, ref) {
    const {
      from: From,
      to: To,
      label,
      size = 24,
      strokeWidth,
      mode = "auto",
      duration = 260,
      pressed,
      defaultPressed = false,
      onPressedChange,
      onClick,
      className,
      ...rest
    } = props;

    const [uncontrolled, setUncontrolled] = useState(defaultPressed);
    const isPressed = pressed ?? uncontrolled;

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      const next = !isPressed;
      if (pressed === undefined) setUncontrolled(next);
      onPressedChange?.(next);
      onClick?.(event);
    };

    return (
      <button
        {...rest}
        ref={ref}
        type={rest.type ?? "button"}
        className={className ? `nexa-icon-toggle ${className}` : "nexa-icon-toggle"}
        aria-pressed={isPressed}
        aria-label={label}
        onClick={handleClick}
      >
        <IconSwap
          from={From}
          to={To}
          active={isPressed}
          mode={mode}
          duration={duration}
          size={size}
          strokeWidth={strokeWidth}
          aria-hidden="true"
        />
      </button>
    );
  }
);
IconToggle.displayName = "NexaIconToggle";

/** Convenience types for consumers. */
export type NexaIconSwap = ForwardRefExoticComponent<
  IconSwapProps & RefAttributes<HTMLSpanElement>
>;
export type NexaIconToggle = ForwardRefExoticComponent<
  IconToggleProps & RefAttributes<HTMLButtonElement>
>;
