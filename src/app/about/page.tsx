import { Metadata } from "next";
import SocialLinks from "@/components/SocialLinks";

// 使用www子域名确保与重定向一致
const SITE_URL = "https://www.shuimuyi.com";

export const metadata: Metadata = {
  title: "关于 | 水木易",
  description: "了解关于水木易更多信息",
  openGraph: {
    title: "关于 | 水木易",
    description: "了解关于水木易更多信息",
    images: [
      {
        url: `${SITE_URL}/api/og?title=${encodeURIComponent("关于 | 水木易")}&subtitle=${encodeURIComponent("了解关于水木易更多信息")}`,
        width: 1200,
        height: 630,
        alt: "关于 | 水木易",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "关于 | 水木易",
    description: "了解关于水木易更多信息",
    images: [
      {
        url: `${SITE_URL}/api/og?title=${encodeURIComponent("关于 | 水木易")}&subtitle=${encodeURIComponent("了解关于水木易更多信息")}`,
        width: 1200,
        height: 630,
        alt: "关于 | 水木易",
        type: "image/png",
      }
    ],
    site: "@shuimuyi",
    creator: "@shuimuyi",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-sumi-950">
      <div className="max-w-6xl mx-auto bg-card-50 dark:bg-ink-900 min-h-screen shadow-xl">
        <div className="px-4 sm:px-6 py-6 sm:py-8 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col">
              <article className="w-full max-w-2xl mx-auto">
                {/* 关于水木易 */}
                <div className="mb-12">
                  <header className="mb-6 md:mb-8 animate-fadeInUp">
                    <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-3 md:mb-4 text-ink-900 dark:text-bg-50 leading-[1.8] tracking-tight flex items-center">
                      <span className="inline-block w-6 sm:w-7 h-6 sm:h-7 mr-2 sm:mr-3 text-accent-600">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      关于水木易
                    </h1>
                  </header>
                  
                  <div className="prose prose-lg dark:prose-invert prose-headings:font-medium prose-headings:text-ink-800 dark:prose-headings:text-bg-100 prose-p:text-ink-600 dark:prose-p:text-ink-300 prose-a:text-accent-600 dark:prose-a:text-accent-300 prose-a:no-underline prose-p:text-justify prose-li:text-justify prose-p:tracking-normal prose-li:tracking-normal max-w-3xl mx-auto sm:px-0 px-1">
                    <p>
                      拥有计算机本科和哲学硕士的跨领域知识背景，并积累了七年多产品经理的丰富实战经验。这样独特的知识结构让我能够从多维度思考问题，将技术创新与人文思维完美结合。
                    </p>
                    
                    <p>
                      正所谓：命由天造，运由己求。在AI技术蓬勃发展的今天，我正致力于成为一名专注国学命理领域的独立开发者。
                    </p>

                    <p>
                    我期望能够将源远流长的传统文化与前沿AI技术完美融合，打造出更多实用工具，帮助更多人洞悉天机、把握命运，从而开创更美好的人生。
                    </p>
                    
                    <p>
                      在这里，我将与大家分享我的学习心得、深度思考和人生感悟，同时展示我正在开发的创新项目。我会持续更新内容，为大家带来新的见解和发现。
                    </p>
                    
                    <p>
                    如果你对我在AI与传统文化交融领域的探索感兴趣，诚挚欢迎与我交流切磋，期待能与你一同探讨如何让AI技术为中华传统文化注入新的活力。
                    </p>
                  </div>
                </div>
                
                {/* 联系方式 */}
                <div className="mt-12">
                  <header className="mb-6 md:mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-3 md:mb-4 text-ink-900 dark:text-bg-50 leading-[1.8] tracking-tight flex items-center">
                      <span className="inline-block w-6 sm:w-7 h-6 sm:h-7 mr-2 sm:mr-3 text-accent-600">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                        </svg>
                      </span>
                      联系方式
                    </h2>
                  </header>
                  
                  <div className="prose prose-lg dark:prose-invert prose-p:text-ink-600 dark:prose-p:text-ink-300 prose-p:text-justify prose-p:tracking-normal max-w-3xl mx-auto sm:px-0 px-1">
                    <p>
                      如果你有任何问题或想法，欢迎通过以下方式联系我：
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <SocialLinks className="justify-center" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 