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
var orbit_exports = {};
__export(orbit_exports, {
  Orbit: () => Orbit
});
module.exports = __toCommonJS(orbit_exports);
var import_createIcon = require("../createIcon.js");
const Orbit = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Orbit",
  kebab: "orbit",
  fillSafe: false,
  fillUnsafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "M20.341 6.484A10 10 0 0 1 10.266 21.85" }], ["path", { d: "M3.659 17.516A10 10 0 0 1 13.74 2.152" }], ["circle", { cx: "12", cy: "12", r: "3" }], ["circle", { cx: "19", cy: "5", r: "2" }], ["circle", { cx: "5", cy: "19", r: "2" }]]
});
