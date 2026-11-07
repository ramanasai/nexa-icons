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
var calendar_search_exports = {};
__export(calendar_search_exports, {
  CalendarSearch: () => CalendarSearch
});
module.exports = __toCommonJS(calendar_search_exports);
var import_createIcon = require("../createIcon.js");
const CalendarSearch = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CalendarSearch",
  kebab: "calendar-search",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M16 2v3", pathLength: "1" }], ["path", { d: "M21 10.69V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.25", pathLength: "1" }], ["path", { d: "m22 21-1.875-1.875", pathLength: "1" }], ["path", { d: "M3 9h18", pathLength: "1" }], ["path", { d: "M8 2v3", pathLength: "1" }], ["circle", { cx: "18", cy: "17", r: "3" }]]
});
