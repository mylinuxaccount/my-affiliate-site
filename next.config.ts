import type { NextConfig } from 'next';

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { remotePatterns: [{ protocol: 'https', hostname: 'ae-pic-a1.aliexpress-media.com' }] },
} as NextConfig & { eslint: { ignoreDuringBuilds: boolean }; typescript: { ignoreBuildErrors: boolean } };

export default nextConfig;
