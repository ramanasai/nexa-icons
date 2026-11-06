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
var notebook_text_exports = {};
__export(notebook_text_exports, {
  NotebookText: () => NotebookText
});
module.exports = __toCommonJS(notebook_text_exports);
var import_createIcon = require("../createIcon.js");
const NotebookText = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "NotebookText",
  kebab: "notebook-text",
  fillSafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M2 6h4" }], ["path", { d: "M2 10h4" }], ["path", { d: "M2 14h4" }], ["path", { d: "M2 18h4" }], ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["path", { d: "M9.5 8h5" }], ["path", { d: "M9.5 12H16" }], ["path", { d: "M9.5 16H14" }]]
});
