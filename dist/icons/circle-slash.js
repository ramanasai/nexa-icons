import { createIcon } from "../createIcon.js";
const CircleSlash = /* @__PURE__ */ createIcon({
  name: "CircleSlash",
  kebab: "circle-slash",
  fillSafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { "x1": "9", "x2": "15", "y1": "15", "y2": "9" }]]
});
export {
  CircleSlash
};
