import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
            '0%': { opacity:'0' },
            '100%': {opacity:'1' },
        },
        pop: {
            '0%': { transform: 'scale(0)' },
            '100%': { transform: 'scale(1)' },
          },
      },
    },
  },
  plugins: [],
};

export default config;
