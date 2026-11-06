import { createIcon } from "../createIcon.js";
const Cylinder = /* @__PURE__ */ createIcon({
  name: "Cylinder",
  kebab: "cylinder",
  fillSafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }]]
});
export {
  Cylinder
};
