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
var clock_check_exports = {};
__export(clock_check_exports, {
  ClockCheck: () => ClockCheck
});
module.exports = __toCommonJS(clock_check_exports);
var import_createIcon = require("../createIcon.js");
const ClockCheck = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ClockCheck",
  kebab: "clock-check",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M21.95 13a10 10 0 1 0-8.685 8.92", pathLength: "1" }], ["path", { d: "M12 6v6l4 2", pathLength: "1" }], ["path", { d: "m16 19 2 2 4-4", pathLength: "1" }]]
});
