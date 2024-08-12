import { Box } from "~/uikit/box";
import { Container } from "~/uikit/container";
import { Flex } from "~/uikit/flex";
import { Menu } from "~/uikit/menu";
import { Text } from "~/uikit/text";

export function Footer() {
  return (
    <Box mt={8} pl={8} pr={8} pt={4} pb={4} bg="gray800">
      <Container>
        <Flex align="center" gap={6}>
          <Text color="white">© 2024 Sportify</Text>
          <Menu
            direction="row"
            variant="simple"
            color="dark"
            items={[
              { id: 1, name: "About", href: "/about" },
              { id: 2, name: "Contact", href: "/contact" },
              { id: 3, name: "Privacy Policy", href: "/privacy-policy" },
            ]}
          />
        </Flex>
      </Container>
    </Box>
  );
}
