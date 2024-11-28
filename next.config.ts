import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['img.spoonacular.com'], // Allow the domain to load images
  },
};

export default nextConfig;
