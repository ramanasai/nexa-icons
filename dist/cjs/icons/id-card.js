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
var id_card_exports = {};
__export(id_card_exports, {
  IdCard: () => IdCard
});
module.exports = __toCommonJS(id_card_exports);
var import_createIcon = require("../createIcon.js");
const IdCard = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "IdCard",
  kebab: "id-card",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M13 19a4 4 0 00-8 0" }], ["path", { d: "M16 10h2" }], ["path", { d: "M16 14h2" }], ["circle", { cx: "9", cy: "12", r: "3" }], ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }]]
});
