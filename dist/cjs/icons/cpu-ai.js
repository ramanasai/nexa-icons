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
var cpu_ai_exports = {};
__export(cpu_ai_exports, {
  CpuAi: () => CpuAi
});
module.exports = __toCommonJS(cpu_ai_exports);
var import_createIcon = require("../createIcon.js");
const CpuAi = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CpuAi",
  kebab: "cpu-ai",
  fillSafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M12 20v2" }], ["path", { d: "M12 2v2" }], ["path", { d: "M16 9v6" }], ["path", { d: "M17 20v2" }], ["path", { d: "M17 2v2" }], ["path", { d: "M2 12h2" }], ["path", { d: "M2 17h2" }], ["path", { d: "M2 7h2" }], ["path", { d: "M20 12h2" }], ["path", { d: "M20 17h2" }], ["path", { d: "M20 7h2" }], ["path", { d: "M7 20v2" }], ["path", { d: "M7 2v2" }], ["path", { d: "M8 13h4" }], ["path", { d: "M8 15v-4a2 2 0 014 0v4" }], ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }]]
});
