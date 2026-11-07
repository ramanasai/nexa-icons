import { createIcon } from "../createIcon.js";
const PanelTopOpen = /* @__PURE__ */ createIcon({
  name: "PanelTopOpen",
  kebab: "panel-top-open",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18", pathLength: "1" }], ["path", { d: "m15 14-3 3-3-3", pathLength: "1" }]]
});
export {
  PanelTopOpen
};
