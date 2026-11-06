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
var chevron_last_exports = {};
__export(chevron_last_exports, {
  ChevronLast: () => ChevronLast
});
module.exports = __toCommonJS(chevron_last_exports);
var import_createIcon = require("../createIcon.js");
const ChevronLast = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ChevronLast",
  kebab: "chevron-last",
  fillSafe: false,
  preset: "nudge-up",
  trigger: "hover",
  nodes: [["path", { d: "m7 18 6-6-6-6" }], ["path", { d: "M17 6v12" }]]
});
