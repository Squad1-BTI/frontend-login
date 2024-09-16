import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
      colors: {
        primary: '#f76a00',
        secundary: '#F2EFEE',
        place: '#838C9B',
        textGray: '#6A7686',
        line: '#CDD0D5'
      },
      height: {
        '128': '64rem',
      },
      
    },
  },
  plugins: [],
};
export default config;
