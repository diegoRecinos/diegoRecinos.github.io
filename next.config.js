/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remover basePath y assetPrefix si es un repositorio username.github.io
};
module.exports = nextConfig;