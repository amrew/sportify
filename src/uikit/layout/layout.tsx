import { PropsWithChildren } from "react";
import { Flex } from "../flex";
import { layoutStyle } from "./layout.css";

export type LayoutProps = {
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
};

export function Layout(props: PropsWithChildren<LayoutProps>) {
  return (
    <Flex full gap={6} mt={6} className={layoutStyle}>
      {props.leftNode}
      <Flex full>{props.children}</Flex>
      {props.rightNode}
    </Flex>
  );
}
