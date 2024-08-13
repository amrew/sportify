import { style } from "@vanilla-extract/css";

export const imageStyle = style({
  "@media": {
    "(max-width: 767px)": {
      height: 320,
    },
    "(min-width: 768px)": {
      height: 400,
    },
  },
});

export const avatarStyle = style({
  borderRadius: "1.2rem",
});
