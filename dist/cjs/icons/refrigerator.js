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
var refrigerator_exports = {};
__export(refrigerator_exports, {
  Refrigerator: () => Refrigerator
});
module.exports = __toCommonJS(refrigerator_exports);
var import_createIcon = require("../createIcon.js");
const Refrigerator = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Refrigerator",
  kebab: "refrigerator",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z", pathLength: "1" }], ["path", { d: "M5 10h14", pathLength: "1" }], ["path", { d: "M15 7v6", pathLength: "1" }]]
});
