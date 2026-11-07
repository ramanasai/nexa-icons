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
var between_vertical_start_exports = {};
__export(between_vertical_start_exports, {
  BetweenVerticalStart: () => BetweenVerticalStart
});
module.exports = __toCommonJS(between_vertical_start_exports);
var import_createIcon = require("../createIcon.js");
const BetweenVerticalStart = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "BetweenVerticalStart",
  kebab: "between-vertical-start",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1" }], ["path", { d: "m15 2-3 3-3-3", pathLength: "1" }], ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1" }]]
});
