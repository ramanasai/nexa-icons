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
var circle_check_big_exports = {};
__export(circle_check_big_exports, {
  CheckCircle: () => CheckCircle
});
module.exports = __toCommonJS(circle_check_big_exports);
var import_createIcon = require("../createIcon.js");
const CheckCircle = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CheckCircle",
  kebab: "circle-check-big",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335" }], ["path", { d: "m9 11 3 3L22 4" }]]
});
