import { PropsWithChildren } from "react";
import { mediaStyle } from "./media.css";

type MediaProps = Parameters<typeof mediaStyle>[0];

export function Media(props: PropsWithChildren<MediaProps>) {
  const { children, ...rest } = props;
  return <span className={mediaStyle(rest)}>{props.children}</span>;
}
