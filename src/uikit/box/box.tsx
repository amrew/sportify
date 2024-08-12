import { HTMLAttributes, PropsWithChildren } from "react";
import { flexStyle } from "./box.css";

type BoxProps = HTMLAttributes<HTMLDivElement> &
  Parameters<typeof flexStyle>[0];

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
    ...others
  } = props;
  const className = flexStyle({
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
  });
  return (
    <div className={className} {...others}>
      {children}
    </div>
  );
}
