/**
 * createIcon — the single factory every icon module uses.
 *
 * Design goals:
 *  - zero runtime dependencies (react only) and zero per-render allocation
 *    beyond the element itself;
 *  - props carry no colors: the SVG paints with currentColor, so the icon is
 *    correct in every theme and every context out of the box;
 *  - animation is opt-in and purely CSS: we only emit data attributes.
 */
import { createElement, forwardRef, useId } from "react";
import type { CSSProperties, ReactElement, ReactNode } from "react";
import type { NexaIconComponent, NexaIconData, NexaIconProps, NexaPreset } from "./types.js";

// createElement is typed for JSX-literal props; the factory builds props at runtime
// from the static node table, so we widen just this one internal call site.
const h = createElement as unknown as (
  type: string,
  props: Record<string, unknown> | null,
  ...children: ReactNode[]
) => ReactElement;

/** Named size steps. 16/20/24/40 are the Nexa scale. */
export const SIZE_PX = { sm: 16, md: 20, lg: 24, xl: 40 } as const;

/** All CSS animation presets understood by animations.css. */
export const PRESETS = [
  "spin",
  "pulse",
  "ring",
  "shake",
  "wiggle",
  "flip",
  "bounce",
  "float",
  "tilt",
  "heartbeat",
  "pop",
  "fade-in",
  "nudge-up",
  "nudge-down",
  "nudge-left",
  "nudge-right",
  "nudge-up-right",
  "nudge-down-right",
] as const satisfies readonly NexaPreset[];

/**
 * Nexa stroke rule: stroke gets optically lighter as the icon grows.
 * 16px => 2, 20px => 1.75, 24px and up => 1.5.
 */
export function strokeForSize(px: number): number {
  if (px <= 16) return 2;
  if (px <= 20) return 1.75;
  return 1.5;
}

/** Alias kept for tree-shakeable named imports. */
export const STROKE_FOR_PX = strokeForSize;

const resolvePreset = (
  animate: NexaIconProps["animate"],
  fallback: NexaPreset
): NexaPreset | undefined =>
  animate === true ? fallback : typeof animate === "string" ? animate : undefined;

/**
 * Turn a static icon description into a forwardRef component.
 * Called once at module scope; the annotation in generated files lets bundlers
 * drop the whole component when it is not imported.
 */
export function createIcon(data: NexaIconData): NexaIconComponent {
  const NexaIcon = forwardRef<SVGSVGElement, NexaIconProps>(function NexaIcon(props, ref) {
    const {
      size = 24,
      strokeWidth,
      animate,
      trigger,
      active,
      label,
      title,
      className,
      shape,
      variant,
      filled,
      animateFill,
      threeD,
      glass,
      gradient,
      glassAnim,
      glassTrigger,
      glassBody,
      gradientAnim,
      ...rest
    } = props;

    const px = typeof size === "number" ? size : SIZE_PX[size] ?? 24;
    const stroke = strokeWidth ?? strokeForSize(px);
    const preset = resolvePreset(animate, data.preset);
    const labelled = label != null || title != null;
    const resolvedFill: "outline" | "duotone" | "solid" =
      filled === true ? "solid" : filled === "soft" ? "duotone" : variant ?? "outline";
    const fillSafe = data.fillSafe !== false;
    const fillState = resolvedFill === "outline" ? "false" : resolvedFill === "duotone" ? "soft" : "true";
    const hasShape = shape != null && shape !== "none";
    const glassConfig = glass && typeof glass === "object" ? glass : undefined;
    const glassPreset =
      glass === true
        ? "frost"
        : typeof glass === "string"
          ? glass
          : glassConfig
            ? glassConfig.preset ?? "frost"
            : undefined;
    const gradientConfig = gradient && typeof gradient === "object" ? gradient : undefined;
    const gradientPreset =
      typeof gradient === "string" ? gradient : gradientConfig ? "custom" : undefined;
    const reactId = useId();
    const gradientId = `nexa-g${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
    const hasGlass = Boolean(glassPreset);
    const hasGradient = Boolean(gradientPreset);
    const gradientAngle = ((gradientConfig?.angle ?? 135) * Math.PI) / 180;
    const gx = Math.cos(gradientAngle) / 2;
    const gy = Math.sin(gradientAngle) / 2;
    const glassStyle = glassConfig
      ? ({
          ...(glassConfig.blur != null ? { "--nexa-glass-blur": `${glassConfig.blur}px` } : {}),
          ...(glassConfig.tintA ? { "--nexa-glass-a": glassConfig.tintA } : {}),
          ...(glassConfig.tintB ? { "--nexa-glass-b": glassConfig.tintB } : {}),
          ...(glassConfig.edge ? { "--nexa-glass-edge": glassConfig.edge } : {}),
          ...(glassConfig.radius != null ? { "--nexa-glass-radius": `${glassConfig.radius}px` } : {}),
          ...(gradientConfig
            ? { "--nexa-grad-a": gradientConfig.from, "--nexa-grad-b": gradientConfig.to }
            : {}),
        } as CSSProperties)
      : undefined;
    const box = Math.round(px * 1.7);
    const frameWidth = box;
    const frameHeight = shape === "pill" ? Math.round(px * 1.25) : box;

    const svgProps: Record<string, unknown> = {
      ...rest,
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: px,
      height: px,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: hasGradient ? `url(#${gradientId})` : "currentColor",
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: ["nexa-icon", hasGradient ? `nexa-grad--${gradientPreset}` : "", className]
        .filter(Boolean)
        .join(" "),
      role: labelled && !hasShape && !threeD && !hasGlass ? "img" : undefined,
      "aria-hidden": labelled && !hasShape && !threeD && !hasGlass ? undefined : true,
      "aria-label": labelled && !hasShape && !threeD && !hasGlass ? label : undefined,
      focusable: "false",
      "data-nexa-icon": data.kebab,
      style: hasGradient ? { stroke: `url(#${gradientId})` } : undefined,
      "data-fill-state": resolvedFill === "outline" ? undefined : fillSafe ? fillState : "soft",
      "data-fill-anim": animateFill ? "true" : undefined,
      "data-nexa-gradient-anim": hasGradient && gradientAnim ? gradientAnim : undefined,
      "data-nexa-anim": preset,
      "data-nexa-trigger": preset ? trigger ?? data.trigger : undefined,
      "data-nexa-active": active ? "true" : undefined,
    };

    const gradientDefs = hasGradient
      ? h(
          "defs",
          { key: "__grad" },
          h(
            "linearGradient",
            gradientConfig
              ? {
                  id: gradientId,
                  x1: Number((0.5 - gx).toFixed(4)),
                  y1: Number((0.5 - gy).toFixed(4)),
                  x2: Number((0.5 + gx).toFixed(4)),
                  y2: Number((0.5 + gy).toFixed(4)),
                }
              : { id: gradientId, x1: "0", y1: "0", x2: "1", y2: "1" },
            h("stop", {
              offset: "0%",
              style: { stopColor: gradientConfig ? gradientConfig.from : "var(--nexa-grad-a)" },
            }),
            h("stop", {
              offset: "100%",
              style: { stopColor: gradientConfig ? gradientConfig.to : "var(--nexa-grad-b)" },
            })
          )
        )
      : null;

    const strokePaint = hasGradient ? `url(#${gradientId})` : "currentColor";
    const bodyLayer =
      glassBody && hasGlass
        ? h(
            "g",
            {
              key: "__body",
              className: "nexa-icon-body",
              fill: "none",
              stroke: strokePaint,
              strokeWidth: Math.max(5, stroke * 3.2),
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            ...data.nodes.map(([tag, attrs], i) => h(tag, { ...attrs, key: i }))
          )
        : null;

    const svgElement = h(
      "svg",
      svgProps,
      gradientDefs,
      bodyLayer,
      title != null ? h("title", { key: "__title" }, title) : null,
      ...data.nodes.map(([tag, attrs], i) => h(tag, { ...attrs, key: i }))
    );

    if (hasShape || threeD || hasGlass) {
      return h(
        "span",
        {
          className: [
            "nexa-icon-frame",
            hasShape ? `nexa-shape nexa-shape--${shape}` : "",
            threeD ? "nexa-3d" : "",
            hasGlass ? `nexa-glass nexa-glass--${glassPreset}` : "",
            hasGradient ? `nexa-grad--${gradientPreset}` : "",
          ]
            .filter(Boolean)
            .join(" "),
          "data-nexa-3d": threeD || undefined,
          "data-nexa-gradient": hasGradient ? gradientPreset : undefined,
          "data-nexa-glass-anim": hasGlass && glassAnim ? glassAnim : undefined,
          "data-nexa-glass-trigger": hasGlass && glassAnim ? glassTrigger ?? "always" : undefined,
          style:
            hasShape || hasGlass
              ? { width: `${frameWidth}px`, height: `${frameHeight}px`, ...glassStyle }
              : glassStyle,
          role: labelled ? "img" : undefined,
          "aria-label": labelled ? label ?? title : undefined,
          "aria-hidden": labelled ? undefined : "true",
        },
        svgElement
      );
    }
    return svgElement;
  });

  NexaIcon.displayName = data.name;
  return NexaIcon;
}
