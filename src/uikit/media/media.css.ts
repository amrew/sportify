import { recipe } from "@vanilla-extract/recipes";

export const mediaVariant = {
  smallMobile: {
    true: {
      "@media": {
        "screen and (max-width: 320px)": {
          display: "initial",
        },
      },
    },
    false: {
      "@media": {
        "screen and (max-width: 320px)": {
          display: "none",
        },
      },
    },
  },
  mobile: {
    true: {
      "@media": {
        "screen and (min-width: 321px) and (max-width: 640px)": {
          display: "initial",
        },
      },
    },
    false: {
      "@media": {
        "screen and (min-width: 321px) and (max-width: 640px)": {
          display: "none",
        },
      },
    },
  },
  tablet: {
    true: {
      "@media": {
        "screen and (min-width: 641px) and (max-width: 1024px)": {
          display: "initial",
        },
      },
    },
    false: {
      "@media": {
        "screen and (min-width: 641px) and (max-width: 1024px)": {
          display: "none",
        },
      },
    },
  },
  desktop: {
    true: {
      "@media": {
        "screen and (min-width: 1025px)": {
          display: "initial",
        },
      },
    },
    false: {
      "@media": {
        "screen and (min-width: 1025px)": {
          display: "none",
        },
      },
    },
  },
} as const;

export const mediaStyle = recipe({
  variants: mediaVariant,
  defaultVariants: {
    smallMobile: true,
    mobile: false,
    tablet: false,
    desktop: false,
  },
});
