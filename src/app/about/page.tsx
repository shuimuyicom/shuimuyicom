import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "关于 | 水木易",
  description: "了解关于水木易和博主的更多信息",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-washi-50 dark:bg-sumi-950">
      <div className="max-w-6xl mx-auto bg-card-50 dark:bg-ink-900 min-h-screen shadow-xl">
        <div className="px-6 py-16 md:py-24">
          <header className="mb-16 text-center">
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl relative">
                <Image
                  src="/images/avatar.png"
                  alt="水木易"
                  fill
                  sizes="128px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-calligraphy mb-6 text-ink-800 dark:text-bg-100">关于水木易</h1>
            <div className="h-px w-24 bg-bg-300 dark:bg-ink-600 mx-auto"></div>
          </header>

          <div className="prose prose-lg dark:prose-invert prose-headings:font-calligraphy prose-headings:font-medium prose-headings:text-ink-800 dark:prose-headings:text-bg-100 prose-p:text-ink-600 dark:prose-p:text-ink-300 prose-a:text-accent-600 dark:prose-a:text-accent-300 prose-a:no-underline max-w-3xl mx-auto">
            <p className="mb-8 text-center">
              欢迎来到我的个人博客。这里是我分享思考、知识和经验的地方。
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">关于博主</h2>
            <p className="mb-6">
              我是水木易，一个热爱学习和分享的人。我对技术、设计、以及各种创新话题充满热情。
              通过这个博客，我希望能够与志同道合的朋友们交流想法，共同成长。
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">联系方式</h2>
            <p className="mb-4">
              如果你有任何问题或想法，欢迎通过以下方式联系我：
            </p>
            <ul className="list-none pl-0 mb-8 space-y-2">
              <li className="flex items-center text-ink-500 dark:text-ink-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                your.email@example.com
              </li>
              <li className="flex items-center text-ink-500 dark:text-ink-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                github.com/yourusername
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6">关于本站</h2>
            <p className="mb-4">
              本站使用Next.js 15和Tailwind CSS构建，托管在Vercel平台上。
              我会定期在这里分享我的学习心得、技术文章和生活感悟。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 