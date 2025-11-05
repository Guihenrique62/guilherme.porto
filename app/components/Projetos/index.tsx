// app/components/Projetos/index.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjetosFullStack from './ProjetosFullStack';
import ProjetosAutomacao from './ProjetosAutomacao';
import ExperienciaProfissional from './ExperienciaProfissional';

export default function Projetos() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Schema.org para Portfolio
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Guilherme Porto",
    "mainEntityOfPage": {
      "@type": "ItemList",
      "name": "Portfolio de Projetos - Guilherme Porto",
      "description": "Projetos de desenvolvimento Full Stack e automações desenvolvidos por Guilherme Porto",
      "numberOfItems": 8
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Desenvolvedor Full Stack"
    }
  };

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
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section 
      id="projetos" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      role="region"
      aria-labelledby="projetos-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema)
        }}
      />

      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Header da Seção */}
        <motion.header
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            id="projetos-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            itemProp="name"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfólio
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="text-lg md:text-xl text-blue-200 mt-6 max-w-3xl mx-auto"
            variants={itemVariants}
            itemProp="description"
          >
            Projetos reais desenvolvidos com tecnologias modernas, 
            demonstrando soluções práticas para problemas complexos
          </motion.p>
        </motion.header>

        {/* Componentes Separados */}
        <ProjetosFullStack inView={inView} />
        <ProjetosAutomacao inView={inView} />
        <ExperienciaProfissional inView={inView} />

        {/* Conteúdo semântico oculto para SEO */}
        <div className="sr-only" aria-hidden="false">
          <h3>Detalhes do Portfólio - Guilherme Porto</h3>
          <p>
            Portfólio completo demonstrando projetos de desenvolvimento Full Stack e automações inteligentes. 
            Cada projeto inclui tecnologias utilizadas, desafios superados e resultados mensuráveis.
          </p>
          <h4>Estatísticas do Portfólio:</h4>
          <ul>
            <li>6 projetos detalhados com casos reais</li>
            <li>15+ tecnologias diferentes aplicadas</li>
            <li>100% de satisfação em projetos freelancer</li>
            <li>Economia de 200+ horas/mês através de automações</li>
            <li>50+ contribuições open source</li>
          </ul>
          <p>
            Todos os projetos seguem práticas de código limpo, arquitetura escalável e 
            metodologias ágeis de desenvolvimento.
          </p>
        </div>
      </motion.div>
    </section>
  );
}