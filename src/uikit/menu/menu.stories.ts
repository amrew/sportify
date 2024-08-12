import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./menu";

const meta = {
  title: "Uikit/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Column: Story = {
  args: {
    direction: "column",
    items: [
      {
        id: 1,
        slug: "running",
        name: "Running",
        href: "/categories/running",
      },
      {
        id: 2,
        slug: "soccer",
        name: "Soccer",
        href: "/categories/soccer",
      },
      {
        id: 3,
        slug: "basketball",
        name: "Basketball",
        href: "/categories/basketball",
      },
    ],
  },
};

export const Row: Story = {
  args: {
    direction: "row",
    items: [
      {
        id: 1,
        slug: "running",
        name: "Running",
        href: "/categories/running",
      },
      {
        id: 2,
        slug: "soccer",
        name: "Soccer",
        href: "/categories/soccer",
      },
      {
        id: 3,
        slug: "basketball",
        name: "Basketball",
        href: "/categories/basketball",
      },
    ],
  },
};
