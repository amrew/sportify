import { style } from "@vanilla-extract/css";

export const imageStyle = style({
  objectFit: "cover",
  transition: "all 0.3s",
  ":hover": {
    transform: "scale(1.02)",
  },
});
