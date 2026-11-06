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
var credit_card_exports = {};
__export(credit_card_exports, {
  CreditCard: () => CreditCard
});
module.exports = __toCommonJS(credit_card_exports);
var import_createIcon = require("../createIcon.js");
const CreditCard = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CreditCard",
  kebab: "credit-card",
  fillSafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }], ["line", { "x1": "2", "x2": "22", "y1": "10", "y2": "10" }], ["path", { d: "M6 14h2" }]]
});
