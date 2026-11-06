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
var trending_down_exports = {};
__export(trending_down_exports, {
  TrendingDown: () => TrendingDown
});
module.exports = __toCommonJS(trending_down_exports);
var import_createIcon = require("../createIcon.js");
const TrendingDown = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "TrendingDown",
  kebab: "trending-down",
  fillSafe: false,
  preset: "nudge-down",
  trigger: "hover",
  nodes: [["path", { d: "M16 17h6v-6" }], ["path", { d: "m22 17-8.5-8.5-5 5L2 7" }]]
});
