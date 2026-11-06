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
var forward_exports = {};
__export(forward_exports, {
  Forward: () => Forward
});
module.exports = __toCommonJS(forward_exports);
var import_createIcon = require("../createIcon.js");
const Forward = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Forward",
  kebab: "forward",
  fillSafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["path", { d: "m15 17 5-5-5-5" }], ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12" }]]
});
