import { HTMLAttributes, PropsWithChildren } from "react";
import { buttonStyle } from "./button.css";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  Parameters<typeof buttonStyle>[0];

export function Button(props: PropsWithChildren<ButtonProps>) {
  const { color, size, full, ...others } = props;
  return (
    <button className={buttonStyle({ color, size, full })} {...others}>
      {props.children}
    </button>
  );
}
