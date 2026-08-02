/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/formulator',
        destination: '/login',
        permanent: true,
      },
      {
        source: '/science',
        destination: '/login',
        permanent: true,
      },
      {
        source: '/history',
        destination: '/login',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
