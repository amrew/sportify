import { Card } from "~/uikit/card";
import { Text } from "~/uikit/text";
import { sidebarStyle, toggleButtonStyle } from "./sidebar.css";
import { Menu } from "~/uikit/menu/menu";
import { Flex } from "~/uikit/flex/flex";
import { ChevronDown, ChevronUp, MenuSquare } from "lucide-react";
import { Button } from "~/uikit/button";
import { useState } from "react";
import { Box } from "~/uikit/box";

type Item = {
  id: number;
  name: string;
  slug: string;
  href: string;
  children?: Item[];
};

export type SidebarProps = {
  items: Item[];
  selectedSlug?: string;
};

export function Sidebar(props: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box>
      <Box className={sidebarStyle}>
        <Card>
          <Flex align="center" gap={4}>
            <Flex align="center" gap={4} full>
              <MenuSquare />
              <Text size="large" weight="bold">
                Category
              </Text>
            </Flex>
            <Box className={toggleButtonStyle}>
              <Button
                aria-label="Toggle Collapse"
                size="sm"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </Button>
            </Box>
          </Flex>
          {isOpen ? (
            <Menu
              items={props.items}
              selectedSlug={props.selectedSlug}
              variant="fancy"
            />
          ) : null}
        </Card>
      </Box>
    </Box>
  );
}
