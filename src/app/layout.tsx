import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | 水木易博客",
    default: "水木易博客 | 分享知识，记录生活",
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
    <html lang="zh-CN" className="h-full">
      <body className={`${geist.className} antialiased min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
