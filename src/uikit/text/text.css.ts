import { recipe } from "@vanilla-extract/recipes";
import { colors, sprinkles } from "~/styles/config.css";

export const textStyle = recipe({
  base: sprinkles({
    fontSize: 7,
    lineHeight: "normal",
  }),
  variants: {
    color: {
      default: sprinkles({
        color: "gray800",
      }),
      primary: sprinkles({
        color: "primary",
      }),
      secondary: sprinkles({
        color: "secondary",
      }),
      accent: sprinkles({
        color: "accent",
      }),
      danger: sprinkles({
        color: "danger",
      }),
      white: sprinkles({
        color: "white",
      }),
      gray: sprinkles({
        color: "gray600",
      }),
    },
    size: {
      small: sprinkles({
        fontSize: 6,
      }),
      medium: sprinkles({
        fontSize: 8,
      }),
      large: sprinkles({
        fontSize: 10,
      }),
      xlarge: sprinkles({
        fontSize: 12,
      }),
      xxlarge: sprinkles({
        fontSize: 16,
      }),
    },
    weight: {
      regular: {
        fontWeight: "normal",
      },
      bold: {
        fontWeight: "bold",
      },
      semibold: {
        fontWeight: "500",
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
