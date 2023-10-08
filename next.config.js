/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "ik.imagekit.io",
      "avatars.githubusercontent.com"
    ],
    minimumCacheTTL: 3153600,
  },
};

module.exports = nextConfig;
