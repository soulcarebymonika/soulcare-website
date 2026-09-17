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
};

export default nextConfig;
