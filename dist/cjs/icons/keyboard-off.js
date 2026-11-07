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
var keyboard_off_exports = {};
__export(keyboard_off_exports, {
  KeyboardOff: () => KeyboardOff
});
module.exports = __toCommonJS(keyboard_off_exports);
var import_createIcon = require("../createIcon.js");
const KeyboardOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "KeyboardOff",
  kebab: "keyboard-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M 20 4 A2 2 0 0 1 22 6", pathLength: "1" }], ["path", { d: "M 22 6 L 22 16.41", pathLength: "1" }], ["path", { d: "M 7 16 L 16 16", pathLength: "1" }], ["path", { d: "M 9.69 4 L 20 4", pathLength: "1" }], ["path", { d: "M14 8h.01", pathLength: "1" }], ["path", { d: "M18 8h.01", pathLength: "1" }], ["path", { d: "m2 2 20 20", pathLength: "1" }], ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2", pathLength: "1" }], ["path", { d: "M6 8h.01", pathLength: "1" }], ["path", { d: "M8 12h.01", pathLength: "1" }]]
});
