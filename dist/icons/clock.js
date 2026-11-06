import { createIcon } from "../createIcon.js";
const Clock = /* @__PURE__ */ createIcon({
  name: "Clock",
  kebab: "clock",
  fillSafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 6v6l4 2" }]]
});
export {
  Clock
};
