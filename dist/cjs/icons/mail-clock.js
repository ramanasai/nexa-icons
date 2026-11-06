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
var mail_clock_exports = {};
__export(mail_clock_exports, {
  MailClock: () => MailClock
});
module.exports = __toCommonJS(mail_clock_exports);
var import_createIcon = require("../createIcon.js");
const MailClock = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "MailClock",
  kebab: "mail-clock",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M16 14v2.2l1.6 1" }], ["path", { d: "m22 7-.759.484" }], ["path", { d: "M6.835 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v2" }], ["path", { d: "M7.605 10.567 2 7" }], ["circle", { cx: "16", cy: "16", r: "6" }]]
});
