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
var clock_arrow_up_exports = {};
__export(clock_arrow_up_exports, {
  ClockArrowUp: () => ClockArrowUp
});
module.exports = __toCommonJS(clock_arrow_up_exports);
var import_createIcon = require("../createIcon.js");
const ClockArrowUp = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ClockArrowUp",
  kebab: "clock-arrow-up",
  fillSafe: false,
  preset: "nudge-up",
  trigger: "hover",
  nodes: [["path", { d: "M12 6v6l1.56.78" }], ["path", { d: "M13.227 21.925a10 10 0 1 1 8.767-9.588" }], ["path", { d: "m14 18 4-4 4 4" }], ["path", { d: "M18 22v-8" }]]
});
