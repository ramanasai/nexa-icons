"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Swap_exports = {};
__export(Swap_exports, {
  IconSwap: () => IconSwap,
  IconToggle: () => IconToggle
});
module.exports = __toCommonJS(Swap_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_swaps = require("./swaps.js");
const compact = (value) => value.toLowerCase().replace(/[\s_-]+/g, "");
const modeFor = (displayName) => {
  if (!displayName) return "fade";
  return import_swaps.SWAP[compact(displayName)]?.mode ?? "fade";
};
const IconSwap = (0, import_react.forwardRef)(function IconSwap2(props, ref) {
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
  const [uncontrolled] = (0, import_react.useState)(defaultActive);
  const isActive = active ?? uncontrolled;
  const resolvedMode = mode === "auto" ? modeFor(From.displayName) : mode;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nexa-swap__a", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(From, { size, strokeWidth }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nexa-swap__b", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(To, { size, strokeWidth }) })
      ]
    }
  );
});
IconSwap.displayName = "NexaIconSwap";
const IconToggle = (0, import_react.forwardRef)(
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
    const [uncontrolled, setUncontrolled] = (0, import_react.useState)(defaultPressed);
    const isPressed = pressed ?? uncontrolled;
    const handleClick = (event) => {
      const next = !isPressed;
      if (pressed === void 0) setUncontrolled(next);
      onPressedChange?.(next);
      onClick?.(event);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        ...rest,
        ref,
        type: rest.type ?? "button",
        className: className ? `nexa-icon-toggle ${className}` : "nexa-icon-toggle",
        "aria-pressed": isPressed,
        "aria-label": label,
        onClick: handleClick,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
