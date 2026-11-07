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
var log_out_exports = {};
__export(log_out_exports, {
  LogOut: () => LogOut
});
module.exports = __toCommonJS(log_out_exports);
var import_createIcon = require("../createIcon.js");
const LogOut = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "LogOut",
  kebab: "log-out",
  fillSafe: false,
  fillUnsafe: false,
  preset: "nudge-left",
  trigger: "hover",
  nodes: [["path", { d: "m16 17 5-5-5-5", pathLength: "1" }], ["path", { d: "M21 12H9", pathLength: "1" }], ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", pathLength: "1" }]]
});
