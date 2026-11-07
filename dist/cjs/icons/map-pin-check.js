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
var map_pin_check_exports = {};
__export(map_pin_check_exports, {
  MapPinCheck: () => MapPinCheck
});
module.exports = __toCommonJS(map_pin_check_exports);
var import_createIcon = require("../createIcon.js");
const MapPinCheck = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "MapPinCheck",
  kebab: "map-pin-check",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728", pathLength: "1" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "m16 18 2 2 4-4", pathLength: "1" }]]
});
