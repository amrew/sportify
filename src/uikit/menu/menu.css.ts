import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const menuStyle = recipe({
  base: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    gap: ".8rem",
    padding: 0,
  },
  variants: {
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
    },
  },
  defaultVariants: {
    direction: "column",
  },
});

export const aStyle = recipe({
  base: {
    color: "#333",
    textDecoration: "none",
    display: "block",
    paddingLeft: "1.6rem",
    paddingRight: "1.6rem",
    paddingTop: ".8rem",
    paddingBottom: ".8rem",
    transition: "all 0.3s",
    backgroundColor: "#f3f3f3",
    borderRadius: ".8rem",
    ":hover": {
      backgroundColor: "#eaeaea",
    },
  },
  variants: {
    direction: {
      row: {
        ":hover": {
          scale: 1.05,
        },
      },
      column: {
        ":hover": {
          paddingLeft: "2.4rem",
        },
      },
    },
  },
  defaultVariants: {
    direction: "column",
  },
});
