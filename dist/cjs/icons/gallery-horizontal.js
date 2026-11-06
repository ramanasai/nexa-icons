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
var gallery_horizontal_exports = {};
__export(gallery_horizontal_exports, {
  GalleryHorizontal: () => GalleryHorizontal
});
module.exports = __toCommonJS(gallery_horizontal_exports);
var import_createIcon = require("../createIcon.js");
const GalleryHorizontal = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "GalleryHorizontal",
  kebab: "gallery-horizontal",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M2 3v18" }], ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2" }], ["path", { d: "M22 3v18" }]]
});
