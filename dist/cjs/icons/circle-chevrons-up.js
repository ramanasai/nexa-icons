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
var circle_chevrons_up_exports = {};
__export(circle_chevrons_up_exports, {
  CircleChevronsUp: () => CircleChevronsUp
});
module.exports = __toCommonJS(circle_chevrons_up_exports);
var import_createIcon = require("../createIcon.js");
const CircleChevronsUp = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "CircleChevronsUp",
  kebab: "circle-chevrons-up",
  fillSafe: false,
  fillUnsafe: false,
  preset: "nudge-up",
  trigger: "hover",
  nodes: [["path", { d: "M15 10L12 7L9 10" }], ["path", { d: "M15 16L12 13L9 16" }], ["circle", { cx: "12", cy: "12", r: "10" }]]
});
