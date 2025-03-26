import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById } from "@/lib/posts";

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
  const { params, searchParams } = props;
  const id = params.id;
  const post = await getPostById(id);
  
  if (!post) {
    notFound();
  }
  
  // 使用searchParams来控制阅读模式
  const readingMode = typeof searchParams.mode === 'string' ? searchParams.mode : undefined;
  const isReadable = readingMode === 'readable';
  
  const mainClasses = "min-h-screen bg-washi-50 dark:bg-sumi-950";
  
  const articleClasses = "p-8 md:p-12 bg-card-50 dark:bg-ink-800 shadow-surface border border-bg-200 dark:border-ink-700 rounded-sm";
  
  return (
    <main className={mainClasses}>
      <div className="max-w-6xl mx-auto bg-card-50 dark:bg-ink-900 min-h-screen shadow-xl">
        <div className="px-6 py-12 md:py-20">
          {/* 页面导航 */}
          <div className="flex justify-between items-center mb-12 animate-fadeIn">
            <Link href="/" className="flex items-center text-ink-500 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-300 transition-colors group">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 group-hover:-translate-x-0.5 transition-transform" 
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
              返回首页
            </Link>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs text-ink-400 dark:text-ink-500 mr-1">阅读模式：</span>
              <Link 
                href={`/posts/${id}`}
                className={`px-3 py-1 text-xs rounded-sm transition-colors ${!isReadable ? 'bg-accent-600 text-card-50 dark:bg-accent-600 dark:text-card-50' : 'text-ink-500 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-300'}`}
              >
                标准
              </Link>
              <Link 
                href={`/posts/${id}?mode=readable`}
                className={`px-3 py-1 text-xs rounded-sm transition-colors ${isReadable ? 'bg-accent-600 text-card-50 dark:bg-accent-600 dark:text-card-50' : 'text-ink-500 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-300'}`}
              >
                舒适
              </Link>
            </div>
          </div>
          
          <article className={articleClasses}>
            {/* 文章头部 */}
            <header className="mb-16 animate-fadeInUp">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-bg-300 dark:bg-ink-600"></div>
                <Link href={`/categories/${post.category.id}`} className="mx-4">
                  <span className="inline-block text-xs uppercase tracking-wider font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors">
                    {post.category.name}
                  </span>
                </Link>
                <div className="h-px w-16 bg-bg-300 dark:bg-ink-600"></div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-calligraphy mb-8 text-ink-800 dark:text-bg-100 leading-tight text-center">
                {post.title}
              </h1>
              
              <div className="flex justify-center items-center">
                <time className="text-sm text-ink-400 dark:text-ink-500 inline-flex items-center">
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
            
            {/* 装饰分隔线 */}
            <div className="flex justify-center mb-12">
              <div className="w-16 h-0.5 bg-accent-200 dark:bg-accent-900 rounded-full"></div>
            </div>
            
            {/* 文章内容 */}
            <div className="prose prose-lg dark:prose-invert prose-headings:font-calligraphy prose-headings:font-medium prose-headings:text-ink-800 dark:prose-headings:text-bg-100 prose-p:text-ink-600 dark:prose-p:text-ink-300 prose-a:text-accent-600 dark:prose-a:text-accent-300 prose-a:no-underline mx-auto mb-16">
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}>
              </div>
            </div>
            
            {/* 文章尾部装饰 */}
            <div className="flex justify-center mb-12">
              <div className="relative flex items-center justify-center">
                <div className="w-24 h-px bg-bg-300 dark:bg-ink-600"></div>
                <div className="mx-4 text-ink-400 dark:text-ink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-24 h-px bg-bg-300 dark:bg-ink-600"></div>
              </div>
            </div>
            
            {/* 文章导航 */}
            <div className="border-t border-bg-200 dark:border-ink-700 pt-8 flex justify-between">
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
          </article>
        </div>
      </div>
    </main>
  );
}