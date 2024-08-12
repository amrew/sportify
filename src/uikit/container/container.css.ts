import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      width: 768,
    },
    "(min-width: 1024px)": {
      width: 1024,
    },
  },
});
