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
var sun_dim_exports = {};
__export(sun_dim_exports, {
  SunDim: () => SunDim
});
module.exports = __toCommonJS(sun_dim_exports);
var import_createIcon = require("../createIcon.js");
const SunDim = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "SunDim",
  kebab: "sun-dim",
  fillSafe: false,
  fillUnsafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M12 4h.01", pathLength: "1" }], ["path", { d: "M20 12h.01", pathLength: "1" }], ["path", { d: "M12 20h.01", pathLength: "1" }], ["path", { d: "M4 12h.01", pathLength: "1" }], ["path", { d: "M17.657 6.343h.01", pathLength: "1" }], ["path", { d: "M17.657 17.657h.01", pathLength: "1" }], ["path", { d: "M6.343 17.657h.01", pathLength: "1" }], ["path", { d: "M6.343 6.343h.01", pathLength: "1" }]]
});
