import { recipe } from "@vanilla-extract/recipes";

export const imageStyle = recipe({
  variants: {
    objectFit: {
      cover: { objectFit: "cover" },
      contain: { objectFit: "contain" },
      fill: { objectFit: "fill" },
      none: { objectFit: "none" },
      scaleDown: { objectFit: "scale-down" },
    },
    objectPosition: {
      top: { objectPosition: "top" },
      right: { objectPosition: "right" },
      bottom: { objectPosition: "bottom" },
      left: { objectPosition: "left" },
      center: { objectPosition: "center" },
    },
  },
});
