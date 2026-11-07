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
var audio_lines_off_exports = {};
__export(audio_lines_off_exports, {
  AudioLinesOff: () => AudioLinesOff
});
module.exports = __toCommonJS(audio_lines_off_exports);
var import_createIcon = require("../createIcon.js");
const AudioLinesOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "AudioLinesOff",
  kebab: "audio-lines-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M10 10v11", pathLength: "1" }], ["path", { d: "M10 3v1.35", pathLength: "1" }], ["path", { d: "M14 14v1", pathLength: "1" }], ["path", { d: "M14 8v.35", pathLength: "1" }], ["path", { d: "M18 5v7.35", pathLength: "1" }], ["path", { d: "M2 10v3", pathLength: "1" }], ["path", { d: "m2 2 20 20", pathLength: "1" }], ["path", { d: "M22 10v3", pathLength: "1" }], ["path", { d: "M6 6v11", pathLength: "1" }]]
});
