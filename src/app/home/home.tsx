import { Container } from "~/uikit/container/container";
import { Header } from "~/app/header";
import { Sidebar } from "~/app/sidebar";
import { Layout } from "~/uikit/layout";
import { ProductList } from "~/app/product-list";
import { Box } from "~/uikit/box";
import { Slider } from "../slider";

export type HomeProps = {
  categories: {
    id: number;
    name: string;
    href: string;
  }[];
  products: {
    id: number;
    author?: {
      name: string;
      avatar: string;
    };
    imageUrl: string;
    title: string;
    description: string;
    likes: number;
    tags?: string[];
  }[];
};

export function Home(props: HomeProps) {
  return (
    <main>
      <Header />
      <Slider
        items={[
          {
            buttonText: "Shop Now",
            caption: "Adidas New Collection",
            imageUrl:
              "https://www.adidas.co.id/media/scandiweb/slider/r/u/running-fw24-ub5-global-launch-hp-banner-hero-fallback-d.jpg",
            url: "https://www.adidas.co.id",
          },
          {
            buttonText: "Shop Now",
            caption: "Nike New Collection",
            imageUrl:
              "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_2492,c_limit/36bc178a-0bc5-452b-8974-60d06c84308c/nike-just-do-it.jpg",
            url: "https://nike.com",
          },
        ]}
      />
      <Box mt={8} />
      <Container>
        <Layout
          leftNode={
            <Sidebar
              items={props.categories.map((category) => ({
                id: category.id,
                name: category.name,
                href: category.href,
              }))}
            />
          }
        >
          <ProductList items={props.products} />
        </Layout>
      </Container>
    </main>
  );
}
