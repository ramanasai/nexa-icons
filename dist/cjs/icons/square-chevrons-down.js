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
var square_chevrons_down_exports = {};
__export(square_chevrons_down_exports, {
  SquareChevronsDown: () => SquareChevronsDown
});
module.exports = __toCommonJS(square_chevrons_down_exports);
var import_createIcon = require("../createIcon.js");
const SquareChevronsDown = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "SquareChevronsDown",
  kebab: "square-chevrons-down",
  fillSafe: false,
  preset: "nudge-down",
  trigger: "hover",
  nodes: [["path", { d: "M9 14L12 17L15 14" }], ["path", { d: "M9 8L12 11L15 8" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]]
});
