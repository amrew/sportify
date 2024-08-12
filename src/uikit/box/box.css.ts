import { recipe } from "@vanilla-extract/recipes";
import { size } from "~/styles/config.css";
import { spreadConfig } from "~/utils/styleUtils";

export const flexStyle = recipe({
  base: {
    display: "flex",
  },
  variants: {
    display: {
      flex: { display: "flex" },
      inlineFlex: { display: "inline-flex" },
      block: { display: "block" },
      inlineBlock: { display: "inline-block" },
    },
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
    gap: spreadConfig("gap", size),
    p: spreadConfig("padding", size),
    pl: spreadConfig("paddingLeft", size),
    pr: spreadConfig("paddingRight", size),
    pt: spreadConfig("paddingTop", size),
    pb: spreadConfig("paddingBottom", size),
    m: spreadConfig("margin", size),
    ml: spreadConfig("marginLeft", size),
    mr: spreadConfig("marginRight", size),
    mt: spreadConfig("marginTop", size),
    mb: spreadConfig("marginBottom", size),
  },
  defaultVariants: {
    direction: "row",
    wrap: "nowrap",
    align: "stretch",
    justify: "start",
    display: "block",
  },
});
