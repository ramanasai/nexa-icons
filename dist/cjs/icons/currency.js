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
var currency_exports = {};
__export(currency_exports, {
  Currency: () => Currency
});
module.exports = __toCommonJS(currency_exports);
var import_createIcon = require("../createIcon.js");
const Currency = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Currency",
  kebab: "currency",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "8" }], ["line", { "x1": "3", "x2": "6", "y1": "3", "y2": "6" }], ["line", { "x1": "21", "x2": "18", "y1": "3", "y2": "6" }], ["line", { "x1": "3", "x2": "6", "y1": "21", "y2": "18" }], ["line", { "x1": "21", "x2": "18", "y1": "21", "y2": "18" }]]
});
