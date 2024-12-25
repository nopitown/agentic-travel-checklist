import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import {
  type ElementType,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";

import { cn } from "@/lib/utils";

import { typographyVariants } from "./variants";

type HeadingProps = PropsWithChildren<
  VariantProps<typeof typographyVariants> &
    HTMLAttributes<HTMLHeadingElement> & {
      /** The level of the heading, 1-6 */
      level: 1 | 2 | 3 | 4 | 5 | 6;
    } & {
      /** Set to true to make any nested component appear as a heading */
      asChild?: boolean;
    }
>;

const Heading = ({
  asChild,
  children,
  variant,
  className,
  level,
  ...props
}: HeadingProps) => {
  const Component = asChild
    ? Slot
    : (({
        1: "h1",
        2: "h2",
        3: "h3",
        4: "h4",
        5: "h5",
        6: "h6",
      }[level] ?? "h1") as ElementType);

  // Set default variant based on the level
  const variantDefaults: Partial<
    Record<HeadingProps["level"], HeadingProps["variant"]>
  > = {
    1: "headline1",
    2: "headline2",
    3: "headline3",
    4: "headline4",
    5: "subheading",
    6: "subheading",
  };

  return (
    <Component
      {...props}
      className={cn(
        typographyVariants({
          variant: variant ?? variantDefaults[level],
          className,
        }),
      )}
    >
      {children}
    </Component>
  );
};

export { Heading, type HeadingProps };
