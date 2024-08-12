import Link from "next/link";
import { type LinkProps } from "next/link";
import { linkStyle } from "./link.css";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps &
  Parameters<typeof linkStyle>[0];

function CustomLink(props: PropsWithChildren<CustomLinkProps>) {
  const { textDecoration, ...others } = props;
  return <Link {...others} className={linkStyle({ textDecoration })} />;
}

export { CustomLink as Link };
