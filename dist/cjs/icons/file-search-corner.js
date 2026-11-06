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
var file_search_corner_exports = {};
__export(file_search_corner_exports, {
  FileSearchCorner: () => FileSearchCorner
});
module.exports = __toCommonJS(file_search_corner_exports);
var import_createIcon = require("../createIcon.js");
const FileSearchCorner = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "FileSearchCorner",
  kebab: "file-search-corner",
  fillSafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { d: "m21 22-2.88-2.88" }], ["circle", { cx: "16", cy: "17", r: "3" }]]
});
