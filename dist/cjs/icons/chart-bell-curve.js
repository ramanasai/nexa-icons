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
var chart_bell_curve_exports = {};
__export(chart_bell_curve_exports, {
  ChartBellCurve: () => ChartBellCurve
});
module.exports = __toCommonJS(chart_bell_curve_exports);
var import_createIcon = require("../createIcon.js");
const ChartBellCurve = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ChartBellCurve",
  kebab: "chart-bell-curve",
  fillSafe: false,
  fillUnsafe: false,
  preset: "ring",
  trigger: "hover",
  nodes: [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", pathLength: "1" }], ["path", { d: "M7 16c3.5 0 2.5-10 6-10s2.5 10 6 10", pathLength: "1" }]]
});
