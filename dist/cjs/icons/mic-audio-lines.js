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
var mic_audio_lines_exports = {};
__export(mic_audio_lines_exports, {
  MicAudioLines: () => MicAudioLines
});
module.exports = __toCommonJS(mic_audio_lines_exports);
var import_createIcon = require("../createIcon.js");
const MicAudioLines = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "MicAudioLines",
  kebab: "mic-audio-lines",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M10 3v2.341", pathLength: "1" }], ["path", { d: "M12 17v4", pathLength: "1" }], ["path", { d: "M14 5v.341", pathLength: "1" }], ["path", { d: "M18 5v13", pathLength: "1" }], ["path", { d: "M2 10v3", pathLength: "1" }], ["path", { d: "M22 10v3", pathLength: "1" }], ["path", { d: "M6 6v11", pathLength: "1" }], ["path", { d: "M9 21h6", pathLength: "1" }], ["rect", { width: "4", height: "8", x: "10", y: "9", rx: "2" }]]
});
