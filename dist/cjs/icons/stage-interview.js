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
var stage_interview_exports = {};
__export(stage_interview_exports, {
  StageInterview: () => StageInterview
});
module.exports = __toCommonJS(stage_interview_exports);
var import_createIcon = require("../createIcon.js");
const StageInterview = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "StageInterview",
  kebab: "stage-interview",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M4 5h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8l-4 3V7a2 2 0 0 1 2-2Z", pathLength: "1" }], ["path", { d: "M15 8h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2l-3 2", pathLength: "1" }], ["path", { d: "M7 9h4M7 12h2", pathLength: "1" }]]
});
