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
var aperture_exports = {};
__export(aperture_exports, {
  Aperture: () => Aperture
});
module.exports = __toCommonJS(aperture_exports);
var import_createIcon = require("../createIcon.js");
const Aperture = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Aperture",
  kebab: "aperture",
  fillSafe: false,
  fillUnsafe: false,
  preset: "tilt",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m14.31 8 5.74 9.94" }], ["path", { d: "M9.69 8h11.48" }], ["path", { d: "m7.38 12 5.74-9.94" }], ["path", { d: "M9.69 16 3.95 6.06" }], ["path", { d: "M14.31 16H2.83" }], ["path", { d: "m16.62 12-5.74 9.94" }]]
});
