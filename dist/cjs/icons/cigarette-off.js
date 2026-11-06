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
var cigarette_off_exports = {};
__export(cigarette_off_exports, {
  CigaretteOff: () => CigaretteOff
});
module.exports = __toCommonJS(cigarette_off_exports);
var import_createIcon = require("../createIcon.js");
const CigaretteOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CigaretteOff",
  kebab: "cigarette-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" }], ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" }], ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }], ["path", { d: "M7 12v4" }]]
});
