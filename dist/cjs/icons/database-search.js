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
var database_search_exports = {};
__export(database_search_exports, {
  DatabaseSearch: () => DatabaseSearch
});
module.exports = __toCommonJS(database_search_exports);
var import_createIcon = require("../createIcon.js");
const DatabaseSearch = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "DatabaseSearch",
  kebab: "database-search",
  fillSafe: false,
  fillUnsafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["path", { d: "M21 11.693V5", pathLength: "1" }], ["path", { d: "m22 22-1.875-1.875", pathLength: "1" }], ["path", { d: "M3 12a9 3 0 0 0 8.697 2.998", pathLength: "1" }], ["path", { d: "M3 5v14a9 3 0 0 0 9.28 2.999", pathLength: "1" }], ["circle", { cx: "18", cy: "18", r: "3" }], ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }]]
});
