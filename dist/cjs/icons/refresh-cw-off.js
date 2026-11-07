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
var refresh_cw_off_exports = {};
__export(refresh_cw_off_exports, {
  RefreshCwOff: () => RefreshCwOff
});
module.exports = __toCommonJS(refresh_cw_off_exports);
var import_createIcon = require("../createIcon.js");
const RefreshCwOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "RefreshCwOff",
  kebab: "refresh-cw-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "spin",
  trigger: "hover",
  nodes: [["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47", pathLength: "1" }], ["path", { d: "M8 16H3v5", pathLength: "1" }], ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64", pathLength: "1" }], ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64", pathLength: "1" }], ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87", pathLength: "1" }], ["path", { d: "M21 3v5h-5", pathLength: "1" }], ["path", { d: "M22 22 2 2", pathLength: "1" }]]
});
