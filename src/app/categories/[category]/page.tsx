import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";

// 分类信息
const categoryData = {
  tech: {
    name: "技术",
    description: "关于技术、编程和开发的文章",
  },
  life: {
    name: "生活",
    description: "关于日常生活和个人感悟的文章",
  },
  reading: {
    name: "读书",
    description: "书籍推荐和读书心得",
  },
  travel: {
    name: "旅行",
    description: "旅行经历和旅行攻略分享",
  },
};

type Props = {
  params: { category: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category;
  const categoryInfo = categoryData[category as keyof typeof categoryData];
  
  if (!categoryInfo) {
    return {
      title: "分类不存在 | 水木易",
    };
  }
  
  return {
    title: `${categoryInfo.name} | 水木易`,
    description: categoryInfo.description,
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const category = params.category;
  const categoryInfo = categoryData[category as keyof typeof categoryData];
  
  if (!categoryInfo) {
    notFound();
  }
  
  // 获取该分类下的文章
  let posts = await getPostsByCategory(category);
  
  // 使用searchParams来处理排序功能
  const sortBy = typeof searchParams.sort === 'string' ? searchParams.sort : undefined;
  
  if (sortBy === 'date-asc') {
    posts = [...posts].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  } else if (sortBy === 'date-desc' || !sortBy) {
    // 默认按日期降序排列
    posts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (sortBy === 'title') {
    posts = [...posts].sort((a, b) => a.title.localeCompare(b.title));
  }
  
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-calligraphy mb-3 text-ink-900 dark:text-ink-100">{categoryInfo.name}</h1>
      <p className="text-ink-600 dark:text-ink-300 mb-6">{categoryInfo.description}</p>
      
      <div className="mb-8 flex justify-end">
        <div className="flex items-center">
          <span className="mr-2 text-ink-600 dark:text-ink-300">排序：</span>
          <Link 
            href={`/categories/${category}?sort=date-desc`}
            className={`px-3 py-1 border ${sortBy === 'date-desc' || !sortBy ? 'bg-white text-ink-800 dark:bg-ink-800 dark:text-ink-100 border-ink-800 dark:border-ink-300' : 'text-ink-600 dark:text-ink-400 border-ink-300 dark:border-ink-700 hover:bg-white dark:hover:bg-ink-800'}`}
          >
            最新
          </Link>
          <Link 
            href={`/categories/${category}?sort=date-asc`}
            className={`px-3 py-1 border mx-1 ${sortBy === 'date-asc' ? 'bg-white text-ink-800 dark:bg-ink-800 dark:text-ink-100 border-ink-800 dark:border-ink-300' : 'text-ink-600 dark:text-ink-400 border-ink-300 dark:border-ink-700 hover:bg-white dark:hover:bg-ink-800'}`}
          >
            最早
          </Link>
          <Link 
            href={`/categories/${category}?sort=title`}
            className={`px-3 py-1 border ${sortBy === 'title' ? 'bg-white text-ink-800 dark:bg-ink-800 dark:text-ink-100 border-ink-800 dark:border-ink-300' : 'text-ink-600 dark:text-ink-400 border-ink-300 dark:border-ink-700 hover:bg-white dark:hover:bg-ink-800'}`}
          >
            标题
          </Link>
        </div>
      </div>
      
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 p-6">
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-xl font-calligraphy mb-2 text-ink-800 dark:text-ink-100 hover:text-ink-600 dark:hover:text-ink-300 transition-colors">{post.title}</h2>
              </Link>
              <time className="text-sm text-ink-500 dark:text-ink-400 mb-3 block">{post.date}</time>
              <p className="text-ink-600 dark:text-ink-300 mb-4">{post.excerpt}</p>
              <Link href={`/posts/${post.id}`} className="text-ink-800 dark:text-ink-100 hover:text-ink-600 dark:hover:text-ink-300 font-medium inline-flex items-center">
                阅读全文 <span className="ml-1">·</span>
              </Link>
            </article>
          ))
        ) : (
          <div className="text-center py-10 text-ink-500 dark:text-ink-400">
            该分类下暂无文章
          </div>
        )}
      </div>
      
      <Link href="/categories" className="mt-10 inline-block text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-100">
        &larr; 返回所有分类
      </Link>
    </main>
  );
} 