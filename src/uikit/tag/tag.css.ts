import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/config.css";

export const tagStyle = recipe({
  base: {
    fontSize: "1.4rem",
    lineHeight: "1.5",
    color: colors.white,
    padding: ".2rem .6rem",
    borderRadius: ".4rem",
  },
  variants: {
    color: {
      default: {
        background: colors.black,
      },
      primary: {
        background: colors.primary,
      },
      secondary: {
        background: colors.secondary,
      },
      accent: {
        background: colors.accent,
      },
      danger: {
        background: colors.danger,
      },
      white: {
        background: colors.white,
        color: colors.black,
      },
      gray: {
        background: colors.gray300,
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
  },
  defaultVariants: {
    color: "default",
    size: "medium",
  },
});
