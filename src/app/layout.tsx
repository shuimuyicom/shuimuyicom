import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | 水木易",
    default: "水木易 | 分享知识，记录生活",
  },
  description: "水木易的个人博客，分享技术、生活和读书心得",
  authors: [{ name: "水木易" }],
  metadataBase: new URL('https://shuimuyi.com'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    siteName: '水木易',
    title: '水木易 | 总是站在科技与人文的十字路口',
    description: '用智慧帮你渡过困境，用格局助你站得更高',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: '水木易 - 个人网站',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '水木易 | 总是站在科技与人文的十字路口',
    description: '用智慧帮你渡过困境，用格局助你站得更高',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: '水木易 - 个人网站',
      }
    ],
    creator: '@shuimuyi',
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
