import { HTMLAttributes, PropsWithChildren } from "react";
import { cardStyle } from "./card.css";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card(props: PropsWithChildren<CardProps>) {
  const { className, ...others } = props;
  return (
    <div className={`${cardStyle} ${className}`} {...others}>
      {props.children}
    </div>
  );
}
