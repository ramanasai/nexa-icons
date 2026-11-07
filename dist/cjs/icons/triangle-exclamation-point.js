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
var triangle_exclamation_point_exports = {};
__export(triangle_exclamation_point_exports, {
  AlertTriangle: () => AlertTriangle
});
module.exports = __toCommonJS(triangle_exclamation_point_exports);
var import_createIcon = require("../createIcon.js");
const AlertTriangle = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "AlertTriangle",
  kebab: "triangle-exclamation-point",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", pathLength: "1" }], ["path", { d: "M12 9v4", pathLength: "1" }], ["path", { d: "M12 17h.01", pathLength: "1" }]]
});
