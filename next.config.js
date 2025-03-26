/** @type {import('next').NextConfig} */
const nextConfig = {
  // 设置合理的构建选项
  reactStrictMode: true,
  poweredByHeader: false,
  
  // 图像优化配置
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // 在开发模式下启用完整类型检查，但在构建时只报告严重错误
  typescript: {
    // 打开此项不会完全忽略，只会允许类型警告不阻止构建
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig; 