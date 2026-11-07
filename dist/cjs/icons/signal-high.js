"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var signal_high_exports = {};
__export(signal_high_exports, {
  SignalHigh: () => SignalHigh
});
module.exports = __toCommonJS(signal_high_exports);
var import_createIcon = require("../createIcon.js");
const SignalHigh = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "SignalHigh",
  kebab: "signal-high",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M2 20h.01", pathLength: "1" }], ["path", { d: "M7 20v-4", pathLength: "1" }], ["path", { d: "M12 20v-8", pathLength: "1" }], ["path", { d: "M17 20V8", pathLength: "1" }]]
});
