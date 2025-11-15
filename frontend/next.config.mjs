/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
    },
    {
      protocol: 'http',
      hostname: '**',
    },
  ],
};

export default nextConfig;

