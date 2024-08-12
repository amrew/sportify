import { recipe } from "@vanilla-extract/recipes";
import { colors, sprinkles } from "~/styles/config.css";

export const buttonStyle = recipe({
  base: [
    {
      display: "inline-flex",
      cursor: "pointer",
      WebkitUserSelect: "none",
      userSelect: "none",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderStyle: "solid",
      transition: "all 0.3s",
      textAlign: "center",
      textDecorationLine: "none",
      ":active": {
        transform: "scale(0.85)",
      },
    },
    sprinkles({
      radius: "lg",
      px: 4,
      gap: 3,
      fontWeight: "medium",
      color: "white",
      boxShadow: "sm",
      borderColor: "transparent",
    }),
  ],
  variants: {
    color: {
      default: sprinkles({
        backgroundColor: "white",
        borderColor: "border",
        color: "black",
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
      ghost: sprinkles({
        backgroundColor: "transparent",
        boxShadow: "none",
      }),
    },
    size: {
      xs: sprinkles({
        fontSize: 6,
        px: 6,
        py: 3,
      }),
      sm: sprinkles({
        fontSize: 7,
        px: 8,
        py: 4,
      }),
      md: sprinkles({
        fontSize: 8,
        px: 10,
        py: 5,
      }),
      lg: sprinkles({
        fontSize: 10,
        px: 12,
        py: 6,
      }),
      xl: sprinkles({
        fontSize: 12,
        px: 14,
        py: 7,
      }),
      xxl: sprinkles({
        fontSize: 14,
        px: 16,
        py: 8,
      }),
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});
