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
var hybrid_exports = {};
__export(hybrid_exports, {
  Hybrid: () => Hybrid
});
module.exports = __toCommonJS(hybrid_exports);
var import_createIcon = require("../createIcon.js");
const Hybrid = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Hybrid",
  kebab: "hybrid",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["rect", { x: "3", y: "7", width: "8", height: "10", rx: "1.5" }], ["rect", { x: "13", y: "3", width: "8", height: "12", rx: "1.5" }], ["path", { d: "M6 10h2M6 13h2M16 6h2M16 9h2M16 12h2" }]]
});
