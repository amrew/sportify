import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./banner";

const meta = {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        buttonText: "Shop Now",
        title: "Adidas New Collection",
        subtitle: "Get the latest collection of Adidas",
        imageUrl:
          "https://www.adidas.co.id/media/scandiweb/slider/r/u/running-fw24-ub5-global-launch-hp-banner-hero-fallback-d.jpg",
        url: "https://www.adidas.co.id",
      },
    ],
  },
};
