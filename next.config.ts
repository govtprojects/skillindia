import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/favicon-48.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
