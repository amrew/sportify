import type { Meta, StoryObj } from "@storybook/react";
import { HomeScreen } from "./home-screen";

const meta = {
  title: "Screens/HomeScreen",
  component: HomeScreen,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HomeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
