import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./sidebar";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        name: "Running",
        href: "/categories/running",
      },
      {
        id: 2,
        name: "Soccer",
        href: "/categories/soccer",
      },
      {
        id: 3,
        name: "Basketball",
        href: "/categories/basketball",
      },
    ],
  },
};
