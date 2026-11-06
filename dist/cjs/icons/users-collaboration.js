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
var users_collaboration_exports = {};
__export(users_collaboration_exports, {
  UsersCollaboration: () => UsersCollaboration
});
module.exports = __toCommonJS(users_collaboration_exports);
var import_createIcon = require("../createIcon.js");
const UsersCollaboration = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "UsersCollaboration",
  kebab: "users-collaboration",
  fillSafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["path", { d: "M12.925 3.047a9 9 0 017.616 6.11" }], ["path", { d: "M13 22a2 2 0 012-2h4a2 2 0 012 2" }], ["path", { d: "M3 12a2 2 0 012-2h4a2 2 0 012 2" }], ["path", { d: "M3.889 15.9a9 9 0 005.247 4.632" }], ["circle", { cx: "17", cy: "14", r: "2" }], ["circle", { cx: "7", cy: "4", r: "2" }]]
});
