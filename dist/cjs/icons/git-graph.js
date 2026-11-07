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
var git_graph_exports = {};
__export(git_graph_exports, {
  GitGraph: () => GitGraph
});
module.exports = __toCommonJS(git_graph_exports);
var import_createIcon = require("../createIcon.js");
const GitGraph = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "GitGraph",
  kebab: "git-graph",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["circle", { cx: "5", cy: "6", r: "3" }], ["path", { d: "M5 9v6", pathLength: "1" }], ["circle", { cx: "5", cy: "18", r: "3" }], ["path", { d: "M12 3v18", pathLength: "1" }], ["circle", { cx: "19", cy: "6", r: "3" }], ["path", { d: "M16 15.7A9 9 0 0 0 19 9", pathLength: "1" }]]
});
