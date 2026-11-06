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
var passport_exports = {};
__export(passport_exports, {
  Passport: () => Passport
});
module.exports = __toCommonJS(passport_exports);
var import_createIcon = require("../createIcon.js");
const Passport = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Passport",
  kebab: "passport",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M7 3.5h9.5A1.5 1.5 0 0 1 18 5v14a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Z" }], ["circle", { cx: "11.75", cy: "11.5", r: "3" }], ["path", { d: "M9.8 10h4M9.8 12h4M9.8 14h4" }], ["path", { d: "M7 3.5c0 1.2.8 2 2 2h5.5c1.2 0 2-.8 2-2" }]]
});
