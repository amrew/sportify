import { HTMLAttributes, PropsWithChildren } from "react";
import { boxStyle } from "./box.css";

type BoxProps = HTMLAttributes<HTMLDivElement> & Parameters<typeof boxStyle>[0];

export function Box(props: PropsWithChildren<BoxProps>) {
  const {
    direction,
    justify,
    align,
    wrap,
    gap,
    children,
    full,
    p,
    pl,
    pr,
    pt,
    pb,
    m,
    ml,
    mr,
    mt,
    mb,
    position,
    top,
    left,
    right,
    bottom,
    bg,
    display,
    width,
    className,
    ...others
  } = props;
  const boxClassname = boxStyle({
    direction,
    full,
    justify,
    align,
    wrap,
    gap,
    p,
    pl,
    pr,
    pt,
    pb,
    m,
    ml,
    mr,
    mt,
    mb,
    position,
    top,
    left,
    right,
    bottom,
    bg,
    display,
    width,
  });
  return (
    <div className={`${boxClassname} ${className}`} {...others}>
      {children}
    </div>
  );
}
