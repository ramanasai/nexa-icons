import { createIcon } from "../createIcon.js";
const PanelRightClose = /* @__PURE__ */ createIcon({
  name: "PanelRightClose",
  kebab: "panel-right-close",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M15 3v18", pathLength: "1" }], ["path", { d: "m8 9 3 3-3 3", pathLength: "1" }]]
});
export {
  PanelRightClose
};
