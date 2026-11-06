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
var cloud_exclamation_point_exports = {};
__export(cloud_exclamation_point_exports, {
  CloudExclamationPoint: () => CloudExclamationPoint
});
module.exports = __toCommonJS(cloud_exclamation_point_exports);
var import_createIcon = require("../createIcon.js");
const CloudExclamationPoint = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CloudExclamationPoint",
  kebab: "cloud-exclamation-point",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M12 12v4" }], ["path", { d: "M12 20h.01" }], ["path", { d: "M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" }]]
});
