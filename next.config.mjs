/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['antd', 'rc-util', 'rc-pagination', 'rc-picker', '@ant-design'],
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['antd'],
  },
};

export default nextConfig;
