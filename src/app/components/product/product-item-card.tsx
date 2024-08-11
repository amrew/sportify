import { ChevronRight, Share2, ThumbsUp } from "lucide-react";
import { Button } from "~/uikit/button";
import { Card } from "~/uikit/card";
import { Flex } from "~/uikit/flex/flex";
import { Text } from "~/uikit/text";
import { imageStyle } from "./product-item-card.css";

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

export type ProductItemCardProps = {
  item: Item;
  onLike: (item: Item) => void;
  onShare: (item: Item) => void;
  onReadMore: (item: Item) => void;
};

export function ProductItemCard(props: ProductItemCardProps) {
  const { item } = props;
  return (
    <Card>
      <Flex direction="column" gap={2}>
        {item.author ? (
          <Flex gap={2}>
            <img src={item.author.avatar} alt="Author" width={48} height={48} />
            <Flex direction="column">
              <Text size="small">Author</Text>
              <Text size="large" weight="bold">
                {item.author.name}
              </Text>
            </Flex>
          </Flex>
        ) : null}
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt="Product"
            width="100%"
            height={320}
            className={imageStyle}
          />
        ) : null}
        <Text size="xlarge" weight="bold">
          {item.title}
        </Text>
        <Text color="gray">{item.description}</Text>
        <Flex full>
          <Flex gap={1} full>
            <Button onClick={() => props.onLike(item)}>
              <Text size="small">{item.likes}</Text>
              <ThumbsUp size={16} />
            </Button>
            <Button onClick={() => props.onShare(item)}>
              <Share2 size={16} />
            </Button>
          </Flex>
          <Button color="primary" onClick={() => props.onReadMore(item)}>
            <Text color="white">Read More</Text>
            <ChevronRight />
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
