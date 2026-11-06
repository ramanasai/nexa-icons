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
var mic_exports = {};
__export(mic_exports, {
  Mic: () => Mic
});
module.exports = __toCommonJS(mic_exports);
var import_createIcon = require("../createIcon.js");
const Mic = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Mic",
  kebab: "mic",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M12 19v3" }], ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }], ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3" }]]
});
