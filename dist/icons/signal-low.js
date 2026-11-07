import { createIcon } from "../createIcon.js";
const SignalLow = /* @__PURE__ */ createIcon({
  name: "SignalLow",
  kebab: "signal-low",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M2 20h.01", pathLength: "1" }], ["path", { d: "M7 20v-4", pathLength: "1" }]]
});
export {
  SignalLow
};
