import { globalStyle, style } from "@vanilla-extract/css";

export const menuStyle = style({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  listStyle: "none",
  gap: ".8rem",
  padding: 0,
  marginTop: "1.2rem",
});

export const liStyle = style({
  backgroundColor: "#f3f3f3",
  borderRadius: ".8rem",
  ":hover": {
    backgroundColor: "#eaeaea",
  },
});

export const aStyle = style({
  color: "#333",
  textDecoration: "none",
  display: "block",
  paddingLeft: "1.6rem",
  paddingRight: "1.6rem",
  paddingTop: ".8rem",
  paddingBottom: ".8rem",
  transition: "all 0.3s",
  ":hover": {
    paddingLeft: "2.4rem",
  },
});
