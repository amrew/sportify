import { HTMLAttributes, PropsWithChildren } from "react";
import { tagStyle } from "./tag.css";

export type TextProps = HTMLAttributes<HTMLSpanElement> &
  Parameters<typeof tagStyle>[0];

export function Tag(props: PropsWithChildren<TextProps>) {
  const { color, size, className, ...others } = props;
  const tagClassname = tagStyle({ color, size });
  return (
    <span className={`${tagClassname} ${className}`} {...others}>
      {props.children}
    </span>
  );
}
