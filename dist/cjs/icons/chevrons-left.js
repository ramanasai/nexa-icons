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
var chevrons_left_exports = {};
__export(chevrons_left_exports, {
  ChevronsLeft: () => ChevronsLeft
});
module.exports = __toCommonJS(chevrons_left_exports);
var import_createIcon = require("../createIcon.js");
const ChevronsLeft = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ChevronsLeft",
  kebab: "chevrons-left",
  fillSafe: false,
  fillUnsafe: false,
  preset: "nudge-left",
  trigger: "hover",
  nodes: [["path", { d: "m11 17-5-5 5-5", pathLength: "1" }], ["path", { d: "m18 17-5-5 5-5", pathLength: "1" }]]
});
