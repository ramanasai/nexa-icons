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
var clock_exclamation_point_exports = {};
__export(clock_exclamation_point_exports, {
  ClockExclamationPoint: () => ClockExclamationPoint
});
module.exports = __toCommonJS(clock_exclamation_point_exports);
var import_createIcon = require("../createIcon.js");
const ClockExclamationPoint = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ClockExclamationPoint",
  kebab: "clock-exclamation-point",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M12 6v6l4 2", pathLength: "1" }], ["path", { d: "M20 12v5", pathLength: "1" }], ["path", { d: "M20 21h.01", pathLength: "1" }], ["path", { d: "M21.25 8.2A10 10 0 1 0 16 21.16", pathLength: "1" }]]
});
