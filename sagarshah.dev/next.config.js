/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Habilita la exportación estática
    images: {
      unoptimized: true, // Evita problemas con imágenes en GitHub Pages
    },
    assetPrefix: '/diegoRecinos.github.io', // Asegura rutas correctas para archivos estáticos
    basePath: '/diegoRecinos.github.io', // Configura la base para GitHub Pages
  };
  
  module.exports = nextConfig;
  