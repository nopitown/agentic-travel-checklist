import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, type PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { typographyVariants } from "./variants";

type TextProps = PropsWithChildren<
  VariantProps<typeof typographyVariants> &
    HTMLAttributes<HTMLSpanElement> & {
      asChild?: boolean;
    }
>;

const Text = ({
  asChild,
  className,
  children,
  variant,
  ...props
}: TextProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      {...props}
      className={cn(
        typographyVariants({ variant: variant ?? "caption", className }),
      )}
    >
      {children}
    </Comp>
  );
};

export { Text, type TextProps };
