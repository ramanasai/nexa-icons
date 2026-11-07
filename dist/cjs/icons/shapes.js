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
var shapes_exports = {};
__export(shapes_exports, {
  Shapes: () => Shapes
});
module.exports = __toCommonJS(shapes_exports);
var import_createIcon = require("../createIcon.js");
const Shapes = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Shapes",
  kebab: "shapes",
  fillSafe: true,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z", pathLength: "1" }], ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }], ["circle", { cx: "17.5", cy: "17.5", r: "3.5" }]]
});
