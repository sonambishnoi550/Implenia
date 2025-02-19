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
      fontFamily: {
        "source": '"Source Sans 3", "sans-serif"',
      },
      colors: {
        "dark-orange": "#EBA82C",
      },
      fontSize: {
        "customSm": "21px",
        "customMd": "76px",
      }
    },
  },
  plugins: [],
} satisfies Config;
