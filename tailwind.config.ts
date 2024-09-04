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
        primary: '#1a73e8', // cor de fundo do botão primário
        'primary-foreground': '#ffffff', // cor do texto do botão primário
        destructive: '#ff4d4f', // cor de fundo do botão destrutivo
        'destructive-foreground': '#ffffff', // cor do texto do botão destrutivo
        secondary: '#3b82f6', // cor de fundo do botão secundário
        'secondary-foreground': '#ffffff', // cor do texto do botão secundário
        accent: '#f59e0b', // cor para os botões com hover
        'accent-foreground': '#000000', // cor de texto para o estado de hover
        background: '#f3f4f6', // cor de fundo para estado outline
        ring: '#6366f1', // cor para o anel de foco
        'ring-offset': '#e5e7eb', // cor de fundo para o deslocamento do anel
        // Adicione outras cores conforme necessário
      },
    },
  },
  plugins: [],
};
export default config;
