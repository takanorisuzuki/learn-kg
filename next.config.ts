import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const pages = ['architecture', 'timeline', 'compare']
    const locales = ['en', 'ja']
    return pages.flatMap((page) =>
      locales.map((locale) => ({
        source: `/${locale}/${page}`,
        destination: `/${locale}`,
        permanent: false,
      }))
    )
  },
};

export default nextConfig;
