import type { Meta, StoryObj } from "@storybook/react";
import { ProductItemCard } from "./product-item-card";

const meta = {
  title: "Components/ProductItemCard",
  component: ProductItemCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      id: 1,
      author: {
        name: "John Doe",
        avatar: "https://placehold.co/96x96",
      },
      imageUrl: "https://placehold.co/800x480",
      title: "Product",
      description: "Description",
      likes: 69,
      tags: ["running", "shoes"],
    },
    onLike: () => {},
    onShare: () => {},
    onReadMore: () => {},
  },
};
