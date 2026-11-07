import { createIcon } from "../createIcon.js";
const Grid3x3 = /* @__PURE__ */ createIcon({
  name: "Grid3x3",
  kebab: "grid-3x3",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18", pathLength: "1" }], ["path", { d: "M3 15h18", pathLength: "1" }], ["path", { d: "M9 3v18", pathLength: "1" }], ["path", { d: "M15 3v18", pathLength: "1" }]]
});
export {
  Grid3x3
};
