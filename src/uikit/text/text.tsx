import { HTMLAttributes, PropsWithChildren } from "react";
import { textStyle } from "./text.css";

export type TextProps = HTMLAttributes<HTMLSpanElement> &
  Parameters<typeof textStyle>[0];

export function Text(props: PropsWithChildren<TextProps>) {
  const { color, size, weight, clamp } = props;
  return (
    <span className={textStyle({ color, size, weight, clamp })} {...props}>
      {props.children}
    </span>
  );
}
