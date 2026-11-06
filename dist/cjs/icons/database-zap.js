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
var database_zap_exports = {};
__export(database_zap_exports, {
  DatabaseZap: () => DatabaseZap
});
module.exports = __toCommonJS(database_zap_exports);
var import_createIcon = require("../createIcon.js");
const DatabaseZap = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "DatabaseZap",
  kebab: "database-zap",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84" }], ["path", { d: "M21 5V8" }], ["path", { d: "M21 12L18 17H22L19 22" }], ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87" }]]
});
