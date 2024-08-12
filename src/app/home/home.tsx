import { Container } from "~/uikit/container/container";
import { Sidebar } from "~/app/sidebar";
import { Layout } from "~/uikit/layout";
import { ProductList } from "~/app/product-list";
import { Box } from "~/uikit/box";
import { Slider } from "../slider";

export type HomeProps = {
  banners: {
    title: string;
    subtitle: string;
    imageUrl: string;
    url: string;
    buttonText: string;
  }[];
  categories: {
    id: number;
    name: string;
    href: string;
  }[];
  products: {
    id: number;
    slug: string;
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
      {props.banners.length ? (
        <Slider
          items={props.banners.map((banner) => ({
            title: banner.title,
            subtitle: banner.subtitle,
            imageUrl: banner.imageUrl,
            url: banner.url,
            buttonText: banner.buttonText,
          }))}
        />
      ) : null}
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
