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
var onsite_exports = {};
__export(onsite_exports, {
  Onsite: () => Onsite
});
module.exports = __toCommonJS(onsite_exports);
var import_createIcon = require("../createIcon.js");
const Onsite = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Onsite",
  kebab: "onsite",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M4 21h16", pathLength: "1" }], ["path", { d: "M6 21V8l6-4 6 4v13", pathLength: "1" }], ["path", { d: "M10 21v-5h4v5", pathLength: "1" }], ["circle", { cx: "12", cy: "10", r: "1.5" }]]
});
