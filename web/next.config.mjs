/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // 'export' generates static HTML/CSS/JS into out/ for Hostinger.
  // Must be disabled in dev — it causes the dev server to hang and never respond.
  ...(isProd && {
    output: 'export',
    trailingSlash: true,   // /about → /about/index.html (required by most static hosts)
  }),
  images: {
    unoptimized: true,   // next/image optimization requires a server; disable for static export
  },

  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
