import Head from "next/head";
import { Home } from "~/app/home";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

type Category = {
  id: number;
  slug: string;
  name: string;
};

type Product = {
  id: number;
  name: string;
  description: string;
  image_url: string;
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

  const getProducts = async () => {
    const { data: products } = await supabase
      .from("product")
      .select<
        any,
        Product
      >("id, name, description, image_url, profile(name,picture)")
      .eq("status", true);
    return products;
  };

  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return {
    props: {
      categories,
      products,
    },
  };
}) satisfies GetServerSideProps<HomePageProps>;

export default function HomePage({
  categories,
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Sportify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home
        categories={
          categories?.map((cat) => ({
            ...cat,
            href: "/categories/" + cat.slug,
          })) || []
        }
        products={
          products?.map((product) => ({
            id: product.id,
            title: product.name,
            description: product.description,
            imageUrl: product.image_url,
            likes: 0,
            tags: [],
            author: product.profile
              ? {
                  name: product.profile.name,
                  avatar: product.profile.picture,
                }
              : undefined,
          })) || []
        }
      />
    </>
  );
}
