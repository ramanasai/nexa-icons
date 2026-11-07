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
var smartphone_user_round_exports = {};
__export(smartphone_user_round_exports, {
  SmartphoneUserRound: () => SmartphoneUserRound
});
module.exports = __toCommonJS(smartphone_user_round_exports);
var import_createIcon = require("../createIcon.js");
const SmartphoneUserRound = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "SmartphoneUserRound",
  kebab: "smartphone-user-round",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M10 22H6a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2v4", pathLength: "1" }], ["path", { d: "M11 18h.01", pathLength: "1" }], ["path", { d: "M22 22a4 4 0 00-8 0", pathLength: "1" }], ["circle", { cx: "18", cy: "15", r: "3" }]]
});
