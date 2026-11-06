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
var underline_exports = {};
__export(underline_exports, {
  Underline: () => Underline
});
module.exports = __toCommonJS(underline_exports);
var import_createIcon = require("../createIcon.js");
const Underline = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Underline",
  kebab: "underline",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }], ["line", { "x1": "4", "x2": "20", "y1": "20", "y2": "20" }]]
});
