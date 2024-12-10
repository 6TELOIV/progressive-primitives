"use client";

import { createContext, useCallback, useContext, useState } from "react";

export type CollapsibleRootProps = React.PropsWithChildren<
  {
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
    ref: React.RefObject<HTMLDetailsElement>;
  } & React.HTMLProps<HTMLDetailsElement>
>;

const CollapsibleContext = createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
} | null>(null);

function Collapsible({
  ref,
  children,
  defaultOpen = false,
  ...props
}: CollapsibleRootProps) {
  const [open, setOpen] = useState(defaultOpen);
  const onOpenChange = useCallback(
    props.onOpenChange ??
      ((open: boolean) => {
        setOpen(open);
      }),
    [open, props.onOpenChange]
  );
  return (
    <CollapsibleContext.Provider
      value={{
        open: props.open ?? open,
        onOpenChange: props.onOpenChange ?? onOpenChange,
      }}
    >
      <details ref={ref} open={props.open ?? open}>
        {children}
      </details>
    </CollapsibleContext.Provider>
  );
}

export type CollapsibleTriggerProps = React.PropsWithChildren<
  {
    ref: React.RefObject<HTMLElement>;
  } & React.HTMLProps<HTMLElement>
>;

function CollapsibleTrigger({ children, ref }: CollapsibleTriggerProps) {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("Collapsible.Trigger must be used inside Collapsible.Root");
  }
  return (
    <summary ref={ref} onClick={() => context.onOpenChange(!context.open)}>
      {children}
    </summary>
  );
}

export {
  Collapsible,
  CollapsibleTrigger,
  Collapsible as Root,
  CollapsibleTrigger as Trigger,
};
