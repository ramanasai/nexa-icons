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
var tv_minimal_exports = {};
__export(tv_minimal_exports, {
  TvMinimal: () => TvMinimal
});
module.exports = __toCommonJS(tv_minimal_exports);
var import_createIcon = require("../createIcon.js");
const TvMinimal = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "TvMinimal",
  kebab: "tv-minimal",
  fillSafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M7 21h10" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]]
});
