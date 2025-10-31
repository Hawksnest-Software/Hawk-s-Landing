/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Hawk-s-Landing',
  assetPrefix: '/Hawk-s-Landing',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
