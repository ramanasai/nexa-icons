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
var panel_bottom_close_exports = {};
__export(panel_bottom_close_exports, {
  PanelBottomClose: () => PanelBottomClose
});
module.exports = __toCommonJS(panel_bottom_close_exports);
var import_createIcon = require("../createIcon.js");
const PanelBottomClose = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "PanelBottomClose",
  kebab: "panel-bottom-close",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 15h18", pathLength: "1" }], ["path", { d: "m15 8-3 3-3-3", pathLength: "1" }]]
});
