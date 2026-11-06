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
var cloud_upload_exports = {};
__export(cloud_upload_exports, {
  UploadCloud: () => UploadCloud
});
module.exports = __toCommonJS(cloud_upload_exports);
var import_createIcon = require("../createIcon.js");
const UploadCloud = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "UploadCloud",
  kebab: "cloud-upload",
  fillSafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "M12 13v8" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "m8 17 4-4 4 4" }]]
});
