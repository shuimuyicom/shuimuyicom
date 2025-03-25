import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// 临时分类数据
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

// 临时文章数据
const postsByCategory = {
  tech: [
    { id: "1", title: "Next.js 15新特性介绍", date: "2024-03-25", excerpt: "探索Next.js 15带来的新特性和改进..." },
    { id: "2", title: "React Server Components详解", date: "2024-03-20", excerpt: "深入了解React Server Components的工作原理..." },
    { id: "3", title: "Tailwind CSS使用技巧", date: "2024-03-15", excerpt: "分享一些Tailwind CSS的高级使用技巧..." },
    { id: "4", title: "TypeScript高级类型使用", date: "2024-03-10", excerpt: "学习TypeScript中的高级类型和应用场景..." },
    { id: "5", title: "现代前端开发工具链", date: "2024-03-05", excerpt: "探讨现代前端开发中常用的工具和技术栈..." },
  ],
  life: [
    { id: "6", title: "在家工作的心得体会", date: "2024-03-22", excerpt: "分享远程工作的经验和挑战..." },
    { id: "7", title: "提高工作效率的5个习惯", date: "2024-03-17", excerpt: "介绍几个能显著提高工作效率的日常习惯..." },
    { id: "8", title: "如何保持创造力", date: "2024-03-12", excerpt: "探讨保持创造力和灵感的方法..." },
  ],
  reading: [
    { id: "9", title: "《原子习惯》读书笔记", date: "2024-03-19", excerpt: "记录阅读《原子习惯》一书的心得体会..." },
    { id: "10", title: "2024年必读的5本技术书籍", date: "2024-03-14", excerpt: "推荐2024年程序员应该阅读的几本好书..." },
  ],
  travel: [
    { id: "11", title: "杭州西湖游记", date: "2024-03-23", excerpt: "记录杭州西湖的旅行经历和美景..." },
    { id: "12", title: "成都美食攻略", date: "2024-03-18", excerpt: "分享成都的特色美食和推荐餐厅..." },
    { id: "13", title: "三亚海滩度假指南", date: "2024-03-13", excerpt: "介绍三亚的海滩和度假体验..." },
    { id: "14", title: "重庆两日游行程规划", date: "2024-03-08", excerpt: "分享重庆两日游的行程安排和景点推荐..." },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
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

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const category = params.category;
  const categoryInfo = categoryData[category as keyof typeof categoryData];
  let posts = postsByCategory[category as keyof typeof postsByCategory] || [];
  
  if (!categoryInfo) {
    notFound();
  }
  
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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{categoryInfo.name}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{categoryInfo.description}</p>
      
      <div className="mb-6 flex justify-end">
        <div className="flex items-center">
          <span className="mr-2 text-gray-600 dark:text-gray-300">排序：</span>
          <Link 
            href={`/categories/${category}?sort=date-desc`}
            className={`px-3 py-1 rounded ${sortBy === 'date-desc' || !sortBy ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            最新
          </Link>
          <Link 
            href={`/categories/${category}?sort=date-asc`}
            className={`px-3 py-1 rounded mx-1 ${sortBy === 'date-asc' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            最早
          </Link>
          <Link 
            href={`/categories/${category}?sort=title`}
            className={`px-3 py-1 rounded ${sortBy === 'title' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            标题
          </Link>
        </div>
      </div>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">{post.title}</h2>
            </Link>
            <time className="text-sm text-gray-500 dark:text-gray-400 mb-3 block">{post.date}</time>
            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
            <Link href={`/posts/${post.id}`} className="mt-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              阅读更多 &rarr;
            </Link>
          </article>
        ))}
      </div>
      
      <Link href="/categories" className="mt-8 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
        &larr; 返回所有分类
      </Link>
    </main>
  );
} 