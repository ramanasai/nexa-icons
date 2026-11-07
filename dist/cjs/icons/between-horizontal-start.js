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
var between_horizontal_start_exports = {};
__export(between_horizontal_start_exports, {
  BetweenHorizontalStart: () => BetweenHorizontalStart
});
module.exports = __toCommonJS(between_horizontal_start_exports);
var import_createIcon = require("../createIcon.js");
const BetweenHorizontalStart = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "BetweenHorizontalStart",
  kebab: "between-horizontal-start",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1" }], ["path", { d: "m2 9 3 3-3 3", pathLength: "1" }], ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1" }]]
});
