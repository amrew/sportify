import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Uikit/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hellow",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Hellow",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "Hellow",
  },
};

export const Accent: Story = {
  args: {
    color: "accent",
    children: "Hellow",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    children: "Hellow",
  },
};
