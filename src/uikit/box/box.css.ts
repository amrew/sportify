import { recipe } from "@vanilla-extract/recipes";
import { colors, size } from "~/styles/config.css";
import { spreadConfig } from "~/utils/styleUtils";

export const boxStyle = recipe({
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
    position: {
      absolute: { position: "absolute" },
      relative: { position: "relative" },
      fixed: { position: "fixed" },
      sticky: { position: "sticky" },
    },
    top: {
      ...spreadConfig("top", size),
      "50%": { top: "50%" },
    },
    right: spreadConfig("right", size),
    bottom: spreadConfig("bottom", size),
    left: {
      ...spreadConfig("left", size),
      "50%": {
        left: "50%",
        transform: "translateX(-50%)",
      },
    },
    bg: {
      ...spreadConfig("backgroundColor", colors),
      semitransparent: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
    },
    width: spreadConfig("width", size),
  },
  defaultVariants: {
    direction: "row",
    wrap: "nowrap",
    align: "stretch",
    justify: "start",
    display: "block",
  },
});
