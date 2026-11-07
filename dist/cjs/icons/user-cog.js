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
var user_cog_exports = {};
__export(user_cog_exports, {
  UserCog: () => UserCog
});
module.exports = __toCommonJS(user_cog_exports);
var import_createIcon = require("../createIcon.js");
const UserCog = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "UserCog",
  kebab: "user-cog",
  fillSafe: false,
  fillUnsafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", pathLength: "1" }], ["path", { d: "m14.305 16.53.923-.382", pathLength: "1" }], ["path", { d: "m15.228 13.852-.923-.383", pathLength: "1" }], ["path", { d: "m16.852 12.228-.383-.923", pathLength: "1" }], ["path", { d: "m16.852 17.772-.383.924", pathLength: "1" }], ["path", { d: "m19.148 12.228.383-.923", pathLength: "1" }], ["path", { d: "m19.53 18.696-.382-.924", pathLength: "1" }], ["path", { d: "m20.772 13.852.924-.383", pathLength: "1" }], ["path", { d: "m20.772 16.148.924.383", pathLength: "1" }], ["circle", { cx: "18", cy: "15", r: "3" }], ["circle", { cx: "9", cy: "7", r: "4" }]]
});
