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
          dark: '#000000',
          light: '#ffffff',
          redAccent: '#ff0000',
        },
        fontFamily: {
          cinzel: ['Cinzel', 'serif'],
        },
      },
    },
    plugins: [],
};
export default config;
