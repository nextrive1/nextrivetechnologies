import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // helps catch issues in dev
  images: {
    domains: ["images.unsplash.com", "yourdomain.com"], // whitelist domains for <Image />
  },
  turbopack: {
    rules: {
      "*.png": ["file"], // allow importing PNG files
    },
  },
};

export default nextConfig;
