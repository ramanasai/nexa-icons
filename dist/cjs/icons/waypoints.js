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
var waypoints_exports = {};
__export(waypoints_exports, {
  Waypoints: () => Waypoints
});
module.exports = __toCommonJS(waypoints_exports);
var import_createIcon = require("../createIcon.js");
const Waypoints = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Waypoints",
  kebab: "waypoints",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "m10.586 5.414-5.172 5.172", pathLength: "1" }], ["path", { d: "m18.586 13.414-5.172 5.172", pathLength: "1" }], ["path", { d: "M6 12h12", pathLength: "1" }], ["circle", { cx: "12", cy: "20", r: "2" }], ["circle", { cx: "12", cy: "4", r: "2" }], ["circle", { cx: "20", cy: "12", r: "2" }], ["circle", { cx: "4", cy: "12", r: "2" }]]
});
