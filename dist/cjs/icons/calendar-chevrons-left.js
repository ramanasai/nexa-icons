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
var calendar_chevrons_left_exports = {};
__export(calendar_chevrons_left_exports, {
  CalendarChevronsLeft: () => CalendarChevronsLeft
});
module.exports = __toCommonJS(calendar_chevrons_left_exports);
var import_createIcon = require("../createIcon.js");
const CalendarChevronsLeft = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CalendarChevronsLeft",
  kebab: "calendar-chevrons-left",
  fillSafe: false,
  fillUnsafe: false,
  preset: "nudge-left",
  trigger: "hover",
  nodes: [["path", { d: "m11 21-3-3 3-3" }], ["path", { d: "M16 2v3" }], ["path", { d: "M21 9H3" }], ["path", { d: "M3 11.5V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-4" }], ["path", { d: "m5 21-3-3 3-3" }], ["path", { d: "M8 2v3" }]]
});
