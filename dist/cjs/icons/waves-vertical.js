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
var waves_vertical_exports = {};
__export(waves_vertical_exports, {
  WavesVertical: () => WavesVertical
});
module.exports = __toCommonJS(waves_vertical_exports);
var import_createIcon = require("../createIcon.js");
const WavesVertical = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "WavesVertical",
  kebab: "waves-vertical",
  fillSafe: false,
  fillUnsafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "M12 2q2 2.5 0 5t0 5 0 5 0 5", pathLength: "1" }], ["path", { d: "M19 2q2 2.5 0 5t0 5 0 5 0 5", pathLength: "1" }], ["path", { d: "M5 2q2 2.5 0 5t0 5 0 5 0 5", pathLength: "1" }]]
});
