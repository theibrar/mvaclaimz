import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0C1E36", // Midnight Sapphire Navy
          dark: "#081424",
          light: "#173862",
          surface: "#0A192F",
        },
        accent: {
          DEFAULT: "#C7FD0D", // Electric Neon Lime
          hover: "#AEDB0A",
          muted: "rgba(199, 253, 13, 0.15)",
        },
        brand: {
          navy: "#0C1E36",
          lime: "#C7FD0D",
          limeHover: "#AEDB0A",
          darkNavy: "#000A12",
          lightBg: "#F4F6F9",
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 4px 20px rgba(199, 253, 13, 0.35)',
        'neon-lg': '0 10px 30px rgba(199, 253, 13, 0.45)',
        'card': '0 15px 40px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 45px rgba(12, 30, 54, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
