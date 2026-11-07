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
var contact_round_exports = {};
__export(contact_round_exports, {
  ContactRound: () => ContactRound
});
module.exports = __toCommonJS(contact_round_exports);
var import_createIcon = require("../createIcon.js");
const ContactRound = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ContactRound",
  kebab: "contact-round",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M16 2v2", pathLength: "1" }], ["path", { d: "M17.915 21a6 6 0 10-12 0", pathLength: "1" }], ["path", { d: "M8 2v2", pathLength: "1" }], ["circle", { cx: "12", cy: "11", r: "4" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]]
});
