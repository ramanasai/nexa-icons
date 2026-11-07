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
var wifi_exports = {};
__export(wifi_exports, {
  Wifi: () => Wifi
});
module.exports = __toCommonJS(wifi_exports);
var import_createIcon = require("../createIcon.js");
const Wifi = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Wifi",
  kebab: "wifi",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M12 20h.01", pathLength: "1" }], ["path", { d: "M2 8.82a15 15 0 0 1 20 0", pathLength: "1" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0", pathLength: "1" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", pathLength: "1" }]]
});
