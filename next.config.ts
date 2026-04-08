import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // better-auth proxy
  async rewrites() {
    return [
      {
        // Explicitly map auth requests
        source: "/api/auth/:path*",
        destination: process.env.NEXT_PUBLIC_API_BASE_URL + "/auth/:path*",
      },
      {
        // Explicitly map v1 API requests
        source: "/api/v1/:path*",
        destination: process.env.NEXT_PUBLIC_API_BASE_URL + "/v1/:path*",
      },
    ];
  },
};

export default nextConfig;