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
var remote_exports = {};
__export(remote_exports, {
  Remote: () => Remote
});
module.exports = __toCommonJS(remote_exports);
var import_createIcon = require("../createIcon.js");
const Remote = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Remote",
  kebab: "remote",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["rect", { x: "4", y: "5", width: "16", height: "9", rx: "1.5" }], ["path", { d: "M2 18h20" }], ["path", { d: "M8 8c2-2 6-2 8 0" }], ["path", { d: "M10 10c1.2-1.2 2.8-1.2 4 0" }]]
});
