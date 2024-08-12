import { style } from "@vanilla-extract/css";

export const sidebarStyle = style({
  minWidth: 300,
  position: "sticky",
  top: "1.4rem",
});

export const toggleButtonStyle = style({
  display: "flex",
  "@media": {
    "(min-width: 768px)": {
      display: "none",
    },
  },
});
