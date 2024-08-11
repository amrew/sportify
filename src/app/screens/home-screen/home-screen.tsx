import { Container } from "~/uikit/container/container";
import { Header } from "~/app/components/header";
import { Sidebar } from "~/app/components/sidebar";
import { Layout } from "~/uikit/layout";
import { ProductList } from "~/app/containers/product-list";

export type HomeScreenProps = {
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

export function HomeScreen(props: HomeScreenProps) {
  return (
    <main>
      <Header />
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
