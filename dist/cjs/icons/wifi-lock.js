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
var wifi_lock_exports = {};
__export(wifi_lock_exports, {
  WifiLock: () => WifiLock
});
module.exports = __toCommonJS(wifi_lock_exports);
var import_createIcon = require("../createIcon.js");
const WifiLock = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "WifiLock",
  kebab: "wifi-lock",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M2 8.82a15 15 0 0120 0", pathLength: "1" }], ["path", { d: "M20 16v-2a2 2 0 00-4 0v2", pathLength: "1" }], ["path", { d: "M5 12.859a10 10 0 018.436-2.756", pathLength: "1" }], ["path", { d: "M8.5 16.429a5 5 0 011.794-1.13", pathLength: "1" }], ["rect", { x: "14", y: "16", width: "8", height: "5", rx: "1" }]]
});
