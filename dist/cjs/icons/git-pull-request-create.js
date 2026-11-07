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
var git_pull_request_create_exports = {};
__export(git_pull_request_create_exports, {
  GitPullRequestCreate: () => GitPullRequestCreate
});
module.exports = __toCommonJS(git_pull_request_create_exports);
var import_createIcon = require("../createIcon.js");
const GitPullRequestCreate = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "GitPullRequestCreate",
  kebab: "git-pull-request-create",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pop",
  trigger: "hover",
  nodes: [["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M6 9v12", pathLength: "1" }], ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3", pathLength: "1" }], ["path", { d: "M18 15v6", pathLength: "1" }], ["path", { d: "M21 18h-6", pathLength: "1" }]]
});
