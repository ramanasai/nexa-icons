import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
import { SWAP } from "./swaps.js";
const compact = (value) => value.toLowerCase().replace(/[\s_-]+/g, "");
const modeFor = (displayName) => {
  if (!displayName) return "fade";
  return SWAP[compact(displayName)]?.mode ?? "fade";
};
const IconSwap = forwardRef(function IconSwap2(props, ref) {
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
  return /* @__PURE__ */ jsxs(
    "span",
    {
      ...rest,
      ref,
      className: className ? `nexa-swap ${className}` : "nexa-swap",
      "data-mode": resolvedMode,
      "data-nexa-active": isActive ? "true" : "false",
      style: { "--nexa-swap-dur": `${duration}ms`, ...style },
      role: label ? "img" : void 0,
      "aria-label": label,
      "aria-hidden": label ? void 0 : true,
      children: [
        /* @__PURE__ */ jsx("span", { className: "nexa-swap__a", "aria-hidden": "true", children: /* @__PURE__ */ jsx(From, { size, strokeWidth }) }),
        /* @__PURE__ */ jsx("span", { className: "nexa-swap__b", "aria-hidden": "true", children: /* @__PURE__ */ jsx(To, { size, strokeWidth }) })
      ]
    }
  );
});
IconSwap.displayName = "NexaIconSwap";
const IconToggle = forwardRef(
  function IconToggle2(props, ref) {
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
    const handleClick = (event) => {
      const next = !isPressed;
      if (pressed === void 0) setUncontrolled(next);
      onPressedChange?.(next);
      onClick?.(event);
    };
    return /* @__PURE__ */ jsx(
      "button",
      {
        ...rest,
        ref,
        type: rest.type ?? "button",
        className: className ? `nexa-icon-toggle ${className}` : "nexa-icon-toggle",
        "aria-pressed": isPressed,
        "aria-label": label,
        onClick: handleClick,
        children: /* @__PURE__ */ jsx(
          IconSwap,
          {
            from: From,
            to: To,
            active: isPressed,
            mode,
            duration,
            size,
            strokeWidth,
            "aria-hidden": "true"
          }
        )
      }
    );
  }
);
IconToggle.displayName = "NexaIconToggle";
export {
  IconSwap,
  IconToggle
};
