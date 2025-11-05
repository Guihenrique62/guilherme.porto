// app/components/Contato.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, MessageCircle, MapPin } from 'lucide-react';

export default function Contato() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Schema.org para informações de contato
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Guilherme Porto",
    "jobTitle": "Desenvolvedor Full Stack & Especialista em Automações",
    "email": "guilhermeportosantos1@gmail.com",
    "telephone": "+55-62-99155-6834",
    "url": "https://guilhermeporto.dev",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://linkedin.com/in/guihenriqueporto",
      "https://github.com/Guihenrique62",
      "https://wa.me/5562991556834"
    ],
    "knowsAbout": [
      "React",
      "Next.js", 
      "Node.js",
      "Python",
      "Automações",
      "Desenvolvimento Web Full Stack"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
      y: -8,
      scale: 1.03,
      rotateY: 5,
      transition: {
        type: "spring" as const,
        stiffness: 300
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.3,
      rotate: 360,
      transition: {
        type: "spring" as const,
        stiffness: 200
      }
    }
  };

  const contactInfo = {
    email: "guilhermeportosantos1@gmail.com",
    linkedin: "https://linkedin.com/in/guihenriqueporto",
    github: "https://github.com/guihenrique62",
    whatsapp: "https://wa.me/5562991556834",
    localizacao: "Goiania, GO, Brasil"
  };

  const contactItems = [
    {
      id: 1,
      icon: Mail,
      title: "Email Profissional",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      description: "Respondo em até 24 horas",
      color: "blue",
      schema: "email"
    },
    {
      id: 2,
      icon: Linkedin,
      title: "LinkedIn",
      value: "/in/guihenriqueporto",
      href: contactInfo.linkedin,
      description: "Vamos nos conectar profissionalmente",
      color: "blue",
      schema: "sameAs"
    },
    {
      id: 3,
      icon: Github,
      title: "GitHub",
      value: "/guihenrique62",
      href: contactInfo.github,
      description: "Veja meus projetos e contribuições",
      color: "gray",
      schema: "sameAs"
    },
    {
      id: 4,
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+55 (62) 99155-6834",
      href: contactInfo.whatsapp,
      description: "Resposta rápida para conversas diretas",
      color: "green",
      schema: "telephone"
    },
    {
      id: 5,
      icon: MapPin,
      title: "Localização",
      value: contactInfo.localizacao,
      href: "#",
      description: "Disponível para trabalho remoto e presencial",
      color: "cyan",
      schema: "address"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-900/30",
        border: "border-blue-700/30",
        hoverBorder: "hover:border-blue-500/50",
        icon: "text-blue-400",
        text: "text-blue-200",
        accent: "text-blue-300"
      },
      green: {
        bg: "bg-green-900/20",
        border: "border-green-700/30", 
        hoverBorder: "hover:border-green-500/50",
        icon: "text-green-400",
        text: "text-green-200",
        accent: "text-green-300"
      },
      gray: {
        bg: "bg-slate-800/30",
        border: "border-slate-700/30",
        hoverBorder: "hover:border-slate-500/50", 
        icon: "text-gray-400",
        text: "text-slate-200",
        accent: "text-slate-300"
      },
      cyan: {
        bg: "bg-cyan-900/20",
        border: "border-cyan-700/30",
        hoverBorder: "hover:border-cyan-500/50",
        icon: "text-cyan-400",
        text: "text-cyan-200",
        accent: "text-cyan-300"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section 
      id="contato" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      role="region"
      aria-labelledby="contato-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema)
        }}
      />

      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
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
            id="contato-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            itemProp="name"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Vamos Conversar?
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
            Entre em contato através dos canais abaixo. Estou sempre disponível para 
            discutir novos projetos, ideias ou oportunidades de colaboração.
          </motion.p>
        </motion.header>

        {/* Grid de Contatos - Layout Otimizado */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {contactItems.map((item) => {
            const colors = getColorClasses(item.color);
            
            return (
              <motion.div
                key={item.id}
                className={`${colors.bg} ${colors.border} ${colors.hoverBorder} backdrop-blur-md rounded-xl p-6 transition-all duration-300 flex flex-col h-full`}
                variants={cardVariants}
                whileHover="hover"
                {...(item.schema === "email" && { itemProp: "email" })}
                {...(item.schema === "telephone" && { itemProp: "telephone" })}
                {...(item.schema === "address" && { 
                  itemProp: "address",
                  itemScope: true,
                  itemType: "https://schema.org/PostalAddress"
                })}
                {...(item.schema === "sameAs" && { itemProp: "sameAs" })}
              >
                {/* Ícone */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="flex-shrink-0"
                  >
                    <item.icon className={`w-8 h-8 ${colors.icon}`} />
                  </motion.div>
                  {item.schema === "address" && (
                    <>
                      <meta itemProp="addressLocality" content="São Paulo" />
                      <meta itemProp="addressRegion" content="SP" />
                      <meta itemProp="addressCountry" content="BR" />
                    </>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="flex-grow">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  
                  {item.href !== "#" ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? "_blank" : undefined}
                      rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className={`${colors.text} hover:text-white transition-colors text-base font-medium block mb-2 break-words`}
                      aria-label={`Contato via ${item.title}: ${item.value}`}
                      title={`Abrir ${item.title}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className={`${colors.text} text-base font-medium mb-2`}>
                      {item.value}
                    </p>
                  )}

                  <p className={`${colors.accent} text-sm mt-auto`}>
                    {item.description}
                  </p>
                </div>

                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action no Final */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div
            className="bg-blue-900/20 backdrop-blur-md border border-blue-700/30 rounded-2xl p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Entre em Contato!
            </h3>
            <p className="text-blue-200 text-lg mb-6">
              Não hesite em entrar em contato. Estou ansioso para ouvir sobre seu projeto ou colaborar em algo incrível juntos!
            </p>
          </motion.div>
        </motion.div>

        {/* Conteúdo semântico oculto para SEO */}
        <div className="sr-only" aria-hidden="false">
          <h3>Informações de Contato - Guilherme Porto</h3>
          <p>
            Entre em contato com Guilherme Porto, Desenvolvedor Full Stack e Especialista em Automações. 
            Disponível para projetos de desenvolvimento web, automações inteligentes e consultoria técnica.
          </p>
          <h4>Canais de Contato:</h4>
          <ul>
            <li>Email: guilhermeportosantos1@gmail.com - Resposta em até 24 horas</li>
            <li>LinkedIn: /in/guihenriqueporto - Conexões profissionais</li>
            <li>GitHub: /guihenrique62 - Projetos e código aberto</li>
            <li>WhatsApp: +55 (62) 99155-6834 - Conversas rápidas</li>
            <li>Localização: Goiânia, GO - Disponível para projetos remotos e presenciais</li>
          </ul>
          <p>
            Especializado em React, Next.js, Node.js, Python e automações. 
            Mais de 4 anos de experiência em desenvolvimento de software.
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
          📧
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
          💬
        </motion.div>
      </motion.div>
    </section>
  );
}