import { createIcon } from "../createIcon.js";
const PanelTopClose = /* @__PURE__ */ createIcon({
  name: "PanelTopClose",
  kebab: "panel-top-close",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18", pathLength: "1" }], ["path", { d: "m9 16 3-3 3 3", pathLength: "1" }]]
});
export {
  PanelTopClose
};
