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
var lasso_exports = {};
__export(lasso_exports, {
  Lasso: () => Lasso
});
module.exports = __toCommonJS(lasso_exports);
var import_createIcon = require("../createIcon.js");
const Lasso = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Lasso",
  kebab: "lasso",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M3.704 14.467a10 8 0 1 1 3.115 2.375", pathLength: "1" }], ["path", { d: "M7 22a5 5 0 0 1-2-3.994", pathLength: "1" }], ["circle", { cx: "5", cy: "16", r: "2" }]]
});
