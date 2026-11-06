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
var list_collapse_exports = {};
__export(list_collapse_exports, {
  ListCollapse: () => ListCollapse
});
module.exports = __toCommonJS(list_collapse_exports);
var import_createIcon = require("../createIcon.js");
const ListCollapse = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ListCollapse",
  kebab: "list-collapse",
  fillSafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M10 5h11" }], ["path", { d: "M10 12h11" }], ["path", { d: "M10 19h11" }], ["path", { d: "m3 10 3-3-3-3" }], ["path", { d: "m3 20 3-3-3-3" }]]
});
