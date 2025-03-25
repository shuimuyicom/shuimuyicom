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
  
  const mainClasses = isReadable 
    ? "min-h-screen bg-washi-50 dark:bg-sumi-950" 
    : "min-h-screen bg-washi-50 dark:bg-sumi-950";
  
  const containerClasses = isReadable 
    ? "max-w-3xl mx-auto px-6 py-12 md:py-16" 
    : "max-w-4xl mx-auto px-6 py-12 md:py-20";
  
  return (
    <main className={mainClasses}>
      <div className={containerClasses}>
        {/* 页面导航 */}
        <div className="flex justify-between items-center mb-12 animate-fadeIn">
          <Link href="/" className="flex items-center text-sumi-600 dark:text-sumi-400 hover:text-wisteria-600 dark:hover:text-wisteria-300 transition-colors group">
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
            <span className="text-xs text-sumi-500 dark:text-sumi-500 mr-1">阅读模式：</span>
            <Link 
              href={`/posts/${id}`}
              className={`px-3 py-1 text-xs rounded-sm transition-colors ${!isReadable ? 'bg-wisteria-600 text-washi-50 dark:bg-wisteria-600 dark:text-washi-50' : 'text-sumi-600 dark:text-sumi-400 hover:text-wisteria-600 dark:hover:text-wisteria-300'}`}
            >
              标准
            </Link>
            <Link 
              href={`/posts/${id}?mode=readable`}
              className={`px-3 py-1 text-xs rounded-sm transition-colors ${isReadable ? 'bg-wisteria-600 text-washi-50 dark:bg-wisteria-600 dark:text-washi-50' : 'text-sumi-600 dark:text-sumi-400 hover:text-wisteria-600 dark:hover:text-wisteria-300'}`}
            >
              舒适
            </Link>
          </div>
        </div>
        
        {/* 文章头部 */}
        <header className="mb-16 animate-fadeInUp">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-sumi-300 dark:bg-sumi-700"></div>
            <Link href={`/categories/${post.category.id}`} className="mx-4">
              <span className="inline-block text-xs uppercase tracking-wider font-medium text-wisteria-600 dark:text-wisteria-400 hover:text-wisteria-700 dark:hover:text-wisteria-300 transition-colors">
                {post.category.name}
              </span>
            </Link>
            <div className="h-px w-16 bg-sumi-300 dark:bg-sumi-700"></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-calligraphy mb-8 text-sumi-900 dark:text-washi-50 leading-tight text-center">
            {post.title}
          </h1>
          
          <div className="flex justify-center items-center">
            <time className="text-sm text-sumi-500 dark:text-sumi-500 inline-flex items-center">
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
          <div className="w-16 h-0.5 bg-wisteria-200 dark:bg-wisteria-900 rounded-full"></div>
        </div>
        
        {/* 文章内容 */}
        <article className="prose prose-lg dark:prose-invert prose-headings:font-calligraphy prose-headings:font-medium prose-headings:text-sumi-900 dark:prose-headings:text-washi-50 prose-p:text-sumi-700 dark:prose-p:text-sumi-300 prose-a:text-wisteria-600 dark:prose-a:text-wisteria-300 prose-a:no-underline mx-auto mb-16">
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}>
          </div>
        </article>
        
        {/* 文章尾部装饰 */}
        <div className="flex justify-center mb-12">
          <div className="relative flex items-center justify-center">
            <div className="w-24 h-px bg-sumi-300 dark:bg-sumi-700"></div>
            <div className="mx-4 text-sumi-400 dark:text-sumi-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-24 h-px bg-sumi-300 dark:bg-sumi-700"></div>
          </div>
        </div>
        
        {/* 文章导航 */}
        <div className="border-t border-sumi-200 dark:border-sumi-800 pt-8 flex justify-between">
          <Link href="/" className="text-sumi-600 dark:text-sumi-400 hover:text-wisteria-600 dark:hover:text-wisteria-300 transition-colors flex items-center text-sm group">
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
          
          <Link href="#top" className="text-sumi-600 dark:text-sumi-400 hover:text-wisteria-600 dark:hover:text-wisteria-300 transition-colors flex items-center text-sm group">
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
      </div>
    </main>
  );
}