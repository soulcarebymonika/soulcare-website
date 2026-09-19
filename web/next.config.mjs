/** @type {import('next').NextConfig} */

const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.soulcarebymonika.com',
        pathname: '/uploads/**',
      },
    ],
  },
  async headers() {
    return [
      {
        // Prevent Google from indexing decorative background videos
        source: '/videos/:file*.mp4',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/sessions',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/sessions/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
