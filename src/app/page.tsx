import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "水木易博客 | 分享知识，记录生活",
  description: "水木易的个人博客，分享技术、生活和读书心得",
};

// 临时最新文章数据
const latestPosts = [
  { id: "1", title: "Next.js 15新特性介绍", date: "2024-03-25", category: { id: "tech", name: "技术" }, excerpt: "探索Next.js 15带来的新特性和改进..." },
  { id: "6", title: "在家工作的心得体会", date: "2024-03-22", category: { id: "life", name: "生活" }, excerpt: "分享远程工作的经验和挑战..." },
  { id: "11", title: "杭州西湖游记", date: "2024-03-23", category: { id: "travel", name: "旅行" }, excerpt: "记录杭州西湖的旅行经历和美景..." },
  { id: "9", title: "《原子习惯》读书笔记", date: "2024-03-19", category: { id: "reading", name: "读书" }, excerpt: "记录阅读《原子习惯》一书的心得体会..." },
  { id: "2", title: "React Server Components详解", date: "2024-03-20", category: { id: "tech", name: "技术" }, excerpt: "深入了解React Server Components的工作原理..." },
  { id: "12", title: "成都美食攻略", date: "2024-03-18", category: { id: "travel", name: "旅行" }, excerpt: "分享成都的特色美食和推荐餐厅..." },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 博主信息部分 */}
      <section className="flex flex-col items-center text-center mb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-xl shadow-sm">
        <div className="w-32 h-32 relative rounded-full overflow-hidden mb-6 border-4 border-white dark:border-gray-700 shadow-md">
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
            <circle cx="100" cy="100" r="100" fill="#3b82f6" />
            <path d="M140,50 C100,150 120,180 80,130 L50,110" stroke="#ffffff" strokeWidth="8" fill="none" />
            <circle cx="70" cy="80" r="15" fill="#ffffff" />
            <circle cx="130" cy="80" r="15" fill="#ffffff" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-2">水木易</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">技术爱好者 | 博客作者 | 终身学习者</p>
        <p className="max-w-2xl text-gray-700 dark:text-gray-300 mb-6">
          欢迎来到我的博客！这里是我分享技术、生活、阅读心得和旅行经历的地方。
          我相信知识共享的力量，希望通过这个平台与大家一起成长。
        </p>
        <div className="flex space-x-4">
          <Link 
            href="/about" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-md"
          >
            了解更多
          </Link>
          <Link 
            href="/categories" 
            className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium py-2 px-6 rounded-full border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          >
            浏览分类
          </Link>
        </div>
      </section>
      
      {/* 最新文章部分 */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">最新文章</h2>
          <Link 
            href="/categories" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            查看所有分类 &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <Link href={`/categories/${post.category.id}`}>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
                    {post.category.name}
                  </span>
                </Link>
                <Link href={`/posts/${post.id}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <time className="text-sm text-gray-500 dark:text-gray-400 mb-3 block">{post.date}</time>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/posts/${post.id}`} 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  阅读全文 &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
