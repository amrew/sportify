import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/config.css";

export const buttonStyle = recipe({
  base: {
    display: "inline-flex",
    cursor: "pointer",
    WebkitUserSelect: "none",
    userSelect: "none",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.6rem",
    border: "1px solid transparent",
    transition: "all 0.3s",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    textAlign: "center",
    gap: "0.6rem",
    fontWeight: 600,
    textDecorationLine: "none",
    color: "white",
    ":active": {
      transform: "scale(0.85)",
    },
  },
  variants: {
    color: {
      default: {
        background: "white",
        color: "black",
        border: `1px solid ${colors.border}`,
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
    },
    size: {
      small: {
        fontSize: "1.2rem",
        padding: ".6rem 1.2rem",
      },
      medium: {
        fontSize: "1.6rem",
        padding: "1rem 2rem",
      },
      large: {
        fontSize: "2rem",
        padding: "1.2rem 2.4rem",
      },
      xlarge: {
        fontSize: "2.4rem",
        padding: "1.4rem 2.8rem",
      },
      xxlarge: {
        fontSize: "3.2rem",
        padding: "1.6rem 3.2rem",
      },
    },
  },
  defaultVariants: {
    color: "default",
    size: "medium",
  },
});
