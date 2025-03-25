import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories } from "@/lib/posts";

export const metadata: Metadata = {
  title: "文章分类 | 水木易",
  description: "浏览水木易博客的所有文章分类",
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();
  
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-calligraphy mb-4 text-ink-900 dark:text-ink-100">文章分类</h1>
      <p className="text-ink-600 dark:text-ink-300 mb-10 max-w-3xl">
        这里列出了本博客的所有文章分类。您可以选择感兴趣的分类浏览相关文章。
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link 
            key={category.id}
            href={`/categories/${category.id}`}
            className="block border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 p-6 hover:shadow-md transition-all duration-300"
          >
            <h2 className="text-xl font-calligraphy mb-2 text-ink-800 dark:text-ink-100">{category.name}</h2>
            <p className="text-ink-600 dark:text-ink-300 mb-4 line-clamp-2">{category.description}</p>
            <div className="text-ink-800 dark:text-ink-100 font-medium inline-flex items-center">
              浏览文章 <span className="ml-1">·</span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-10">
        <Link href="/" className="text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-100">
          &larr; 返回首页
        </Link>
      </div>
    </div>
  );
} 