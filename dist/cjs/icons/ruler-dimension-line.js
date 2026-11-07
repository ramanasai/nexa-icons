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
var ruler_dimension_line_exports = {};
__export(ruler_dimension_line_exports, {
  RulerDimensionLine: () => RulerDimensionLine
});
module.exports = __toCommonJS(ruler_dimension_line_exports);
var import_createIcon = require("../createIcon.js");
const RulerDimensionLine = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "RulerDimensionLine",
  kebab: "ruler-dimension-line",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M10 15v-3", pathLength: "1" }], ["path", { d: "M14 15v-3", pathLength: "1" }], ["path", { d: "M18 15v-3", pathLength: "1" }], ["path", { d: "M2 8V4", pathLength: "1" }], ["path", { d: "M22 6H2", pathLength: "1" }], ["path", { d: "M22 8V4", pathLength: "1" }], ["path", { d: "M6 15v-3", pathLength: "1" }], ["rect", { x: "2", y: "12", width: "20", height: "8", rx: "2" }]]
});
