"use client";

import { cn } from "lib/utils";
import { ChevronDown } from "lucide-react";
import React from "react";

const NavigationMenuContext = React.createContext<{
  name?: string;
}>({});

export function NavigationMenu({
  children,
  className,
  name,
  ...props
}: NavigationMenuProps) {
  return (
    <NavigationMenuContext.Provider value={{ name }}>
      <nav
        className={cn(
          "relative z-10 flex max-w-max items-center justify-center",
          className
        )}
        {...props}
      >
        {children}
      </nav>
    </NavigationMenuContext.Provider>
  );
}
export type NavigationMenuProps = React.PropsWithChildren<
  {
    name?: string;
    ref?: React.RefObject<HTMLElement>;
  } & React.HTMLProps<HTMLElement>
>;
NavigationMenu.displayName = "NavigationMenuList";

export function NavigationMenuList({
  children,
  className,
  ...props
}: NavigationMenuListProps) {
  return (
    <ul
      className={cn(
        "flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
}
export type NavigationMenuListProps = React.PropsWithChildren<
  {
    ref?: React.RefObject<HTMLUListElement>;
  } & React.HTMLProps<HTMLUListElement>
>;
NavigationMenuList.displayName = "NavigationMenuList";

export function NavigationMenuItem({
  children,
  className,
  ...props
}: NavigationMenuItemProps) {
  const { name } = React.useContext(NavigationMenuContext);

  return (
    <li>
      <details
        name={name}
        className={cn("group w-max relative", className)}
        {...props}
      >
        {children}
      </details>
    </li>
  );
}
export type NavigationMenuItemProps = React.PropsWithChildren<
  {
    ref?: React.RefObject<HTMLDetailsElement>;
  } & React.HTMLProps<HTMLDetailsElement>
>;
NavigationMenuItem.displayName = "NavigationMenuItem";

export function NavigationMenuTrigger({
  children,
  className,
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <summary
      className={cn(
        "list-none h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 group-open:bg-accent/50 active:bg-accent/50",
        className
      )}
      {...props}
    >
      {children}
    </summary>
  );
}
export type NavigationMenuTriggerProps = React.PropsWithChildren<
  {
    ref?: React.RefObject<HTMLElement>;
  } & React.HTMLProps<HTMLElement>
>;
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

export function NavigationMenuIndicator({
  className,
  ...props
}: NavigationMenuIndicatorProps) {
  return (
    <ChevronDown
      className={cn(
        "w-4 h-4 ml-2 transition-transform transform group-open:rotate-180",
        className
      )}
      {...props}
    />
  );
}
export type NavigationMenuIndicatorProps = {
  ref?: React.RefObject<SVGSVGElement>;
} & React.HTMLProps<SVGElement>;

NavigationMenuIndicator.displayName = "NavigationMenuIndicator";

export function NavigationMenuContent({
  children,
  className,
  ...props
}: NavigationMenuContentProps) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 w-max bg-background rounded-md shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
export type NavigationMenuContentProps = React.PropsWithChildren<
  {
    ref?: React.RefObject<HTMLDivElement>;
  } & React.HTMLProps<HTMLDivElement>
>;
NavigationMenuContent.displayName = "NavigationMenuContent";

export {
  NavigationMenu as Root,
  NavigationMenuList as List,
  NavigationMenuItem as Item,
  NavigationMenuTrigger as Trigger,
  NavigationMenuIndicator as Indicator,
  NavigationMenuContent as Content,
};
