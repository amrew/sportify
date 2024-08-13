import { ChevronRight, MessageCircle, Share2, ThumbsUp } from "lucide-react";
import { Button } from "~/uikit/button";
import { Card } from "~/uikit/card";
import { Flex } from "~/uikit/flex/flex";
import { Text } from "~/uikit/text";
import { Tag } from "~/uikit/tag";
import { Media } from "~/uikit/media";
import { Link } from "~/uikit/link";
import { Image } from "~/uikit/image";
import { RWebShare } from "react-web-share";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export type Item = {
  id: number;
  slug: string;
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

export type ProductItemProps = {
  item: Item;
  onLike: (item: Item) => void;
  onComment: (item: Item) => void;
  getHref: (item: Item) => string;
};

export function ProductItem(props: ProductItemProps) {
  const { item } = props;
  const href = props.getHref(item);
  return (
    <Card>
      <Flex direction="column" gap={4}>
        {item.author ? (
          <Flex gap={4} align="center">
            <Image
              src={item.author.avatar}
              alt="Author"
              width={34}
              height={34}
              radius="lg"
            />
            <Flex direction="column">
              <Text size="small">Author</Text>
              <Text weight="bold">{item.author.name}</Text>
            </Flex>
          </Flex>
        ) : null}
        {item.imageUrl ? (
          <Link href={href}>
            <Image
              src={item.imageUrl}
              alt="Product"
              width="100%"
              height={320}
              objectFit="contain"
            />
          </Link>
        ) : null}
        <Link href={href}>
          <Text size="xlarge" weight="bold">
            {item.title}
          </Text>
        </Link>
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
          <Link href={href}>
            <Text color="gray" clamp={3}>
              {item.description}
            </Text>
          </Link>
        </Flex>
        <Flex full>
          <Flex gap={3} full>
            <Button size="sm" onClick={() => props.onLike(item)}>
              <ThumbsUp size={18} />
            </Button>
            <RWebShare
              data={{
                text: item.title,
                url: `${publicRuntimeConfig.APP_URL}/products/${item.slug}`,
                title: "Check out this product!",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button size="sm">
                <Share2 size={18} />
              </Button>
            </RWebShare>
            <Button size="sm">
              <MessageCircle size={18} />
            </Button>
          </Flex>
          <Link href={href}>
            <Button color="primary">
              <Media smallMobile={false} mobile tablet desktop>
                <Text color="white">Read More</Text>
              </Media>
              <ChevronRight />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
}
