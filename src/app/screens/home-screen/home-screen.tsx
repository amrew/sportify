import { Container } from "~/uikit/container/container";
import { Header } from "~/uikit/header";
import { Sidebar } from "../../components/sidebar";
import { Layout } from "~/uikit/layout";
import { ProductList } from "../../containers/product-list";

export function HomeScreen() {
  return (
    <main>
      <Header />
      <Container>
        <Layout
          leftNode={
            <Sidebar
              items={[
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
              ]}
            />
          }
        >
          <ProductList
            items={[
              {
                id: 1,
                author: {
                  name: "John Doe",
                  avatar: "https://placehold.co/96x96",
                },
                imageUrl:
                  "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/8/8/a1190e71-7363-4e42-b3c3-5fda2149e809.jpg",
                title: "MILLS Sepatu Revolt Raze",
                description: "Description",
                likes: 69,
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
                description: "Description",
                likes: 69,
              },
              {
                id: 3,
                author: {
                  name: "Jane Doe",
                  avatar: "https://placehold.co/96x96",
                },
                imageUrl:
                  "https://www.adidas.co.id/media/catalog/product/i/h/ih7759_5_footwear_photography_side20medial20center20view_grey.jpg",
                title: "Runfalcon 5 Running Shoes",
                description: "Description",
                likes: 69,
              },
            ]}
          />
        </Layout>
      </Container>
    </main>
  );
}
