import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById, getAllPosts } from "@/lib/posts";

export async function generateMetadata(
  props: { params: { id: string } }
): Promise<Metadata> {
  const id = props.params.id;
  const post = await getPostById(id);
  
  if (!post) {
    return {
      title: "文章不存在 | 水木易",
    };
  }
  
  return {
    title: `${post.title} | 水木易`,
    description: post.excerpt,
  };
}

export default async function PostPage(props: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { params } = props;
  const id = params.id;
  const post = await getPostById(id);
  
  if (!post) {
    notFound();
  }
  
  // 获取推荐文章（随机选择3篇不包括当前文章的文章）
  const allPosts = getAllPosts();
  const recommendedPosts = allPosts
    .filter(p => p.id !== id)
    .sort(() => 0.5 - Math.random()) // 随机排序
    .slice(0, 3); // 取前3篇
  
  const mainClasses = "min-h-screen bg-gray-50 dark:bg-sumi-950";
  
  return (
    <main className={mainClasses}>
      <div className="max-w-6xl mx-auto bg-card-50 dark:bg-ink-900 min-h-screen shadow-xl">
        <div className="px-6 py-8 md:py-20">
          <div className="max-w-4xl mx-auto">
            {/* 文章布局容器 */}
            <div className="flex flex-col md:flex-row">
              {/* 左侧导航区 - 在移动端隐藏 */}
              <div className="hidden md:flex md:w-12 justify-center">
                <Link href="/" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-bg-100/80 dark:bg-ink-800/80 text-ink-600 dark:text-bg-200 hover:text-accent-600 dark:hover:text-accent-300 transition-all hover:bg-bg-200/80 dark:hover:bg-ink-700/80 group sticky top-24">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </Link>
              </div>

              {/* 右侧文章内容区 */}
              <div className="flex-1 flex justify-center">
                <article className="w-full max-w-2xl">
                  {/* 文章头部 */}
                  <header className="mb-6 md:mb-8 animate-fadeInUp">
                    <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-3 md:mb-4 text-ink-900 dark:text-bg-50 leading-[1.8]">
                      {post.title}
                    </h1>
                    
                    <div className="flex items-center space-x-6 text-sm">
                      <Link href={`/categories/${post.category.id}`}>
                        <span className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors">
                          {post.category.name}
                        </span>
                      </Link>

                      <time className="inline-flex items-center text-ink-400 dark:text-ink-500">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 mr-2" 
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {post.date}
                      </time>
                    </div>
                  </header>
                  
                  {/* 文章内容 */}
                  <div className="prose prose-lg dark:prose-invert prose-headings:font-medium prose-headings:text-ink-800 dark:prose-headings:text-bg-100 prose-p:text-ink-600 dark:prose-p:text-ink-300 prose-a:text-accent-600 dark:prose-a:text-accent-300 prose-a:no-underline max-w-3xl mx-auto">
                    <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                  </div>
                  
                  {/* 文章导航 */}
                  <div className="flex justify-between items-center pt-8 border-t border-bg-200 dark:border-ink-700">
                    <Link href="/" className="text-ink-500 dark:text-ink-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors flex items-center text-sm group">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 mr-2 group-hover:-translate-x-0.5 transition-transform" 
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                      </svg>
                      返回文章列表
                    </Link>
                    
                    <Link href="#top" className="text-ink-500 dark:text-ink-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors flex items-center text-sm group">
                      返回顶部
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2 group-hover:-translate-y-0.5 transition-transform" 
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </Link>
                  </div>
                  
                  {/* 推荐阅读模块 */}
                  {recommendedPosts.length > 0 && (
                    <div className="mt-16 animate-fadeIn">
                      <h2 className="text-lg font-medium mb-6 text-ink-800 dark:text-bg-100 pb-2 border-b border-bg-200 dark:border-ink-700">
                        推荐阅读
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {recommendedPosts.map((recommendedPost) => (
                          <Link 
                            key={recommendedPost.id} 
                            href={`/posts/${recommendedPost.id}`}
                            className="group"
                          >
                            <div className="bg-bg-50 dark:bg-ink-800 p-5 border border-bg-200 dark:border-ink-700 hover:border-bg-300 dark:hover:border-ink-600 transition-all shadow-sm hover:shadow-md">
                              <h3 className="text-base font-medium mb-2 text-ink-800 dark:text-bg-100 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors line-clamp-2">
                                {recommendedPost.title}
                              </h3>
                              <div className="flex items-center space-x-3 text-xs text-ink-400 dark:text-ink-400">
                                <span>{recommendedPost.category.name}</span>
                                <span>•</span>
                                <span>{recommendedPost.date}</span>
                              </div>
                              {recommendedPost.excerpt && (
                                <p className="mt-3 text-sm text-ink-600 dark:text-ink-300 line-clamp-2">
                                  {recommendedPost.excerpt}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}