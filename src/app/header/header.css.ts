import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/styles/config.css";

export const headerStyle = style([
  {
    display: "flex",
    flex: 1,
  },
  sprinkles({
    shadow: "sm",
    backgroundColor: "white",
    paddingTop: 1,
    paddingBottom: 1,
  }),
]);
