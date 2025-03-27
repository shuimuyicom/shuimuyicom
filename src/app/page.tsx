import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "水木易 | 分享知识，记录生活",
  description: "水木易的个人博客，分享技术、生活和读书心得",
};

export default function Home() {
  const latestPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-sumi-950">
      <div className="max-w-6xl mx-auto bg-card-50 dark:bg-ink-900 min-h-screen shadow-xl">
        <div className="px-6 py-16 md:py-24">
          {/* 博主信息部分 */}
          <section className="mb-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8 relative">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-xl relative">
                  <Image
                    src="/images/avatar.png"
                    alt="水木易"
                    fill
                    sizes="96px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl mb-6 text-ink-800 dark:text-bg-100 leading-tight">水木易</h1>
              
              <p className="text-lg text-ink-500 dark:text-ink-400 mb-8 font-light">
                技术爱好者 · 博客作者 · 终身学习者
              </p>
              
              <p className="max-w-2xl mx-auto text-ink-600 dark:text-ink-300 mb-10 leading-relaxed">
                欢迎来到我的博客，这里是我记录思考、分享知识的简约空间。
                相信文字的力量，希望通过这个平台与你共同成长。
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link 
                  href="/about" 
                  className="px-8 py-2.5 bg-card-50 text-ink-800 dark:bg-ink-800 dark:text-bg-100 border border-ink-200 dark:border-ink-700 hover:bg-bg-50 dark:hover:bg-ink-700 transition-colors tracking-wide shadow-surface"
                >
                  了解更多
                </Link>
                <Link 
                  href="/categories" 
                  className="px-8 py-2.5 bg-accent-500 text-card-50 dark:bg-accent-600 dark:text-card-50 hover:bg-accent-600 dark:hover:bg-accent-500 transition-colors tracking-wide shadow-surface"
                >
                  浏览分类
                </Link>
              </div>
            </div>
          </section>
          
          {/* 分隔线 */}
          <div className="max-w-xs mx-auto mb-24">
            <hr className="border-bg-300 dark:border-ink-700" />
          </div>
          
          {/* 最新文章部分 */}
          <section>
            <h2 className="text-2xl text-ink-800 dark:text-bg-100 mb-12 text-center">最新文章</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {latestPosts.length > 0 ? (
                latestPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-card-50 dark:bg-ink-800 border border-bg-200 dark:border-ink-700 shadow-surface dark:shadow-none overflow-hidden group hover:border-bg-300 dark:hover:border-ink-600 transition-all"
                  >
                    <div className="p-6 md:p-8">
                      <Link href={`/categories/${post.category.id}`} className="inline-block mb-4">
                        <span className="text-xs uppercase tracking-wider font-medium text-ink-400 dark:text-ink-400">
                          {post.category.name}
                        </span>
                      </Link>
                      
                      <Link href={`/posts/${post.id}`}>
                        <h3 className="text-xl mb-3 text-ink-800 dark:text-bg-100 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      
                      <time className="text-sm text-ink-400 dark:text-ink-500 mb-4 block">{post.date}</time>
                      
                      <p className="text-ink-500 dark:text-ink-300 mb-5 line-clamp-2">{post.excerpt}</p>
                      
                      <Link 
                        href={`/posts/${post.id}`} 
                        className="inline-flex items-center text-sm text-accent-600 dark:text-accent-300 font-medium group-hover:translate-x-0.5 transition-transform"
                      >
                        阅读全文
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 ml-1" 
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full py-16 flex flex-col items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-16 w-16 text-bg-300 dark:text-ink-700 mb-4" 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M12 18v-6"></path>
                    <path d="M8 15h8"></path>
                  </svg>
                  <p className="text-center text-ink-500 dark:text-ink-300 text-lg">暂无文章</p>
                  <p className="text-center text-ink-400 dark:text-ink-500 mt-2 text-sm">敬请期待内容更新</p>
                </div>
              )}
            </div>
            
            {latestPosts.length > 0 && (
              <div className="flex justify-center mt-16">
                <Link 
                  href="/categories" 
                  className="inline-flex items-center text-ink-500 dark:text-ink-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors"
                >
                  查看所有分类
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
