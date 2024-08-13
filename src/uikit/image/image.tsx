import { ImgHTMLAttributes, PropsWithChildren, useState } from "react";
import { imageStyle } from "./image.css";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> &
  Parameters<typeof imageStyle>[0];

export function Image(props: PropsWithChildren<ImageProps>) {
  const { objectFit, objectPosition, className, ...others } = props;
  const [showImage, setShowImage] = useState(true);
  const imageClassname = imageStyle({ objectFit, objectPosition });
  return showImage ? (
    <img
      className={`${imageClassname} ${className}`}
      alt={others.alt}
      onError={() => setShowImage(false)}
      {...others}
    />
  ) : null;
}
