/** @type {import('next').NextConfig} */
// Trigger new deployment after Git connection
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

module.exports = nextConfig 