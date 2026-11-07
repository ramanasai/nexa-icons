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
var speaker_exports = {};
__export(speaker_exports, {
  Speaker: () => Speaker
});
module.exports = __toCommonJS(speaker_exports);
var import_createIcon = require("../createIcon.js");
const Speaker = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Speaker",
  kebab: "speaker",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["path", { d: "M12 6h.01", pathLength: "1" }], ["circle", { cx: "12", cy: "14", r: "4" }], ["path", { d: "M12 14h.01", pathLength: "1" }]]
});
