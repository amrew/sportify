import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/styles/config.css";

export const cardStyle = style([
  {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
    borderStyle: "solid",
    transition: "all 0.3s",
  },
  sprinkles({
    borderColor: "gray200",
    shadow: "sm",
    backgroundColor: "white",
    radius: "3xl",
    p: 10,
  }),
]);
