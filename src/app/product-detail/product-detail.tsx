import { MessageCircle, Share2, ThumbsUp } from "lucide-react";
import { Button } from "~/uikit/button";
import { Card } from "~/uikit/card";
import { Flex } from "~/uikit/flex/flex";
import { Text } from "~/uikit/text";
import { Tag } from "~/uikit/tag";
import { avatarStyle } from "./product-detail.css";
import { Image } from "~/uikit/image";
import { Slide } from "react-slideshow-image";
import { Box } from "~/uikit/box";
import { useIsMobile } from "~/hooks/useIsMobile";
import { RWebShare } from "react-web-share";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

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
  const images = [item.imageUrl, ...item.additionalImageUrls];
  const isMobile = useIsMobile();
  return (
    <Card>
      <Flex direction="column" gap={4} full>
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
        {images.length > 1 ? (
          <Box style={{ maxWidth: 520 }}>
            <div className="slide-container">
              <Slide autoplay={false}>
                {images.map((imageUrl, index) => (
                  <Box full key={index}>
                    <Image
                      src={imageUrl}
                      alt={item.title}
                      width="100%"
                      height={isMobile ? 320 : 400}
                      objectFit="contain"
                    />
                  </Box>
                ))}
              </Slide>
            </div>
          </Box>
        ) : (
          <Box full>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width="100%"
              height={400}
              objectFit="contain"
            />
          </Box>
        )}
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
        <Flex full mt={8}>
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
              <Button size="sm" onClick={() => props.onShare(item)}>
                <Share2 size={18} />
              </Button>
            </RWebShare>
            <Button size="sm" onClick={() => props.onShare(item)}>
              <MessageCircle size={18} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
