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
var heading_4_exports = {};
__export(heading_4_exports, {
  Heading4: () => Heading4
});
module.exports = __toCommonJS(heading_4_exports);
var import_createIcon = require("../createIcon.js");
const Heading4 = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Heading4",
  kebab: "heading-4",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M12 18V6" }], ["path", { d: "M17 10v3a1 1 0 0 0 1 1h3" }], ["path", { d: "M21 10v8" }], ["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }]]
});
