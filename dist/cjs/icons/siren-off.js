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
var siren_off_exports = {};
__export(siren_off_exports, {
  SirenOff: () => SirenOff
});
module.exports = __toCommonJS(siren_off_exports);
var import_createIcon = require("../createIcon.js");
const SirenOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "SirenOff",
  kebab: "siren-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M12 12v6", pathLength: "1" }], ["path", { d: "M12 2v1", pathLength: "1" }], ["path", { d: "M12.707 7.05a5 5 0 0 1 4.243 4.243", pathLength: "1" }], ["path", { d: "M17 17v1H7a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2", pathLength: "1" }], ["path", { d: "M18.5 4.5 18 5", pathLength: "1" }], ["path", { d: "M2 12h1", pathLength: "1" }], ["path", { d: "m2 2 20 20", pathLength: "1" }], ["path", { d: "M21 12h1", pathLength: "1" }], ["path", { d: "M7 18v-6a5 5 0 0 1 1.464-3.536", pathLength: "1" }]]
});
