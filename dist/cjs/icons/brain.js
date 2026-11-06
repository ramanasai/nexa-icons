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
var brain_exports = {};
__export(brain_exports, {
  Brain: () => Brain
});
module.exports = __toCommonJS(brain_exports);
var import_createIcon = require("../createIcon.js");
const Brain = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Brain",
  kebab: "brain",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M12 18V5" }], ["path", { d: "M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4" }], ["path", { d: "M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294" }], ["path", { d: "M17.996 5.125a4 4 0 012.526 5.77" }], ["path", { d: "M18 18a4 4 0 002-7.465" }], ["path", { d: "M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517" }], ["path", { d: "M6 18a4 4 0 01-2-7.465" }], ["path", { d: "M6.004 5.125a4 4 0 00-2.526 5.77" }]]
});
