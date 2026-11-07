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
var package_x_exports = {};
__export(package_x_exports, {
  PackageX: () => PackageX
});
module.exports = __toCommonJS(package_x_exports);
var import_createIcon = require("../createIcon.js");
const PackageX = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "PackageX",
  kebab: "package-x",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M12 22V12", pathLength: "1" }], ["path", { d: "m16.5 14.5 5 5", pathLength: "1" }], ["path", { d: "m16.5 19.5 5-5", pathLength: "1" }], ["path", { d: "M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074", pathLength: "1" }], ["path", { d: "M3.29 7 12 12l8.71-5", pathLength: "1" }], ["path", { d: "m7.5 4.27 8.997 5.148", pathLength: "1" }]]
});
