import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { type HTMLAttributes, type PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { typographyVariants } from "./variants";

type ParagraphProps = PropsWithChildren<
  VariantProps<typeof typographyVariants> &
    HTMLAttributes<HTMLParagraphElement> & {
      asChild?: boolean;
    }
>;

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ asChild, className, children, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(
          typographyVariants({ variant: variant ?? "paragraph", className }),
        )}
      >
        {children}
      </Comp>
    );
  },
);
Paragraph.displayName = "Paragraph";

export { Paragraph, type ParagraphProps };
