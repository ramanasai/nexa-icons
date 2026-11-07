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
var notepad_text_dashed_exports = {};
__export(notepad_text_dashed_exports, {
  NotepadTextDashed: () => NotepadTextDashed
});
module.exports = __toCommonJS(notepad_text_dashed_exports);
var import_createIcon = require("../createIcon.js");
const NotepadTextDashed = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "NotepadTextDashed",
  kebab: "notepad-text-dashed",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M8 2v4", pathLength: "1" }], ["path", { d: "M12 2v4", pathLength: "1" }], ["path", { d: "M16 2v4", pathLength: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", pathLength: "1" }], ["path", { d: "M20 12v2", pathLength: "1" }], ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1", pathLength: "1" }], ["path", { d: "M13 22h-2", pathLength: "1" }], ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2", pathLength: "1" }], ["path", { d: "M4 14v-2", pathLength: "1" }], ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2", pathLength: "1" }], ["path", { d: "M8 10h6", pathLength: "1" }], ["path", { d: "M8 14h8", pathLength: "1" }], ["path", { d: "M8 18h5", pathLength: "1" }]]
});
