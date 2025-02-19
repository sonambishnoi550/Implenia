import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      colors: {
        "dark-orange": "#EBA82C",
        "red": "#FF132D",
        "light-black": "#1d1d1b",
      },
      fontSize: {
        "customXsm": "10px",
        "customSm": "21px",
        "customMd": "34px",
        "custom2md": "44px",
        "customLg": "49px",
        "customXl": "76px",
        "custom2Xl": "80px",
      },
      lineHeight: {
        "customSm": "21px",
        "customMd": "48px",
        "custom2Md": "60px",
        "customLg": "80px"
      }
    },
  },
  plugins: [],
} satisfies Config;
