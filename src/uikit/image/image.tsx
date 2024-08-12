import { ImgHTMLAttributes, PropsWithChildren, useState } from "react";
import { imageStyle } from "./image.css";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> &
  Parameters<typeof imageStyle>[0];

export function Image(props: PropsWithChildren<ImageProps>) {
  const { objectFit, objectPosition, ...others } = props;
  const [showImage, setShowImage] = useState(true);
  return showImage ? (
    <img
      className={imageStyle({ objectFit, objectPosition })}
      alt={others.alt}
      onError={() => setShowImage(false)}
      {...others}
    />
  ) : null;
}
