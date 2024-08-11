import { Card } from "~/uikit/card";
import { Text } from "~/uikit/text";
import { sidebarStyle } from "./sidebar.css";
import { Menu } from "~/uikit/menu/menu";
import { Flex } from "~/uikit/flex/flex";
import { MenuSquare } from "lucide-react";

type Item = {
  id: number;
  name: string;
  href: string;
  children?: Item[];
};

export type SidebarProps = {
  items: Item[];
};

export function Sidebar(props: SidebarProps) {
  return (
    <div>
      <div className={sidebarStyle}>
        <Card>
          <Flex align="center" gap={1}>
            <MenuSquare />
            <Text size="large" weight="bold">
              Kategori
            </Text>
          </Flex>
          <Menu items={props.items} />
        </Card>
      </div>
    </div>
  );
}
