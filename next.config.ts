import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/:locale/architecture', destination: '/:locale', permanent: false },
      { source: '/:locale/timeline', destination: '/:locale', permanent: false },
      { source: '/:locale/compare', destination: '/:locale', permanent: false },
    ]
  },
};

export default nextConfig;
