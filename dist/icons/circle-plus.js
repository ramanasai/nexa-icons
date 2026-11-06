import { createIcon } from "../createIcon.js";
const PlusCircle = /* @__PURE__ */ createIcon({
  name: "PlusCircle",
  kebab: "circle-plus",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M8 12h8" }], ["path", { d: "M12 8v8" }]]
});
export {
  PlusCircle
};
