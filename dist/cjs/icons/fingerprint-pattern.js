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
var fingerprint_pattern_exports = {};
__export(fingerprint_pattern_exports, {
  Fingerprint: () => Fingerprint
});
module.exports = __toCommonJS(fingerprint_pattern_exports);
var import_createIcon = require("../createIcon.js");
const Fingerprint = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Fingerprint",
  kebab: "fingerprint-pattern",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", pathLength: "1" }], ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", pathLength: "1" }], ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", pathLength: "1" }], ["path", { d: "M2 12a10 10 0 0 1 18-6", pathLength: "1" }], ["path", { d: "M2 16h.01", pathLength: "1" }], ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", pathLength: "1" }], ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", pathLength: "1" }], ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", pathLength: "1" }], ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", pathLength: "1" }]]
});
