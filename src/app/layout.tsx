import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 使用常量定义关键元数据，方便复用
const SITE_NAME = "水木易";
const SITE_DESCRIPTION = "水木易的个人博客，分享技术、生活和读书心得";
const SITE_URL = "https://shuimuyi.com";

// Next.js 15新增：添加视口配置
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#161622' },
  ],
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} | 分享知识，记录生活`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  metadataBase: new URL(SITE_URL),
  // Next.js 15新增：应用网站清单
  manifest: '/manifest.json',
  // Next.js 15新增：添加应用元数据
  applicationName: SITE_NAME,
  keywords: ['博客', '国学', '命理', '产品', '技术', '水木易'],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    siteName: SITE_NAME,
    title: '水木易 | 总是站在科技与人文的十字路口',
    description: '用智慧帮你渡过困境，用格局助你站得更高',
    images: [
      {
        url: `/api/og?title=${encodeURIComponent("水木易")}&subtitle=${encodeURIComponent("总是站在科技与人文的十字路口")}`,
        width: 1200,
        height: 630,
        alt: '水木易 - 个人网站',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '水木易 | 总是站在科技与人文的十字路口',
    description: '用智慧帮你渡过困境，用格局助你站得更高',
    images: [
      {
        url: `/api/og?title=${encodeURIComponent("水木易")}&subtitle=${encodeURIComponent("总是站在科技与人文的十字路口")}`,
        width: 1200,
        height: 630,
        alt: '水木易 - 个人网站',
      }
    ],
    creator: '@shuimuyi',
    // Next.js 15新增：添加站点ID
    site: '@shuimuyi',
  },
  // Next.js 15新增：添加备用语言元标签
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
    },
  },
  // Next.js 15新增：添加网络应用清单
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/images/avatar.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/images/avatar.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    // Next.js 15新增：添加其他图标尺寸
    shortcut: '/favicon.ico',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/avatar.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body 
        className="font-sans antialiased min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
