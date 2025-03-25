import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// 临时文章数据
const posts = {
  "1": {
    id: "1",
    title: "Next.js 15新特性介绍",
    date: "2024-03-25",
    category: { id: "tech", name: "技术" },
    content: `
# Next.js 15新特性介绍

Next.js 15带来了许多令人兴奋的新特性和改进，这些变化将大大提升开发体验和应用性能。

## 服务器组件改进

Next.js 15对服务器组件做了进一步优化，提供了更高效的渲染管道。这使得应用加载速度更快，同时减少了客户端JavaScript的大小。

## 增强的路由系统

App Router得到了进一步增强，提供了更灵活的布局、加载状态和错误处理能力。

## 更好的开发体验

Turbopack更新提供了更快的开发服务器和构建时间，大大提高了开发效率。

## 改进的图像优化

内置的图像组件得到了优化，提供更好的性能和更小的Bundle大小。

## 总结

Next.js 15的这些改进使其成为目前最先进的React框架之一，适合构建从简单到复杂的各种Web应用。
    `,
  },
  "2": {
    id: "2",
    title: "React Server Components详解",
    date: "2024-03-20",
    category: { id: "tech", name: "技术" },
    content: `
# React Server Components详解

React Server Components是React生态系统中的一项重大创新，它彻底改变了我们构建React应用的方式。

## 什么是Server Components?

Server Components是一种可以在服务器上运行并且只在服务器上渲染的React组件。这意味着它们的代码不会被发送到客户端，从而减少了JavaScript包的大小。

## 优势

- 减少客户端JavaScript的大小
- 直接访问服务器资源（如数据库）
- 改善首次加载性能
- 更好的SEO支持

## 与客户端组件的结合

Server Components可以无缝地与客户端组件结合使用，让你在两者之间获得最佳平衡。

## 在Next.js中使用Server Components

Next.js提供了优秀的Server Components支持，特别是在App Router中。默认情况下，所有组件都是Server Components，除非你明确指定它们为客户端组件。

## 总结

React Server Components代表了Web开发的未来方向，它们提供了更好的性能、更简单的数据获取，以及更好的用户体验。
    `,
  },
  // ... 可以添加更多文章
};

export async function generateMetadata(
  props: { params: { id: string } }
): Promise<Metadata> {
  const id = props.params.id;
  const post = posts[id as keyof typeof posts];
  
  if (!post) {
    return {
      title: "文章不存在 | 水木易",
    };
  }
  
  return {
    title: `${post.title} | 水木易`,
    description: post.title,
  };
}

export default function PostPage(props: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { params, searchParams } = props;
  const id = params.id;
  const post = posts[id as keyof typeof posts];
  
  if (!post) {
    notFound();
  }
  
  // 使用searchParams来控制阅读模式
  const readingMode = typeof searchParams.mode === 'string' ? searchParams.mode : undefined;
  const isReadable = readingMode === 'readable';
  
  const mainClasses = isReadable 
    ? "bg-[rgb(var(--shoji-cream))] dark:bg-[rgb(var(--washi-white))] min-h-screen py-8" 
    : "bg-[rgb(var(--background-start-rgb))] py-8";
  
  const containerClasses = isReadable 
    ? "max-w-3xl mx-auto px-4 sm:px-6" 
    : "max-w-4xl mx-auto px-4 sm:px-6";
  
  const textClasses = isReadable 
    ? "text-lg leading-relaxed tracking-wide" 
    : "leading-relaxed";
  
  return (
    <main className={mainClasses}>
      <div className={containerClasses}>
        <div className="mb-6 flex justify-end">
          <div className="flex items-center">
            <span className="mr-2 text-gray-600 dark:text-gray-300">阅读模式：</span>
            <Link 
              href={`/posts/${id}`}
              className={`px-3 py-1 rounded-sm border ${!isReadable ? 'border-[rgb(var(--matcha-accent))] text-[rgb(var(--matcha-accent))]' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'}`}
            >
              标准
            </Link>
            <Link 
              href={`/posts/${id}?mode=readable`}
              className={`px-3 py-1 rounded-sm border ml-2 ${isReadable ? 'border-[rgb(var(--matcha-accent))] text-[rgb(var(--matcha-accent))]' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'}`}
            >
              舒适
            </Link>
          </div>
        </div>
        
        <article className="bg-white/80 dark:bg-gray-800/80 p-8 shadow-sm rounded-sm border border-gray-100 dark:border-gray-700">
          <header className="mb-10 pb-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="jp-heading text-3xl mb-4 text-gray-800 dark:text-gray-200">{post.title}</h1>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <time>{post.date}</time>
              <span className="mx-2">•</span>
              <Link 
                href={`/categories/${post.category.id}`}
                className="text-[rgb(var(--indigo-ink))] dark:text-[rgb(var(--kintsugi-gold))] hover:underline"
              >
                {post.category.name}
              </Link>
            </div>
          </header>
          
          <div className={`prose prose-lg max-w-none dark:prose-invert ${textClasses}`}>
            {post.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="jp-heading text-2xl mt-8 mb-4 text-gray-800 dark:text-gray-200">{line.substring(2)}</h1>;
              } else if (line.startsWith('## ')) {
                return <h2 key={index} className="jp-heading text-xl mt-6 mb-3 text-gray-800 dark:text-gray-200">{line.substring(3)}</h2>;
              } else if (line.startsWith('### ')) {
                return <h3 key={index} className="jp-heading text-lg mt-5 mb-3 text-gray-800 dark:text-gray-200">{line.substring(4)}</h3>;
              } else if (line.trim() === '') {
                return <div key={index} className="h-4"></div>;
              } else if (line.startsWith('- ')) {
                return <li key={index} className="my-1 text-gray-700 dark:text-gray-300">{line.substring(2)}</li>;
              } else {
                return <p key={index} className="my-4 text-gray-700 dark:text-gray-300">{line}</p>;
              }
            })}
          </div>
        </article>
        
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <Link 
            href="/" 
            className="zen-button"
          >
            &larr; 返回首页
          </Link>
          <Link 
            href={`/categories/${post.category.id}`} 
            className="text-[rgb(var(--indigo-ink))] dark:text-[rgb(var(--kintsugi-gold))] hover:underline"
          >
            浏览更多{post.category.name}文章 &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 