import { createIcon } from "../createIcon.js";
const PanelLeftOpen = /* @__PURE__ */ createIcon({
  name: "PanelLeftOpen",
  kebab: "panel-left-open",
  fillSafe: false,
  fillUnsafe: false,
  preset: "nudge-right",
  trigger: "hover",
  nodes: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "m14 9 3 3-3 3" }]]
});
export {
  PanelLeftOpen
};
