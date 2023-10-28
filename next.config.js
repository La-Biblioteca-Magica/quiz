/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["books.google.com"],
  },
};

module.exports = nextConfig;
