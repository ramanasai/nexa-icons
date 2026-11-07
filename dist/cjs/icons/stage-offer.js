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
var stage_offer_exports = {};
__export(stage_offer_exports, {
  StageOffer: () => StageOffer
});
module.exports = __toCommonJS(stage_offer_exports);
var import_createIcon = require("../createIcon.js");
const StageOffer = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "StageOffer",
  kebab: "stage-offer",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z", pathLength: "1" }], ["path", { d: "M14 3v5h5", pathLength: "1" }], ["circle", { cx: "12", cy: "15", r: "3" }], ["path", { d: "m10.8 15 1 1 1.7-1.9", pathLength: "1" }]]
});
