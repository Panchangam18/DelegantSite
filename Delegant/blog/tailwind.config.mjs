import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

const teal = colors.teal
const gray = colors.gray

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: teal, gray
      },
    },
  },
  plugins: [starlightPlugin()],
};
