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
var variable_exports = {};
__export(variable_exports, {
  Variable: () => Variable
});
module.exports = __toCommonJS(variable_exports);
var import_createIcon = require("../createIcon.js");
const Variable = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Variable",
  kebab: "variable",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M8 21s-4-3-4-9 4-9 4-9", pathLength: "1" }], ["path", { d: "M16 3s4 3 4 9-4 9-4 9", pathLength: "1" }], ["line", { "x1": "15", "x2": "9", "y1": "9", "y2": "15" }], ["line", { "x1": "9", "x2": "15", "y1": "9", "y2": "15" }]]
});
