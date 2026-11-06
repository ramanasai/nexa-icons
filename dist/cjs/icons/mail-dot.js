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
var mail_dot_exports = {};
__export(mail_dot_exports, {
  MailDot: () => MailDot
});
module.exports = __toCommonJS(mail_dot_exports);
var import_createIcon = require("../createIcon.js");
const MailDot = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "MailDot",
  kebab: "mail-dot",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M12.674 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.675" }], ["path", { d: "m2 7 9 5.701a2 2 0 0 0 2 0l1.084-.686" }], ["circle", { cx: "19", cy: "7", r: "3" }]]
});
