import { ProductItemCard } from "../components/product/product-item-card";

type Item = {
  id: number;
  author?: {
    name: string;
    avatar: string;
  };
  imageUrl: string;
  title: string;
  description: string;
  likes: number;
};

export type ProductListProps = {
  items: Item[];
};

export function ProductList(props: ProductListProps) {
  const onLike = (item: Item) => {
    console.log("Liked", item);
  };
  const onShare = (item: Item) => {
    console.log("Shared", item);
  };
  const onReadMore = (item: Item) => {
    // Redirect to item page
  };
  return (
    <div style={{ flex: 1 }}>
      {props.items.map((item) => (
        <ProductItemCard
          key={item.id}
          item={item}
          onLike={onLike}
          onShare={onShare}
          onReadMore={onReadMore}
        />
      ))}
    </div>
  );
}
