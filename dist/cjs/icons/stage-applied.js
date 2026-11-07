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
var stage_applied_exports = {};
__export(stage_applied_exports, {
  StageApplied: () => StageApplied
});
module.exports = __toCommonJS(stage_applied_exports);
var import_createIcon = require("../createIcon.js");
const StageApplied = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "StageApplied",
  kebab: "stage-applied",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M21 3 10.5 13.5", pathLength: "1" }], ["path", { d: "m21 3-6.5 18-4-8-8-4L21 3Z", pathLength: "1" }], ["path", { d: "m4 17 3-3", pathLength: "1" }]]
});
