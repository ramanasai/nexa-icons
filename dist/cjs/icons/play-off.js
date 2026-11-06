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
var play_off_exports = {};
__export(play_off_exports, {
  PlayOff: () => PlayOff
});
module.exports = __toCommonJS(play_off_exports);
var import_createIcon = require("../createIcon.js");
const PlayOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "PlayOff",
  kebab: "play-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "m10.215 4.56 9.79 5.71a2 2 0 0 1 .003 3.458l-.393.23" }], ["path", { d: "m16.042 16.042-8.034 4.686A2 2 0 0 1 5 19V5" }], ["path", { d: "m2 2 20 20" }]]
});
