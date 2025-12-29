/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e50914",
        "primary-hover": "#f40612",
        background: "#0a0a0a",
        foreground: "#ededed",
        "card-bg": "#141414",
        "card-border": "#2a2a2a",
      },
    },
  },
  plugins: [],
};
