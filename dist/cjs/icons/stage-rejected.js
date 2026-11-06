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
var stage_rejected_exports = {};
__export(stage_rejected_exports, {
  StageRejected: () => StageRejected
});
module.exports = __toCommonJS(stage_rejected_exports);
var import_createIcon = require("../createIcon.js");
const StageRejected = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "StageRejected",
  kebab: "stage-rejected",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "8" }], ["path", { d: "m9 9 6 6M15 9l-6 6" }]]
});
