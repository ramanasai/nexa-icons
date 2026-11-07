import { createElement, forwardRef, useId } from "react";
const h = createElement;
const SIZE_PX = { sm: 16, md: 20, lg: 24, xl: 40 };
const PRESETS = [
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
  "draw",
  "spring",
  "success",
  "error",
  "progress"
];
function strokeForSize(px) {
  if (px <= 16) return 2;
  if (px <= 20) return 1.75;
  return 1.5;
}
const STROKE_FOR_PX = strokeForSize;
function isClosedNode([tag, attrs]) {
  if (tag === "circle" || tag === "ellipse" || tag === "rect" || tag === "polygon") return true;
  if (tag !== "path") return false;
  const d = attrs.d ?? "";
  const subpaths = d.match(/[Mm][^Mm]*/g) ?? [];
  return subpaths.length > 0 && subpaths.every((subpath) => /[Zz]/.test(subpath));
}
const resolvePreset = (animate, fallback) => animate === true ? fallback : typeof animate === "string" ? animate : void 0;
function createIcon(data) {
  const NexaIcon = forwardRef(function NexaIcon2(props, ref) {
    const {
      size,
      strokeWidth,
      absoluteStrokeWidth,
      weight,
      edges,
      fillOpacity,
      color,
      width,
      height,
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
      ...restProps
    } = props;
    const {
      "aria-label": ariaLabelProp,
      "aria-labelledby": ariaLabelledByProp,
      "aria-hidden": ariaHiddenProp,
      ...rest
    } = restProps;
    const explicitSize = size !== void 0;
    const px = typeof size === "number" ? size : size ? SIZE_PX[size] : 24;
    const opticalBase = explicitSize ? strokeForSize(px) : 2;
    const weightFactor = weight === "light" ? 0.8 : weight === "bold" ? 1.35 : 1;
    const round3 = (value) => Math.round(value * 1e3) / 1e3;
    const baseStroke = round3(strokeWidth ?? opticalBase * weightFactor);
    const stroke = round3(absoluteStrokeWidth ? (strokeWidth ?? opticalBase) * (24 / px) : baseStroke);
    const preset = resolvePreset(animate, data.preset);
    const accessibleLabel = label ?? title ?? ariaLabelProp;
    const labelled = accessibleLabel != null || ariaLabelledByProp != null;
    const resolvedFill = filled === true ? "solid" : filled === "soft" ? "duotone" : variant ?? "outline";
    const fillExplicit = variant !== void 0 || filled !== void 0;
    const fillSafe = data.fillSafe !== false;
    const fillState = resolvedFill === "outline" ? "false" : resolvedFill === "duotone" ? "soft" : "true";
    const hasShape = shape != null && shape !== "none";
    const glassConfig = glass && typeof glass === "object" ? glass : void 0;
    const glassPreset = glass === true ? "frost" : typeof glass === "string" ? glass : glassConfig ? glassConfig.preset ?? "frost" : void 0;
    const gradientConfig = gradient && typeof gradient === "object" ? gradient : void 0;
    const gradientPreset = typeof gradient === "string" ? gradient : gradientConfig ? "custom" : void 0;
    const reactId = useId();
    const gradientId = `nexa-g${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
    const hasGlass = Boolean(glassPreset);
    const hasGradient = Boolean(gradientPreset);
    const gradientAngle = (gradientConfig?.angle ?? 135) * Math.PI / 180;
    const gx = Math.cos(gradientAngle) / 2;
    const gy = Math.sin(gradientAngle) / 2;
    const svgStyle = {};
    if (strokeWidth == null && !absoluteStrokeWidth) {
      svgStyle.strokeWidth = `var(--nexa-stroke, ${baseStroke})`;
    }
    if (color) svgStyle.color = color;
    if (fillOpacity != null) svgStyle["--nexa-fill-opacity"] = String(fillOpacity);
    if (gradientPreset) svgStyle.stroke = `url(#nexa-g${reactId.replace(/[^a-zA-Z0-9_-]/g, "")})`;
    const glassStyle = glassConfig ? {
      ...glassConfig.blur != null ? { "--nexa-glass-blur": `${glassConfig.blur}px` } : {},
      ...glassConfig.tintA ? { "--nexa-glass-a": glassConfig.tintA } : {},
      ...glassConfig.tintB ? { "--nexa-glass-b": glassConfig.tintB } : {},
      ...glassConfig.edge ? { "--nexa-glass-edge": glassConfig.edge } : {},
      ...glassConfig.radius != null ? { "--nexa-glass-radius": `${glassConfig.radius}px` } : {},
      ...gradientConfig ? { "--nexa-grad-a": gradientConfig.from, "--nexa-grad-b": gradientConfig.to } : {}
    } : void 0;
    const box = Math.round(px * 1.7);
    const frameWidth = box;
    const frameHeight = shape === "pill" ? Math.round(px * 1.25) : box;
    const svgProps = {
      ...rest,
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: width ?? px,
      height: height ?? px,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: hasGradient ? `url(#${gradientId})` : "currentColor",
      strokeWidth: stroke,
      strokeLinecap: edges === "sharp" ? "butt" : "round",
      strokeLinejoin: edges === "sharp" ? "miter" : "round",
      className: ["nexa-icon", hasGradient ? `nexa-grad--${gradientPreset}` : "", className].filter(Boolean).join(" "),
      role: labelled && !hasShape && !threeD && !hasGlass ? "img" : void 0,
      "aria-hidden": ariaHiddenProp ?? (labelled && !hasShape && !threeD && !hasGlass ? void 0 : true),
      "aria-label": labelled && !hasShape && !threeD && !hasGlass ? accessibleLabel : void 0,
      "aria-labelledby": labelled && !hasShape && !threeD && !hasGlass ? ariaLabelledByProp : void 0,
      focusable: "false",
      "data-nexa-icon": data.kebab,
      "data-nexa-fill-safe": fillSafe ? "true" : "false",
      "data-nexa-size": explicitSize ? px : void 0,
      style: Object.keys(svgStyle).length ? svgStyle : void 0,
      "data-fill-state": fillExplicit ? resolvedFill === "outline" ? "false" : resolvedFill === "solid" && data.fillUnsafe === true ? "false" : resolvedFill === "solid" && !fillSafe ? "true" : fillSafe ? fillState : "soft" : void 0,
      "data-fill-fallback": resolvedFill === "solid" && !fillSafe && data.fillUnsafe !== true ? "body" : void 0,
      "data-fill-anim": animateFill ? "true" : void 0,
      "data-nexa-gradient-anim": hasGradient && gradientAnim ? gradientAnim : void 0,
      "data-nexa-anim": preset,
      "data-nexa-trigger": preset ? trigger ?? data.trigger : void 0,
      "data-nexa-active": active ? "true" : void 0
    };
    const gradientDefs = hasGradient ? h(
      "defs",
      { key: "__grad" },
      h(
        "linearGradient",
        gradientConfig ? {
          id: gradientId,
          x1: Number((0.5 - gx).toFixed(4)),
          y1: Number((0.5 - gy).toFixed(4)),
          x2: Number((0.5 + gx).toFixed(4)),
          y2: Number((0.5 + gy).toFixed(4))
        } : { id: gradientId, x1: "0", y1: "0", x2: "1", y2: "1" },
        h("stop", {
          offset: "0%",
          style: { stopColor: gradientConfig ? gradientConfig.from : "var(--nexa-grad-a)" }
        }),
        h("stop", {
          offset: "100%",
          style: { stopColor: gradientConfig ? gradientConfig.to : "var(--nexa-grad-b)" }
        })
      )
    ) : null;
    const strokePaint = hasGradient ? `url(#${gradientId})` : "currentColor";
    const renderNodes = data.nodes.map(([tag, attrs]) => {
      const closed = data.fillUnsafe !== true && (data.fillSafe === true || isClosedNode([tag, attrs]));
      return { tag, attrs: { ...attrs, "data-closed": closed ? "true" : "false" } };
    });
    const bodyLayer = glassBody && hasGlass || resolvedFill === "solid" && !fillSafe && data.fillUnsafe !== true ? h(
      "g",
      {
        key: "__body",
        className: "nexa-icon-body",
        "data-nexa-fill-fallback": "body",
        fill: "none",
        stroke: strokePaint,
        strokeWidth: Math.max(5, stroke * 3.2),
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      ...renderNodes.map((node, i) => h(node.tag, { ...node.attrs, key: i }))
    ) : null;
    const svgElement = h(
      "svg",
      svgProps,
      gradientDefs,
      bodyLayer,
      title != null ? h("title", { key: "__title" }, title) : null,
      ...renderNodes.map((node, i) => h(node.tag, { ...node.attrs, key: i }))
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
            hasGradient ? `nexa-grad--${gradientPreset}` : ""
          ].filter(Boolean).join(" "),
          "data-nexa-3d": threeD || void 0,
          "data-nexa-gradient": hasGradient ? gradientPreset : void 0,
          "data-nexa-glass-anim": hasGlass && glassAnim ? glassAnim : void 0,
          "data-nexa-glass-trigger": hasGlass && glassAnim ? glassTrigger ?? "always" : void 0,
          style: hasShape || hasGlass ? {
            width: `${(frameWidth / px || 1.7).toFixed(2)}em`,
            height: `${(frameHeight / px || 1.7).toFixed(2)}em`,
            fontSize: explicitSize ? `${px}px` : "var(--nexa-icon-size, 1em)",
            ...glassStyle
          } : glassStyle,
          role: labelled ? "img" : void 0,
          "aria-label": labelled ? accessibleLabel : void 0,
          "aria-labelledby": labelled ? ariaLabelledByProp : void 0,
          "aria-hidden": ariaHiddenProp ?? (labelled ? void 0 : "true")
        },
        svgElement
      );
    }
    return svgElement;
  });
  NexaIcon.displayName = data.name;
  return NexaIcon;
}
export {
  PRESETS,
  SIZE_PX,
  STROKE_FOR_PX,
  createIcon,
  strokeForSize
};
