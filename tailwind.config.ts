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
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      colors: {
        "dark-orange": "#FEBE32",
        "orange":"#F3B72C",
        "red": "#FF132D",
        "light-black": "#1d1d1b",
        "off-white": "#F5F5F5",
        "blue": "#009FE3",
        "yellow":" #FEBE32"
      },
      fontSize: {
        "customXsm": "10px",
        "customSm": "21px",
        "customMd": "34px",
        "customXmd": "35px",
        "custom2md": "44px",
        "customLg": "49px",
        "customXl": "76px",
        "custom2Xl": "80px",
      },
      lineHeight: {
        "customSm": "21px",
        "custom2Sm": "27px",
        "customXsm": "44px",
        "customMd": "48px",
        "custom2Md": "60px",
        "customLg": "80px"
      }
    },
  },
  plugins: [],
} satisfies Config;
