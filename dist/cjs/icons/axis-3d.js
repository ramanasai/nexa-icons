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
var axis_3d_exports = {};
__export(axis_3d_exports, {
  Axis3D: () => Axis3D
});
module.exports = __toCommonJS(axis_3d_exports);
var import_createIcon = require("../createIcon.js");
const Axis3D = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Axis3D",
  kebab: "axis-3d",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M13.5 10.5 15 9" }], ["path", { d: "M4 4v15a1 1 0 0 0 1 1h15" }], ["path", { d: "M4.293 19.707 6 18" }], ["path", { d: "m9 15 1.5-1.5" }]]
});
