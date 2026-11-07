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
var router_exports = {};
__export(router_exports, {
  Router: () => Router
});
module.exports = __toCommonJS(router_exports);
var import_createIcon = require("../createIcon.js");
const Router = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Router",
  kebab: "router",
  fillSafe: false,
  fillUnsafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }], ["path", { d: "M6.01 18H6", pathLength: "1" }], ["path", { d: "M10.01 18H10", pathLength: "1" }], ["path", { d: "M15 10v4", pathLength: "1" }], ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0", pathLength: "1" }], ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0", pathLength: "1" }]]
});
