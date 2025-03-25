import type { Metadata } from "next";
import { Noto_Serif_SC } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 配置思源宋体作为主字体
const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-serif-sc',
});

export const metadata: Metadata = {
  title: {
    template: "%s | 水木易",
    default: "水木易 | 分享知识，记录生活",
  },
  description: "水木易的个人博客，分享技术、生活和读书心得",
  authors: [{ name: "水木易" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`h-full ${notoSerifSC.variable}`}>
      <body 
        className={`${notoSerifSC.className} antialiased min-h-screen flex flex-col`}
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
