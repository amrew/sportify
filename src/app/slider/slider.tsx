import { ChevronRight } from "lucide-react";
import { Slide } from "react-slideshow-image";
import { Box } from "~/uikit/box";
import { Button } from "~/uikit/button";
import { Image } from "~/uikit/image";
import { Text } from "~/uikit/text";

export type SliderProps = {
  items: {
    imageUrl: string;
    caption: string;
    buttonText: string;
    url: string;
  }[];
};

export function Slider({ items }: SliderProps) {
  return (
    <div className="slide-container">
      <Slide>
        {items.map((item, index) => (
          <Box key={index} position="relative" bg="rose100" full>
            <Image
              src={item.imageUrl}
              width="100%"
              height={320}
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
              <Text color="white" size="xxlarge">
                {item.caption}
              </Text>
              <Box mt={4}>
                <Button size="sm" color="accent">
                  {item.buttonText} <ChevronRight />
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Slide>
    </div>
  );
}
