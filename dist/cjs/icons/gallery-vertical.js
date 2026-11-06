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
var gallery_vertical_exports = {};
__export(gallery_vertical_exports, {
  GalleryVertical: () => GalleryVertical
});
module.exports = __toCommonJS(gallery_vertical_exports);
var import_createIcon = require("../createIcon.js");
const GalleryVertical = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "GalleryVertical",
  kebab: "gallery-vertical",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M3 2h18" }], ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2" }], ["path", { d: "M3 22h18" }]]
});
