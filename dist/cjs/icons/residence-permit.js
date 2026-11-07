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
var residence_permit_exports = {};
__export(residence_permit_exports, {
  ResidencePermit: () => ResidencePermit
});
module.exports = __toCommonJS(residence_permit_exports);
var import_createIcon = require("../createIcon.js");
const ResidencePermit = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ResidencePermit",
  kebab: "residence-permit",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["rect", { x: "2.5", y: "5", width: "19", height: "14", rx: "2" }], ["rect", { x: "5.5", y: "8", width: "3", height: "3", rx: ".5" }], ["path", { d: "M11 9h5M11 12h5M11 15h3", pathLength: "1" }], ["path", { d: "M18 14.5a2 2 0 0 0-4 0v1.5", pathLength: "1" }]]
});
