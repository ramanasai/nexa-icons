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
var users_round_collaboration_exports = {};
__export(users_round_collaboration_exports, {
  UsersRoundCollaboration: () => UsersRoundCollaboration
});
module.exports = __toCommonJS(users_round_collaboration_exports);
var import_createIcon = require("../createIcon.js");
const UsersRoundCollaboration = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "UsersRoundCollaboration",
  kebab: "users-round-collaboration",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M20.453 8.911a9 9 0 00-6.696-5.738", pathLength: "1" }], ["path", { d: "M21 22a4 4 0 00-8 0", pathLength: "1" }], ["path", { d: "M3 12a4 4 0 017.963-.543", pathLength: "1" }], ["path", { d: "M3.889 15.9a9 9 0 005.247 4.632", pathLength: "1" }], ["circle", { cx: "17", cy: "15", r: "3" }], ["circle", { cx: "7", cy: "5", r: "3" }]]
});
