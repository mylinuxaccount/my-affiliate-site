import type { NextConfig } from 'next';

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
} as NextConfig & { eslint: { ignoreDuringBuilds: boolean }; typescript: { ignoreBuildErrors: boolean } };

export default nextConfig;
