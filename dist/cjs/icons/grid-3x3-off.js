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
var grid_3x3_off_exports = {};
__export(grid_3x3_off_exports, {
  Grid3x3Off: () => Grid3x3Off
});
module.exports = __toCommonJS(grid_3x3_off_exports);
var import_createIcon = require("../createIcon.js");
const Grid3x3Off = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Grid3x3Off",
  kebab: "grid-3x3-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M15 9.344V3" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M20.414 20.414A2 2 0 0119 21H5a2 2 0 01-2-2V5a2 2 0 01.586-1.414" }], ["path", { d: "M20.656 15H21" }], ["path", { d: "M21 9h-6.344" }], ["path", { d: "M3 15h12v6" }], ["path", { d: "M3 9h6v12" }], ["path", { d: "M8.656 3H19a2 2 0 012 2v10.343" }], ["path", { d: "M9 3v.344" }]]
});
