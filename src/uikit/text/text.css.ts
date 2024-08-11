import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/config.css";

export const textStyle = recipe({
  base: {
    fontSize: "1.4rem",
    lineHeight: "1.5",
  },
  variants: {
    color: {
      default: {
        color: colors.black,
      },
      primary: {
        color: colors.primary,
      },
      secondary: {
        color: colors.secondary,
      },
      accent: {
        color: colors.accent,
      },
      danger: {
        color: colors.danger,
      },
      white: {
        color: colors.white,
      },
      gray: {
        color: colors.gray,
      },
    },
    size: {
      small: {
        fontSize: "1.2rem",
      },
      medium: {
        fontSize: "1.6rem",
      },
      large: {
        fontSize: "2rem",
      },
      xlarge: {
        fontSize: "2.4rem",
      },
      xxlarge: {
        fontSize: "3.2rem",
      },
    },
    weight: {
      regular: {
        fontWeight: "normal",
      },
      bold: {
        fontWeight: "bold",
      },
    },
  },
  defaultVariants: {
    color: "default",
    size: "medium",
    weight: "regular",
  },
});
