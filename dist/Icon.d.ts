import type { NexaIconComponent, NexaIconName, NexaIconProps } from "./types.js";
/** Resolve a name (PascalCase, kebab-case, alias) to a memoized component. */
export declare function getIcon(name: string): NexaIconComponent | undefined;
export interface IconProps extends NexaIconProps {
    /** Icon name: "Bell", "bell", "triangle-exclamation-point", or an alias like "TriangleAlert". */
    name: NexaIconName | (string & {});
}
export declare const Icon: import("react").ForwardRefExoticComponent<IconProps & import("react").RefAttributes<SVGSVGElement>>;
