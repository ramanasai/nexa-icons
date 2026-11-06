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
var disc_album_exports = {};
__export(disc_album_exports, {
  DiscAlbum: () => DiscAlbum
});
module.exports = __toCommonJS(disc_album_exports);
var import_createIcon = require("../createIcon.js");
const DiscAlbum = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "DiscAlbum",
  kebab: "disc-album",
  fillSafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["circle", { cx: "12", cy: "12", r: "5" }], ["path", { d: "M12 12h.01" }]]
});
