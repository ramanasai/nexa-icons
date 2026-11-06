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
var monitor_activity_exports = {};
__export(monitor_activity_exports, {
  MonitorActivity: () => MonitorActivity
});
module.exports = __toCommonJS(monitor_activity_exports);
var import_createIcon = require("../createIcon.js");
const MonitorActivity = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "MonitorActivity",
  kebab: "monitor-activity",
  fillSafe: false,
  fillUnsafe: false,
  preset: "heartbeat",
  trigger: "hover",
  nodes: [["path", { d: "M12 17v4" }], ["path", { d: "M18 10h-2.315a1 1 0 00-.932.64l-.787 2.034a.5.5 0 01-.932 0l-2.068-5.348a.5.5 0 00-.932 0l-.787 2.035a1 1 0 01-.932.639H6" }], ["path", { d: "M8 21h8" }], ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }]]
});
