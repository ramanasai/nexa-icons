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
var tram_front_exports = {};
__export(tram_front_exports, {
  TramFront: () => TramFront
});
module.exports = __toCommonJS(tram_front_exports);
var import_createIcon = require("../createIcon.js");
const TramFront = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "TramFront",
  kebab: "tram-front",
  fillSafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }], ["path", { d: "M4 11h16" }], ["path", { d: "M12 3v8" }], ["path", { d: "m8 19-2 3" }], ["path", { d: "m18 22-2-3" }], ["path", { d: "M8 15h.01" }], ["path", { d: "M16 15h.01" }]]
});
