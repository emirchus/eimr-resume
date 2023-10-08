import type { Config } from "tailwindcss";
import catppuccin from "@catppuccin/tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extend: {
    fontFamily: {
      sans: ["var(--font-dank)"],
    },
  },
  darkMode: "class",
  plugins: [
    catppuccin({
      prefix: false,
      defaultFlavour: "mocha",
    }),
  ],
};
export default config;
