/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // domains: ['images.prismic.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.prismic.io',
        // port: '',
        pathname: '/*/**',
      },
    ],
  },
};
