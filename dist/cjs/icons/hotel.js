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
var hotel_exports = {};
__export(hotel_exports, {
  Hotel: () => Hotel
});
module.exports = __toCommonJS(hotel_exports);
var import_createIcon = require("../createIcon.js");
const Hotel = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Hotel",
  kebab: "hotel",
  fillSafe: false,
  fillUnsafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "M10 22v-6.57", pathLength: "1" }], ["path", { d: "M12 11h.01", pathLength: "1" }], ["path", { d: "M12 7h.01", pathLength: "1" }], ["path", { d: "M14 15.43V22", pathLength: "1" }], ["path", { d: "M15 16a5 5 0 0 0-6 0", pathLength: "1" }], ["path", { d: "M16 11h.01", pathLength: "1" }], ["path", { d: "M16 7h.01", pathLength: "1" }], ["path", { d: "M8 11h.01", pathLength: "1" }], ["path", { d: "M8 7h.01", pathLength: "1" }], ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }]]
});
