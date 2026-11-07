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
var mail_exports = {};
__export(mail_exports, {
  Mail: () => Mail
});
module.exports = __toCommonJS(mail_exports);
var import_createIcon = require("../createIcon.js");
const Mail = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Mail",
  kebab: "mail",
  fillSafe: false,
  fillUnsafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", pathLength: "1" }], ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }]]
});
