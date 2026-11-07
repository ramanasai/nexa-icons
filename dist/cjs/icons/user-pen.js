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
var user_pen_exports = {};
__export(user_pen_exports, {
  UserPen: () => UserPen
});
module.exports = __toCommonJS(user_pen_exports);
var import_createIcon = require("../createIcon.js");
const UserPen = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "UserPen",
  kebab: "user-pen",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2", pathLength: "1" }], ["path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", pathLength: "1" }], ["circle", { cx: "10", cy: "7", r: "4" }]]
});
