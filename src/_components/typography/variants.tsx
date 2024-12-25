import { cva } from "class-variance-authority";

const variant = {
  headline1: "font-vollkorn text-5xl md:text-6xl leading-[60px]",
  headline2: "font-vollkorn text-4xl md:text-5xl leading-tight",
  headline3: "font-vollkorn text-3xl leading-tight",
  headline4: "font-vollkorn text-[28px] md:text-4xl leading-tight",
  subheading: "font-open-sans text-2xl md:text-3xl",
  body: "font-open-sans text-base leading-[30px] font-light",
  body2: "font-open-sans text-xl leading-[40px] font-light",
  quote: "font-vollkorn text-2xl leading-[30px] font-light",
  paragraph: "font-open-sans text-base leading-tight",
  small: "font-open-sans text-sm leading-tight",
  label: "font-open-sans text-[16px] leading-tight",
  caption: "font-open-sans text-xxs leading-tight",
  caption2: "font-open-sans text-[12px] leading-tight",
};

/**
 * A helper to set style variants primarily designed for the typography component, but also applicable to other components.
 *
 * These variants includes properties such as `font-family`, `font-size`, `line-height`, `font-weight`, `letter-spacing`, and more.
 * The `color` property is initially excluded to encourage the use of `text-current` for inheriting the parent element's color;
 * however, developers can include it as per their project requirements.
 *
 * NOTE: Customizing these variants is encouraged, with a recommendation to maintain consistency across the project.
 */
const typographyVariants = cva("text-current", {
  variants: {
    variant,
  },
  defaultVariants: {
    variant: "paragraph",
  },
});

type TypographyVariant = keyof typeof variant;
const typographyVariantsKeys = Object.entries(variant) as [
  TypographyVariant,
  string,
][];

export { type TypographyVariant, typographyVariants, typographyVariantsKeys };
