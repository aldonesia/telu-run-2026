import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  
  images: {
    unoptimized: false,
    domains: ['localhost'],
  },
  
  productionBrowserSourceMaps: false,
};

export default nextConfig;