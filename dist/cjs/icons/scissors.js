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
var scissors_exports = {};
__export(scissors_exports, {
  Scissors: () => Scissors
});
module.exports = __toCommonJS(scissors_exports);
var import_createIcon = require("../createIcon.js");
const Scissors = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Scissors",
  kebab: "scissors",
  fillSafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M8.12 8.12 12 12" }], ["path", { d: "M20 4 8.12 15.88" }], ["circle", { cx: "6", cy: "18", r: "3" }], ["path", { d: "M14.8 14.8 20 20" }]]
});
