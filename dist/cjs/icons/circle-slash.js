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
var circle_slash_exports = {};
__export(circle_slash_exports, {
  CircleSlash: () => CircleSlash
});
module.exports = __toCommonJS(circle_slash_exports);
var import_createIcon = require("../createIcon.js");
const CircleSlash = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CircleSlash",
  kebab: "circle-slash",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { "x1": "9", "x2": "15", "y1": "15", "y2": "9" }]]
});
