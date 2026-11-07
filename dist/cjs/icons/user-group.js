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
var user_group_exports = {};
__export(user_group_exports, {
  UserGroup: () => UserGroup
});
module.exports = __toCommonJS(user_group_exports);
var import_createIcon = require("../createIcon.js");
const UserGroup = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "UserGroup",
  kebab: "user-group",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M17 21v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1", pathLength: "1" }], ["path", { d: "M19 10h1a2 2 0 012 2v1", pathLength: "1" }], ["path", { d: "M5 10H4a2 2 0 00-2 2v1", pathLength: "1" }], ["circle", { cx: "12", cy: "11", r: "3" }], ["circle", { cx: "18", cy: "4", r: "2" }], ["circle", { cx: "6", cy: "4", r: "2" }]]
});
