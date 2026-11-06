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
var credit_card_check_exports = {};
__export(credit_card_check_exports, {
  CreditCardCheck: () => CreditCardCheck
});
module.exports = __toCommonJS(credit_card_check_exports);
var import_createIcon = require("../createIcon.js");
const CreditCardCheck = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CreditCardCheck",
  kebab: "credit-card-check",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M12.5 19H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v4" }], ["path", { d: "M2 10h20" }], ["path", { d: "M6 14h2" }], ["path", { d: "m16 17 2 2 4-4" }]]
});
