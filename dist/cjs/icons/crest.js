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
var crest_exports = {};
__export(crest_exports, {
  Crest: () => Crest
});
module.exports = __toCommonJS(crest_exports);
var import_createIcon = require("../createIcon.js");
const Crest = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Crest",
  kebab: "crest",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M12 3 5 6v5c0 4.2 2.8 7.4 7 9 4.2-1.6 7-4.8 7-9V6l-7-3Z", pathLength: "1" }], ["path", { d: "m9.5 11.5 2.5-2.5 2.5 2.5", pathLength: "1" }], ["path", { d: "M12 9v6", pathLength: "1" }]]
});
