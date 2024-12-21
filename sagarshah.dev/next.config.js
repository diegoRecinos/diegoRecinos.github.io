/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exporta archivos estáticos
  images: {
    unoptimized: true, // Desactiva optimización de imágenes (requerido para GitHub Pages)
  },
  assetPrefix: './', // Rutas relativas
  basePath: '', // Asegura que no se rompan rutas en GitHub Pages
};

module.exports = nextConfig;