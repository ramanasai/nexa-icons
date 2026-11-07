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
var cake_exports = {};
__export(cake_exports, {
  Cake: () => Cake
});
module.exports = __toCommonJS(cake_exports);
var import_createIcon = require("../createIcon.js");
const Cake = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Cake",
  kebab: "cake",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", pathLength: "1" }], ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1", pathLength: "1" }], ["path", { d: "M2 21h20", pathLength: "1" }], ["path", { d: "M7 8v3", pathLength: "1" }], ["path", { d: "M12 8v3", pathLength: "1" }], ["path", { d: "M17 8v3", pathLength: "1" }], ["path", { d: "M7 4h.01", pathLength: "1" }], ["path", { d: "M12 4h.01", pathLength: "1" }], ["path", { d: "M17 4h.01", pathLength: "1" }]]
});
