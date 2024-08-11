import { style } from "@vanilla-extract/css";

export const cardStyle = style({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #eaeaea",
  boxShadow: "0 1px 4px 0 rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: ".8rem",
  marginBottom: "1.6rem",
  transition: "all 0.3s",
  flex: 1,
});
