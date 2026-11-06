import { createIcon } from "../createIcon.js";
const PanelTopOpen = /* @__PURE__ */ createIcon({
  name: "PanelTopOpen",
  kebab: "panel-top-open",
  fillSafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }], ["path", { d: "m15 14-3 3-3-3" }]]
});
export {
  PanelTopOpen
};
