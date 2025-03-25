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
        // 和风配色系列
        washi: {
          50: "#FAFAFA",    // 几乎纯白的纸色
          100: "#F5F5F5",   // 淡和纸色
          200: "#EEEEEE",   // 浅和纸色
          300: "#E0E0E0",   // 中浅和纸色
          900: "#212121",   // 深墨色
        },
        sumi: {
          50: "#FAFAFA",    // 最浅的墨色
          100: "#F5F5F5",   // 极淡的墨色
          200: "#EEEEEE",   // 淡墨色
          300: "#E0E0E0",   // 浅墨色
          400: "#BDBDBD",   // 中浅墨色
          500: "#9E9E9E",   // 中墨色
          600: "#757575",   // 中深墨色
          700: "#616161",   // 深墨色
          800: "#424242",   // 极深墨色
          900: "#212121",   // 近黑墨色
          950: "#121212",   // 几乎纯黑的墨色
        },
        // 新增藤色系列 - 日式淡紫色
        wisteria: {
          50: "#F5F3FA",    // 极淡藤色
          100: "#E9E4F4",   // 淡藤色
          200: "#D4CAE9",   // 浅藤色
          300: "#BFB0DE",   // 藤色
          400: "#A996D3",   // 中藤色
          500: "#937CC8",   // 标准藤色
          600: "#7A62BD",   // 深藤色
          700: "#624AA1",   // 更深藤色
          800: "#493685",   // 极深藤色
          900: "#312269",   // 近黑藤色
        },
        // 日式点缀色
        matcha: {
          50: "#F1F8E9",    // 极淡抹茶色
          100: "#DCEDC8",   // 淡抹茶色
          200: "#C5E1A5",   // 浅抹茶色
          600: "#689F38",   // 抹茶色
          700: "#558B2F",   // 深抹茶色
        },
        sakura: {
          50: "#FCE4EC",    // 极淡樱花色
          100: "#F8BBD0",   // 淡樱花色
          200: "#F48FB1",   // 浅樱花色
          300: "#F06292",   // 樱花色
        },
        // 保留原有的color系列作为备用
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
          950: "#050505",   // 几乎纯黑的墨色
        },
        rice: {
          50: "#FFFDF5",    // 米白色
          100: "#FAF5E8",   // 浅米色
          200: "#F5ECD6",   // 米黄色
          900: "#A69C77",   // 深米色
        },
        cloud: {
          50: "#F0F5F9",    // 淡青灰色
          100: "#E1EBF2",   // 浅青灰色
          200: "#D0E0EA",   // 青灰色
          300: "#BDD5E3",   // 深青灰色
        },
        bamboo: {
          50: "#F2F7F2",    // 淡竹绿色
          100: "#E5EFE5",   // 浅竹绿色
          200: "#D6E6D6",   // 竹绿色
        },
        sand: {
          50: "#F7F6F4",    // 淡沙色
          100: "#EFEAE5",   // 浅沙色
          200: "#E6DFD8",   // 沙色
        },
      },
      backgroundImage: {
        'ink-wash': "url('/images/ink-wash-bg.svg')",
      },
      fontFamily: {
        calligraphy: ['var(--font-noto-serif-sc)', 'serif'],
        sans: ['var(--font-noto-serif-sc)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderWidth: {
        '1': '1px',
      },
      boxShadow: {
        'washi': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'washi-md': '0 4px 6px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'washi-lg': '0 10px 15px rgba(0, 0, 0, 0.03), 0 4px 6px rgba(0, 0, 0, 0.02)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.sumi.800'),
            lineHeight: '1.75',
            '>*': {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              lineHeight: '1.75',
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.sumi.900'),
              fontWeight: '500',
            },
            h1: {
              fontSize: '2.25em',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontSize: '1.75em',
              letterSpacing: '-0.025em',
              borderBottom: `1px solid ${theme('colors.sumi.200')}`,
              paddingBottom: '0.5rem',
            },
            h3: {
              fontSize: '1.5em',
            },
            h4: {
              fontSize: '1.25em',
            },
            a: {
              color: theme('colors.wisteria.600'),
              textDecoration: 'none',
              transition: 'color 0.2s',
              '&:hover': {
                color: theme('colors.wisteria.500'),
              },
            },
            code: {
              color: theme('colors.sumi.900'),
              backgroundColor: theme('colors.washi.100'),
              padding: '0.25rem 0.4rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.sumi.900'),
              color: theme('colors.washi.50'),
              borderRadius: '0.25rem',
              overflowX: 'auto',
              fontSize: '0.875em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              fontSize: 'inherit',
              padding: '0',
            },
            blockquote: {
              fontStyle: 'normal',
              color: theme('colors.sumi.700'),
              borderLeftColor: theme('colors.wisteria.500'),
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginLeft: '0',
              paddingLeft: '1.5em',
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote',
            },
            'blockquote p:last-of-type::after': {
              content: 'close-quote',
            },
            img: {
              borderRadius: '0.25rem',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5em',
            },
            ol: {
              paddingLeft: '1.5em',
            },
            'ul li, ol li': {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            table: {
              fontSize: '0.875em',
              lineHeight: '1.5',
            },
            'thead tr': {
              borderBottomWidth: '2px',
              borderBottomColor: theme('colors.sumi.300'),
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.sumi.200'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'th, td': {
              padding: '0.75rem 1rem',
              textAlign: 'left',
            },
            th: {
              color: theme('colors.sumi.900'),
              fontWeight: '500',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.sumi.300'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.washi.100'),
            },
            h2: {
              borderBottomColor: theme('colors.sumi.700'),
            },
            a: {
              color: theme('colors.wisteria.300'),
              '&:hover': {
                color: theme('colors.wisteria.200'),
              },
            },
            code: {
              color: theme('colors.washi.100'),
              backgroundColor: theme('colors.sumi.800'),
            },
            pre: {
              backgroundColor: theme('colors.sumi.900'),
              color: theme('colors.washi.100'),
            },
            blockquote: {
              color: theme('colors.sumi.400'),
              borderLeftColor: theme('colors.wisteria.500'),
            },
            'thead tr': {
              borderBottomColor: theme('colors.sumi.700'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.sumi.800'),
            },
            th: {
              color: theme('colors.washi.100'),
            },
          },
        },
      }),
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeInUp: 'fadeInUp 0.4s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

