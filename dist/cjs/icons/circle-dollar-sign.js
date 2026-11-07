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
var circle_dollar_sign_exports = {};
__export(circle_dollar_sign_exports, {
  CircleDollarSign: () => CircleDollarSign
});
module.exports = __toCommonJS(circle_dollar_sign_exports);
var import_createIcon = require("../createIcon.js");
const CircleDollarSign = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CircleDollarSign",
  kebab: "circle-dollar-sign",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", pathLength: "1" }], ["path", { d: "M12 18V6", pathLength: "1" }]]
});
