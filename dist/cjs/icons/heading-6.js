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
var heading_6_exports = {};
__export(heading_6_exports, {
  Heading6: () => Heading6
});
module.exports = __toCommonJS(heading_6_exports);
var import_createIcon = require("../createIcon.js");
const Heading6 = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "Heading6",
  kebab: "heading-6",
  fillSafe: false,
  fillUnsafe: false,
  preset: "wiggle",
  trigger: "hover",
  nodes: [["path", { d: "M4 12h8", pathLength: "1" }], ["path", { d: "M4 18V6", pathLength: "1" }], ["path", { d: "M12 18V6", pathLength: "1" }], ["circle", { cx: "19", cy: "16", r: "2" }], ["path", { d: "M20 10c-2 2-3 3.5-3 6", pathLength: "1" }]]
});
