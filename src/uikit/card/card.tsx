import { HTMLAttributes, PropsWithChildren } from "react";
import { cardStyle } from "./card.css";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card(props: PropsWithChildren<CardProps>) {
  return (
    <div className={cardStyle} {...props}>
      {props.children}
    </div>
  );
}
