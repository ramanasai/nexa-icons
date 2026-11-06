import { createIcon } from "../createIcon.js";
const SignalHigh = /* @__PURE__ */ createIcon({
  name: "SignalHigh",
  kebab: "signal-high",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M2 20h.01" }], ["path", { d: "M7 20v-4" }], ["path", { d: "M12 20v-8" }], ["path", { d: "M17 20V8" }]]
});
export {
  SignalHigh
};
