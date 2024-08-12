import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Slider>;

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
