import { recipe } from "@vanilla-extract/recipes";
import { colors, sprinkles } from "~/styles/config.css";

export const tagStyle = recipe({
  base: sprinkles({
    fontSize: 7,
    lineHeight: "normal",
    color: "white",
    px: 3,
    py: 1,
    radius: "md",
  }),
  variants: {
    color: {
      default: sprinkles({
        backgroundColor: "gray800",
      }),
      primary: sprinkles({
        backgroundColor: "primary",
      }),
      secondary: sprinkles({
        backgroundColor: "secondary",
      }),
      accent: sprinkles({
        backgroundColor: "accent",
      }),
      danger: sprinkles({
        backgroundColor: "danger",
      }),
      white: sprinkles({
        backgroundColor: "white",
        color: "gray800",
      }),
      gray: sprinkles({
        backgroundColor: "gray300",
      }),
    },
    size: {
      small: sprinkles({
        fontSize: 6,
      }),
      medium: sprinkles({
        fontSize: 7,
      }),
      large: sprinkles({
        fontSize: 8,
      }),
      xlarge: sprinkles({
        fontSize: 9,
      }),
      xxlarge: sprinkles({
        fontSize: 10,
      }),
    },
  },
  defaultVariants: {
    color: "default",
    size: "medium",
  },
});
