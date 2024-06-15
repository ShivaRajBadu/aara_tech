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
        foreground: " rgb(var(--foreground) / <alpha-value>)",
        background: " rgb(var(--background) / <alpha-value>)",
        primary: " rgb(var(--primary) / <alpha-value>)",
        headingText: " rgb(var(--heading-text) / <alpha-value>)",
        paraText: " rgb(var(--para-text) / <alpha-value>)",
        subtitle: " rgb(var(--subtitle) / <alpha-value>)",
        secondary: " rgb(var(--secondary) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
