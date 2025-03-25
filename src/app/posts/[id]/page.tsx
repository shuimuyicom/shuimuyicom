import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById, getAllPostIds } from "@/lib/posts";

// 分类名称映射
const categoryNames: Record<string, string> = {};

type Props = {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostById(params.id);
  
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

export default async function PostPage({ params, searchParams }: Props) {
  const post = await getPostById(params.id);
  
  if (!post) {
    notFound();
  }
  
  // 使用searchParams来控制阅读模式
  const readingMode = typeof searchParams.mode === 'string' ? searchParams.mode : undefined;
  const isReadable = readingMode === 'readable';
  
  const mainClasses = isReadable 
    ? "container mx-auto px-4 py-8 bg-rice-100 dark:bg-ink-900 min-h-screen" 
    : "container mx-auto px-4 py-8";
  
  const articleClasses = isReadable 
    ? "max-w-3xl mx-auto prose-lg" 
    : "max-w-4xl mx-auto";
  
  const textClasses = isReadable 
    ? "text-lg leading-relaxed" 
    : "";
  
  // 确保分类是一个字符串
  const categoryId = typeof post.category === 'object' && post.category !== null 
    ? (post.category as any).id 
    : post.category;
  
  const categoryName = typeof post.category === 'object' && post.category !== null 
    ? (post.category as any).name 
    : categoryNames[categoryId as string] || categoryId;
  
  return (
    <main className={mainClasses}>
      <div className="max-w-4xl mx-auto mb-6 flex justify-end">
        <div className="flex items-center">
          <span className="mr-2 text-ink-600 dark:text-ink-300">阅读模式：</span>
          <Link 
            href={`/posts/${params.id}`}
            className={`px-3 py-1 border ${!isReadable ? 'bg-white text-ink-800 dark:bg-ink-800 dark:text-ink-100 border-ink-800 dark:border-ink-300' : 'text-ink-600 dark:text-ink-400 border-ink-300 dark:border-ink-700 hover:bg-white dark:hover:bg-ink-800'}`}
          >
            标准
          </Link>
          <Link 
            href={`/posts/${params.id}?mode=readable`}
            className={`px-3 py-1 border ml-2 ${isReadable ? 'bg-white text-ink-800 dark:bg-ink-800 dark:text-ink-100 border-ink-800 dark:border-ink-300' : 'text-ink-600 dark:text-ink-400 border-ink-300 dark:border-ink-700 hover:bg-white dark:hover:bg-ink-800'}`}
          >
            舒适
          </Link>
        </div>
      </div>
      
      <article className={articleClasses}>
        <header className="mb-8">
          <h1 className="text-3xl font-calligraphy mb-3 text-ink-900 dark:text-ink-100">{post.title}</h1>
          <div className="flex items-center text-ink-500 dark:text-ink-400 text-sm">
            <time>{post.date}</time>
            <span className="mx-2">•</span>
            <Link 
              href={`/categories/${categoryId}`}
              className="text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-100"
            >
              {categoryName}
            </Link>
          </div>
        </header>
        
        <div
          className={`prose prose-lg max-w-none dark:prose-invert ${textClasses}`}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
      
      <div className="max-w-4xl mx-auto mt-10 pt-6 border-t border-ink-200 dark:border-ink-700">
        <Link href="/" className="text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-100">
          &larr; 返回首页
        </Link>
      </div>
    </main>
  );
} 