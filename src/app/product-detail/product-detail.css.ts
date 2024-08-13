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

export const imageContainerStyle = style({
  "@media": {
    "screen and (max-width: 240px)": {
      maxWidth: `200px !important`,
    },
    "screen and (min-width: 241px) and (max-width: 360px)": {
      maxWidth: `240px !important`,
    },
    "screen and (min-width: 361px) and (max-width: 480px)": {
      maxWidth: `320px !important`,
    },
    "screen and (min-width: 481px) and (max-width: 768px)": {
      maxWidth: `400px !important`,
    },
    "screen and (min-width: 769px) and (max-width: 900px)": {
      maxWidth: `480px !important`,
    },
    "screen and (min-width: 901px)": {
      maxWidth: `600px !important`,
    },
  },
});
