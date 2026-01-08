/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para resolver warning sobre múltiplos lockfiles
  outputFileTracingRoot: __dirname,
  
  // Configurações recomendadas para produção
  reactStrictMode: true,
  
  // Habilitar otimizações de imagem
  images: {
    remotePatterns: [],
  },
  
  // Configuração para melhor experiência de desenvolvimento
  eslint: {
    // Durante o build em produção, rodar ESLint
    ignoreDuringBuilds: false,
  },
  
  typescript: {
    // Durante o build em produção, verificar erros de TypeScript
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;

