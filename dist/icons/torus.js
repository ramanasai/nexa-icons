import { createIcon } from "../createIcon.js";
const Torus = /* @__PURE__ */ createIcon({
  name: "Torus",
  kebab: "torus",
  fillSafe: true,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2" }], ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5" }]]
});
export {
  Torus
};
