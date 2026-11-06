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
var pound_sterling_exports = {};
__export(pound_sterling_exports, {
  PoundSterling: () => PoundSterling
});
module.exports = __toCommonJS(pound_sterling_exports);
var import_createIcon = require("../createIcon.js");
const PoundSterling = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "PoundSterling",
  kebab: "pound-sterling",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M17 18a2 2 0 01-2 2H5a3 3 0 003-3V8a4 4 0 018 0" }], ["path", { d: "M6 12h7" }]]
});
