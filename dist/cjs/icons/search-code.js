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
var search_code_exports = {};
__export(search_code_exports, {
  SearchCode: () => SearchCode
});
module.exports = __toCommonJS(search_code_exports);
var import_createIcon = require("../createIcon.js");
const SearchCode = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "SearchCode",
  kebab: "search-code",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "m13 13.5 2-2.5-2-2.5", pathLength: "1" }], ["path", { d: "m21 21-4.3-4.3", pathLength: "1" }], ["path", { d: "M9 8.5 7 11l2 2.5", pathLength: "1" }], ["circle", { cx: "11", cy: "11", r: "8" }]]
});
