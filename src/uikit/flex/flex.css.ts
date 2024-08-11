import { recipe } from "@vanilla-extract/recipes";

export const flexStyle = recipe({
  base: {
    display: "flex",
  },
  variants: {
    full: {
      true: {
        flex: "1",
      },
    },
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
    },
    wrap: {
      wrap: { flexWrap: "wrap" },
      nowrap: { flexWrap: "nowrap" },
    },
    align: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" },
      stretch: { alignItems: "stretch" },
      baseline: { alignItems: "baseline" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
      evenly: { justifyContent: "space-evenly" },
    },
    gap: {
      0: { gap: "0" },
      1: { gap: "0.6rem" },
      2: { gap: "1.2rem" },
      3: { gap: "1.8rem" },
      4: { gap: "2.4rem" },
      5: { gap: "3rem" },
      6: { gap: "3.6rem" },
      7: { gap: "4.2rem" },
      8: { gap: "4.8rem" },
    },
  },
  defaultVariants: {
    direction: "row",
    wrap: "nowrap",
    align: "stretch",
    justify: "start",
    gap: 0,
  },
});
