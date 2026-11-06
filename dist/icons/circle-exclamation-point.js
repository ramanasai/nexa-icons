import { createIcon } from "../createIcon.js";
const AlertCircle = /* @__PURE__ */ createIcon({
  name: "AlertCircle",
  kebab: "circle-exclamation-point",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }], ["line", { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }]]
});
export {
  AlertCircle
};
