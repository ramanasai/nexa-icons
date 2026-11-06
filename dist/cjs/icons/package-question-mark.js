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
var package_question_mark_exports = {};
__export(package_question_mark_exports, {
  PackageQuestionMark: () => PackageQuestionMark
});
module.exports = __toCommonJS(package_question_mark_exports);
var import_createIcon = require("../createIcon.js");
const PackageQuestionMark = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "PackageQuestionMark",
  kebab: "package-question-mark",
  fillSafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M12 22V12l8.71-5" }], ["path", { d: "M17 15.27c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" }], ["path", { d: "M19 21.99h.01" }], ["path", { d: "M21 10.342V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2.33-1.332" }], ["path", { d: "M3.29 7 12 12" }], ["path", { d: "m7.5 4.27 9 5.15" }]]
});
