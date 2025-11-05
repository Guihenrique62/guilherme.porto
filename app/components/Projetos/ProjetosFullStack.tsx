// app/components/Projetos/ProjetosFullStack.tsx
'use client';

import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github, Zap } from 'lucide-react';

interface ProjetosFullStackProps {
  inView: boolean;
}

export default function ProjetosFullStack({ inView }: ProjetosFullStackProps) {
  const projectsData = {
    title: "💻 Projetos Full Stack",
    description: "Aplicações web completas desenvolvidas com tecnologias modernas",
    icon: Code2,
    projects: [
      {
        id: 1,
        title: "Sistema de Gestão Empresarial",
        description: "Plataforma completa para gestão de negócios com dashboard em tempo real",
        image: "/projetos/gestao-empresarial.jpg",
        technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Socket.io"],
        challenges: [
          "Processamento de grandes volumes de dados em tempo real",
          "Sincronização multi-usuário sem conflitos",
          "Otimização de performance para relatórios complexos"
        ],
        demoUrl: "https://gestao-demo.guilhermeporto.dev",
        githubUrl: "https://github.com/guilhermeporto/sistema-gestao",
        status: "Em produção",
        featured: true
      },
      {
        id: 2,
        title: "E-commerce Plataforma",
        description: "Loja virtual com sistema de pagamentos integrado e gestão de estoque",
        image: "/projetos/ecommerce-platform.jpg",
        technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS", "NextAuth"],
        challenges: [
          "Integração segura com múltiplos gateways de pagamento",
          "Otimização SEO para produtos e categorias",
          "Cache inteligente para alta disponibilidade"
        ],
        demoUrl: "https://ecommerce-demo.guilhermeporto.dev",
        githubUrl: "https://github.com/guilhermeporto/ecommerce-platform",
        status: "Live",
        featured: true
      },
      {
        id: 3,
        title: "App de Task Management",
        description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real",
        image: "/projetos/task-management.jpg",
        technologies: ["Vue.js", "Express.js", "Socket.io", "SQLite", "JWT"],
        challenges: [
          "Sincronização em tempo real entre múltiplos dispositivos",
          "Interface drag-and-drop responsiva",
          "Notificações push para deadlines"
        ],
        demoUrl: "https://tasks-demo.guilhermeporto.dev",
        githubUrl: "https://github.com/guilhermeporto/task-manager",
        status: "Em desenvolvimento",
        featured: false
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
      aria-labelledby="fullstack-projects-heading"
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
          <projectsData.icon className="w-8 h-8 text-blue-400" />
        </motion.div>
        <div>
          <h3 id="fullstack-projects-heading" className="text-3xl font-bold text-blue-300">
            {projectsData.title}
          </h3>
          <p className="text-blue-200 mt-2">
            {projectsData.description}
          </p>
        </div>
      </motion.header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="bg-blue-900/30 backdrop-blur-md border border-blue-700/30 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            variants={cardVariants}
            whileHover="hover"
            itemScope
            itemType="https://schema.org/SoftwareApplication"
          >
            {/* Imagem do Projeto */}
            <div className="relative h-48 bg-gradient-to-br from-blue-600 to-cyan-600 overflow-hidden">
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                <Code2 className="w-16 h-16 text-blue-400 opacity-50" />
              </div>
              {project.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Destaque
                </div>
              )}
              <div className="absolute top-4 right-4 bg-blue-800/80 text-blue-200 text-xs px-2 py-1 rounded">
                {project.status}
              </div>
            </div>

            {/* Conteúdo do Projeto */}
            <div className="p-6">
              <header className="mb-4">
                <h4 className="text-xl font-bold text-white mb-2" itemProp="name">
                  {project.title}
                </h4>
                <p className="text-blue-200 text-sm" itemProp="description">
                  {project.description}
                </p>
              </header>

              {/* Tecnologias */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-800/50 text-blue-200 text-xs rounded border border-blue-700/30"
                      itemProp="applicationCategory"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desafios Superados */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-300 mb-2 flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  Desafios Superados
                </h5>
                <ul className="text-blue-200 text-sm space-y-1">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-blue-700/30">
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-cyan-700 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    itemProp="url"
                    aria-label={`Ver demo do projeto ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                )}
                <motion.a
                  href={project.githubUrl}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-200 rounded-lg text-sm font-medium hover:bg-slate-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  itemProp="codeRepository"
                  aria-label={`Ver código fonte do projeto ${project.title}`}
                >
                  <Github className="w-4 h-4" />
                  Código
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}