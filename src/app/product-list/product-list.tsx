import { ProductItem, type Item } from "~/app/product-item";
import { Flex } from "~/uikit/flex/flex";
import { Select } from "~/uikit/select/select";
import { Text } from "~/uikit/text";
import { Box } from "~/uikit/box";

export type SortType = "latest" | "oldest" | "price-low" | "price-high";

export type ProductListProps = {
  items: Item[];
  showSort?: boolean;
  selectedSort?: SortType;
  onSortChange?: (sort: SortType) => void;
};

export function ProductList(props: ProductListProps) {
  const { selectedSort = "latest" } = props;
  const onLike = (item: Item) => {
    alert("not implemented yet");
  };
  const onComment = (item: Item) => {
    alert("not implemented yet");
  };
  const getHref = (item: Item) => {
    return `/products/${item.slug}`;
  };
  return (
    <Box>
      <Box mb={4}>
        <Flex align="center" gap={4} pl={6} pr={6}>
          <Flex full>
            <Text size="xxlarge" weight="bold">
              Product Review
            </Text>
          </Flex>
          {props.showSort ? (
            <Flex gap={4} align="center">
              <Text>Sort</Text>
              <Select
                value={selectedSort}
                options={[
                  {
                    label: "Latest",
                    value: "latest",
                  },
                  {
                    label: "Oldest",
                    value: "oldest",
                  },
                  {
                    label: "Price (Cheap - Expensive)",
                    value: "price-low",
                  },
                  {
                    label: "Price (Expensive - Cheap)",
                    value: "price-high",
                  },
                ]}
                onChange={(e) =>
                  props.onSortChange?.(e.target.value as SortType)
                }
              />
            </Flex>
          ) : null}
        </Flex>
      </Box>
      <Flex direction="column" full gap={8}>
        {props.items.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
            onLike={onLike}
            onComment={onComment}
            getHref={getHref}
          />
        ))}
      </Flex>
    </Box>
  );
}
