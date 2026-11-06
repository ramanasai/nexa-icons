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
var wand_exports = {};
__export(wand_exports, {
  Wand: () => Wand
});
module.exports = __toCommonJS(wand_exports);
var import_createIcon = require("../createIcon.js");
const Wand = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Wand",
  kebab: "wand",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M15 4V2" }], ["path", { d: "M15 16v-2" }], ["path", { d: "M8 9h2" }], ["path", { d: "M20 9h2" }], ["path", { d: "M17.8 11.8 19 13" }], ["path", { d: "M15 9h.01" }], ["path", { d: "M17.8 6.2 19 5" }], ["path", { d: "m3 21 9-9" }], ["path", { d: "M12.2 6.2 11 5" }]]
});
