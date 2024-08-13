import { HTMLAttributes, PropsWithChildren } from "react";
import { flexStyle } from "./flex.css";

type FlexProps = HTMLAttributes<HTMLDivElement> &
  Parameters<typeof flexStyle>[0];

export function Flex(props: PropsWithChildren<FlexProps>) {
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
    bg,
    className,
    ...others
  } = props;
  const flexClassname = flexStyle({
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
    bg,
  });
  return (
    <div className={`${flexClassname} ${className}`} {...others}>
      {children}
    </div>
  );
}
