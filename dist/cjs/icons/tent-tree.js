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
var tent_tree_exports = {};
__export(tent_tree_exports, {
  TentTree: () => TentTree
});
module.exports = __toCommonJS(tent_tree_exports);
var import_createIcon = require("../createIcon.js");
const TentTree = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "TentTree",
  kebab: "tent-tree",
  fillSafe: false,
  fillUnsafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["circle", { cx: "4", cy: "4", r: "2" }], ["path", { d: "m14 5 3-3 3 3" }], ["path", { d: "m14 10 3-3 3 3" }], ["path", { d: "M17 14V2" }], ["path", { d: "M17 14H7l-5 8h20Z" }], ["path", { d: "M8 14v8" }], ["path", { d: "m9 14 5 8" }]]
});
