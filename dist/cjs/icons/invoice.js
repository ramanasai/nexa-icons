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
var invoice_exports = {};
__export(invoice_exports, {
  Invoice: () => Invoice
});
module.exports = __toCommonJS(invoice_exports);
var import_createIcon = require("../createIcon.js");
const Invoice = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Invoice",
  kebab: "invoice",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" }], ["path", { d: "M14 3v5h5" }], ["path", { d: "M9 13h6M9 16h4" }]]
});
