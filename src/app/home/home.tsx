import { Container } from "~/uikit/container/container";
import { Sidebar } from "~/app/sidebar";
import { Layout } from "~/uikit/layout";
import { ProductList } from "~/app/product-list";
import { Box } from "~/uikit/box";
import { Banner, type BannerItem } from "../banner";
import { type Item as ProductItem } from "~/app/product-item";

type Category = {
  id: number;
  name: string;
  href: string;
};

export type HomeProps = {
  banners: BannerItem[];
  categories: Category[];
  products: ProductItem[];
};

export function Home(props: HomeProps) {
  return (
    <main>
      {props.banners.length ? (
        <Banner
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
