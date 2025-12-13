import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['img.youtube.com'], // For YouTube thumbnails
  },
  
  experimental: {
    allowedDevOrigins: [
      '192.0.0.2',
      'localhost',
      '127.0.0.1',
    ],
  },
};

export default nextConfig;
