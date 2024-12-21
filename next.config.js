/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exporta archivos estáticos
  images: {
    unoptimized: true, // Desactiva optimización de imágenes
  },
  assetPrefix: './', // Rutas relativas para recursos estáticos
  basePath: '/diegoRecinos.github.io', // BasePath coincide con el nombre del repositorio
};

module.exports = nextConfig;