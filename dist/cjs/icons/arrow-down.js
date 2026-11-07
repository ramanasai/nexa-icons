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
var arrow_down_exports = {};
__export(arrow_down_exports, {
  ArrowDown: () => ArrowDown
});
module.exports = __toCommonJS(arrow_down_exports);
var import_createIcon = require("../createIcon.js");
const ArrowDown = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ArrowDown",
  kebab: "arrow-down",
  fillSafe: false,
  fillUnsafe: false,
  preset: "nudge-down",
  trigger: "hover",
  nodes: [["path", { d: "M12 5v14", pathLength: "1" }], ["path", { d: "m19 12-7 7-7-7", pathLength: "1" }]]
});
