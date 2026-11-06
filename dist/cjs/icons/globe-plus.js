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
var globe_plus_exports = {};
__export(globe_plus_exports, {
  GlobePlus: () => GlobePlus
});
module.exports = __toCommonJS(globe_plus_exports);
var import_createIcon = require("../createIcon.js");
const GlobePlus = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "GlobePlus",
  kebab: "globe-plus",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M15.929 10.563A14.5 14.5 0 0112 22a1 1 0 010-20 15 15 0 01.68.768" }], ["path", { d: "M19 2v6" }], ["path", { d: "M21.92 10.734A10 10 0 0112 22a14.5 14.5 0 010-20 10 10 0 011.266.08" }], ["path", { d: "M22 12H2" }], ["path", { d: "M22 5h-6" }]]
});
