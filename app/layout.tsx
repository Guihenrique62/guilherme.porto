// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a8a',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: {
    default: 'Guilherme Porto - Desenvolvedor Full Stack & Especialista em Automações',
    template: '%s | Guilherme Porto'
  },
  description: 'Desenvolvedor Full Stack especializado em React, Next.js, Node.js e automações inteligentes. Crio soluções web modernas e sistemas automatizados que otimizam processos e aumentam eficiência.',
  keywords: [
    'Desenvolvedor Full Stack',
    'Desenvolvedor React',
    'Desenvolvedor Next.js',
    'Automações Python',
    'Desenvolvimento Web',
    'Programador Freelancer',
    'Sistemas Automatizados',
    'Desenvolvedor Node.js',
    'TypeScript',
    'Automação de Processos',
    'RPA',
    'Guilherme Porto'
  ],
  authors: [{ name: 'Guilherme Porto' }],
  creator: 'Guilherme Porto',
  publisher: 'Guilherme Porto',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://guilhermeporto.dev'), // ATUALIZE COM SEU DOMÍNIO
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://guilhermeporto.dev', // ATUALIZE COM SEU DOMÍNIO
    title: 'Guilherme Porto - Desenvolvedor Full Stack & Especialista em Automações',
    description: 'Desenvolvedor Full Stack especializado em React, Next.js, Node.js e automações inteligentes. Transformo ideias em soluções digitais escaláveis.',
    siteName: 'Guilherme Porto - Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Crie uma imagem OG 1200x630
        width: 1200,
        height: 630,
        alt: 'Guilherme Porto - Desenvolvedor Full Stack',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload para fonts críticas */}
        <link
          rel="preload"
          href="/_next/static/media/your-critical-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}