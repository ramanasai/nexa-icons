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
var brain_off_exports = {};
__export(brain_off_exports, {
  BrainOff: () => BrainOff
});
module.exports = __toCommonJS(brain_off_exports);
var import_createIcon = require("../createIcon.js");
const BrainOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "BrainOff",
  kebab: "brain-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M12 18v-6" }], ["path", { d: "M12 5v1.344" }], ["path", { d: "M17.707 6.293A3 3 0 1012 5a3 3 0 00-4.124-2.781" }], ["path", { d: "M17.997 5.125a4 4 0 012.526 5.77" }], ["path", { d: "M19.644 19.644A4 4 0 0112 18a4 4 0 11-7.967-.517" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M20 10.536a4 4 0 011.533 5.34" }], ["path", { d: "M3.477 10.895a4 4 0 011.876-5.542" }], ["path", { d: "M6 18a4 4 0 01-2-7.464" }], ["path", { d: "M9 13a4.17 4.17 0 002.166-1.5 4 4 0 00.138-.196" }]]
});
