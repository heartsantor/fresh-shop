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
        product: "0px 4px 20px 0px rgba(9, 43, 94, 0.06)", // Regular shadow
        "product-hover": "0px 6px 24px 0px rgba(9, 43, 94, 0.12)", // Hover shadow
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
