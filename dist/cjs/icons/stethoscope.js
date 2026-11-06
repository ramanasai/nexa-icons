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
var stethoscope_exports = {};
__export(stethoscope_exports, {
  Stethoscope: () => Stethoscope
});
module.exports = __toCommonJS(stethoscope_exports);
var import_createIcon = require("../createIcon.js");
const Stethoscope = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Stethoscope",
  kebab: "stethoscope",
  fillSafe: false,
  fillUnsafe: false,
  preset: "heartbeat",
  trigger: "hover",
  nodes: [["path", { d: "M11 2v2" }], ["path", { d: "M5 2v2" }], ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }], ["path", { d: "M8 15a6 6 0 0 0 12 0v-3" }], ["circle", { cx: "20", cy: "10", r: "2" }]]
});
