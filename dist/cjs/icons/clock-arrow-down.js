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
var clock_arrow_down_exports = {};
__export(clock_arrow_down_exports, {
  ClockArrowDown: () => ClockArrowDown
});
module.exports = __toCommonJS(clock_arrow_down_exports);
var import_createIcon = require("../createIcon.js");
const ClockArrowDown = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ClockArrowDown",
  kebab: "clock-arrow-down",
  fillSafe: false,
  fillUnsafe: false,
  preset: "nudge-down",
  trigger: "hover",
  nodes: [["path", { d: "M12 6v6l2 1", pathLength: "1" }], ["path", { d: "M12.337 21.994a10 10 0 1 1 9.588-8.767", pathLength: "1" }], ["path", { d: "m14 18 4 4 4-4", pathLength: "1" }], ["path", { d: "M18 14v8", pathLength: "1" }]]
});
