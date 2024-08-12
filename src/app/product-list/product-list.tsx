import { ProductItem, type Item } from "~/app/product-item";
import { Flex } from "~/uikit/flex/flex";
import { Select } from "~/uikit/select/select";
import { Text } from "~/uikit/text";
import { filterContainerStyle } from "./product-list.css";

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
  const getHref = (item: Item) => {
    return `/product/${item.slug}`;
  };
  return (
    <div>
      <div className={filterContainerStyle}>
        <Flex align="center" gap={4} pl={6} pr={6}>
          <Flex full>
            <Text size="xlarge">Product Review</Text>
          </Flex>
          <Flex gap={4} align="center">
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
        </Flex>
      </div>
      <Flex direction="column" full gap={8}>
        {props.items.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
            onLike={onLike}
            onShare={onShare}
            getHref={getHref}
          />
        ))}
      </Flex>
    </div>
  );
}
