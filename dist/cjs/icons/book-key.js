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
var book_key_exports = {};
__export(book_key_exports, {
  BookKey: () => BookKey
});
module.exports = __toCommonJS(book_key_exports);
var import_createIcon = require("../createIcon.js");
const BookKey = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "BookKey",
  kebab: "book-key",
  fillSafe: false,
  fillUnsafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15", pathLength: "1" }], ["path", { d: "M17 2v6", pathLength: "1" }], ["path", { d: "M17 4h2", pathLength: "1" }], ["path", { d: "M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", pathLength: "1" }], ["circle", { cx: "17", cy: "10", r: "2" }]]
});
