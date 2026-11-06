import { createIcon } from "../createIcon.js";
const MoveHorizontal = /* @__PURE__ */ createIcon({
  name: "MoveHorizontal",
  kebab: "move-horizontal",
  fillSafe: false,
  fillUnsafe: false,
  preset: "flip",
  trigger: "hover",
  nodes: [["path", { d: "m18 8 4 4-4 4" }], ["path", { d: "M2 12h20" }], ["path", { d: "m6 8-4 4 4 4" }]]
});
export {
  MoveHorizontal
};
