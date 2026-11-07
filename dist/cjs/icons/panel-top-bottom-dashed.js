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
var panel_top_bottom_dashed_exports = {};
__export(panel_top_bottom_dashed_exports, {
  PanelTopBottomDashed: () => PanelTopBottomDashed
});
module.exports = __toCommonJS(panel_top_bottom_dashed_exports);
var import_createIcon = require("../createIcon.js");
const PanelTopBottomDashed = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "PanelTopBottomDashed",
  kebab: "panel-top-bottom-dashed",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M14 15h1", pathLength: "1" }], ["path", { d: "M14 9h1", pathLength: "1" }], ["path", { d: "M19 15h2", pathLength: "1" }], ["path", { d: "M19 9h2", pathLength: "1" }], ["path", { d: "M3 15h2", pathLength: "1" }], ["path", { d: "M3 9h2", pathLength: "1" }], ["path", { d: "M9 15h1", pathLength: "1" }], ["path", { d: "M9 9h1", pathLength: "1" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]]
});
