import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "水木易 | 分享知识，记录生活",
  description: "水木易的个人博客，分享技术、生活和读书心得",
};

// 分类名称映射
const categoryNames: Record<string, string> = {
  'tech': '技术',
  'life': '生活',
  'reading': '读书',
  'travel': '旅行',
};

export default async function Home() {
  // 获取最新文章
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 6); // 获取最新的6篇文章
  
  return (
    <div className="container mx-auto px-6 py-12">
      {/* 博主信息部分 */}
      <section className="flex flex-col items-center text-center mb-20 rice-paper p-10 rounded-lg border ink-border">
        <div className="w-28 h-28 relative mb-8 border-2 border-ink-700 dark:border-ink-300">
          <div className="w-full h-full flex items-center justify-center bg-ink-800 text-rice-50 text-5xl font-calligraphy">
            易
          </div>
        </div>
        <h1 className="text-4xl font-calligraphy mb-3 text-ink-900 dark:text-ink-50">水木易</h1>
        <p className="text-xl text-ink-600 dark:text-ink-300 mb-6 font-light">技术爱好者 | 博客作者 | 终身学习者</p>
        <p className="max-w-2xl text-ink-700 dark:text-ink-300 mb-8 leading-relaxed">
          欢迎来到我的博客！这里是我分享技术、生活、阅读心得和旅行经历的地方。
          我相信知识共享的力量，希望通过这个平台与大家一起成长。
        </p>
        <div className="flex space-x-6">
          <Link 
            href="/about" 
            className="ink-btn rounded-none"
          >
            了解更多
          </Link>
          <Link 
            href="/categories" 
            className="ink-btn-outline rounded-none"
          >
            浏览分类
          </Link>
        </div>
      </section>
      
      {/* 最新文章部分 */}
      <section>
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-calligraphy text-ink-800 dark:text-ink-100">最新文章</h2>
          <Link 
            href="/categories" 
            className="text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-100"
          >
            查看所有分类 ·
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="p-6">
                <Link href={`/categories/${post.category}`}>
                  <span className="inline-block text-ink-600 dark:text-ink-300 text-xs border border-ink-400 dark:border-ink-500 px-2 py-1 mb-3 font-calligraphy">
                    {categoryNames[post.category] || post.category}
                  </span>
                </Link>
                <Link href={`/posts/${post.id}`}>
                  <h3 className="text-xl font-calligraphy mb-2 text-ink-800 dark:text-ink-100 hover:text-ink-600 dark:hover:text-ink-300 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <time className="text-sm text-ink-500 dark:text-ink-400 mb-3 block">{post.date}</time>
                <p className="text-ink-600 dark:text-ink-300 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link 
                  href={`/posts/${post.id}`} 
                  className="text-ink-800 dark:text-ink-100 hover:text-ink-600 dark:hover:text-ink-300 font-medium inline-flex items-center"
                >
                  阅读全文 <span className="ml-1">·</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
