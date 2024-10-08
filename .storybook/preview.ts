import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import "react-slideshow-image/dist/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
