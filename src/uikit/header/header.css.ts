import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "flex",
  borderBottom: "1px solid #eaeaea",
  boxShadow: "0 1px 4px 0 rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  paddingTop: ".6rem",
  paddingBottom: ".6rem",
  position: "sticky",
  top: 0,
  zIndex: 1000,
});

export const navStyle = style({
  display: "flex",
  gap: "1.6rem",
  listStyle: "none",
  margin: "0",
  flexWrap: "wrap",
  fontSize: "1.4rem",
});
