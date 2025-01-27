import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "rgb(27, 27, 27)",
        secondary: "rgb(53, 53, 53)",
        tertiary: "rgb(16 185 129)",
      },
      screens: {
        desktop: { max: "1600px" },
        laptop: { max: "1440px" },
        tablet: { max: "1100px" },
        mobile: { max: "640px" },
      },
    },
  },
  plugins: [],
};
export default config;
