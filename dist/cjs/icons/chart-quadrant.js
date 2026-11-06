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
var chart_quadrant_exports = {};
__export(chart_quadrant_exports, {
  ChartQuadrant: () => ChartQuadrant
});
module.exports = __toCommonJS(chart_quadrant_exports);
var import_createIcon = require("../createIcon.js");
const ChartQuadrant = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ChartQuadrant",
  kebab: "chart-quadrant",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M13 3v18" }], ["path", { d: "M3 12h18" }], ["path", { d: "M3 3v16a2 2 0 002 2h16" }], ["circle", { cx: "17.5", cy: "5.5", r: "0.5", fill: "currentColor" }], ["circle", { cx: "19.5", cy: "16.5", r: "0.5", fill: "currentColor" }], ["circle", { cx: "7.5", cy: "16.5", r: "0.5", fill: "currentColor" }], ["circle", { cx: "7.5", cy: "7.5", r: "0.5", fill: "currentColor" }]]
});
