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
var brain_cog_exports = {};
__export(brain_cog_exports, {
  BrainCog: () => BrainCog
});
module.exports = __toCommonJS(brain_cog_exports);
var import_createIcon = require("../createIcon.js");
const BrainCog = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "BrainCog",
  kebab: "brain-cog",
  fillSafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "m10.852 14.772-.383.923" }], ["path", { d: "m10.852 9.228-.383-.923" }], ["path", { d: "m13.148 14.772.382.924" }], ["path", { d: "m13.53 8.305-.382.923" }], ["path", { d: "m14.772 10.852.923-.383" }], ["path", { d: "m14.772 13.148.923.383" }], ["path", { d: "M17.997 5.125a4 4 0 012.526 5.77" }], ["path", { d: "M18 18a4 4 0 002-7.464" }], ["path", { d: "M4.033 17.483A4 4 0 0011.46 20c.184-.31.896-.31 1.076 0a4 4 0 007.43-2.517" }], ["path", { d: "M6 18a4 4 0 01-2-7.464" }], ["path", { d: "M6.002 5.125a4 4 0 00-2.525 5.77" }], ["path", { d: "M6.293 6.294a3 3 0 01-.287-1.098l-.004-.07a3 3 0 015.968-.543c.05.02.057.01.059 0a3 3 0 015.968.542l-.004.071a3 3 0 01-.287 1.098" }], ["path", { d: "m9.228 10.852-.923-.383" }], ["path", { d: "m9.228 13.148-.923.383" }], ["circle", { cx: "12", cy: "12", r: "3" }]]
});
