import { Text } from "~/uikit/text";
import { aStyle, menuStyle } from "./menu.css";
import { Flex } from "~/uikit/flex/flex";
import { Link } from "~/uikit/link";

type Item = {
  id: number;
  slug: string;
  name: string;
  href: string;
};

type MenuProps = {
  items: Item[];
  selectedSlug?: string;
  direction?: "row" | "column";
  variant?: "simple" | "fancy" | "selected";
  color?: "dark" | "light";
};

export function Menu(props: MenuProps) {
  const { direction, variant, selectedSlug } = props;
  return (
    <ul className={menuStyle({ direction })}>
      {props.items.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={aStyle({
              direction,
              variant: selectedSlug === item.slug ? "selected" : variant,
            })}
          >
            <Flex align="center" gap={2}>
              <Text color={props.color === "dark" ? "white" : "default"}>
                {item.name}
              </Text>
            </Flex>
          </Link>
        </li>
      ))}
    </ul>
  );
}
