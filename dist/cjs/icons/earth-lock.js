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
var earth_lock_exports = {};
__export(earth_lock_exports, {
  EarthLock: () => EarthLock
});
module.exports = __toCommonJS(earth_lock_exports);
var import_createIcon = require("../createIcon.js");
const EarthLock = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "EarthLock",
  kebab: "earth-lock",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M7 3.34V5a3 3 0 0 0 3 3", pathLength: "1" }], ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", pathLength: "1" }], ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", pathLength: "1" }], ["path", { d: "M12 2a10 10 0 1 0 9.54 13", pathLength: "1" }], ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2", pathLength: "1" }], ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]]
});
