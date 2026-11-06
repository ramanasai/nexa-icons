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
var door_closed_exports = {};
__export(door_closed_exports, {
  DoorClosed: () => DoorClosed
});
module.exports = __toCommonJS(door_closed_exports);
var import_createIcon = require("../createIcon.js");
const DoorClosed = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "DoorClosed",
  kebab: "door-closed",
  fillSafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["path", { d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" }], ["path", { d: "M2 21h20" }], ["path", { d: "M9 12h.01" }]]
});
