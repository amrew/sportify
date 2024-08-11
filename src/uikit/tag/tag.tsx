import { HTMLAttributes, PropsWithChildren } from "react";
import { tagStyle } from "./tag.css";

export type TextProps = HTMLAttributes<HTMLSpanElement> &
  Parameters<typeof tagStyle>[0];

export function Tag(props: PropsWithChildren<TextProps>) {
  const { color, size } = props;
  return (
    <span className={tagStyle({ color, size })} {...props}>
      {props.children}
    </span>
  );
}
