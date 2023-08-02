/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'thebatuhansnetwork.xyz',
            port: '',
            pathname: '/assets/img/avatar.jpg',
          },
        ],
      },
}

module.exports = nextConfig
