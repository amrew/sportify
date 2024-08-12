import type { Meta, StoryObj } from "@storybook/react";
import { ProductList } from "./product-list";

const meta = {
  title: "Components/ProductList",
  component: ProductList,
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
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        slug: "1",
        author: {
          name: "John Doe",
          avatar: "https://placehold.co/96x96",
        },
        imageUrl: "https://placehold.co/800x480",
        title: "Adidas Adizero SL",
        description: "Description",
        likes: 69,
      },
      {
        id: 2,
        slug: "2",
        author: {
          name: "Jane Doe",
          avatar: "https://placehold.co/96x96",
        },
        imageUrl: "https://placehold.co/800x480",
        title: "Running Shoes",
        description: "Description",
        likes: 69,
      },
    ],
  },
};
