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
var database_plus_exports = {};
__export(database_plus_exports, {
  DatabasePlus: () => DatabasePlus
});
module.exports = __toCommonJS(database_plus_exports);
var import_createIcon = require("../createIcon.js");
const DatabasePlus = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "DatabasePlus",
  kebab: "database-plus",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M19 16v6" }], ["path", { d: "M21 12.536V5" }], ["path", { d: "M22 19h-6" }], ["path", { d: "M3 12A9 3 0 0 0 15.1824 14.8061" }], ["path", { d: "M3 5V19A9 3 0 0 0 13.318 21.968" }], ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }]]
});
