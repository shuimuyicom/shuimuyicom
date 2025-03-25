/** @type {import('next').NextConfig} */
module.exports = {
  // 跳过TypeScript类型检查
  typescript: {
    ignoreBuildErrors: true,
  },
  // 跳过ESLint检查
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 禁用严格模式
  reactStrictMode: false,
} 