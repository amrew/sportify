import { headerStyle } from "./header.css";
import { Container } from "~/uikit/container";
import { HTMLAttributes } from "react";
import { Menu } from "~/uikit/menu";
import { Button } from "~/uikit/button";
import { Text } from "~/uikit/text";
import { Flex } from "~/uikit/flex";
import { LogIn } from "lucide-react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export type HeaderProps = HTMLAttributes<HTMLDivElement>;

export function Header(props: HeaderProps) {
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  const handleLoginWithGoogle = async () => {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${publicRuntimeConfig.APP_URL}/api/auth/callback`,
      },
    });

    if (error) {
      console.error("Error logging in with Google:", error.message);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      console.error("Error logging out:", error.message);
    }

    window.location.reload();
  };

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
        <Flex gap={1} align="center">
          {!user ? (
            <Button
              size="small"
              onClick={() => {
                handleLoginWithGoogle();
              }}
            >
              <Text>Login</Text>
            </Button>
          ) : (
            <Flex gap={2} align="center">
              <Text>{user.user_metadata?.name}</Text>
              <Button
                size="small"
                color="ghost"
                onClick={() => {
                  handleLogout();
                }}
              >
                <Text color="accent">Logout</Text>
              </Button>
            </Flex>
          )}
          <Button size="small" color="danger">
            <Text color="white">Submit Review</Text>
            <LogIn size={16} />
          </Button>
        </Flex>
      </Container>
    </header>
  );
}
