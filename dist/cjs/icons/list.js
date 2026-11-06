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
var list_exports = {};
__export(list_exports, {
  List: () => List
});
module.exports = __toCommonJS(list_exports);
var import_createIcon = require("../createIcon.js");
const List = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "List",
  kebab: "list",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M3 5h.01" }], ["path", { d: "M3 12h.01" }], ["path", { d: "M3 19h.01" }], ["path", { d: "M8 5h13" }], ["path", { d: "M8 12h13" }], ["path", { d: "M8 19h13" }]]
});
