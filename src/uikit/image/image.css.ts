import { recipe } from "@vanilla-extract/recipes";
import { radius } from "~/styles/config.css";
import { spreadConfig } from "~/utils/styleUtils";

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
    radius: spreadConfig("borderRadius", radius),
  },
});
