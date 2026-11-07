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
var scan_barcode_exports = {};
__export(scan_barcode_exports, {
  ScanBarcode: () => ScanBarcode
});
module.exports = __toCommonJS(scan_barcode_exports);
var import_createIcon = require("../createIcon.js");
const ScanBarcode = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ScanBarcode",
  kebab: "scan-barcode",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", pathLength: "1" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", pathLength: "1" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", pathLength: "1" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", pathLength: "1" }], ["path", { d: "M8 7v10", pathLength: "1" }], ["path", { d: "M12 7v10", pathLength: "1" }], ["path", { d: "M17 7v10", pathLength: "1" }]]
});
