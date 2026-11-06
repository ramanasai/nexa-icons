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
var Icon_exports = {};
__export(Icon_exports, {
  Icon: () => Icon,
  getIcon: () => getIcon
});
module.exports = __toCommonJS(Icon_exports);
var import_react = require("react");
var import_createIcon = require("./createIcon.js");
var import_registry = require("./registry.js");
const cache = /* @__PURE__ */ new Map();
function getIcon(name) {
  const kebab = (0, import_registry.resolveKebab)(name);
  if (!kebab) return void 0;
  let component = cache.get(kebab);
  if (!component) {
    const data = import_registry.REGISTRY[kebab];
    if (!data) return void 0;
    component = (0, import_createIcon.createIcon)(data);
    cache.set(kebab, component);
  }
  return component;
}
const Icon = (0, import_react.forwardRef)(function Icon2(props, ref) {
  const { name, ...rest } = props;
  const Component = getIcon(name);
  if (!Component) return null;
  return (0, import_react.createElement)(Component, { ...rest, ref });
});
Icon.displayName = "NexaIcon";
