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
var wifi_cog_exports = {};
__export(wifi_cog_exports, {
  WifiCog: () => WifiCog
});
module.exports = __toCommonJS(wifi_cog_exports);
var import_createIcon = require("../createIcon.js");
const WifiCog = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "WifiCog",
  kebab: "wifi-cog",
  fillSafe: false,
  fillUnsafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "m14.305 19.53.923-.382" }], ["path", { d: "m15.228 16.852-.923-.383" }], ["path", { d: "m16.852 15.228-.383-.923" }], ["path", { d: "m16.852 20.772-.383.924" }], ["path", { d: "m19.148 15.228.383-.923" }], ["path", { d: "m19.53 21.696-.382-.924" }], ["path", { d: "M2 8.82a15 15 0 0120 0" }], ["path", { d: "m20.772 16.852.924-.383" }], ["path", { d: "m20.772 19.148.924.383" }], ["path", { d: "M5 12.859a10 10 0 0110.18-2.342" }], ["path", { d: "M8.5 16.429a5 5 0 011.998-1.2" }], ["circle", { cx: "18", cy: "18", r: "3" }]]
});
