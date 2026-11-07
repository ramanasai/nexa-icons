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
var square_chart_gantt_exports = {};
__export(square_chart_gantt_exports, {
  SquareChartGantt: () => SquareChartGantt
});
module.exports = __toCommonJS(square_chart_gantt_exports);
var import_createIcon = require("../createIcon.js");
const SquareChartGantt = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "SquareChartGantt",
  kebab: "square-chart-gantt",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 8h7", pathLength: "1" }], ["path", { d: "M8 12h6", pathLength: "1" }], ["path", { d: "M11 16h5", pathLength: "1" }]]
});
