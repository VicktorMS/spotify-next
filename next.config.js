/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.scdn.co',
            port: '',
            pathname: '/image/**',
          },
          {
            protocol: 'https',
            hostname: 'mosaic.scdn.co',
            port: '',
            pathname: '/**/**',
          },
          {
            protocol: 'https',
            hostname: 'seeded-session-images.scdn.co',
            port: '',
            pathname: '/v1/img/track/**',
          },
          {
            protocol: 'https',
            hostname: 'blend-playlist-covers.spotifycdn.com',
            port: '',
            pathname: '/**/**',
          },
        ],
      },
}

module.exports = nextConfig
