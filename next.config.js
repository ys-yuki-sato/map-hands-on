/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-leaflet-cluster'],
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
