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
var certificate_exports = {};
__export(certificate_exports, {
  Certificate: () => Certificate
});
module.exports = __toCommonJS(certificate_exports);
var import_createIcon = require("../createIcon.js");
const Certificate = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Certificate",
  kebab: "certificate",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5", pathLength: "1" }], ["path", { d: "M14 3v5h5", pathLength: "1" }], ["circle", { cx: "17", cy: "16", r: "3" }], ["path", { d: "m15.5 18.5 1 3 1.5-1 1.5 1 1-3", pathLength: "1" }]]
});
