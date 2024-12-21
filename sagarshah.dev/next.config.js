/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Exporta archivos estáticos
  images: {
    unoptimized: true, // Desactiva optimización de imágenes (requerido para GitHub Pages)
  },
  assetPrefix: './', // Usa rutas relativas para recursos estáticos
  basePath: '', // Deja vacío ya que estás usando diegoRecinos.github.io
};

module.exports = nextConfig;