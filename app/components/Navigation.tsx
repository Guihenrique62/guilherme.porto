// app/components/Navigation.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { 
      name: 'Home', 
      href: '#home',
      title: 'Página Inicial - Portfolio Guilherme Porto',
      description: 'Voltar para a seção principal do portfolio'
    },
    { 
      name: 'Sobre', 
      href: '#sobre',
      title: 'Sobre Guilherme Porto - Desenvolvedor Full Stack',
      description: 'Conheça minha trajetória e habilidades em desenvolvimento'
    },
    { 
      name: 'Projetos', 
      href: '#projetos',
      title: 'Projetos de Desenvolvimento - Guilherme Porto',
      description: 'Veja meus projetos em React, Next.js, Node.js e automações'
    },
    { 
      name: 'Contato', 
      href: '#contato',
      title: 'Contato Guilherme Porto - Desenvolvedor Full Stack',
      description: 'Entre em contato para projetos de desenvolvimento web'
    },
  ];

  // Schema.org para Site Navigation
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Navegação Principal - Portfolio Guilherme Porto",
    "description": "Menu de navegação do portfolio de Guilherme Porto - Desenvolvedor Full Stack",
    "url": "https://guilhermeporto.dev",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 4,
      "itemListElement": menuItems.map((item, index) => ({
        "@type": "SiteNavigationElement",
        "position": index + 1,
        "name": item.name,
        "url": `https://guilhermeporto.dev${item.href}`,
        "description": item.description
      }))
    }
  };

  const handleDownloadCV = () => {
    // Cria um link temporário para download
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Guilherme_Porto_Curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Schema.org Structured Data para Navegação */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(navigationSchema)
        }}
      />

      <motion.nav
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-blue-900/30 border-b border-blue-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        role="navigation"
        aria-label="Navegação principal"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <meta itemProp="name" content="Navegação Principal - Portfolio Desenvolvedor" />
        <meta itemProp="description" content="Menu de navegação do portfolio de Guilherme Porto - Desenvolvedor Full Stack especializado em React, Next.js e automações" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo com SEO otimizado */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Person"
            >
              <a 
                href="#home"
                className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                aria-label="Guilherme Porto - Desenvolvedor Full Stack - Voltar para início"
                title="Guilherme Porto - Desenvolvedor Full Stack & Automações"
                itemProp="url"
              >
                <span itemProp="name">&lt;Guilherme /&gt;</span>
                <meta itemProp="jobTitle" content="Desenvolvedor Full Stack & Especialista em Automações" />
                <meta itemProp="knowsAbout" content="React, Next.js, Node.js, Python, Automações, TypeScript" />
              </a>
            </motion.div>

            {/* Menu Desktop - Otimizado para SEO */}
            <div 
              className="hidden md:flex items-center space-x-8"
              role="menubar"
              aria-label="Menu principal de navegação"
            >
              <div className="flex items-baseline space-x-8">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    role="menuitem"
                    aria-label={`Navegar para ${item.name} - ${item.description}`}
                    title={item.title}
                    itemProp="url"
                  >
                    <span itemProp="name">{item.name}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                    />
                    {/* Tooltip semântico para SEO */}
                    <div 
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                      role="tooltip"
                    >
                      {item.description}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Botão de Download do Currículo */}
              <motion.button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Baixar currículo em PDF"
                title="Baixar currículo de Guilherme Porto"
              >
                <Download className="w-4 h-4" />
                <span className="hidden lg:inline">Currículo</span>
                <span className="lg:hidden">CV</span>
              </motion.button>
            </div>

            {/* Menu Mobile Button - Acessível */}
            <motion.div
              className="md:hidden flex items-center gap-4"
              whileTap={{ scale: 0.9 }}
            >
              {/* Botão de Download do Currículo - Mobile */}
              <motion.button
                onClick={handleDownloadCV}
                className="flex items-center gap-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-2 px-3 rounded-lg text-xs transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Baixar currículo em PDF"
                title="Baixar currículo de Guilherme Porto"
              >
                <Download className="w-3 h-3" />
                <span>CV</span>
              </motion.button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 rounded p-1"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                aria-haspopup="true"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </motion.div>
          </div>

          {/* Menu Mobile Expandido - SEO Otimizado */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                role="menu"
                aria-label="Menu mobile de navegação"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900/90 backdrop-blur-md rounded-lg mt-2 border border-blue-700/30">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors group"
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      role="menuitem"
                      aria-label={`Navegar para ${item.name} - ${item.description}`}
                      title={item.title}
                      itemProp="url"
                    >
                      <span itemProp="name" className="flex items-center justify-between">
                        {item.name}
                        <span 
                          className="text-cyan-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </span>
                      <meta itemProp="description" content={item.description} />
                    </motion.a>
                  ))}
                  
                  {/* Botão de Download no Menu Mobile */}
                  <motion.button
                    onClick={() => {
                      handleDownloadCV();
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-base transition-all duration-300 mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Baixar currículo em PDF"
                    title="Baixar currículo de Guilherme Porto"
                  >
                    <Download className="w-5 h-5" />
                    Baixar Currículo PDF
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Conteúdo semântico oculto para SEO */}
        <div className="sr-only" aria-hidden="false">
          <h2>Navegação do Portfolio - Guilherme Porto</h2>
          <p>
            Menu de navegação principal do portfolio de Guilherme Porto, 
            Desenvolvedor Full Stack especializado em React, Next.js, Node.js e automações inteligentes.
          </p>
          <nav aria-label="Mapa do site">
            <h3>Seções disponíveis:</h3>
            <ul>
              {menuItems.map(item => (
                <li key={item.name}>
                  <a href={item.href} title={item.title}>
                    {item.name} - {item.description}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p>
            Inclui botão de download do currículo em PDF para fácil acesso aos dados profissionais.
          </p>
          <p>
            Navegação responsiva desenvolvida com React, Framer Motion e Tailwind CSS, 
            otimizada para SEO e acessibilidade.
          </p>
        </div>
      </motion.nav>
    </>
  );
}