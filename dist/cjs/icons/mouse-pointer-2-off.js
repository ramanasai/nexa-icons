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
var mouse_pointer_2_off_exports = {};
__export(mouse_pointer_2_off_exports, {
  MousePointer2Off: () => MousePointer2Off
});
module.exports = __toCommonJS(mouse_pointer_2_off_exports);
var import_createIcon = require("../createIcon.js");
const MousePointer2Off = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "MousePointer2Off",
  kebab: "mouse-pointer-2-off",
  fillSafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551" }], ["path", { d: "M22 2 2 22" }], ["path", { d: "m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779" }]]
});
