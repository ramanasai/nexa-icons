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
var waves_horizontal_exports = {};
__export(waves_horizontal_exports, {
  WavesHorizontal: () => WavesHorizontal
});
module.exports = __toCommonJS(waves_horizontal_exports);
var import_createIcon = require("../createIcon.js");
const WavesHorizontal = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "WavesHorizontal",
  kebab: "waves-horizontal",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M2 12q2.5 2 5 0t5 0 5 0 5 0" }], ["path", { d: "M2 19q2.5 2 5 0t5 0 5 0 5 0" }], ["path", { d: "M2 5q2.5 2 5 0t5 0 5 0 5 0" }]]
});
