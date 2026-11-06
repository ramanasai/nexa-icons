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
var ellipsis_exports = {};
__export(ellipsis_exports, {
  MoreHorizontal: () => MoreHorizontal
});
module.exports = __toCommonJS(ellipsis_exports);
var import_createIcon = require("../createIcon.js");
const MoreHorizontal = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "MoreHorizontal",
  kebab: "ellipsis",
  fillSafe: true,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "1" }], ["circle", { cx: "19", cy: "12", r: "1" }], ["circle", { cx: "5", cy: "12", r: "1" }]]
});
