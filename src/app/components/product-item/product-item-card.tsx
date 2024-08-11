import { ChevronRight, MessageCircle, Share2, ThumbsUp } from "lucide-react";
import { Button } from "~/uikit/button";
import { Card } from "~/uikit/card";
import { Flex } from "~/uikit/flex/flex";
import { Text } from "~/uikit/text";
import { avatarStyle, imageStyle } from "./product-item-card.css";
import { Tag } from "~/uikit/tag";

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
          <Flex gap={2} align="center">
            <img
              src={item.author.avatar}
              alt="Author"
              width={34}
              height={34}
              className={avatarStyle}
            />
            <Flex direction="column">
              <Text size="small">Author</Text>
              <Text weight="bold">{item.author.name}</Text>
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
        {item.tags ? (
          <Flex gap={1}>
            {item.tags.map((tag) => (
              <Tag key={tag} size="small">
                {tag}
              </Tag>
            ))}
          </Flex>
        ) : null}
        <Flex>
          <Text color="gray" clamp={3}>
            {item.description}
          </Text>
        </Flex>
        <Flex full>
          <Flex gap={1} full>
            <Button size="small" onClick={() => props.onLike(item)}>
              <Text size="small">{item.likes}</Text>
              <ThumbsUp size={18} />
            </Button>
            <Button size="small" onClick={() => props.onShare(item)}>
              <Share2 size={18} />
            </Button>
            <Button size="small" onClick={() => props.onShare(item)}>
              <MessageCircle size={18} />
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
