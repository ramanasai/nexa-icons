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
var door_closed_locked_exports = {};
__export(door_closed_locked_exports, {
  DoorClosedLocked: () => DoorClosedLocked
});
module.exports = __toCommonJS(door_closed_locked_exports);
var import_createIcon = require("../createIcon.js");
const DoorClosedLocked = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "DoorClosedLocked",
  kebab: "door-closed-locked",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M19 8V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" }], ["path", { d: "M2 21h8" }], ["path", { d: "M20 16v-2a2 2 0 00-4 0v2" }], ["path", { d: "M9 12h.01" }], ["rect", { x: "14", y: "16", width: "8", height: "5", rx: "1" }]]
});
