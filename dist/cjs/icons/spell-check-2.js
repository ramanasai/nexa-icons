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
var spell_check_2_exports = {};
__export(spell_check_2_exports, {
  SpellCheck2: () => SpellCheck2
});
module.exports = __toCommonJS(spell_check_2_exports);
var import_createIcon = require("../createIcon.js");
const SpellCheck2 = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "SpellCheck2",
  kebab: "spell-check-2",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "m6 16 6-12 6 12", pathLength: "1" }], ["path", { d: "M8 12h8", pathLength: "1" }], ["path", { d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1", pathLength: "1" }]]
});
