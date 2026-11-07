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
var naukri_exports = {};
__export(naukri_exports, {
  Naukri: () => Naukri
});
module.exports = __toCommonJS(naukri_exports);
var import_createIcon = require("../createIcon.js");
const Naukri = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Naukri",
  kebab: "naukri",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["rect", { x: "2.5", y: "2.5", width: "19", height: "19", rx: "5" }], ["path", { d: "M8 16V8l8 8V8", pathLength: "1" }]]
});
