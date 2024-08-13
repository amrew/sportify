import { HTMLAttributes, PropsWithChildren } from "react";
import { buttonStyle } from "./button.css";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  Parameters<typeof buttonStyle>[0];

export function Button(props: PropsWithChildren<ButtonProps>) {
  const { color, size, full, className, ...others } = props;
  const buttonClassname = buttonStyle({ color, size, full });
  return (
    <button className={`${buttonClassname} ${className}`} {...others}>
      {props.children}
    </button>
  );
}
