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
var visa_stamp_exports = {};
__export(visa_stamp_exports, {
  VisaStamp: () => VisaStamp
});
module.exports = __toCommonJS(visa_stamp_exports);
var import_createIcon = require("../createIcon.js");
const VisaStamp = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "VisaStamp",
  kebab: "visa-stamp",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "7" }], ["path", { d: "M8 12h8M8 15h5", pathLength: "1" }], ["path", { d: "M9 5V3M15 5V3", pathLength: "1" }]]
});
