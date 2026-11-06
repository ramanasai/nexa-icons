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
var voicemail_exports = {};
__export(voicemail_exports, {
  Voicemail: () => Voicemail
});
module.exports = __toCommonJS(voicemail_exports);
var import_createIcon = require("../createIcon.js");
const Voicemail = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Voicemail",
  kebab: "voicemail",
  fillSafe: false,
  fillUnsafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["circle", { cx: "6", cy: "12", r: "4" }], ["circle", { cx: "18", cy: "12", r: "4" }], ["line", { "x1": "6", "x2": "18", "y1": "16", "y2": "16" }]]
});
