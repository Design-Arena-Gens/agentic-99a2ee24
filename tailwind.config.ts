import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#61DAFB",
        secondary: "#DD0031",
        dark: "#0A192F",
        light: "#8892B0",
      },
    },
  },
  plugins: [],
};
export default config;
