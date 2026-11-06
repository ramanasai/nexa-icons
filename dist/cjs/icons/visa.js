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
var visa_exports = {};
__export(visa_exports, {
  Visa: () => Visa
});
module.exports = __toCommonJS(visa_exports);
var import_createIcon = require("../createIcon.js");
const Visa = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Visa",
  kebab: "visa",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M8 3h6.5L19 7.5V12" }], ["path", { d: "M8 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5" }], ["path", { d: "M14 3v5h5" }], ["circle", { cx: "16.5", cy: "16.5", r: "3" }], ["path", { d: "m15.2 16.5 1 1 1.7-1.9" }]]
});
