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
var indian_rupee_exports = {};
__export(indian_rupee_exports, {
  IndianRupee: () => IndianRupee
});
module.exports = __toCommonJS(indian_rupee_exports);
var import_createIcon = require("../createIcon.js");
const IndianRupee = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "IndianRupee",
  kebab: "indian-rupee",
  fillSafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "m14 20-8-8h4c5.333 0 5.333-8 0-8" }], ["path", { d: "M6 4h12" }], ["path", { d: "M6 8h12" }]]
});
