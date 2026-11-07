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
var database_backup_exports = {};
__export(database_backup_exports, {
  DatabaseBackup: () => DatabaseBackup
});
module.exports = __toCommonJS(database_backup_exports);
var import_createIcon = require("../createIcon.js");
const DatabaseBackup = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "DatabaseBackup",
  kebab: "database-backup",
  fillSafe: false,
  fillUnsafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 12a9 3 0 0 0 5 2.69", pathLength: "1" }], ["path", { d: "M21 9.3V5", pathLength: "1" }], ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88", pathLength: "1" }], ["path", { d: "M12 12v4h4", pathLength: "1" }], ["path", { d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16", pathLength: "1" }]]
});
