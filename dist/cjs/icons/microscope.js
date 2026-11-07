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
var microscope_exports = {};
__export(microscope_exports, {
  Microscope: () => Microscope
});
module.exports = __toCommonJS(microscope_exports);
var import_createIcon = require("../createIcon.js");
const Microscope = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Microscope",
  kebab: "microscope",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M6 18h8", pathLength: "1" }], ["path", { d: "M3 22h18", pathLength: "1" }], ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", pathLength: "1" }], ["path", { d: "M9 14h2", pathLength: "1" }], ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", pathLength: "1" }], ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", pathLength: "1" }]]
});
