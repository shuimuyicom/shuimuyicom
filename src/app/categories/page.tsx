import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "分类 | 水木易博客",
  description: "浏览水木易博客中的各个分类文章",
};

// 临时分类数据，后续可以从API或数据库获取
const categories = [
  { id: "tech", name: "技术", count: 5 },
  { id: "life", name: "生活", count: 3 },
  { id: "reading", name: "读书", count: 2 },
  { id: "travel", name: "旅行", count: 4 },
];

export default function CategoriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">文章分类</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {category.count}篇文章
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
} 