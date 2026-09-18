import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "t2tskillfoundation.org" }],
        destination: "https://www.t2tskillfoundation.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
