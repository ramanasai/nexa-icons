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
var reply_exports = {};
__export(reply_exports, {
  Reply: () => Reply
});
module.exports = __toCommonJS(reply_exports);
var import_createIcon = require("../createIcon.js");
const Reply = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Reply",
  kebab: "reply",
  fillSafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4" }], ["path", { d: "m9 17-5-5 5-5" }]]
});
