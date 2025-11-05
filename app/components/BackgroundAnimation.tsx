// app/components/BackgroundAnimation.tsx
'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden"
      role="presentation"
      aria-hidden="true"
    >
      {/* Schema.org para contexto visual */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VisualArtwork",
            "name": "Background Animation - Portfolio Guilherme Porto",
            "description": "Animação interativa representando conceitos de desenvolvimento web, código limpo e automações inteligentes",
            "creator": {
              "@type": "Person",
              "name": "Guilherme Porto"
            },
            "keywords": "animação desenvolvimento web, código programação, automações, tecnologia, background interativo",
            "artform": "Digital Art",
            "artMedium": "CSS Animations + SVG",
            "software": "React, Framer Motion, Next.js"
          })
        }}
      />

      {/* Gradiente animado com significado semântico */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
        aria-label="Fundo gradiente azul representando tecnologia e inovação"
      >
        
        {/* Partículas flutuantes - Representando dados e código */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-label="Partícula animada representando dados em movimento"
          role="img"
        />
        
        <motion.div
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          aria-label="Elemento de interface animado simbolizando interatividade"
          role="img"
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-sky-300 rounded-full"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          aria-label="Ponto de conexão animado representando redes e integrações"
          role="img"
        />

        {/* Linhas conectadas animadas - Representando fluxo de dados */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          style={{ opacity: 0.1 }}
          aria-label="Diagrama SVG animado representando fluxo de dados e conexões em desenvolvimento web"
          role="img"
        >
          <title>Fluxo de dados animado - Desenvolvimento Web</title>
          <desc>
            Animação SVG representando o fluxo contínuo de dados em aplicações web modernas, 
            simbolizando integração entre frontend e backend
          </desc>
          
          <motion.path
            d="M100,100 Q250,50 400,100 T700,100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            aria-label="Caminho de dados frontend para backend"
          />
          
          <motion.path
            d="M50,300 Q200,250 350,300 T650,300"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            aria-label="Caminho de processamento de automações"
          />
          
          <defs>
            <linearGradient 
              id="gradient1" 
              x1="0%" 
              y1="0%" 
              x2="100%" 
              y2="0%"
              aria-label="Gradiente azul para ciano representando frontend"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            
            <linearGradient 
              id="gradient2" 
              x1="0%" 
              y1="0%" 
              x2="100%" 
              y2="0%"
              aria-label="Gradiente ciano para azul representando backend"
            >
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Código flutuante interativo - Otimizado para SEO */}
        <motion.div
          className="absolute top-20 left-10 hidden lg:block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", delay: 2 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ transitionDelay: '2s' }}
          role="complementary"
          aria-label="Exemplo de código JavaScript representando desenvolvimento limpo"
        >
          <div 
            className="bg-blue-900/40 backdrop-blur-md border border-blue-500/30 p-4 rounded-lg shadow-2xl"
            itemScope
            itemType="https://schema.org/Code"
          >
            <meta itemProp="programmingLanguage" content="JavaScript" />
            <meta itemProp="codeRepository" content="https://github.com/guilhermeporto" />
            <pre 
              className="text-xs text-blue-200 font-mono"
              aria-label="Função JavaScript demonstrando padrões de código limpo"
            >
              <code itemProp="codeSample">
{`function criarMagia() {
  // Código limpo e eficiente
  return {
    código: "limpo & eficiente",
    inovação: "sem limites", 
    resultado: "✨ impressionante"
  };
}`}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Segundo bloco de código - Especialização em Automações */}
        <motion.div
          className="absolute top-40 right-10 hidden xl:block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", delay: 2 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ transitionDelay: '1s' }}
          role="complementary"
          aria-label="Exemplo de automação em JavaScript mostrando eficiência"
        >
          <div 
            className="bg-cyan-900/30 backdrop-blur-md border border-cyan-500/30 p-4 rounded-lg shadow-2xl"
            itemScope
            itemType="https://schema.org/Code"
          >
            <meta itemProp="programmingLanguage" content="JavaScript" />
            <meta itemProp="applicationCategory" content="BusinessAutomation" />
            <pre 
              className="text-xs text-cyan-200 font-mono"
              aria-label="Objeto JavaScript demonstrando métricas de automação"
            >
              <code itemProp="codeSample">
{`const automacoes = {
  // Resultados mensuráveis
  eficiencia: "90%+",
  tempoSalvo: "horas/dia", 
  complexidade: "simplificada"
};`}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Elementos de texto ocultos para SEO - Não visíveis mas indexáveis */}
        <div className="sr-only" aria-hidden="false">
          <h2>Background Interativo - Portfolio Guilherme Porto</h2>
          <p>
            Animação customizada desenvolvida com React e Framer Motion representando 
            conceitos de desenvolvimento web moderno, código limpo e automações inteligentes.
          </p>
          <p>
            Elementos visuais incluem partículas animadas simbolizando dados em movimento, 
            linhas de conexão representando fluxo de informações entre sistemas, 
            e exemplos de código demonstrando padrões de desenvolvimento clean code.
          </p>
          <ul>
            <li>Animações CSS e SVG para performance otimizada</li>
            <li>Design responsivo para todos os dispositivos</li>
            <li>Representação visual de conceitos de programação</li>
            <li>Integração perfeita com React e Next.js</li>
          </ul>
        </div>

      </div>
      
      {/* Overlay sutil para contraste */}
      <div 
        className="absolute inset-0 bg-black/20"
        aria-hidden="true"
        role="presentation"
      />

      {/* Meta informações para performance */}
      <link 
        rel="preload" 
        href="data:image/svg+xml,..." 
        as="image"
        type="image/svg+xml"
      />
    </div>
  );
}