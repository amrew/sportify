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
        color: colors.gray600,
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
    clamp: {
      1: {
        overflow: "hidden",
        "text-overflow": "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": "1",
        "-webkit-box-orient": "vertical",
      },
      2: {
        overflow: "hidden",
        "text-overflow": "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": "2",
        "-webkit-box-orient": "vertical",
      },
      3: {
        overflow: "hidden",
        "text-overflow": "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": "3",
        "-webkit-box-orient": "vertical",
      },
    },
    textAlign: {
      center: {
        textAlign: "center",
      },
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
    textDecoration: {
      underline: {
        textDecoration: "underline",
      },
      none: {
        textDecoration: "none",
      },
    },
    whiteSpace: {
      nowrap: {
        whiteSpace: "nowrap",
      },
      preLine: {
        whiteSpace: "pre-line",
      },
    },
  },
  defaultVariants: {
    color: "default",
    size: "medium",
    weight: "regular",
    textDecoration: "none",
  },
});
