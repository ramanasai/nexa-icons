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
var resume_exports = {};
__export(resume_exports, {
  Resume: () => Resume
});
module.exports = __toCommonJS(resume_exports);
var import_createIcon = require("../createIcon.js");
const Resume = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Resume",
  kebab: "resume",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" }], ["path", { d: "M14 3v5h5" }], ["circle", { cx: "10", cy: "12", r: "2" }], ["path", { d: "M7.5 17c.4-1.4 1.4-2.2 2.5-2.2s2.1.8 2.5 2.2" }], ["path", { d: "M14 11h3M14 14h3" }]]
});
