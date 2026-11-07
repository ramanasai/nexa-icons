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
var calendar_x_exports = {};
__export(calendar_x_exports, {
  CalendarX: () => CalendarX
});
module.exports = __toCommonJS(calendar_x_exports);
var import_createIcon = require("../createIcon.js");
const CalendarX = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CalendarX",
  kebab: "calendar-x",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M8 2v3", pathLength: "1" }], ["path", { d: "M16 2v3", pathLength: "1" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }], ["path", { d: "M3 9h18", pathLength: "1" }], ["path", { d: "m14 13-4 4", pathLength: "1" }], ["path", { d: "m10 13 4 4", pathLength: "1" }]]
});
