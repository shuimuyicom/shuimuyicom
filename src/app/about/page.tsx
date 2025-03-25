import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于 | 水木易博客",
  description: "了解关于水木易博客和博主的更多信息",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">关于水木易</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          欢迎来到我的个人博客。这里是我分享思考、知识和经验的地方。
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">关于博主</h2>
        <p className="mb-4">
          我是水木易，一个热爱学习和分享的人。我对技术、设计、以及各种创新话题充满热情。
          通过这个博客，我希望能够与志同道合的朋友们交流想法，共同成长。
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">联系方式</h2>
        <p className="mb-4">
          如果你有任何问题或想法，欢迎通过以下方式联系我：
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>邮箱：your.email@example.com</li>
          <li>GitHub：github.com/yourusername</li>
          <li>微博：@yourweibousername</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4">关于本站</h2>
        <p className="mb-4">
          本站使用Next.js 15和Tailwind CSS构建，托管在Vercel平台上。
          我会定期在这里分享我的学习心得、技术文章和生活感悟。
        </p>
      </div>
    </main>
  );
} 