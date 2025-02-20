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
        "yellow": " #FEBE32",
        "dark-grey": "#8F9090"
      },
      fontSize: {
        "custom-xsm": "10px",
        "custom-sm": "21px",
        "custom-2sm": "32px",
        "custom-md": "34px",
        "custom-xmd": "35px",
        "custom-2md": "44px",
        "custom-lg": "49px",
        "custom-xl": "76px",
        "custom-2xl": "80px",
        "custom-3xl": "100px",
      },
      lineHeight: {
        "custom-sm": "21px",
        "custom-2sm": "27px",
        "custom-xsm": "44px",
        "custom-md": "48px",
        "custom-2md": "60px",
        "custom-lg": "80px"
      }
    },
  },
  plugins: [],
} satisfies Config;
