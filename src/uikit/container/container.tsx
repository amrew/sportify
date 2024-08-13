import { HTMLAttributes, HTMLProps, PropsWithChildren } from "react";
import { containerStyle } from "./container.css";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container(props: PropsWithChildren<ContainerProps>) {
  const { className, children, ...others } = props;
  return (
    <div className={`${containerStyle} ${className}`} {...others}>
      {children}
    </div>
  );
}
