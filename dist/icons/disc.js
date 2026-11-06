import { createIcon } from "../createIcon.js";
const Disc = /* @__PURE__ */ createIcon({
  name: "Disc",
  kebab: "disc",
  fillSafe: true,
  fillUnsafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "12", r: "2" }]]
});
export {
  Disc
};
