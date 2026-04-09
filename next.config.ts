import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Use webpack for custom config compatibility
  turbopack: {},
  // Enable static export for Vercel (can be removed if using server-side rendering)
  // output: 'export',

  async redirects() {
    return [
      { source: '/webdesign', destination: '/sluzby', permanent: true },
      { source: '/branding', destination: '/sluzby', permanent: true },
      { source: '/marketing', destination: '/sluzby', permanent: true },
      { source: '/grafika', destination: '/sluzby', permanent: true },
      { source: '/aplikace', destination: '/sluzby', permanent: true },
      { source: '/faq', destination: '/', permanent: true },
    ]
  },

  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Webpack config for video imports
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource',
    })
    return config
  },
}

export default nextConfig
