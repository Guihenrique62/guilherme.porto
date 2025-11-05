// app/components/Habilidades.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Cpu, Bot } from 'lucide-react';

export default function Habilidades() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Schema.org para habilidades
  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Guilherme Porto",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Desenvolvedor Full Stack & Especialista em Automações"
    },
    "knowsAbout": [
      "React",
      "Vue.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Python",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Docker",
      "CI/CD",
      "DevOps",
      "RPA",
      "Automação de Processos",
      "Web Scraping",
      "Bots",
      "Integrações API",
      "Scripting"
    ],
    "skills": [
      {
        "@type": "Skill",
        "name": "Desenvolvimento Full Stack",
        "level": "Expert",
        "yearsOfExperience": "4+"
      },
      {
        "@type": "Skill",
        "name": "Automações Inteligentes",
        "level": "Expert", 
        "yearsOfExperience": "3+"
      }
    ]
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
      scale: 0.8
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

  const skillBarVariants = {
    hidden: { 
      width: 0,
      opacity: 0 
    },
    visible: (custom: number) => ({
      width: `${custom}%`,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 15,
        delay: 0.5 + (custom / 100) * 0.3
      }
    })
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180 
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring" as const,
        stiffness: 300
      }
    }
  };

  const skillsData = {
    fullStack: {
      title: "💻 Desenvolvimento Full Stack",
      icon: Code2,
      description: "Desenvolvimento completo de aplicações web modernas e escaláveis",
      items: [
        {
          category: "Frontend",
          technologies: ["React", "Next", "Vue", "JavaScript", "TypeScript"],
          color: "from-blue-500 to-cyan-500"
        },
        {
          category: "Backend", 
          technologies: ["Node.js", "Python", "MySQL", "PostgreSQL", "MongoDB"],
          color: "from-green-500 to-emerald-500"
        },
        {
          category: "DevOps",
          technologies: ["Git", "Docker", "CI/CD", "AWS", "Linux", "Nginx"],
          color: "from-purple-500 to-pink-500"
        }
      ]
    },
    automations: {
      title: "⚡ Automações Inteligentes",
      icon: Zap,
      description: "Sistemas automatizados que otimizam processos e aumentam eficiência",
      items: [
        {
          category: "Automação de Processos (RPA)",
          technologies: ["Robotic Process Automation", "Automação Web", "Macros", "Workflows"],
          color: "from-orange-500 to-red-500"
        },
        {
          category: "Bots e Scrapers",
          technologies: ["Web Scraping", "Data Extraction", "Chatbots", "Automação de Tarefas"],
          color: "from-yellow-500 to-amber-500"
        },
        {
          category: "Scripts Personalizados",
          technologies: ["Python Scripts", "Bash Scripting", "Automação Customizada", "CLI Tools"],
          color: "from-teal-500 to-green-500"
        }
      ]
    }
  };

  return (
    <section 
      id="habilidades" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      role="region"
      aria-labelledby="habilidades-heading"
    >
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(skillsSchema)
        }}
      />

      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Header da Seção */}
        <motion.header
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            id="habilidades-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            itemProp="hasOccupation"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="text-lg md:text-xl text-blue-200 mt-6 max-w-2xl mx-auto"
            variants={itemVariants}
            itemProp="description"
          >
            Conjunto completo de tecnologias e metodologias para desenvolvimento 
            de soluções web modernas e sistemas de automação inteligentes
          </motion.p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Full Stack Development */}
          <motion.section
            className="space-y-8"
            variants={containerVariants}
            aria-labelledby="fullstack-heading"
          >
            <motion.header
              className="flex items-center gap-4 mb-6"
              variants={itemVariants}
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="flex-shrink-0"
              >
                <skillsData.fullStack.icon className="w-8 h-8 text-blue-400" />
              </motion.div>
              <div>
                <h3 id="fullstack-heading" className="text-2xl font-bold text-blue-300">
                  {skillsData.fullStack.title}
                </h3>
                <p className="text-blue-200 text-sm mt-1">
                  {skillsData.fullStack.description}
                </p>
              </div>
            </motion.header>

            <div className="space-y-6">
              {skillsData.fullStack.items.map((category, categoryIndex) => (
                <motion.article
                  key={category.category}
                  className="bg-blue-900/30 backdrop-blur-md border border-blue-700/30 rounded-xl p-6 shadow-xl hover:border-blue-500/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  itemProp="knowsAbout"
                >
                  <header className="mb-4">
                    <h4 className="text-lg font-semibold text-blue-200 mb-2 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      {category.category}
                    </h4>
                    
                  </header>

                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-blue-800/40 text-blue-200 rounded-full text-sm border border-blue-700/30 hover:border-cyan-400/50 transition-colors"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{
                          delay: 0.8 + (categoryIndex * 0.2) + (techIndex * 0.1),
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(30, 58, 138, 0.6)'
                        }}
                        itemProp="knowsAbout"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Automações Inteligentes */}
          <motion.section
            className="space-y-8"
            variants={containerVariants}
            aria-labelledby="automations-heading"
          >
            <motion.header
              className="flex items-center gap-4 mb-6"
              variants={itemVariants}
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="flex-shrink-0"
              >
                <skillsData.automations.icon className="w-8 h-8 text-cyan-400" />
              </motion.div>
              <div>
                <h3 id="automations-heading" className="text-2xl font-bold text-cyan-300">
                  {skillsData.automations.title}
                </h3>
                <p className="text-blue-200 text-sm mt-1">
                  {skillsData.automations.description}
                </p>
              </div>
            </motion.header>

            <div className="space-y-6">
              {skillsData.automations.items.map((category, categoryIndex) => (
                <motion.article
                  key={category.category}
                  className="bg-cyan-900/20 backdrop-blur-md border border-cyan-700/30 rounded-xl p-6 shadow-xl hover:border-cyan-500/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  itemProp="knowsAbout"
                >
                  <header className="mb-4">
                    <h4 className="text-lg font-semibold text-cyan-200 mb-2 flex items-center gap-2">
                      <Bot className="w-4 h-4 text-cyan-400" />
                      {category.category}
                    </h4>
                    
                    
                  </header>

                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-cyan-800/40 text-cyan-200 rounded-full text-sm border border-cyan-700/30 hover:border-cyan-400/50 transition-colors"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{
                          delay: 0.8 + (categoryIndex * 0.2) + (techIndex * 0.1),
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(6, 182, 212, 0.3)'
                        }}
                        itemProp="knowsAbout"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Conteúdo semântico oculto para SEO */}
        <div className="sr-only" aria-hidden="false">
          <h3>Detalhes das Habilidades Técnicas - Guilherme Porto</h3>
          <p>
            Desenvolvedor Full Stack com expertise em React, Vue.js, Node.js, Python e automações inteligentes. 
            Especialista em criar soluções web modernas e sistemas automatizados que otimizam processos empresariais.
          </p>
          <h4>Competências Principais:</h4>
          <ul>
            <li>Desenvolvimento Frontend: React, Vue.js, HTML5, CSS3, JavaScript, TypeScript</li>
            <li>Desenvolvimento Backend: Node.js, Python, PHP, Bancos de Dados relacionais e NoSQL</li>
            <li>DevOps: Git, Docker, CI/CD, Deploy em cloud, Infraestrutura como código</li>
            <li>Automações: RPA (Robotic Process Automation), Web Scraping, Bots, Integrações API</li>
            <li>Scripting: Python, Bash, Automação de tarefas, Ferramentas CLI</li>
          </ul>
          <p>
            Todas as habilidades são aplicadas em projetos reais com foco em código limpo, 
            arquitetura escalável e melhores práticas de desenvolvimento.
          </p>
        </div>

        {/* Elementos decorativos animados */}
        <motion.div
          className="absolute bottom-10 left-5 text-4xl opacity-10"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          aria-hidden="true"
        >
          ⚡
        </motion.div>
        
        <motion.div
          className="absolute top-20 right-5 text-4xl opacity-10"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        >
          💻
        </motion.div>
      </motion.div>
    </section>
  );
}