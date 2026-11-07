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
var brain_circuit_exports = {};
__export(brain_circuit_exports, {
  BrainCircuit: () => BrainCircuit
});
module.exports = __toCommonJS(brain_circuit_exports);
var import_createIcon = require("../createIcon.js");
const BrainCircuit = /* @__PURE__ */ (0, import_createIcon.createIcon)({
  name: "BrainCircuit",
  kebab: "brain-circuit",
  fillSafe: false,
  fillUnsafe: false,
  preset: "pulse",
  trigger: "hover",
  nodes: [["path", { d: "M12 13h4", pathLength: "1" }], ["path", { d: "M12 18h6a2 2 0 012 2v1", pathLength: "1" }], ["path", { d: "M12 8h8", pathLength: "1" }], ["path", { d: "M12 9a4.17 4.17 0 01-3 4", pathLength: "1" }], ["path", { d: "M16 8V5a2 2 0 012-2", pathLength: "1" }], ["path", { d: "M6 18a4 4 0 01-2-7.465", pathLength: "1" }], ["path", { d: "M6.004 5.125a4 4 0 00-2.526 5.77", pathLength: "1" }], ["path", { d: "M6.294 6.294A3 3 0 1112 5v13a4 4 0 11-7.967-.518", pathLength: "1" }], ["circle", { cx: "16", cy: "13", r: "0.5", fill: "currentColor" }], ["circle", { cx: "18", cy: "3", r: "0.5", fill: "currentColor" }], ["circle", { cx: "20", cy: "21", r: "0.5", fill: "currentColor" }], ["circle", { cx: "20", cy: "8", r: "0.5", fill: "currentColor" }]]
});
