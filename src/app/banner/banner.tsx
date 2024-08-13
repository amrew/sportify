import { ChevronRight } from "lucide-react";
import { Link } from "~/uikit/link";
import { Slide } from "react-slideshow-image";
import { Box } from "~/uikit/box";
import { Button } from "~/uikit/button";
import { Image } from "~/uikit/image";
import { Text } from "~/uikit/text";

export type BannerItem = {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  url: string;
};

export type BannerProps = {
  items: BannerItem[];
};

export function Banner({ items }: BannerProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="slide-container">
      <Slide duration={10000}>
        {items.map((item, index) => (
          <Box key={index} position="relative" full>
            <Image
              src={item.imageUrl}
              width="100%"
              height={400}
              alt="Banner"
              objectFit="cover"
              objectPosition="center"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              justify="center"
              align="center"
              display="flex"
              direction="column"
              full
              bg="semitransparent"
              p={8}
            >
              <Text color="white" size="xxlarge" textAlign="center">
                {item.title}
              </Text>
              <Text color="white" size="large" textAlign="center">
                {item.subtitle}
              </Text>
              <Box mt={4}>
                <Link href={item.url} target="_blank">
                  <Button size="sm" color="accent">
                    {item.buttonText} <ChevronRight />
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Slide>
    </div>
  );
}
