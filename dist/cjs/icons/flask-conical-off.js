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
var flask_conical_off_exports = {};
__export(flask_conical_off_exports, {
  FlaskConicalOff: () => FlaskConicalOff
});
module.exports = __toCommonJS(flask_conical_off_exports);
var import_createIcon = require("../createIcon.js");
const FlaskConicalOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "FlaskConicalOff",
  kebab: "flask-conical-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M10 2v2.343", pathLength: "1" }], ["path", { d: "M14 2v6.343", pathLength: "1" }], ["path", { d: "m2 2 20 20", pathLength: "1" }], ["path", { d: "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563", pathLength: "1" }], ["path", { d: "M6.453 15H15", pathLength: "1" }], ["path", { d: "M8.5 2h7", pathLength: "1" }]]
});
