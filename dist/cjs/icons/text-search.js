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
var text_search_exports = {};
__export(text_search_exports, {
  TextSearch: () => TextSearch
});
module.exports = __toCommonJS(text_search_exports);
var import_createIcon = require("../createIcon.js");
const TextSearch = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "TextSearch",
  kebab: "text-search",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M21 5H3" }], ["path", { d: "M10 12H3" }], ["path", { d: "M10 19H3" }], ["circle", { cx: "17", cy: "15", r: "3" }], ["path", { d: "m21 19-1.9-1.9" }]]
});
