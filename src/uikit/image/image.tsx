import { ImgHTMLAttributes, PropsWithChildren } from "react";
import { imageStyle } from "./image.css";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> &
  Parameters<typeof imageStyle>[0];

export function Image(props: PropsWithChildren<ImageProps>) {
  const { objectFit, objectPosition, ...others } = props;
  return (
    <img
      className={imageStyle({ objectFit, objectPosition })}
      alt={others.alt}
      {...others}
    />
  );
}
