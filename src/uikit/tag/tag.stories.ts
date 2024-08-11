import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./tag";

const meta = {
  title: "Uikit/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    children: "Hellow",
  },
};

export const Medium: Story = {
  args: {
    children: "Hellow",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Hellow",
  },
};

export const XLarge: Story = {
  args: {
    size: "xlarge",
    children: "Hellow",
  },
};

export const XXLarge: Story = {
  args: {
    size: "xxlarge",
    children: "Hellow",
  },
};
