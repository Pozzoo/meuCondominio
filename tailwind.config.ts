import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
    colors: {
      'ash-grey': '#BCC0AD',
      'cafe-noir': '#4D3912',
      'dark-goldenrod': '#C5911E',
      'ebony': '#515B41',
      'saffron': '#F0BB08',
      'platinum': '#D3D9D7',
      'anti-flash-white': '#EFEFEF',
    },
  },
  plugins: [],
} satisfies Config;
