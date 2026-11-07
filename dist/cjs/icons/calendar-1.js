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
var calendar_1_exports = {};
__export(calendar_1_exports, {
  Calendar1: () => Calendar1
});
module.exports = __toCommonJS(calendar_1_exports);
var import_createIcon = require("../createIcon.js");
const Calendar1 = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Calendar1",
  kebab: "calendar-1",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M11 13h1v4", pathLength: "1" }], ["path", { d: "M16 2v3", pathLength: "1" }], ["path", { d: "M3 9h18", pathLength: "1" }], ["path", { d: "M8 2v3", pathLength: "1" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]]
});
