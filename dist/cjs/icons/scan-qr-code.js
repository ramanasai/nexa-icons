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
var scan_qr_code_exports = {};
__export(scan_qr_code_exports, {
  ScanQrCode: () => ScanQrCode
});
module.exports = __toCommonJS(scan_qr_code_exports);
var import_createIcon = require("../createIcon.js");
const ScanQrCode = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ScanQrCode",
  kebab: "scan-qr-code",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M17 12v4a1 1 0 0 1-1 1h-4" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M17 8V7" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M7 17h.01" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["rect", { x: "7", y: "7", width: "5", height: "5", rx: "1" }]]
});
