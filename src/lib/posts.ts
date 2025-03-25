import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// 博客文章目录路径
const postsDirectory = path.join(process.cwd(), 'src/content/posts');

// 获取所有文章的元数据
export async function getAllPosts() {
  // 获取/posts目录中的所有文件名
  const fileNames = fs.readdirSync(postsDirectory);
  
  // 获取所有文章数据
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        // 读取markdown文件内容
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // 使用gray-matter解析文章元数据
        const matterResult = matter(fileContents);
        
        // 确保元数据中有id，如果没有就用文件名（去掉.md）
        const id = matterResult.data.id || fileName.replace(/\.md$/, '');
        
        // 返回带有id和元数据的对象
        return {
          id,
          ...matterResult.data,
        } as {
          id: string;
          title: string;
          date: string;
          category: string;
          excerpt: string;
        };
      })
  );
  
  // 按日期排序（最新的文章排在前面）
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 获取所有文章ID
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames.map(fileName => {
    // 读取文件内容获取id
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // 使用元数据中的id或文件名
    return matterResult.data.id || fileName.replace(/\.md$/, '');
  });
}

// 根据ID获取文章完整数据
export async function getPostById(id: string) {
  // 查找匹配id的文件
  const fileNames = fs.readdirSync(postsDirectory);
  let postFile = null;
  
  // 首先尝试通过元数据中的id匹配
  for (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    if (matterResult.data.id === id || fileName.replace(/\.md$/, '') === id) {
      postFile = { path: fullPath, contents: fileContents };
      break;
    }
  }
  
  if (!postFile) {
    return null;
  }
  
  // 解析元数据和内容
  const matterResult = matter(postFile.contents);
  
  // 将markdown转换为HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  
  // 返回带有id、内容和元数据的文章
  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as {
    id: string;
    contentHtml: string;
    title: string;
    date: string;
    category: { id: string; name: string };
    excerpt: string;
  };
}

// 按分类获取文章
export async function getPostsByCategory(category: string) {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.category === category);
}

// 获取所有分类
export async function getAllCategories() {
  const allPosts = await getAllPosts();
  const categories = new Set<string>();
  
  allPosts.forEach(post => {
    categories.add(post.category);
  });
  
  // 分类名称映射
  const categoryNames: Record<string, string> = {
    'tech': '技术',
    'life': '生活',
    'reading': '读书',
    'travel': '旅行',
  };
  
  return Array.from(categories).map(categoryId => ({
    id: categoryId,
    name: categoryNames[categoryId] || categoryId,
    description: getCategoryDescription(categoryId)
  }));
}

// 获取分类描述
function getCategoryDescription(categoryId: string): string {
  const descriptions: Record<string, string> = {
    'tech': '关于技术、编程和开发的文章',
    'life': '关于日常生活和个人感悟的文章',
    'reading': '书籍推荐和读书心得',
    'travel': '旅行经历和旅行攻略分享',
  };
  
  return descriptions[categoryId] || `关于${categoryId}的文章`;
} 