import { createIcon } from "../createIcon.js";
const Battery = /* @__PURE__ */ createIcon({
  name: "Battery",
  kebab: "battery",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M 22 14 L 22 10", pathLength: "1" }], ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }]]
});
export {
  Battery
};
