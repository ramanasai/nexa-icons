import { createIcon } from "../createIcon.js";
const SeparatorVertical = /* @__PURE__ */ createIcon({
  name: "SeparatorVertical",
  kebab: "separator-vertical",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M12 3v18", pathLength: "1" }], ["path", { d: "m16 16 4-4-4-4", pathLength: "1" }], ["path", { d: "m8 8-4 4 4 4", pathLength: "1" }]]
});
export {
  SeparatorVertical
};
