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
var hourglass_cog_exports = {};
__export(hourglass_cog_exports, {
  HourglassCog: () => HourglassCog
});
module.exports = __toCommonJS(hourglass_cog_exports);
var import_createIcon = require("../createIcon.js");
const HourglassCog = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "HourglassCog",
  kebab: "hourglass-cog",
  fillSafe: false,
  fillUnsafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "m14.305 19.53.923-.382", pathLength: "1" }], ["path", { d: "m15.228 16.852-.923-.383", pathLength: "1" }], ["path", { d: "m16.852 15.228-.383-.923", pathLength: "1" }], ["path", { d: "m16.852 20.772-.383.924", pathLength: "1" }], ["path", { d: "M17 2v4.172a2 2 0 0 1-.586 1.414l-8.828 8.828A2 2 0 0 0 7 17.828V22", pathLength: "1" }], ["path", { d: "m19.148 15.228.383-.923", pathLength: "1" }], ["path", { d: "m19.53 21.696-.382-.924", pathLength: "1" }], ["path", { d: "m20.772 16.852.924-.383", pathLength: "1" }], ["path", { d: "m20.772 19.148.924.383", pathLength: "1" }], ["path", { d: "M5 22h6.159", pathLength: "1" }], ["path", { d: "M5 2h14", pathLength: "1" }], ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414l5.188 5.188", pathLength: "1" }], ["circle", { cx: "18", cy: "18", r: "3" }]]
});
