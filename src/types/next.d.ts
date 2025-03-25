import type { Metadata } from 'next';

// 解决类型检查问题的自定义类型声明
declare module 'next' {
  // 允许更灵活的参数类型以适应Next.js 15
  interface PageProps {
    params?: any;
    searchParams?: any;
  }
} 