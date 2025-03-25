import { Metadata } from "next";
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

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = posts[id as keyof typeof posts];
  
  if (!post) {
    return {
      title: "文章不存在 | 水木易博客",
    };
  }
  
  return {
    title: `${post.title} | 水木易博客`,
    description: post.title,
  };
}

export default function PostPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = posts[id as keyof typeof posts];
  
  if (!post) {
    notFound();
  }
  
  return (
    <main className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
            <time>{post.date}</time>
            <span className="mx-2">•</span>
            <Link 
              href={`/categories/${post.category.id}`}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {post.category.name}
            </Link>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {post.content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
            } else if (line.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
            } else if (line.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-semibold mt-5 mb-3">{line.substring(4)}</h3>;
            } else if (line.trim() === '') {
              return <br key={index} />;
            } else {
              return <p key={index} className="my-3">{line}</p>;
            }
          })}
        </div>
      </article>
      
      <div className="max-w-4xl mx-auto mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          &larr; 返回首页
        </Link>
      </div>
    </main>
  );
} 