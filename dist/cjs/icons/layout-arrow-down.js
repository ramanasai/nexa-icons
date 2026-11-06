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
var layout_arrow_down_exports = {};
__export(layout_arrow_down_exports, {
  LayoutArrowDown: () => LayoutArrowDown
});
module.exports = __toCommonJS(layout_arrow_down_exports);
var import_createIcon = require("../createIcon.js");
const LayoutArrowDown = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "LayoutArrowDown",
  kebab: "layout-arrow-down",
  fillSafe: false,
  preset: "nudge-down",
  trigger: "hover",
  nodes: [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }], ["path", { d: "M18 3v18" }], ["path", { d: "m21 18-3 3-3-3" }]]
});
