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
var list_check_exports = {};
__export(list_check_exports, {
  ListCheck: () => ListCheck
});
module.exports = __toCommonJS(list_check_exports);
var import_createIcon = require("../createIcon.js");
const ListCheck = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ListCheck",
  kebab: "list-check",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M16 5H3", pathLength: "1" }], ["path", { d: "M16 12H3", pathLength: "1" }], ["path", { d: "M11 19H3", pathLength: "1" }], ["path", { d: "m15 18 2 2 4-4", pathLength: "1" }]]
});
