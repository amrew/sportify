import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";
import { Text } from "../text";

const meta = {
  title: "Uikit/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text>Hellow</Text>,
  },
};
