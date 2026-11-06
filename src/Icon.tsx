/**
 * Generic <Icon name="bell" /> — for data-driven UIs (menus, tables, CMS
 * content) where the icon name is only known at runtime.
 *
 * Trade-off, stated on purpose: this entry point pulls the full registry
 * (~all 166 path sets) into the bundle. In app code prefer the named imports
 * (`import { Bell } from "@nexa/icons"`) so only the icons you use ship.
 */
import { createElement, forwardRef } from "react";
import { createIcon } from "./createIcon.js";
import { REGISTRY, resolveKebab } from "./registry.js";
import type { NexaIconComponent, NexaIconName, NexaIconProps } from "./types.js";

const cache = new Map<string, NexaIconComponent>();

/** Resolve a name (PascalCase, kebab-case, alias) to a memoized component. */
export function getIcon(name: string): NexaIconComponent | undefined {
  const kebab = resolveKebab(name);
  if (!kebab) return undefined;
  let component = cache.get(kebab);
  if (!component) {
    const data = REGISTRY[kebab];
    if (!data) return undefined;
    component = createIcon(data);
    cache.set(kebab, component);
  }
  return component;
}

export interface IconProps extends NexaIconProps {
  /** Icon name: "Bell", "bell", "triangle-exclamation-point", or an alias like "TriangleAlert". */
  name: NexaIconName | (string & {});
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(props, ref) {
  const { name, ...rest } = props;
  const Component = getIcon(name);
  if (!Component) return null;
  return createElement(Component, { ...rest, ref });
});

Icon.displayName = "NexaIcon";
