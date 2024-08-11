import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  padding: ".8rem",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      width: 1024,
    },
  },
});
