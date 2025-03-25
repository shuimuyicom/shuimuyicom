import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "水木易 | 分享知识，记录生活",
  description: "水木易的个人博客，分享技术、生活和读书心得",
};

export default function Home() {
  const latestPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-washi-50 dark:bg-sumi-950">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* 博主信息部分 */}
        <section className="mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-r from-wisteria-500/10 to-wisteria-500/5 dark:from-wisteria-500/20 dark:to-wisteria-500/10">
              <span className="text-3xl font-calligraphy text-sumi-800 dark:text-washi-100">易</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-calligraphy mb-6 text-sumi-900 dark:text-washi-50 leading-tight">水木易</h1>
            
            <p className="text-lg text-sumi-600 dark:text-sumi-400 mb-8 font-light">
              技术爱好者 · 博客作者 · 终身学习者
            </p>
            
            <p className="max-w-2xl mx-auto text-sumi-700 dark:text-sumi-300 mb-10 leading-relaxed">
              欢迎来到我的博客，这里是我记录思考、分享知识的简约空间。
              相信文字的力量，希望通过这个平台与你共同成长。
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link 
                href="/about" 
                className="px-8 py-2.5 bg-washi-50 text-sumi-900 dark:bg-sumi-900 dark:text-washi-50 border border-sumi-900 dark:border-washi-50 hover:bg-sumi-50 dark:hover:bg-sumi-800 transition-colors font-calligraphy tracking-wide"
              >
                了解更多
              </Link>
              <Link 
                href="/categories" 
                className="px-8 py-2.5 bg-wisteria-500 text-washi-50 dark:bg-wisteria-600 dark:text-washi-50 hover:bg-wisteria-600 dark:hover:bg-wisteria-500 transition-colors font-calligraphy tracking-wide"
              >
                浏览分类
              </Link>
            </div>
          </div>
        </section>
        
        {/* 分隔线 */}
        <div className="max-w-xs mx-auto mb-24">
          <hr className="border-sumi-200 dark:border-sumi-800" />
        </div>
        
        {/* 最新文章部分 */}
        <section>
          <h2 className="text-2xl font-calligraphy text-sumi-900 dark:text-washi-100 mb-12 text-center">最新文章</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {latestPosts.length > 0 ? (
              latestPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-washi-50 dark:bg-sumi-900 border border-sumi-200 dark:border-sumi-800 shadow-washi dark:shadow-none overflow-hidden group hover:border-sumi-300 dark:hover:border-sumi-700 transition-all"
                >
                  <div className="p-6 md:p-8">
                    <Link href={`/categories/${post.category.id}`} className="inline-block mb-4">
                      <span className="text-xs uppercase tracking-wider font-medium text-sumi-500 dark:text-sumi-400">
                        {post.category.name}
                      </span>
                    </Link>
                    
                    <Link href={`/posts/${post.id}`}>
                      <h3 className="text-xl font-calligraphy mb-3 text-sumi-900 dark:text-washi-100 group-hover:text-wisteria-600 dark:group-hover:text-wisteria-300 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <time className="text-sm text-sumi-500 dark:text-sumi-500 mb-4 block">{post.date}</time>
                    
                    <p className="text-sumi-600 dark:text-sumi-400 mb-5 line-clamp-2">{post.excerpt}</p>
                    
                    <Link 
                      href={`/posts/${post.id}`} 
                      className="inline-flex items-center text-sm text-wisteria-600 dark:text-wisteria-300 font-medium group-hover:translate-x-0.5 transition-transform"
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
                  className="h-16 w-16 text-sumi-300 dark:text-sumi-700 mb-4" 
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
                <p className="text-center text-sumi-600 dark:text-sumi-400 text-lg font-calligraphy">暂无文章</p>
                <p className="text-center text-sumi-500 dark:text-sumi-500 mt-2 text-sm">敬请期待内容更新</p>
              </div>
            )}
          </div>
          
          {latestPosts.length > 0 && (
            <div className="flex justify-center mt-16">
              <Link 
                href="/categories" 
                className="inline-flex items-center text-sumi-600 dark:text-sumi-400 hover:text-wisteria-600 dark:hover:text-wisteria-300 transition-colors"
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
    </main>
  );
}
