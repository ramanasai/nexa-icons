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
var navigation_2_exports = {};
__export(navigation_2_exports, {
  Navigation2: () => Navigation2
});
module.exports = __toCommonJS(navigation_2_exports);
var import_createIcon = require("../createIcon.js");
const Navigation2 = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Navigation2",
  kebab: "navigation-2",
  fillSafe: true,
  preset: "pulse",
  trigger: "hover",
  nodes: [["polygon", { points: "12 2 19 21 12 17 5 21 12 2" }]]
});
