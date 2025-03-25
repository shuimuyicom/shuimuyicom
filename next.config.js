/** @type {import('next').NextConfig} */
const nextConfig = {
  // 设置合理的构建选项
  reactStrictMode: true,
  poweredByHeader: false,
  
  // 图像优化配置
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig; 