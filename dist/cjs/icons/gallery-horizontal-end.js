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
var gallery_horizontal_end_exports = {};
__export(gallery_horizontal_end_exports, {
  GalleryHorizontalEnd: () => GalleryHorizontalEnd
});
module.exports = __toCommonJS(gallery_horizontal_end_exports);
var import_createIcon = require("../createIcon.js");
const GalleryHorizontalEnd = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "GalleryHorizontalEnd",
  kebab: "gallery-horizontal-end",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M2 7v10" }], ["path", { d: "M6 5v14" }], ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2" }]]
});
