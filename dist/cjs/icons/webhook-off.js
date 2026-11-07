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
var webhook_off_exports = {};
__export(webhook_off_exports, {
  WebhookOff: () => WebhookOff
});
module.exports = __toCommonJS(webhook_off_exports);
var import_createIcon = require("../createIcon.js");
const WebhookOff = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "WebhookOff",
  kebab: "webhook-off",
  fillSafe: false,
  fillUnsafe: false,
  preset: "shake",
  trigger: "hover",
  nodes: [["path", { d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15", pathLength: "1" }], ["path", { d: "M9 3.4a4 4 0 0 1 6.52.66", pathLength: "1" }], ["path", { d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05", pathLength: "1" }], ["path", { d: "M20.3 20.3a4 4 0 0 1-2.3.7", pathLength: "1" }], ["path", { d: "M18.6 13a4 4 0 0 1 3.357 3.414", pathLength: "1" }], ["path", { d: "m12 6 .6 1", pathLength: "1" }], ["path", { d: "m2 2 20 20", pathLength: "1" }]]
});
