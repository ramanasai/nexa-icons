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
var case_lower_exports = {};
__export(case_lower_exports, {
  CaseLower: () => CaseLower
});
module.exports = __toCommonJS(case_lower_exports);
var import_createIcon = require("../createIcon.js");
const CaseLower = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CaseLower",
  kebab: "case-lower",
  fillSafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M10 9v7" }], ["path", { d: "M14 6v10" }], ["circle", { cx: "17.5", cy: "12.5", r: "3.5" }], ["circle", { cx: "6.5", cy: "12.5", r: "3.5" }]]
});
