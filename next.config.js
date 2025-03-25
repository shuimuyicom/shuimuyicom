/** @type {import('next').NextConfig} */
const nextConfig = {
  // 跳过TypeScript类型检查，仅在生产构建中
  typescript: {
    ignoreBuildErrors: true,
  },
  // 跳过ESLint检查，仅在生产构建中
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 