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
var luggage_exports = {};
__export(luggage_exports, {
  Luggage: () => Luggage
});
module.exports = __toCommonJS(luggage_exports);
var import_createIcon = require("../createIcon.js");
const Luggage = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Luggage",
  kebab: "luggage",
  fillSafe: false,
  fillUnsafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2", pathLength: "1" }], ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14", pathLength: "1" }], ["path", { d: "M10 20h4", pathLength: "1" }], ["circle", { cx: "16", cy: "20", r: "2" }], ["circle", { cx: "8", cy: "20", r: "2" }]]
});
