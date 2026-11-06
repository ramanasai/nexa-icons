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
var torus_exports = {};
__export(torus_exports, {
  Torus: () => Torus
});
module.exports = __toCommonJS(torus_exports);
var import_createIcon = require("../createIcon.js");
const Torus = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Torus",
  kebab: "torus",
  fillSafe: true,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2" }], ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5" }]]
});
