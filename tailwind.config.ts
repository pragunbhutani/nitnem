import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      minWidth: {
        xl: "20rem", // 320px
        "2xl": "24rem", // 384px
        "3xl": "28rem", // 448px
        "4xl": "32rem", // 512px
        "5xl": "36rem", // 576px
        "6xl": "42rem", // 672px
        "7xl": "48rem", // 768px
      },
    },
  },
  plugins: [],
  darkMode: "selector",
} satisfies Config;
