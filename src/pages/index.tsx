import Head from "next/head";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { useMemo } from "react";
import { Footer } from "~/app/footer";
import { Header } from "~/app/header";
import { Banner } from "~/app/banner";
import { Container } from "~/uikit/container";
import { Layout } from "~/uikit/layout";
import { Sidebar } from "~/app/sidebar";
import { ProductList } from "~/app/product-list";

type Category = {
  id: number;
  slug: string;
  name: string;
};

type Banner = {
  id: number;
  title: string;
  subtitle: string;
  image_url: string;
  url: string;
  button_text: string;
};

type Product = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  slug: string;
  profile: {
    name: string;
    picture: string;
  };
};

type HomePageProps = {
  categories: Array<Category> | null;
  products: Array<Product> | null;
};

export const getServerSideProps = (async (ctx) => {
  const supabase = createPagesServerClient(ctx);

  const getCategories = async () => {
    const { data: categories } = await supabase
      .from("category")
      .select<"*", Category>("*")
      .is("parent_id", null);
    return categories;
  };

  const getBanners = async () => {
    const { data: banners } = await supabase
      .from("banner")
      .select<"*", Banner>("*")
      .eq("status", true);
    return banners;
  };

  const getProducts = async () => {
    const { data: products } = await supabase
      .from("product")
      .select<
        any,
        Product
      >("id, name, description, image_url, slug, profile(name,picture)")
      .eq("status", true);
    return products;
  };

  const [categories, products, banners] = await Promise.all([
    getCategories(),
    getProducts(),
    getBanners(),
  ]);

  return {
    props: {
      categories,
      products,
      banners,
    },
  };
}) satisfies GetServerSideProps<HomePageProps>;

export default function HomePage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const categories = useMemo(() => {
    return (
      props.categories?.map((cat) => ({
        ...cat,
        href: "/categories/" + cat.slug,
      })) || []
    );
  }, [props.categories]);

  const products = useMemo(() => {
    return (
      props.products?.map((product) => ({
        id: product.id,
        title: product.name,
        description: product.description,
        imageUrl: product.image_url,
        slug: product.slug,
        likes: 0,
        tags: [],
        author: product.profile
          ? {
              name: product.profile.name,
              avatar: product.profile.picture,
            }
          : undefined,
      })) || []
    );
  }, [props.products]);

  const banners = useMemo(() => {
    return (
      props.banners?.map((banner) => ({
        id: banner.id,
        title: banner.title,
        subtitle: banner.subtitle,
        imageUrl: banner.image_url,
        url: banner.url,
        buttonText: banner.button_text,
      })) || []
    );
  }, [props.banners]);

  return (
    <>
      <Head>
        <title>Sportify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner items={banners} />
      <main>
        <Container>
          <Layout leftNode={<Sidebar items={categories} />}>
            <ProductList items={products} />
          </Layout>
        </Container>
      </main>
      <Footer />
    </>
  );
}
