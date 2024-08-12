import { recipe } from "@vanilla-extract/recipes";

export const linkStyle = recipe({
  variants: {
    textDecoration: {
      none: {
        textDecoration: "none",
      },
      underline: {
        textDecoration: "underline",
      },
      lineThrough: {
        textDecoration: "line-through",
      },
    },
  },
  defaultVariants: {
    textDecoration: "none",
  },
});
