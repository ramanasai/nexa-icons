import { createElement, forwardRef } from "react";
import { createIcon } from "./createIcon.js";
import { REGISTRY, resolveKebab } from "./registry.js";
const cache = /* @__PURE__ */ new Map();
function getIcon(name) {
  const kebab = resolveKebab(name);
  if (!kebab) return void 0;
  let component = cache.get(kebab);
  if (!component) {
    const data = REGISTRY[kebab];
    if (!data) return void 0;
    component = createIcon(data);
    cache.set(kebab, component);
  }
  return component;
}
const Icon = forwardRef(function Icon2(props, ref) {
  const { name, ...rest } = props;
  const Component = getIcon(name);
  if (!Component) return null;
  return createElement(Component, { ...rest, ref });
});
Icon.displayName = "NexaIcon";
export {
  Icon,
  getIcon
};
