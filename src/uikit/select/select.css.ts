import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/config.css";

export const selectStyle = recipe({
  base: {
    display: "inline-flex",
    cursor: "pointer",
    WebkitUserSelect: "none",
    userSelect: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    height: "4rem",
    minHeight: "4rem",
    paddingInlineStart: "1.4rem",
    paddingInlineEnd: "3rem",
    fontSize: "1.4rem",
    lineHeight: "1.8rem",
    borderRadius: ".6rem",
    borderWidth: "1px",
    borderColor: colors.border,
    backgroundImage:
      "linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%)",
    backgroundPosition:
      "calc(100% - 20px) calc(1px + 50%), calc(100% - 16.1px) calc(1px + 50%)",
    backgroundSize: "4px 4px, 4px 4px",
    backgroundRepeat: "no-repeat",
  },
  variants: {},
  defaultVariants: {},
});
