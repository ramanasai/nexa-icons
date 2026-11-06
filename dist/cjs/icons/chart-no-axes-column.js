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
var chart_no_axes_column_exports = {};
__export(chart_no_axes_column_exports, {
  BarChart2: () => BarChart2
});
module.exports = __toCommonJS(chart_no_axes_column_exports);
var import_createIcon = require("../createIcon.js");
const BarChart2 = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "BarChart2",
  kebab: "chart-no-axes-column",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M5 21v-6" }], ["path", { d: "M12 21V3" }], ["path", { d: "M19 21V9" }]]
});
