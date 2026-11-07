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
var vibrate_exports = {};
__export(vibrate_exports, {
  Vibrate: () => Vibrate
});
module.exports = __toCommonJS(vibrate_exports);
var import_createIcon = require("../createIcon.js");
const Vibrate = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Vibrate",
  kebab: "vibrate",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "m2 8 2 2-2 2 2 2-2 2", pathLength: "1" }], ["path", { d: "m22 8-2 2 2 2-2 2 2 2", pathLength: "1" }], ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1" }]]
});
