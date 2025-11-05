/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removendo optimizeCss experimental que pode estar causando conflitos
  compress: true,
  poweredByHeader: false,
  turbopack: {
    root: __dirname
  },
  
  // Configuração de headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Configurações de otimização de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [], // Adicione domínios externos se necessário
  },
}

module.exports = nextConfig