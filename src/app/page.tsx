import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "水木易 | 分享知识，记录生活",
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

export default function HomePage() {
  // 临时文章数据
  const featuredPosts = [
    { id: "1", title: "Next.js 15新特性介绍", date: "2024-03-25", category: {id: "tech", name: "技术"}, excerpt: "探索Next.js 15带来的新特性和改进..." },
    { id: "2", title: "React Server Components详解", date: "2024-03-20", category: {id: "tech", name: "技术"}, excerpt: "深入了解React Server Components的工作原理..." },
    { id: "11", title: "杭州西湖游记", date: "2024-03-23", category: {id: "travel", name: "旅行"}, excerpt: "记录杭州西湖的旅行经历和美景..." },
    { id: "9", title: "《原子习惯》读书笔记", date: "2024-03-19", category: {id: "reading", name: "读书"}, excerpt: "记录阅读《原子习惯》一书的心得体会..." },
  ];
  
  // 分类数据
  const categories = [
    { id: "tech", name: "技术", count: 5 },
    { id: "life", name: "生活", count: 3 },
    { id: "reading", name: "读书", count: 2 },
    { id: "travel", name: "旅行", count: 4 },
  ];

  return (
    <div className="bg-[rgb(var(--background-start-rgb))]">
      {/* 顶部横幅 */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(var(--ikigai-beige),0.3)] to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="jp-heading text-4xl mb-4 text-[rgb(var(--zen-black))] dark:text-[rgb(var(--zen-black))]">
              水木易
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              分享技术与生活的点滴，记录成长与思考的痕迹
            </p>
            <div className="h-px w-16 bg-[rgb(var(--kintsugi-gold))] mx-auto"></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主要内容区 */}
          <div className="lg:col-span-2">
            <section>
              <h2 className="jp-heading text-2xl mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                最新文章
              </h2>
              <div className="space-y-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="washi-card group hover:shadow-md">
                    <Link href={`/posts/${post.id}`}>
                      <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200 group-hover:text-[rgb(var(--matcha-accent))] dark:group-hover:text-[rgb(var(--matcha-accent))] transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <time>{post.date}</time>
                      <span className="mx-2">·</span>
                      <Link 
                        href={`/categories/${post.category.id}`}
                        className="text-[rgb(var(--indigo-ink))] dark:text-[rgb(var(--kintsugi-gold))] hover:underline"
                      >
                        {post.category.name}
                      </Link>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/posts/${post.id}`}
                      className="inline-block text-[rgb(var(--matcha-accent))] dark:text-[rgb(var(--matcha-accent))] hover:underline"
                    >
                      阅读全文 →
                    </Link>
                  </article>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link 
                  href="/categories" 
                  className="zen-button inline-flex items-center"
                >
                  查看所有文章
                </Link>
              </div>
            </section>
          </div>

          {/* 侧边栏 */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              {/* 关于我 */}
              <section className="mb-10 p-6 bg-[rgba(var(--shoji-cream),0.7)] dark:bg-[rgba(var(--washi-white),0.7)] rounded-sm">
                <h2 className="jp-heading text-xl mb-4 text-gray-800 dark:text-gray-200">关于我</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  你好，我是水木易，热爱技术、阅读和旅行。在这里分享我的所见所学与思考。
                </p>
                <Link 
                  href="/about" 
                  className="text-[rgb(var(--indigo-ink))] dark:text-[rgb(var(--kintsugi-gold))] hover:underline"
                >
                  了解更多 →
                </Link>
              </section>

              {/* 分类 */}
              <section className="p-6 bg-[rgba(var(--shoji-cream),0.7)] dark:bg-[rgba(var(--washi-white),0.7)] rounded-sm">
                <h2 className="jp-heading text-xl mb-4 text-gray-800 dark:text-gray-200">分类</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link 
                        href={`/categories/${category.id}`}
                        className="flex justify-between items-center py-2 text-gray-700 dark:text-gray-300 hover:text-[rgb(var(--indigo-ink))] dark:hover:text-[rgb(var(--kintsugi-gold))] transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
