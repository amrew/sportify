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
  args: {
    categories: [
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
      {
        id: 4,
        name: "Cycling",
        href: "/categories/cycling",
      },
      {
        id: 5,
        name: "Tennis",
        href: "/categories/tennis",
      },
    ],
    products: [
      {
        id: 1,
        author: {
          name: "John Doe",
          avatar: "https://placehold.co/96x96",
        },
        imageUrl:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/8/8/a1190e71-7363-4e42-b3c3-5fda2149e809.jpg",
        title: "MILLS Sepatu Revolt Raze",
        description:
          "Dirancang untuk Para pengguna sepatu lifestyle yang memerlukan gaya yang sporty tetapi basic untuk digunakan untuk sekolah maupun berkerja. Material upper sepatu yang diperbarui menggunakan perpaduan sintetis dan mesh mengakomodir pengguna yang memerlukan sepatu yang diguanakn sehari-hari di jangka waktu yang panjang.",
        likes: 69,
        tags: ["running", "sport"],
      },
      {
        id: 2,
        author: {
          name: "Jane Doe",
          avatar: "https://placehold.co/96x96",
        },
        imageUrl:
          "https://www.adidas.co.id/media/catalog/product/i/h/ih7759_5_footwear_photography_side20medial20center20view_grey.jpg",
        title: "Runfalcon 5 Running Shoes",
        description:
          "Sepatu running Hypersonic merupakan sepatu dengan detail dan desain yang fashionable. Memiliki pilihan warna yang menarik. Dilengkapi dengan teknologi Quick Fit dan Ortflow pada bagian upper membuat sepatu ini memiliki material pelapis yang lembut dan sejuk saat dipakai. Dilengkapi dengan teknologi Cumulus Foam yang membuat sepatu menjadi terasa sangat ringan, Ortshoax memberikan sensasi yang empuk pada setiap pemakainya dan Stratus Foam yang membuat sepatu akan tahan lama dan tidak mudah rusak. Sepatu ini memiliki material Sandwich Mess, PU Nosew, Fake compound 2 lapis di bagian midsole, dan Rubber + Carbond plate di Outsole.",
        likes: 69,
      },
      {
        id: 3,
        author: {
          name: "Foo Bar",
          avatar: "https://placehold.co/96x96",
        },
        imageUrl:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/21/6988d142-e370-41e3-956b-f97f94d31c76.jpg",
        title: "Ortuseight Hypersonic",
        description: "Description",
        likes: 69,
      },
    ],
  },
};
