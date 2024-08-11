import { Card } from "~/uikit/card";
import { Text } from "~/uikit/text";
import { sidebarStyle, toggleButtonStyle } from "./sidebar.css";
import { Menu } from "~/uikit/menu/menu";
import { Flex } from "~/uikit/flex/flex";
import { ChevronDown, ChevronUp, MenuSquare } from "lucide-react";
import { Button } from "~/uikit/button";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div className={sidebarStyle}>
        <Card>
          <Flex align="center" gap={1}>
            <Flex align="center" gap={1} full>
              <MenuSquare />
              <Text size="large" weight="bold">
                Category
              </Text>
            </Flex>
            <div className={toggleButtonStyle}>
              <Button size="small" onClick={() => setIsOpen((prev) => !prev)}>
                {isOpen ? <ChevronUp /> : <ChevronDown size={16} />}
              </Button>
            </div>
          </Flex>
          {isOpen ? <Menu items={props.items} /> : null}
        </Card>
      </div>
    </div>
  );
}
