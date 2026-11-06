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
var jobsie_exports = {};
__export(jobsie_exports, {
  JobsIE: () => JobsIE
});
module.exports = __toCommonJS(jobsie_exports);
var import_createIcon = require("../createIcon.js");
const JobsIE = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "JobsIE",
  kebab: "jobsie",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["rect", { x: "2.5", y: "2.5", width: "19", height: "19", rx: "5" }], ["path", { d: "M7.2 10v3.2a1.8 1.8 0 0 1-3.2 1.2" }], ["path", { d: "M12.2 10h3M12.2 12h2.2M12.2 14h3" }]]
});
