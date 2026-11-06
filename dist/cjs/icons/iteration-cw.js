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
var iteration_cw_exports = {};
__export(iteration_cw_exports, {
  IterationCw: () => IterationCw
});
module.exports = __toCommonJS(iteration_cw_exports);
var import_createIcon = require("../createIcon.js");
const IterationCw = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "IterationCw",
  kebab: "iteration-cw",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M4 10a8 8 0 1 1 8 8H4" }], ["path", { d: "m8 22-4-4 4-4" }]]
});
