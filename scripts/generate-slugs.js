#!/usr/bin/env node

/**
 * 自动为所有文章生成slug的脚本
 * 使用方法: node scripts/generate-slugs.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 尝试导入pinyin库（如果已安装）
let pinyin;
try {
  pinyin = require('pinyin');
  console.log('已加载pinyin库，将使用更精确的拼音转换');
} catch (e) {
  console.log('未检测到pinyin库，将使用简化拼音转换（建议安装pinyin库获取更好的效果）');
  pinyin = null;
}

// 内容目录路径
const postsDirectory = path.join(process.cwd(), 'src/content/posts');

/**
 * 将中文文本转换为拼音
 * @param {string} text 中文文本
 * @return {string} 拼音文本
 */
function convertToPinyin(text) {
  // 如果有pinyin库，优先使用
  if (pinyin) {
    try {
      const result = pinyin(text, {
        style: pinyin.STYLE_NORMAL,
        segment: true,
        group: true
      }).flat().join(' ');
      console.log(`   pinyin库转换结果: "${result}"`);
      return result;
    } catch (e) {
      console.log(`   pinyin库转换失败: ${e.message}，回退到简易转换`);
    }
  }
  
  // 简易转换（有限词汇表）
  const pinyinMap = {
    // 紫微斗数相关
    '紫微': 'ziwei',
    '斗数': 'doushu',
    '命宫': 'minggong',
    '身宫': 'shengong',
    '运势': 'yunshi',
    '推演': 'tuiyan',
    '浅谈': 'qiantan',
    '深宫': 'shengong',
    '及': 'ji',
    '论': 'lun',
    '流年': 'liunian',
    '大限': 'daxian',
    
    // 易经与五行相关
    '易经': 'yijing',
    '八卦': 'bagua',
    '阴阳': 'yinyang',
    '五行': 'wuxing',
    '金木水火土': 'jinmushuituhuo',
    '乾坤': 'qiankun',
    '震巽': 'zhenzun',
    '坎离': 'kanli',
    '艮兑': 'gendui',
    '关系': 'guanxi',
    
    // 通用
    '中国': 'china',
    '传统': 'traditional',
    '文化': 'culture',
    '哲学': 'philosophy',
    '思想': 'thought',
    '研究': 'research',
    '探索': 'explore',
    '分析': 'analysis',
    
    // 常见连接词
    '与': 'and',
    '和': 'and',
    '的': 'of',
    '在': 'in',
    '对': 'to',
    '从': 'from',
    '关于': 'about'
  };
  
  // 替换中文关键词为拼音
  let pinyinTitle = text;
  Object.keys(pinyinMap).forEach(cn => {
    pinyinTitle = pinyinTitle.replace(new RegExp(cn, 'g'), pinyinMap[cn] + ' ');
  });
  
  return pinyinTitle;
}

/**
 * 生成友好的URL slug
 * @param {string} text 源文本
 * @param {string} fileName 文件名，作为备选
 * @return {string} 生成的slug
 */
function generateSlug(text, fileName) {
  console.log(`   生成slug源文本: "${text}"`);
  
  // 默认备选slug - 使用文件名
  const defaultSlug = fileName.replace(/\.md$/, '');
  
  // 确保text不为空且为字符串
  if (!text || typeof text !== 'string') {
    console.log(`   警告: 输入为空或非字符串，使用文件名`);
    return defaultSlug;
  }
  
  // 处理中文标题
  if (/[\u4e00-\u9fa5]/.test(text)) {
    console.log(`   检测到中文标题，进行特殊处理`);
    
    // 转换为拼音
    const pinyinTitle = convertToPinyin(text);
    
    // 如果替换后仍有中文
    if (/[\u4e00-\u9fa5]/.test(pinyinTitle)) {
      console.log(`   部分中文未能转换为拼音，尝试使用其他方法`);
      
      // 尝试提取英文和数字部分
      const nonChineseChars = text.replace(/[\u4e00-\u9fa5]/g, ' ').trim();
      if (nonChineseChars && nonChineseChars.replace(/[^\w\s-]/g, '').trim()) {
        const fallbackSlug = nonChineseChars
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/-+$/, '')
          .trim();
        console.log(`   使用非中文部分生成slug: "${fallbackSlug}"`);
        
        if (fallbackSlug) {
          return fallbackSlug;
        }
      }
      
      // 如果没有有效的非中文部分，则检查文件名和类别
      if (/^\d{6}/.test(defaultSlug)) {
        const category = getCategoryFromFile(fileName);
        if (category) {
          const dateBasedSlug = `${category.toLowerCase()}-${defaultSlug}`;
          console.log(`   使用类别+文件名生成slug: "${dateBasedSlug}"`);
          return dateBasedSlug;
        }
      }
      
      console.log(`   回退到使用文件名: "${defaultSlug}"`);
      return defaultSlug;
    }
    
    // 处理拼音结果为slug格式
    const slug = pinyinTitle
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/-+$/, '')   // 移除结尾的连字符
      .trim();              
    
    console.log(`   生成的拼音slug: "${slug}"`);
    return slug || defaultSlug;
  }
  
  // 英文标题处理
  const slug = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // 移除特殊字符
    .replace(/\s+/g, '-')     // 空格替换为连字符
    .replace(/-+/g, '-')      // 多个连字符替换为一个
    .replace(/-+$/, '')       // 移除结尾的连字符
    .trim();                  
  
  console.log(`   生成的原始slug: "${slug}"`);
  return slug || defaultSlug;
}

/**
 * 尝试从文件内容获取类别信息
 */
function getCategoryFromFile(fileName) {
  try {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data.category || '';
  } catch (error) {
    console.error(`   无法读取文件 ${fileName} 的类别信息:`, error.message);
    return '';
  }
}

/**
 * 判断slug是否有效
 */
function isValidSlug(slug) {
  return slug && typeof slug === 'string' && slug.trim() !== '' && !/^[\d-]+$/.test(slug);
}

// 处理所有文章
function updateAllSlugs() {
  console.log('开始处理文章slug...');
  
  if (!fs.existsSync(postsDirectory)) {
    console.error("文章目录不存在:", postsDirectory);
    process.exit(1);
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const results = {
    skipped: [],
    updated: [],
    errors: []
  };
  
  fileNames.forEach(fileName => {
    try {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // 解析frontmatter
      const { data, content } = matter(fileContents);
      
      // 检查现有slug是否有效
      if (data.slug && isValidSlug(data.slug)) {
        console.log(`- ${fileName}: 已有有效slug '${data.slug}'，跳过`);
        results.skipped.push({
          fileName,
          slug: data.slug,
          title: data.title || ''
        });
        return;
      }
      
      // 如果slug存在但无效（如空字符串），记录
      if (data.slug !== undefined) {
        console.log(`* ${fileName}: 现有slug '${data.slug}' 无效，将重新生成`);
      }
      
      // 生成slug
      let slug = '';
      if (data.title) {
        slug = generateSlug(data.title, fileName);
      } else {
        slug = fileName.replace(/\.md$/, '');
        console.log(`   无标题，使用文件名 '${slug}' 作为slug`);
      }
      
      // 确保slug不为空，如果为空则使用文件名
      if (!isValidSlug(slug)) {
        slug = fileName.replace(/\.md$/, '');
        console.log(`   警告: 生成的slug无效，使用文件名 '${slug}' 代替`);
      }
      
      // 添加slug到frontmatter
      data.slug = slug;
      
      // 重写文件
      const updatedFileContent = matter.stringify(content, data);
      fs.writeFileSync(fullPath, updatedFileContent);
      
      console.log(`+ ${fileName}: 生成slug '${slug}'`);
      results.updated.push({
        fileName,
        slug,
        title: data.title || ''
      });
    } catch (error) {
      console.error(`! 处理 ${fileName} 时出错:`, error.message);
      results.errors.push({
        fileName,
        error: error.message
      });
    }
  });
  
  // 输出统计信息
  console.log(`\n处理完成！共处理 ${fileNames.length} 个文件:`);
  console.log(`- 跳过: ${results.skipped.length} 个（已有有效slug）`);
  console.log(`- 更新: ${results.updated.length} 个`);
  console.log(`- 错误: ${results.errors.length} 个`);
  
  return results;
}

// 执行更新
updateAllSlugs(); 