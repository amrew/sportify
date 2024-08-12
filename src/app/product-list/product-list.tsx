import { ProductItemCard } from "~/app/product-item";
import { Flex } from "~/uikit/flex/flex";
import { Select } from "~/uikit/select/select";
import { Text } from "~/uikit/text";
import { filterContainerStyle } from "./product-list.css";

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
  tags?: string[];
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
    <div>
      <div className={filterContainerStyle}>
        <Flex align="center" gap={1} pl={2} pr={2}>
          <Text>Sort</Text>
          <Select
            options={[
              {
                label: "Latest",
                value: "latest",
              },
              {
                label: "Popular",
                value: "popular",
              },
              {
                label: "Price",
                value: "price",
              },
            ]}
          />
        </Flex>
      </div>
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
    </div>
  );
}
