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
var school_exports = {};
__export(school_exports, {
  School: () => School
});
module.exports = __toCommonJS(school_exports);
var import_createIcon = require("../createIcon.js");
const School = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "School",
  kebab: "school",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }], ["path", { d: "M18 4.933V21" }], ["path", { d: "m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" }], ["path", { d: "m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" }], ["path", { d: "M6 4.933V21" }], ["circle", { cx: "12", cy: "9", r: "2" }]]
});
