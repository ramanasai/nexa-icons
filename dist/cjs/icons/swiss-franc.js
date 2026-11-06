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
var swiss_franc_exports = {};
__export(swiss_franc_exports, {
  SwissFranc: () => SwissFranc
});
module.exports = __toCommonJS(swiss_franc_exports);
var import_createIcon = require("../createIcon.js");
const SwissFranc = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "SwissFranc",
  kebab: "swiss-franc",
  fillSafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M10 10h7" }], ["path", { d: "M10 20V5a1 1 0 011-1h7" }], ["path", { d: "M6 16h9" }]]
});
