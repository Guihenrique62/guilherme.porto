// app/components/Projetos/ProjetosAutomacao.tsx
'use client';

import { motion } from 'framer-motion';
import { Bot, ExternalLink, Github, Clock, TrendingUp } from 'lucide-react';

interface ProjetosAutomacaoProps {
  inView: boolean;
}

export default function ProjetosAutomacao({ inView }: ProjetosAutomacaoProps) {
  const projectsData = {
    title: "⚡ Projetos de Automação",
    description: "Sistemas inteligentes que otimizam processos e aumentam eficiência",
    icon: Bot,
    projects: [
      {
        id: 4,
        title: "Automação de Relatórios Financeiros",
        problem: "Processo manual demorado de compilação de relatórios financeiros diários",
        before: {
          time: "4 horas/dia",
          efficiency: "75%",
          errors: "15% mensais"
        },
        after: {
          time: "15 minutos/dia",
          efficiency: "98%",
          errors: "0.5% mensais"
        },
        technologies: ["Python", "Pandas", "OpenPyXL", "SMTP", "Cron"],
        results: [
          "Economia de 20 horas/semana em trabalho manual",
          "Redução de 95% em erros humanos",
          "Relatórios gerados automaticamente às 6AM"
        ],
        githubUrl: "https://github.com/guilhermeporto/automacao-relatorios",
        metrics: "92% de eficiência alcançada"
      },
      {
        id: 5,
        title: "Web Scraper para Análise de Mercado",
        problem: "Coleta manual de dados de concorrentes para análise de preços",
        before: {
          time: "6 horas/semana",
          efficiency: "70%",
          errors: "Dados inconsistentes"
        },
        after: {
          time: "Automático",
          efficiency: "99%",
          errors: "Validação automática"
        },
        technologies: ["Python", "Selenium", "BeautifulSoup", "PostgreSQL", "Docker"],
        results: [
          "Coleta automática de 500+ produtos/dia",
          "Alertas de mudança de preços em tempo real",
          "Dashboard com análise competitiva"
        ],
        demoUrl: "https://scraper-demo.guilhermeporto.dev",
        githubUrl: "https://github.com/guilhermeporto/market-scraper",
        metrics: "99.8% de precisão nos dados"
      },
      {
        id: 6,
        title: "Bot de Integração API",
        problem: "Sincronização manual de dados entre sistemas diferentes",
        before: {
          time: "2 horas/dia",
          efficiency: "80%",
          errors: "Falhas de sincronização"
        },
        after: {
          time: "Automático",
          efficiency: "99.9%",
          errors: "Retry automático"
        },
        technologies: ["Node.js", "REST APIs", "Webhooks", "Redis", "PM2"],
        results: [
          "Sincronização em tempo real entre 3 sistemas",
          "Redução de 100% em trabalho manual",
          "Logs detalhados para troubleshooting"
        ],
        githubUrl: "https://github.com/guilhermeporto/api-integration-bot",
        metrics: "99.9% uptime garantido"
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

  const cardVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      rotateY: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 5,
      transition: {
        type: "spring" as const,
        stiffness: 300
      }
    }
  };

  return (
    <motion.section
      className="mb-20"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      aria-labelledby="automation-projects-heading"
    >
      <motion.header
        className="flex items-center gap-4 mb-8"
        variants={itemVariants}
      >
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <projectsData.icon className="w-8 h-8 text-cyan-400" />
        </motion.div>
        <div>
          <h3 id="automation-projects-heading" className="text-3xl font-bold text-cyan-300">
            {projectsData.title}
          </h3>
          <p className="text-blue-200 mt-2">
            {projectsData.description}
          </p>
        </div>
      </motion.header>

      <div className="grid lg:grid-cols-2 gap-8">
        {projectsData.projects.map((project) => (
          <motion.article
            key={project.id}
            className="bg-cyan-900/20 backdrop-blur-md border border-cyan-700/30 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            variants={cardVariants}
            whileHover="hover"
            itemScope
            itemType="https://schema.org/SoftwareApplication"
          >
            <div className="p-6">
              <header className="mb-6">
                <h4 className="text-xl font-bold text-white mb-2" itemProp="name">
                  {project.title}
                </h4>
                <p className="text-cyan-200 text-sm mb-4">
                  <strong>Problema:</strong> {project.problem}
                </p>
              </header>

              {/* Antes vs Depois */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30">
                  <h5 className="text-red-300 font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Antes da Automação
                  </h5>
                  <div className="space-y-2 text-red-200 text-sm">
                    <p>⏱️ {project.before.time}</p>
                    <p>📊 {project.before.efficiency} eficiência</p>
                    <p>⚠️ {project.before.errors} erros</p>
                  </div>
                </div>
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
                  <h5 className="text-green-300 font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Depois da Automação
                  </h5>
                  <div className="space-y-2 text-green-200 text-sm">
                    <p>⚡ {project.after.time}</p>
                    <p>🚀 {project.after.efficiency} eficiência</p>
                    <p>✅ {project.after.errors} erros</p>
                  </div>
                </div>
              </div>

              {/* Tecnologias e Resultados */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-sm font-semibold text-cyan-300 mb-2">Tecnologias</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-800/50 text-cyan-200 text-xs rounded border border-cyan-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-green-300 mb-2">Resultados</h5>
                  <ul className="text-green-200 text-sm space-y-1">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Métricas e Links */}
              <div className="flex justify-between items-center pt-4 mt-4 border-t border-cyan-700/30">
                <div className="text-cyan-300 text-sm font-medium">
                  {project.metrics}
                </div>
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      className="flex items-center gap-2 px-3 py-1 bg-cyan-600 text-white rounded text-xs hover:bg-cyan-700 transition-all"
                      whileHover={{ scale: 1.05 }}
                      itemProp="url"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-3 py-1 bg-slate-800 text-slate-200 rounded text-xs hover:bg-slate-700 transition-all"
                    whileHover={{ scale: 1.05 }}
                    itemProp="codeRepository"
                  >
                    <Github className="w-3 h-3" />
                    Código
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}