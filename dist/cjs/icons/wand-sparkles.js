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
var wand_sparkles_exports = {};
__export(wand_sparkles_exports, {
  Wand2: () => Wand2
});
module.exports = __toCommonJS(wand_sparkles_exports);
var import_createIcon = require("../createIcon.js");
const Wand2 = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Wand2",
  kebab: "wand-sparkles",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72", pathLength: "1" }], ["path", { d: "m14 7 3 3", pathLength: "1" }], ["path", { d: "M5 6v4", pathLength: "1" }], ["path", { d: "M19 14v4", pathLength: "1" }], ["path", { d: "M10 2v2", pathLength: "1" }], ["path", { d: "M7 8H3", pathLength: "1" }], ["path", { d: "M21 16h-4", pathLength: "1" }], ["path", { d: "M11 3H9", pathLength: "1" }]]
});
