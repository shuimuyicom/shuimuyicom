import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "关于 | 水木易",
  description: "了解关于水木易更多信息",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-sumi-950">
      <div className="max-w-6xl mx-auto bg-card-50 dark:bg-ink-900 min-h-screen shadow-xl">
        <div className="relative px-6 py-20 md:py-32">
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-ink-800 rounded-2xl shadow-lg shadow-violet-100 dark:shadow-none p-8 md:p-10 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-ink-800 dark:text-bg-100 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 text-violet-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                关于水木易
              </h2>
              
              <div className="space-y-6 text-ink-600 dark:text-ink-300 text-lg">
                <p className="leading-relaxed">
                  计算机本科和哲学硕士的跨学科学习背景，七年产品经理的实战经验。
                </p>
                
                <p className="leading-relaxed">
                  得益于AI的大发展，正致力于成为一名国学命理领域的独立开发者，期望将传统文化与现代技术完美融合。
                </p>
                
                <p className="leading-relaxed">
                  我会在这里分享我的学习笔记、思考和感悟，并展示我正在做的项目。我会定期更新，如果你也对我的研究感兴趣，欢迎与我交流，希望能与你一起探讨AI在传统文化中的应用。
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-ink-800 rounded-2xl shadow-lg shadow-violet-100 dark:shadow-none p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-ink-800 dark:text-bg-100 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 text-violet-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                  </svg>
                </span>
                联系方式
              </h2>
              
              <p className="mb-8 text-ink-600 dark:text-ink-300 text-lg">
                如果你有任何问题或想法，欢迎通过以下方式联系我：
              </p>
              
              <div className="pt-2">
                <SocialLinks className="justify-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 