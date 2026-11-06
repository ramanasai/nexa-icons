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
var server_nas_exports = {};
__export(server_nas_exports, {
  ServerNas: () => ServerNas
});
module.exports = __toCommonJS(server_nas_exports);
var import_createIcon = require("../createIcon.js");
const ServerNas = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "ServerNas",
  kebab: "server-nas",
  fillSafe: false,
  preset: "float",
  trigger: "hover",
  nodes: [["path", { d: "M10 16V8" }], ["path", { d: "M14 16V8" }], ["path", { d: "M18 16V8" }], ["path", { d: "M6 12h.01" }], ["path", { d: "M6 16h.01" }], ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }]]
});
