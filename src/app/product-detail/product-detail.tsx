import { Car, MessageCircle, Share2, ThumbsUp } from "lucide-react";
import { Button } from "~/uikit/button";
import { Card } from "~/uikit/card";
import { Flex } from "~/uikit/flex/flex";
import { Text } from "~/uikit/text";
import { Tag } from "~/uikit/tag";
import { imageStyle } from "./product-detail.css";
import { Image } from "~/uikit/image";
import { Slide } from "react-slideshow-image";
import { Box } from "~/uikit/box";
import { RWebShare } from "react-web-share";
import getConfig from "next/config";
import { useMachine } from "@xstate/react";
import { commentMachine } from "~/machines/commentMachine";
import { useEffect } from "react";

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
};

export function ProductDetail(props: ProductDetailProps) {
  const { item } = props;
  const images = [item.imageUrl, ...item.additionalImageUrls];

  const [state, send] = useMachine(commentMachine);
  const comments = state.context.comments;

  useEffect(() => {
    send({
      type: "FETCH",
      productId: item.id,
    });
  }, []);

  return (
    <Card>
      <Flex direction="column" gap={4} full>
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
        {images.length > 1 ? (
          <Box style={{ maxWidth: 600 }}>
            <div className="slide-container">
              <Slide autoplay={false}>
                {images.map((imageUrl, index) => (
                  <Box full key={index}>
                    <Image
                      src={imageUrl}
                      alt={item.title}
                      width="100%"
                      className={imageStyle}
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
        <Text size="xxlarge" weight="bold">
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
            <Button
              aria-label="Like"
              size="sm"
              onClick={() => props.onLike(item)}
            >
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
              <Button aria-label="Share" size="sm">
                <Share2 size={18} />
              </Button>
            </RWebShare>
            <Button aria-label="Comment" size="sm">
              <MessageCircle size={18} />
            </Button>
          </Flex>
        </Flex>
        <Box mt={4}>
          <Card>
            <Text weight="bold">Comment</Text>
          </Card>
          <Flex direction="column" gap={4} ml={8} mt={4}>
            {comments.length === 0 && <Text>No comments yet</Text>}
            {comments.map((comment) => (
              <Card>
                <Flex gap={4} align="center">
                  <Image
                    src={comment.user.picture}
                    alt="Author"
                    width={34}
                    height={34}
                    radius="xl"
                  />
                  <Flex direction="column">
                    <Text weight="bold">{comment.user.name}</Text>
                  </Flex>
                </Flex>
                <Box mt={2}>
                  <Text>{comment.message}</Text>
                </Box>
              </Card>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
}
