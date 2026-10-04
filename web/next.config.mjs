/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: false,

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
        destination: 'https://www.soulcarebymonika.com/sessions',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: 'https://www.soulcarebymonika.com/sessions/:path*',
        permanent: true,
      },
      {
        source: '/blog/why-your-brain-reacts-to-stress-the-way-it-does',
        destination: 'https://www.soulcarebymonika.com/blog/why-your-brain-reacts-to-stress',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
