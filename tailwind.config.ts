import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        questrial: ["Questrial", "sans-serif"], // Statically define font family
        rubik: ["Rubik", "sans-serif"], // Statically define font family
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          100: "#F4F6F6",
          700: "#176D38",
        },
        orange: {
          500: "#FF6A1A",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
