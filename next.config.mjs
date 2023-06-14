import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['million'],
  experimental: {
    externalDir: true,
  },
};

export default million.next(nextConfig);
