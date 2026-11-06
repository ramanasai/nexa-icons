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
var spell_check_exports = {};
__export(spell_check_exports, {
  SpellCheck: () => SpellCheck
});
module.exports = __toCommonJS(spell_check_exports);
var import_createIcon = require("../createIcon.js");
const SpellCheck = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "SpellCheck",
  kebab: "spell-check",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "m20 15-5.5 5.5L12 18" }], ["path", { d: "m4 16 6-12 5.115 10.23" }], ["path", { d: "M6 12h8" }]]
});
