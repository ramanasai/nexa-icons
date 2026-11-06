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
var blend_exports = {};
__export(blend_exports, {
  Blend: () => Blend
});
module.exports = __toCommonJS(blend_exports);
var import_createIcon = require("../createIcon.js");
const Blend = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Blend",
  kebab: "blend",
  fillSafe: true,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["circle", { cx: "15", cy: "9", r: "7" }], ["circle", { cx: "9", cy: "15", r: "7" }]]
});
