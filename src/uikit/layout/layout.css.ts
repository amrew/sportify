import { style } from "@vanilla-extract/css";

export const layoutStyle = style({
  position: "relative",
  "@media": {
    "(max-width: 767px)": {
      flexDirection: "column",
    },
    "(min-width: 768px)": {
      flexDirection: "row",
    },
  },
});
