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
var file_database_exports = {};
__export(file_database_exports, {
  FileDatabase: () => FileDatabase
});
module.exports = __toCommonJS(file_database_exports);
var import_createIcon = require("../createIcon.js");
const FileDatabase = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "FileDatabase",
  kebab: "file-database",
  fillSafe: false,
  fillUnsafe: false,
  preset: "bounce",
  trigger: "hover",
  nodes: [["path", { d: "M12 12v8a5 2 0 01-10 0v-8", pathLength: "1" }], ["path", { d: "M12 16a5 2 0 01-10 0", pathLength: "1" }], ["path", { d: "M14 2v5a1 1 0 001 1h5", pathLength: "1" }], ["path", { d: "M4 6.3V4a2 2 0 012-2h8a2.4 2.4 0 011.706.706l3.588 3.588A2.4 2.4 0 0120 8v12a2 2 0 01-2 2h-2.43", pathLength: "1" }], ["ellipse", { cx: "7", cy: "12", rx: "5", ry: "2" }]]
});
