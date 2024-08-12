import { HTMLAttributes, PropsWithChildren } from "react";
import { layoutStyle, mainStyle } from "./layout.css";

export type LayoutProps = HTMLAttributes<HTMLDivElement> & {
  leftNode?: React.ReactNode;
};

export function Layout(props: PropsWithChildren<LayoutProps>) {
  const { leftNode, ...others } = props;
  return (
    <div className={layoutStyle} {...others}>
      {props.leftNode}
      <div className={mainStyle}>{props.children}</div>
    </div>
  );
}
