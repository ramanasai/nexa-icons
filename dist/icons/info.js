import { createIcon } from "../createIcon.js";
const Info = /* @__PURE__ */ createIcon({
  name: "Info",
  kebab: "info",
  fillSafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 16v-4" }], ["path", { d: "M12 8h.01" }]]
});
export {
  Info
};
