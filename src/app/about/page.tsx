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
            <h1 className="text-3xl md:text-4xl mb-6 text-ink-800 dark:text-bg-100">关于水木易</h1>
            <div className="h-px w-24 bg-bg-300 dark:bg-ink-600 mx-auto"></div>
          </header>

          <div className="max-w-3xl mx-auto">

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-ink-800 dark:text-bg-100">关于我</h2>
            
            <div className="space-y-6 text-ink-600 dark:text-ink-300">
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

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-ink-800 dark:text-bg-100">联系方式</h2>
            
            <p className="mb-6 text-ink-600 dark:text-ink-300">
              如果你有任何问题或想法，欢迎通过以下方式联系我：
            </p>
            
            {/* 社交媒体链接 - 使用组件 */}
            <div className="mb-8">
              <SocialLinks className="justify-center" />
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-ink-800 dark:text-bg-100">关于本站</h2>
            <p className="text-ink-600 dark:text-ink-300">
              本站使用Next.js 15和Tailwind CSS构建，托管在Vercel平台上。
              我会定期在这里分享我的学习心得、技术文章和生活感悟。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 