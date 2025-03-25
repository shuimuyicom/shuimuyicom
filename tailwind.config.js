/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c8fb",
          300: "#66acf9",
          400: "#3391f7",
          500: "#0071F5", // 主色调
          600: "#005ac4",
          700: "#004493",
          800: "#002d62",
          900: "#001731",
        },
      },
    },
  },
  plugins: [],
}

