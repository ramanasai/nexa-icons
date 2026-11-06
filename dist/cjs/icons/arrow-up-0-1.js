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
var arrow_up_0_1_exports = {};
__export(arrow_up_0_1_exports, {
  ArrowUp01: () => ArrowUp01
});
module.exports = __toCommonJS(arrow_up_0_1_exports);
var import_createIcon = require("../createIcon.js");
const ArrowUp01 = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ArrowUp01",
  kebab: "arrow-up-0-1",
  fillSafe: false,
  fillUnsafe: false,
  preset: "nudge-up",
  trigger: "hover",
  nodes: [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }], ["path", { d: "M17 20v-6h-2" }], ["path", { d: "M15 20h4" }]]
});
