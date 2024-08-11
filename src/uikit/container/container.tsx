import { HTMLAttributes, HTMLProps, PropsWithChildren } from "react";
import { containerStyle } from "./container.css";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container(props: PropsWithChildren<ContainerProps>) {
  return <div className={containerStyle} {...props}></div>;
}
