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
var circle_chevrons_left_exports = {};
__export(circle_chevrons_left_exports, {
  CircleChevronsLeft: () => CircleChevronsLeft
});
module.exports = __toCommonJS(circle_chevrons_left_exports);
var import_createIcon = require("../createIcon.js");
const CircleChevronsLeft = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CircleChevronsLeft",
  kebab: "circle-chevrons-left",
  fillSafe: false,
  fillUnsafe: false,
  preset: "nudge-left",
  trigger: "hover",
  nodes: [["path", { d: "M10 9L7 12L10 15", pathLength: "1" }], ["path", { d: "M16 9L13 12L16 15", pathLength: "1" }], ["circle", { cx: "12", cy: "12", r: "10" }]]
});
