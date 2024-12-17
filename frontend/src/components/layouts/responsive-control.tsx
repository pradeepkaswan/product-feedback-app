import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ResponsiveControlProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ResponsiveControl = forwardRef<
  HTMLDivElement,
  ResponsiveControlProps
>(({ className, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "responsive-grid-control",
        "box-border mx-auto",
        "w-[1110px] max-xl:w-[1110px] max-lg:w-[768px] md:px-10 max-sm:w-full",
        className,
      )}
      {...args}
    />
  );
});

ResponsiveControl.displayName = "ResponsiveControl";
