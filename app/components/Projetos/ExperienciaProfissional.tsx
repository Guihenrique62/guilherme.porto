// app/components/Projetos/ExperienciaProfissional.tsx
'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, Github } from 'lucide-react';

interface ExperienciaProfissionalProps {
  inView: boolean;
}

export default function ExperienciaProfissional({ inView }: ExperienciaProfissionalProps) {
  const experienceData = {
    title: "📈 Experiência Profissional",
    description: "Trajetória profissional e contribuições relevantes",
    icon: Award,
    items: [
      {
        id: 7,
        type: "freelance",
        title: "Desenvolvedor Full Stack Freelancer",
        period: "2022 - Presente",
        description: "Desenvolvimento de soluções customizadas para clientes de diversos segmentos",
        projects: "15+ projetos entregues",
        technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
        achievements: [
          "100% de satisfação do cliente",
          "Projetos entregues dentro do prazo",
          "Soluções escaláveis e maintaináveis"
        ]
      },
      {
        id: 8,
        type: "openSource",
        title: "Contribuições Open Source",
        period: "2021 - Presente",
        description: "Contribuições ativas para projetos open source na comunidade",
        projects: "8 repositórios",
        technologies: ["JavaScript", "TypeScript", "Python", "React", "Next.js"],
        achievements: [
          "50+ pull requests aceitos",
          "Manutenção de pacotes npm",
          "Traduções de documentação"
        ],
        githubUrl: "https://github.com/guilhermeporto"
      },
      {
        id: 9,
        type: "certification",
        title: "Certificações Relevantes",
        period: "2020 - 2023",
        description: "Certificações técnicas que validam conhecimentos e habilidades",
        items: [
          "AWS Certified Developer Associate",
          "Google Professional Cloud Developer",
          "Scrum Master Certified",
          "Python for Data Science and Machine Learning"
        ]
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
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      aria-labelledby="experience-heading"
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
          <experienceData.icon className="w-8 h-8 text-purple-400" />
        </motion.div>
        <div>
          <h3 id="experience-heading" className="text-3xl font-bold text-purple-300">
            {experienceData.title}
          </h3>
          <p className="text-blue-200 mt-2">
            {experienceData.description}
          </p>
        </div>
      </motion.header>

      <div className="grid lg:grid-cols-3 gap-8">
        {experienceData.items.map((item, index) => (
          <motion.article
            key={item.id}
            className="bg-purple-900/20 backdrop-blur-md border border-purple-700/30 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <header className="mb-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-bold text-white" itemProp="name">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1 text-purple-300 text-sm">
                  <Calendar className="w-4 h-4" />
                  {item.period}
                </div>
              </div>
              <p className="text-purple-200 text-sm mb-4" itemProp="description">
                {item.description}
              </p>
            </header>

            {/* Conteúdo específico por tipo */}
            {item.type === 'freelance' && (
              <div className="space-y-3">
                <div className="text-purple-300 text-sm">
                  <strong>Projetos:</strong> {item.projects}
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2">Tecnologias</h5>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-800/50 text-purple-200 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-green-300 mb-2">Conquistas</h5>
                  <ul className="text-green-200 text-sm space-y-1">
                    {item.achievements?.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {item.type === 'openSource' && (
              <div className="space-y-3">
                <div className="text-purple-300 text-sm">
                  <strong>Contribuições:</strong> {item.projects}
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2">Tecnologias</h5>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-800/50 text-purple-200 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-green-300 mb-2">Realizações</h5>
                  <ul className="text-green-200 text-sm space-y-1">
                    {item.achievements?.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                {item.githubUrl && (
                  <motion.a
                    href={item.githubUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-200 rounded-lg text-sm font-medium hover:bg-slate-700 transition-all mt-4"
                    whileHover={{ scale: 1.05 }}
                    itemProp="url"
                  >
                    <Github className="w-4 h-4" />
                    Ver GitHub
                  </motion.a>
                )}
              </div>
            )}

            {item.type === 'certification' && (
              <div className="space-y-3">
                <ul className="text-purple-200 text-sm space-y-2">
                  {item.items?.map((cert, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}