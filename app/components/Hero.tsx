// app/components/Hero.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Code2, Cpu, Zap, Sparkles } from 'lucide-react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSparkles, setShowSparkles] = useState(false);
  const fullText = 'Desenvolvedor Full Stack & Especialista em Automações';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setShowSparkles(true);
    }
  }, [currentIndex, fullText]);

  // Animação para partículas de sparkle
  useEffect(() => {
    if (showSparkles) {
      const timer = setTimeout(() => setShowSparkles(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showSparkles]);

  // Variants corrigidos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring" as const,
        stiffness: 200
      }
    }
  };

  const techItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + i * 0.1
      }
    })
  };

  const dotVariants = {
    animate: (i: number) => ({
      scale: [1, 1.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.5
      }
    })
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 md:pt-0"
      itemScope
      itemType="https://schema.org/Person"
      role="main"
      aria-label="Apresentação do Desenvolvedor Guilherme Porto"
    >
      {/* Schema.org Structured Data para Hero Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Guilherme Porto",
            "jobTitle": "Desenvolvedor Full Stack & Especialista em Automações",
            "description": "Desenvolvedor Full Stack especializado em React, Next.js, Node.js, Python e automações inteligentes. Transformo ideias em soluções digitais escaláveis.",
            "url": "https://guilhermeporto.dev",
            "knowsAbout": [
              "React",
              "Next.js", 
              "Node.js",
              "TypeScript",
              "Python",
              "Automações",
              "Desenvolvimento Web Full Stack",
              "Sistemas Automatizados",
              "RPA"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Desenvolvedor Full Stack",
              "description": "Desenvolvimento de aplicações web modernas e sistemas de automação inteligentes"
            }
          })
        }}
      />

      {/* Padding top no mobile para compensar a navigation */}
      <motion.div
        className="max-w-7xl mx-auto text-center z-10 w-full md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar com animação - Ajustado para mobile */}
        <motion.div
          className="mb-6 md:mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                  '0 0 40px rgba(6, 182, 212, 0.8)',
                  '0 0 20px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              itemProp="image"
              aria-hidden="true"
            >
              <Code2 className="w-8 h-8 md:w-12 md:h-12 text-white" />
            </motion.div>
            
            {/* Ícones flutuantes ao redor do avatar - Apenas desktop */}
            <motion.div
              className="absolute -top-2 -right-2 hidden md:block"
              variants={iconVariants}
              whileHover="hover"
              aria-hidden="true"
            >
              <Cpu className="w-6 h-6 text-cyan-300" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2 hidden md:block"
              variants={iconVariants}
              whileHover="hover"
              aria-hidden="true"
            >
              <Zap className="w-6 h-6 text-blue-300" />
            </motion.div>
          </div>
        </motion.div>

        {/* Texto Principal - Otimizado para SEO */}
        <header className="mb-8 md:mb-12">
          <motion.h1
            className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
            variants={itemVariants}
            itemProp="name"
          >
            <span className="block text-blue-100" aria-label="Olá, eu sou">
              Olá, eu sou
            </span>
            <motion.span
              className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-1 md:mt-2"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
              itemProp="alternateName"
            >
              Guilherme Porto
            </motion.span>
          </motion.h1>

          {/* Typing Text com Sparkles - Otimizado para SEO */}
          <motion.div
            className="h-16 md:h-20 mb-6 md:mb-8 relative"
            variants={itemVariants}
          >
            <h2 
              className="text-lg md:text-2xl lg:text-3xl text-blue-200 font-mono px-2"
              itemProp="jobTitle"
              aria-live="polite"
              aria-label={displayedText || 'Desenvolvedor Full Stack e Especialista em Automações'}
            >
              {displayedText}
              <motion.span
                className="ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                aria-hidden="true"
              >
                |
              </motion.span>
            </h2>
            
            {/* Sparkles animation quando termina de digitar */}
            <AnimatePresence>
              {showSparkles && (
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  aria-hidden="true"
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{
                        x: '50%',
                        y: '50%',
                        scale: 0,
                        opacity: 1
                      }}
                      animate={{
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`,
                        scale: [0, 1, 0],
                        opacity: [1, 0.5, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut"
                      }}
                    >
                      <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </header>

        {/* Description - Otimizado com palavras-chave */}
        <motion.div
          className="text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
          variants={itemVariants}
          itemProp="description"
        >
          <p className="mb-4">
            <strong>Desenvolvedor Full Stack</strong> especializado em criar{' '}
            <span className="text-cyan-300 font-semibold">soluções web modernas</span> 
            {' '}e <span className="text-blue-300 font-semibold">sistemas de automação inteligentes</span>.
          </p>
          <p>
            Transformo ideias complexas em{' '}
            <span className="text-sky-300 font-semibold">código limpo e eficiente</span>, 
            {' '}desenvolvendo <span className="text-cyan-300 font-semibold">aplicações escaláveis</span> 
            {' '}e <span className="text-blue-300 font-semibold">automações que otimizam processos</span>.
          </p>
        </motion.div>

        {/* CTA Buttons - Otimizados para conversão */}
        <motion.nav
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16 px-4"
          variants={itemVariants}
          aria-label="Ações principais"
        >
          <motion.a
            href="#projetos"
            className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 md:py-3 md:px-8 rounded-lg shadow-lg shadow-blue-500/30 overflow-hidden group w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            itemProp="url"
            aria-label="Ver projetos de desenvolvimento web e automações"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
              aria-hidden="true"
            />
            <span className="relative flex items-center gap-2 justify-center">
              <Zap className="w-4 h-4" aria-hidden="true" />
              Ver Projetos
            </span>
          </motion.a>

          <motion.a
            href="#contato"
            className="border border-blue-600 hover:border-cyan-400 text-blue-200 hover:text-cyan-100 font-semibold py-3 px-6 md:py-3 md:px-8 rounded-lg backdrop-blur-sm hover:bg-blue-900/30 group relative overflow-hidden w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            itemProp="url"
            aria-label="Entrar em contato para projetos de desenvolvimento"
          >
            <span className="relative flex items-center gap-2 justify-center">
              <Code2 className="w-4 h-4" aria-hidden="true" />
              Vamos Conversar
            </span>
          </motion.a>
        </motion.nav>

        {/* Technologies - Otimizado com keywords */}
        <motion.section
          className="mt-12 md:mt-16 px-4"
          variants={itemVariants}
          aria-labelledby="technologies-heading"
        >
          <motion.h3
            id="technologies-heading"
            className="text-blue-300 mb-4 md:mb-6 text-sm md:text-base font-semibold"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Tecnologias e Especialidades:
          </motion.h3>
          <div 
            className="flex flex-wrap justify-center gap-3 md:gap-6 text-blue-200 text-sm md:text-base"
            itemProp="knowsAbout"
            aria-label="Tecnologias e habilidades técnicas"
          >
            {[
              { 
                name: 'React/Next.js', 
                color: 'bg-blue-400',
                description: 'Desenvolvimento Frontend Moderno'
              },
              { 
                name: 'Node.js', 
                color: 'bg-cyan-400',
                description: 'Backend e APIs'
              },
              { 
                name: 'Python', 
                color: 'bg-sky-400',
                description: 'Automações e Scripting'
              },
              { 
                name: 'Automações', 
                color: 'bg-blue-500',
                description: 'RPA e Otimização de Processos'
              }
            ].map((tech, index) => (
              <motion.span
                key={tech.name}
                className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-blue-900/30 backdrop-blur-sm border border-blue-700/30 hover:border-cyan-400 transition-colors"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(30, 58, 138, 0.5)',
                }}
                custom={index}
                variants={techItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ type: "spring", stiffness: 300 }}
                aria-label={tech.description}
              >
                <motion.div
                  className={`w-2 h-2 ${tech.color} rounded-full`}
                  custom={index}
                  variants={dotVariants}
                  animate="animate"
                  aria-hidden="true"
                />
                <span>{tech.name}</span>
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Scroll Indicator - Apenas desktop */}
        <motion.div
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer"
          >
            <svg 
              className="w-6 h-6 text-blue-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}