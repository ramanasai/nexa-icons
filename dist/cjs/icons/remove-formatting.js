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
var remove_formatting_exports = {};
__export(remove_formatting_exports, {
  RemoveFormatting: () => RemoveFormatting
});
module.exports = __toCommonJS(remove_formatting_exports);
var import_createIcon = require("../createIcon.js");
const RemoveFormatting = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "RemoveFormatting",
  kebab: "remove-formatting",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M4 7V4h16v3", pathLength: "1" }], ["path", { d: "M5 20h6", pathLength: "1" }], ["path", { d: "M13 4 8 20", pathLength: "1" }], ["path", { d: "m15 15 5 5", pathLength: "1" }], ["path", { d: "m20 15-5 5", pathLength: "1" }]]
});
