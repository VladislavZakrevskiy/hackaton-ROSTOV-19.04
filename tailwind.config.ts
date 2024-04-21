import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "x-orange": '#e5522e',
      "x-black": '#080407',
      "x-white": '#EAE8E4',
      "x-purple": "#5F308C",
      'x-light-orange': '#e37f63',
      "x-gray": "#F4F4F4"
    }
  },
  plugins: [],
};
export default config;
