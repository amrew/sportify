import { recipe } from "@vanilla-extract/recipes";
import { colors, sprinkles } from "~/styles/config.css";

export const selectStyle = recipe({
  base: [
    {
      display: "inline-flex",
      cursor: "pointer",
      WebkitUserSelect: "none",
      userSelect: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
      height: "4rem",
      minHeight: "4rem",
      lineHeight: "1.8rem",
      borderWidth: "1px",
      backgroundImage:
        "linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%)",
      backgroundPosition:
        "calc(100% - 20px) calc(1px + 50%), calc(100% - 16.1px) calc(1px + 50%)",
      backgroundSize: "4px 4px, 4px 4px",
      backgroundRepeat: "no-repeat",
    },
    sprinkles({
      paddingLeft: 7,
      paddingRight: 14,
      fontSize: 7,
      radius: "xl",
      borderColor: "border",
    }),
  ],
  variants: {},
  defaultVariants: {},
});
