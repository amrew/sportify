import { HTMLAttributes, PropsWithChildren } from "react";
import { textStyle } from "./text.css";

export type TextProps = HTMLAttributes<HTMLSpanElement> &
  Parameters<typeof textStyle>[0];

export function Text(props: PropsWithChildren<TextProps>) {
  const {
    color,
    size,
    weight,
    clamp,
    textAlign,
    textDecoration,
    whiteSpace,
    children,
    className,
    ...others
  } = props;
  const textClassname = textStyle({
    color,
    size,
    weight,
    clamp,
    textAlign,
    textDecoration,
    whiteSpace,
  });
  return (
    <span className={`${textClassname} ${className}`} {...others}>
      {children}
    </span>
  );
}
