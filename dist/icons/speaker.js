import { createIcon } from "../createIcon.js";
const Speaker = /* @__PURE__ */ createIcon({
  name: "Speaker",
  kebab: "speaker",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["path", { d: "M12 6h.01", pathLength: "1" }], ["circle", { cx: "12", cy: "14", r: "4" }], ["path", { d: "M12 14h.01", pathLength: "1" }]]
});
export {
  Speaker
};
