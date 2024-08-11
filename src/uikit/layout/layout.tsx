import { HTMLAttributes, PropsWithChildren } from "react";
import { layoutStyle } from "./layout.css";

export type LayoutProps = HTMLAttributes<HTMLDivElement> & {
  leftNode?: React.ReactNode;
};

export function Layout(props: PropsWithChildren<LayoutProps>) {
  return (
    <div className={layoutStyle} {...props}>
      {props.leftNode}
      {props.children}
    </div>
  );
}
