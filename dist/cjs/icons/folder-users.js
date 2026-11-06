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
var folder_users_exports = {};
__export(folder_users_exports, {
  FolderUsers: () => FolderUsers
});
module.exports = __toCommonJS(folder_users_exports);
var import_createIcon = require("../createIcon.js");
const FolderUsers = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "FolderUsers",
  kebab: "folder-users",
  fillSafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M5.254 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2V9.255" }], ["circle", { cx: "13", cy: "15", r: "3" }], ["path", { d: "M17 22a4 4 0 0 0-8 0" }], ["path", { d: "M22 22A4 4 0 0 0 20.24 18.686 1 1 0 0 1 20.1 17.143 3 3 0 0 0 19.5 12.402" }]]
});
