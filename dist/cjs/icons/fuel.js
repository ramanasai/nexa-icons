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
var fuel_exports = {};
__export(fuel_exports, {
  Fuel: () => Fuel
});
module.exports = __toCommonJS(fuel_exports);
var import_createIcon = require("../createIcon.js");
const Fuel = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Fuel",
  kebab: "fuel",
  fillSafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" }], ["path", { d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" }], ["path", { d: "M2 21h13" }], ["path", { d: "M3 9h11" }]]
});
