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
var chart_radar_exports = {};
__export(chart_radar_exports, {
  ChartRadar: () => ChartRadar
});
module.exports = __toCommonJS(chart_radar_exports);
var import_createIcon = require("../createIcon.js");
const ChartRadar = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ChartRadar",
  kebab: "chart-radar",
  fillSafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M12 2v10" }], ["path", { d: "m16 18 3.085-8.125L12 4.103 3.473 9.442l3.196 10.554z" }], ["path", { d: "m2 9 10 3 6 9" }], ["path", { d: "m6 21 6-9 10-3" }]]
});
