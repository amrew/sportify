import { headerStyle } from "./header.css";
import { Container } from "../container/container";
import { HTMLAttributes } from "react";
import { Menu } from "../menu";
import { Button } from "../button";
import { Text } from "../text";
import { Flex } from "../flex/flex";
import { LogIn } from "lucide-react";

export type HeaderProps = HTMLAttributes<HTMLDivElement>;

export function Header(props: HeaderProps) {
  return (
    <header className={headerStyle} {...props}>
      <Container>
        <Flex align="center" full gap={3}>
          <img
            src="/sportify1.png"
            alt="Sportify Logo"
            width={120}
            height={36}
          />
          <Menu
            direction="row"
            items={[
              {
                id: 1,
                name: "Home",
                href: "/",
              },
              {
                id: 2,
                name: "Blog",
                href: "/blog",
              },
            ]}
          />
        </Flex>
        <Flex gap={1}>
          <Button size="small">
            <Text>Login</Text>
          </Button>
          <Button size="small" color="danger">
            <Text color="white">Submit Review</Text>
            <LogIn size={16} />
          </Button>
        </Flex>
      </Container>
    </header>
  );
}
