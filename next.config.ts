import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com', // Add this
      // Add other image hosts you use
    ],
  },
};

export default nextConfig;
