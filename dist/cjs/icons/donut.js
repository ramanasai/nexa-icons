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
var donut_exports = {};
__export(donut_exports, {
  Donut: () => Donut
});
module.exports = __toCommonJS(donut_exports);
var import_createIcon = require("../createIcon.js");
const Donut = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Donut",
  kebab: "donut",
  fillSafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["path", { d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" }], ["circle", { cx: "12", cy: "12", r: "3" }]]
});
