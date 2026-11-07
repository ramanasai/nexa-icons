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
var corner_left_up_exports = {};
__export(corner_left_up_exports, {
  CornerLeftUp: () => CornerLeftUp
});
module.exports = __toCommonJS(corner_left_up_exports);
var import_createIcon = require("../createIcon.js");
const CornerLeftUp = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CornerLeftUp",
  kebab: "corner-left-up",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M14 9 9 4 4 9", pathLength: "1" }], ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", pathLength: "1" }]]
});
