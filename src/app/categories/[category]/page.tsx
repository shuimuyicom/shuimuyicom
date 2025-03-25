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

export async function generateMetadata(
  props: { params: { category: string } }
): Promise<Metadata> {
  const category = props.params.category;
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

export default function CategoryPage(props: {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { params, searchParams } = props;
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
    <div className="bg-[rgb(var(--background-start-rgb))] min-h-screen">
      <div className="relative py-16 mb-8">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(var(--ikigai-beige),0.2)] to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="jp-heading text-3xl mb-3 text-center text-[rgb(var(--zen-black))] dark:text-[rgb(var(--zen-black))]">
              {categoryInfo.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-0">
              {categoryInfo.description}
            </p>
            <div className="h-px w-12 bg-[rgb(var(--kintsugi-gold))] mx-auto mt-6"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <div className="mb-8 flex justify-end">
          <div className="flex items-center">
            <span className="mr-2 text-gray-600 dark:text-gray-300">排序：</span>
            <Link 
              href={`/categories/${category}?sort=date-desc`}
              className={`px-3 py-1 rounded-sm border ${sortBy === 'date-desc' || !sortBy ? 'border-[rgb(var(--matcha-accent))] text-[rgb(var(--matcha-accent))]' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'}`}
            >
              最新
            </Link>
            <Link 
              href={`/categories/${category}?sort=date-asc`}
              className={`px-3 py-1 rounded-sm border mx-2 ${sortBy === 'date-asc' ? 'border-[rgb(var(--matcha-accent))] text-[rgb(var(--matcha-accent))]' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'}`}
            >
              最早
            </Link>
            <Link 
              href={`/categories/${category}?sort=title`}
              className={`px-3 py-1 rounded-sm border ${sortBy === 'title' ? 'border-[rgb(var(--matcha-accent))] text-[rgb(var(--matcha-accent))]' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'}`}
            >
              标题
            </Link>
          </div>
        </div>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {posts.map((post) => (
            <article key={post.id} className="washi-card group hover:shadow-md transition-shadow">
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200 group-hover:text-[rgb(var(--matcha-accent))] dark:group-hover:text-[rgb(var(--matcha-accent))] transition-colors">
                  {post.title}
                </h2>
              </Link>
              <time className="text-sm text-gray-500 dark:text-gray-400 mb-3 block">{post.date}</time>
              <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
              <Link 
                href={`/posts/${post.id}`} 
                className="mt-4 inline-block text-[rgb(var(--indigo-ink))] dark:text-[rgb(var(--kintsugi-gold))] hover:underline"
              >
                阅读全文 →
              </Link>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/categories" 
            className="zen-button inline-flex items-center"
          >
            ← 返回所有分类
          </Link>
        </div>
      </div>
    </div>
  );
} 