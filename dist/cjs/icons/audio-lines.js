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
var audio_lines_exports = {};
__export(audio_lines_exports, {
  AudioLines: () => AudioLines
});
module.exports = __toCommonJS(audio_lines_exports);
var import_createIcon = require("../createIcon.js");
const AudioLines = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "AudioLines",
  kebab: "audio-lines",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M2 10v3" }], ["path", { d: "M6 6v11" }], ["path", { d: "M10 3v18" }], ["path", { d: "M14 8v7" }], ["path", { d: "M18 5v13" }], ["path", { d: "M22 10v3" }]]
});
