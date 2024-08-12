import { Text } from "~/uikit/text";
import { aStyle, menuStyle } from "./menu.css";
import { Flex } from "~/uikit/flex/flex";
import Link from "next/link";

type Item = {
  id: number;
  name: string;
  href: string;
};

type MenuProps = {
  items: Item[];
  direction?: "row" | "column";
};

export function Menu(props: MenuProps) {
  const { direction } = props;
  return (
    <ul className={menuStyle({ direction })}>
      {props.items.map((item) => (
        <li key={item.id}>
          <Link href={item.href} className={aStyle({ direction })}>
            <Flex align="center" gap={2}>
              <Text>{item.name}</Text>
            </Flex>
          </Link>
        </li>
      ))}
    </ul>
  );
}
