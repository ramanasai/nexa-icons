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
var bell_off_exports = {};
__export(bell_off_exports, {
  BellOff: () => BellOff
});
module.exports = __toCommonJS(bell_off_exports);
var import_createIcon = require("../createIcon.js");
const BellOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "BellOff",
  kebab: "bell-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "ring",
  trigger: "hover",
  nodes: [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", pathLength: "1" }], ["path", { d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742", pathLength: "1" }], ["path", { d: "m2 2 20 20", pathLength: "1" }], ["path", { d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05", pathLength: "1" }]]
});
