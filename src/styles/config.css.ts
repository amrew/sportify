import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export const baseColors = {
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  gray900: "#111827",
  gray950: "#030712",
  amber50: "#fffbeb",
  amber100: "#fef3c7",
  amber200: "#fde68a",
  amber300: "#fcd34d",
  amber400: "#fbbf24",
  amber500: "#f59e0b",
  amber600: "#d97706",
  amber700: "#b45309",
  amber800: "#92400e",
  amber900: "#78350f",
  amber950: "#451a03",
  emerald50: "#ecfdf5",
  emerald100: "#d1fae5",
  emerald200: "#a7f3d0",
  emerald300: "#6ee7b7",
  emerald400: "#34d399",
  emerald500: "#10b981",
  emerald600: "#059669",
  emerald700: "#047857",
  emerald800: "#065f46",
  emerald900: "#064e3b",
  emerald950: "#022c22",
  sky50: "#f0f9ff",
  sky100: "#e0f2fe",
  sky200: "#bae6fd",
  sky300: "#7dd3fc",
  sky400: "#38bdf8",
  sky500: "#0ea5e9",
  sky600: "#0284c7",
  sky700: "#0369a1",
  sky800: "#075985",
  sky900: "#0c4a6e",
  sky950: "#082f49",
  rose50: "#fff1f2",
  rose100: "#ffe4e6",
  rose200: "#fecdd3",
  rose300: "#fda4af",
  rose400: "#fb7185",
  rose500: "#f43f5e",
  rose600: "#e11d48",
  rose700: "#be123c",
  rose800: "#9f1239",
  rose900: "#881337",
  rose950: "#4c0519",
};

export const colors = {
  ...baseColors,
  border: baseColors.gray300,
  primary: baseColors.emerald500,
  secondary: baseColors.sky400,
  accent: baseColors.amber500,
  danger: baseColors.rose500,
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colors,
    backgroundColor: colors,
    borderColor: colors,
  },
  shorthands: {
    bg: ["backgroundColor"],
  },
});

export const fontSize = {
  1: "0.2rem",
  2: "0.4rem",
  3: "0.6rem",
  4: "0.8rem",
  5: "1rem",
  6: "1.2rem",
  7: "1.4rem",
  8: "1.6rem",
  9: "1.8rem",
  10: "2rem",
  12: "2.4rem",
  13: "2.6rem",
  14: "2.8rem",
  15: "3rem",
  16: "3.2rem",
  17: "3.4rem",
  18: "3.6rem",
  19: "3.8rem",
  20: "4rem",
};

export const fontWeight = {
  normal: 400,
  medium: 500,
  bold: 700,
};

export const lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

const fontProperties = defineProperties({
  properties: {
    fontSize,
    fontWeight,
    lineHeight,
  },
});

export const size = {
  0: "0",
  1: "0.2rem",
  2: "0.4rem",
  3: "0.6rem",
  4: "0.8rem",
  5: "1rem",
  6: "1.2rem",
  7: "1.4rem",
  8: "1.6rem",
  9: "1.8rem",
  10: "2rem",
  12: "2.4rem",
  13: "2.6rem",
  14: "2.8rem",
  15: "3rem",
  16: "3.2rem",
  17: "3.4rem",
  18: "3.6rem",
  19: "3.8rem",
  20: "4rem",
  24: "4.8rem",
  28: "5.6rem",
  32: "6.4rem",
  36: "7.2rem",
  40: "8rem",
  44: "8.8rem",
  48: "9.6rem",
  52: "10.4rem",
  56: "11.2rem",
  60: "12rem",
  64: "12.8rem",
  72: "14.4rem",
  80: "16rem",
  96: "19.2rem",
  100: "20rem",
  120: "24rem",
  140: "28rem",
  200: "40rem",
  full: "100%",
};

const spaceProperties = defineProperties({
  properties: {
    margin: size,
    marginLeft: size,
    marginRight: size,
    marginTop: size,
    marginBottom: size,
    padding: size,
    paddingLeft: size,
    paddingRight: size,
    paddingTop: size,
    paddingBottom: size,
    gap: size,
  },
  shorthands: {
    m: ["margin"],
    p: ["padding"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    ml: ["marginLeft"],
    mr: ["marginRight"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
  },
});

const radius = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

const radiusProperties = defineProperties({
  properties: {
    borderRadius: radius,
  },
  shorthands: {
    radius: ["borderRadius"],
  },
});

const shadow = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
  none: "none",
};

const shadowProperties = defineProperties({
  properties: {
    boxShadow: shadow,
  },
  shorthands: {
    shadow: ["boxShadow"],
  },
});

export const sprinkles = createSprinkles(
  fontProperties,
  colorProperties,
  spaceProperties,
  radiusProperties,
  shadowProperties
);
