import Image from "next/image";
import { headerStyle, navStyle } from "./header.css";
import { Container } from "../container/container";
import { HTMLAttributes } from "react";
import Link from "next/link";

export type HeaderProps = HTMLAttributes<HTMLDivElement>;

export function Header(props: HeaderProps) {
  return (
    <header className={headerStyle} {...props}>
      <Container>
        <img src="/sportify.png" alt="Sportify Logo" width={120} height={32} />
        <ul className={navStyle}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
}
