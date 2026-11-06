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
var plug_2_exports = {};
__export(plug_2_exports, {
  Plug2: () => Plug2
});
module.exports = __toCommonJS(plug_2_exports);
var import_createIcon = require("../createIcon.js");
const Plug2 = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Plug2",
  kebab: "plug-2",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M9 2v6" }], ["path", { d: "M15 2v6" }], ["path", { d: "M12 17v5" }], ["path", { d: "M5 8h14" }], ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z" }]]
});
