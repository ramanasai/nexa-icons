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
var arrow_down_up_exports = {};
__export(arrow_down_up_exports, {
  ArrowDownUp: () => ArrowDownUp
});
module.exports = __toCommonJS(arrow_down_up_exports);
var import_createIcon = require("../createIcon.js");
const ArrowDownUp = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ArrowDownUp",
  kebab: "arrow-down-up",
  fillSafe: false,
  fillUnsafe: false,
  preset: "nudge-down",
  trigger: "hover",
  nodes: [["path", { d: "m3 16 4 4 4-4", pathLength: "1" }], ["path", { d: "M7 20V4", pathLength: "1" }], ["path", { d: "m21 8-4-4-4 4", pathLength: "1" }], ["path", { d: "M17 4v16", pathLength: "1" }]]
});
