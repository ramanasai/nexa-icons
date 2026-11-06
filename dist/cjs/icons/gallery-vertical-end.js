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
var gallery_vertical_end_exports = {};
__export(gallery_vertical_end_exports, {
  GalleryVerticalEnd: () => GalleryVerticalEnd
});
module.exports = __toCommonJS(gallery_vertical_end_exports);
var import_createIcon = require("../createIcon.js");
const GalleryVerticalEnd = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "GalleryVerticalEnd",
  kebab: "gallery-vertical-end",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M7 2h10" }], ["path", { d: "M5 6h14" }], ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }]]
});
