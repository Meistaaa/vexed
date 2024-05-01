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
        primary: "#262666",
        gray: " #00000080",
        lightGray: "#FFFFFFB2",
        lightBlue: "#1780B2",
        bgBlue: "#1E1541",
        red: "#FF0042",
        lightPurple: "#332b5480",
      },
    },
    plugins: [],
  },
};
export default config;
