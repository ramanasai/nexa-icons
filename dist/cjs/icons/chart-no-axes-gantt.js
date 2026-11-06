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
var chart_no_axes_gantt_exports = {};
__export(chart_no_axes_gantt_exports, {
  ChartNoAxesGantt: () => ChartNoAxesGantt
});
module.exports = __toCommonJS(chart_no_axes_gantt_exports);
var import_createIcon = require("../createIcon.js");
const ChartNoAxesGantt = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ChartNoAxesGantt",
  kebab: "chart-no-axes-gantt",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M6 5h12" }], ["path", { d: "M4 12h10" }], ["path", { d: "M12 19h8" }]]
});
