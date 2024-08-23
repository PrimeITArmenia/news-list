import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // borderRadius: {
    //   "def-radius": "34px",
    //   "news-card-radius": "14px",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-green-blue-border":
          "linear-gradient(140deg, #91FF8A, #5A8EFF)",
        "gradient-selected-border": "linear-gradient(140deg, #657AFF, #8539FF)",
        "gradient-selected-item":
          "linear-gradient(140deg, rgba(31, 40, 63, 1), rgba(22, 22, 37, 1))",
          "gradient-selected-item-border":
          "linear-gradient(140deg, rgba(133, 56, 255, 1), rgba(90, 140, 255, 1))",
          "gradient-selected-item-icon":
          "linear-gradient(140deg, rgba(91, 140, 255, 1), rgba(133, 57, 255, 1))",
          'gradinet-card-default': 'linear-gradient(to right, rgba(26, 30, 31, 1), rgba(25, 33, 34, 1), rgba(23, 24, 26, 1))',
          'gradinet-news-card': 'linear-gradient(120deg, rgba(14, 17, 19, 1), rgba(14, 23, 24, 1), rgba(11, 16, 18, 1),rgba(8, 9, 12, 1))',
      },
      maxWidth: {
        "market-width": "1134px",
        "news-width": "676px",
        "economic-width": "578px",
        "trade-width": "954px",
      },
      colors: {
        "gradient-green": "#91FF8A",
        "gradient-blue": "#7EEDED",
        "gradient-light-purple": "#657AFF",
        "gradient-dark-purple": "#8539FF",
        "light-yellow": "#E1FF00",
        "gradient-light-black": "#0D1010",
        "gradient-dark-black": "#08090C",
        "text-light-gray": "#B0BAC4",
      },
      fontFamily: {
        "termina-font": ['"Termina Test"', "sans-serif"],
      },
      boxShadow: {
        "custom-yellow-combined":
          "inset 0 0 3px 0px #E1FF00, 0 0 4px 0px #E1FF00",
        "new-feed": "inset 0 0 6px 0px rgba(255, 255, 255, 0.12)",
        "new-stock": "inset 0 0 6px 0px #8DFFA6",
        "new-selected": "inset 0 0 6px 0px #918DFF",
      },
    },
  },
  plugins: [],
};
export default config;
