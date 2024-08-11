import { Text } from "~/uikit/text";
import { aStyle, liStyle, menuStyle } from "./menu.css";
import { Flex } from "~/uikit/flex/flex";
import Link from "next/link";

type Item = {
  id: number;
  name: string;
  href: string;
};

export function Menu(props: { items: Item[] }) {
  return (
    <ul className={menuStyle}>
      {props.items.map((item) => (
        <li key={item.id} className={liStyle}>
          <Link href={item.href} className={aStyle}>
            <Flex align="center" gap={1}>
              <Text>{item.name}</Text>
            </Flex>
          </Link>
        </li>
      ))}
    </ul>
  );
}
