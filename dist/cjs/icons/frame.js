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
var frame_exports = {};
__export(frame_exports, {
  Frame: () => Frame
});
module.exports = __toCommonJS(frame_exports);
var import_createIcon = require("../createIcon.js");
const Frame = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Frame",
  kebab: "frame",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["line", { "x1": "22", "x2": "2", "y1": "6", "y2": "6" }], ["line", { "x1": "22", "x2": "2", "y1": "18", "y2": "18" }], ["line", { "x1": "6", "x2": "6", "y1": "2", "y2": "22" }], ["line", { "x1": "18", "x2": "18", "y1": "2", "y2": "22" }]]
});
