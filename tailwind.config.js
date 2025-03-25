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
        ink: {
          50: "#F5F5F5",    // 最浅的墨色（几乎是白色）
          100: "#E8E8E8",   // 极淡的墨色
          200: "#D1D1D1",   // 淡墨色
          300: "#B9B9B9",   // 浅墨色
          400: "#8F8F8F",   // 中浅墨色
          500: "#666666",   // 中墨色
          600: "#4D4D4D",   // 中深墨色
          700: "#333333",   // 深墨色
          800: "#1A1A1A",   // 极深墨色
          900: "#0A0A0A",   // 近黑墨色
        },
        rice: {
          50: "#FFFDF5",    // 米白色
          100: "#FAF5E8",   // 浅米色
          200: "#F5ECD6",   // 米黄色
          900: "#A69C77",   // 深米色
        },
      },
      backgroundImage: {
        'ink-wash': "url('/images/ink-wash-bg.svg')",
      },
      fontFamily: {
        calligraphy: ['var(--font-noto-serif-sc)', 'serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}

