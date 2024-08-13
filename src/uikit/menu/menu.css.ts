import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/styles/config.css";

export const menuStyle = recipe({
  base: [
    {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      padding: 0,
    },
    sprinkles({
      gap: 4,
    }),
  ],
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
  base: [
    {
      textDecoration: "none",
      display: "block",
      transition: "all 0.3s",
    },
    sprinkles({
      color: "gray800",
      pl: 8,
      pr: 8,
      pt: 4,
      pb: 4,
    }),
  ],
  variants: {
    variant: {
      simple: {
        backgroundColor: "transparent",
        border: "none",
        ":hover": {
          backgroundColor: "transparent",
        },
      },
      fancy: {
        backgroundColor: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: ".8rem",
        ":hover": {
          backgroundColor: "#eaeaea",
        },
      },
      selected: {
        backgroundColor: "#e5e7eb",
        border: "1px solid #d1d5db",
        borderRadius: ".8rem",
        ":hover": {
          backgroundColor: "#eaeaea",
        },
      },
    },
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
    variant: "fancy",
  },
});
