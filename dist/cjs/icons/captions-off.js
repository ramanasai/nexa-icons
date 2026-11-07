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
var captions_off_exports = {};
__export(captions_off_exports, {
  CaptionsOff: () => CaptionsOff
});
module.exports = __toCommonJS(captions_off_exports);
var import_createIcon = require("../createIcon.js");
const CaptionsOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CaptionsOff",
  kebab: "captions-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5", pathLength: "1" }], ["path", { d: "M17 11h-.5", pathLength: "1" }], ["path", { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2", pathLength: "1" }], ["path", { d: "m2 2 20 20", pathLength: "1" }], ["path", { d: "M7 11h4", pathLength: "1" }], ["path", { d: "M7 15h2.5", pathLength: "1" }]]
});
