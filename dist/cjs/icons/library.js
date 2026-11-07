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
var library_exports = {};
__export(library_exports, {
  Library: () => Library
});
module.exports = __toCommonJS(library_exports);
var import_createIcon = require("../createIcon.js");
const Library = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Library",
  kebab: "library",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "m16 6 4 14", pathLength: "1" }], ["path", { d: "M12 6v14", pathLength: "1" }], ["path", { d: "M8 8v12", pathLength: "1" }], ["path", { d: "M4 4v16", pathLength: "1" }]]
});
