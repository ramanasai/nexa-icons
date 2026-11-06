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
var x_exports = {};
__export(x_exports, {
  X: () => X
});
module.exports = __toCommonJS(x_exports);
var import_createIcon = require("../createIcon.js");
const X = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "X",
  kebab: "x",
  fillSafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M18 6 6 18" }], ["path", { d: "m6 6 12 12" }]]
});
