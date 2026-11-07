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
var pin_off_exports = {};
__export(pin_off_exports, {
  PinOff: () => PinOff
});
module.exports = __toCommonJS(pin_off_exports);
var import_createIcon = require("../createIcon.js");
const PinOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "PinOff",
  kebab: "pin-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M12 17v5", pathLength: "1" }], ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89", pathLength: "1" }], ["path", { d: "m2 2 20 20", pathLength: "1" }], ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11", pathLength: "1" }]]
});
