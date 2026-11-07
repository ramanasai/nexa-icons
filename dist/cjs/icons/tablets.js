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
var tablets_exports = {};
__export(tablets_exports, {
  Tablets: () => Tablets
});
module.exports = __toCommonJS(tablets_exports);
var import_createIcon = require("../createIcon.js");
const Tablets = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Tablets",
  kebab: "tablets",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["circle", { cx: "7", cy: "7", r: "5" }], ["circle", { cx: "17", cy: "17", r: "5" }], ["path", { d: "M12 17h10", pathLength: "1" }], ["path", { d: "m3.46 10.54 7.08-7.08", pathLength: "1" }]]
});
