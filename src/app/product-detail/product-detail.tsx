import { MessageCircle, Share2, ThumbsUp } from "lucide-react";
import { Button } from "~/uikit/button";
import { Card } from "~/uikit/card";
import { Flex } from "~/uikit/flex/flex";
import { Text } from "~/uikit/text";
import { Tag } from "~/uikit/tag";
import { avatarStyle, imageStyle } from "./product-detail.css";
import { Image } from "~/uikit/image";

export type DetailItem = {
  id: number;
  slug: string;
  author?: {
    name: string;
    avatar: string;
  };
  title: string;
  description: string;
  likes: number;
  tags?: string[];
  imageUrl: string;
  additionalImageUrls: string[];
};

type ProductDetailProps = {
  item: DetailItem;
  onLike: (item: DetailItem) => void;
  onShare: (item: DetailItem) => void;
};

export function ProductDetail(props: ProductDetailProps) {
  const { item } = props;
  return (
    <Card>
      <Flex direction="column" gap={4}>
        {item.author ? (
          <Flex gap={4} align="center">
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
        <Image
          src={item.imageUrl}
          alt="Product"
          width="100%"
          height={320}
          objectFit="contain"
        />
        <Text size="xlarge" weight="bold">
          {item.title}
        </Text>
        {item.tags ? (
          <Flex gap={4}>
            {item.tags.map((tag) => (
              <Tag key={tag} size="small">
                {tag}
              </Tag>
            ))}
          </Flex>
        ) : null}
        <Flex>
          <Text color="gray">{item.description}</Text>
        </Flex>
        <Flex full>
          <Flex gap={3} full>
            <Button size="sm" onClick={() => props.onLike(item)}>
              <ThumbsUp size={18} />
            </Button>
            <Button size="sm" onClick={() => props.onShare(item)}>
              <Share2 size={18} />
            </Button>
            <Button size="sm" onClick={() => props.onShare(item)}>
              <MessageCircle size={18} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
