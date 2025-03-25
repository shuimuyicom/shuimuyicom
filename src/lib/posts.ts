import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// 内容目录路径
const postsDirectory = path.join(process.cwd(), 'src/content/posts');

// 分类描述
export const categoryDescriptions: Record<string, string> = {};

// 获取所有文章数据
export async function getAllPosts() {
  // 确保目录存在
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        // 从文件名中获取ID
        const id = fileName.replace(/\.md$/, '');
        
        // 读取markdown文件
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // 使用gray-matter解析markdown文件的元数据
        const matterResult = matter(fileContents);
        
        // 使用remark将markdown转换为HTML
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();
        
        // 组合数据
        return {
          id,
          contentHtml,
          ...(matterResult.data as { title: string; date: string; category: string; excerpt: string })
        };
      })
  );
  
  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 获取所有文章ID
export async function getAllPostIds() {
  // 确保目录存在
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      return {
        id: fileName.replace(/\.md$/, '')
      };
    });
}

// 获取指定ID的文章数据
export async function getPostById(id: string) {
  // 确保目录存在
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const fullPath = path.join(postsDirectory, `${id}.md`);
  
  // 检查文件是否存在
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // 使用gray-matter解析markdown文件的元数据
  const matterResult = matter(fileContents);
  
  // 使用remark将markdown转换为HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  
  // 组合数据
  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; category: string; excerpt: string })
  };
}

// 获取指定分类的文章
export async function getPostsByCategory(category: string) {
  const allPosts = await getAllPosts();
  
  return allPosts.filter(post => {
    if (typeof post.category === 'object' && post.category !== null) {
      return (post.category as any).id === category;
    }
    return post.category === category;
  });
}

// 获取所有分类
export async function getAllCategories() {
  const allPosts = await getAllPosts();
  const categoriesSet = new Set<string>();
  
  allPosts.forEach(post => {
    if (typeof post.category === 'object' && post.category !== null) {
      categoriesSet.add((post.category as any).id);
    } else {
      categoriesSet.add(post.category);
    }
  });
  
  return Array.from(categoriesSet);
}

// 获取分类描述
function getCategoryDescription(categoryId: string): string {
  const descriptions: Record<string, string> = {};
  
  return descriptions[categoryId] || `关于${categoryId}的文章`;
} 