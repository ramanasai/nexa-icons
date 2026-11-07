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
var align_end_vertical_exports = {};
__export(align_end_vertical_exports, {
  AlignEndVertical: () => AlignEndVertical
});
module.exports = __toCommonJS(align_end_vertical_exports);
var import_createIcon = require("../createIcon.js");
const AlignEndVertical = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "AlignEndVertical",
  kebab: "align-end-vertical",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2" }], ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2" }], ["path", { d: "M22 22V2", pathLength: "1" }]]
});
