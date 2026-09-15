import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,

  images: {
    // Add only production external domains if needed
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      //   pathname: '/**',
      // },
    ],
    // Supported formats - Next.js will serve WebP/AVIF when possible
    formats: ["image/webp", "image/avif"],
    // Optional: Configure supported file types
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Next.js 15 specific caching configurations
  experimental: {
    // Next.js 15 specific optimizations
    staleTimes: {
      dynamic: 30, // 30 seconds for dynamic pages
      static: 180, // 3 minutes for static pages
    },
  },

  // Optional: Caching headers for better performance
  async headers() {
    return [
      {
        // Cache static assets (including images)
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;