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
var disc_3_exports = {};
__export(disc_3_exports, {
  Disc3: () => Disc3
});
module.exports = __toCommonJS(disc_3_exports);
var import_createIcon = require("../createIcon.js");
const Disc3 = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Disc3",
  kebab: "disc-3",
  fillSafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2" }]]
});
