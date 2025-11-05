// app/components/Contato.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Linkedin, Github, MessageCircle, MapPin, Send, Phone, User } from 'lucide-react';

export default function Contato() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Schema.org para informações de contato
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Guilherme Porto",
    "jobTitle": "Desenvolvedor Full Stack & Especialista em Automações",
    "email": "contato@guilhermeporto.dev",
    "telephone": "+55-11-99999-9999",
    "url": "https://guilhermeporto.dev",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://linkedin.com/in/guilhermeporto",
      "https://github.com/guilhermeporto",
      "https://wa.me/5511999999999"
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
      y: -5,
      scale: 1.02,
      rotateY: 5,
      transition: {
        type: "spring" as const,
        stiffness: 300
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

  const contactInfo = {
    email: "contato@guilhermeporto.dev",
    linkedin: "https://linkedin.com/in/guilhermeporto",
    github: "https://github.com/guilhermeporto",
    whatsapp: "https://wa.me/5511999999999",
    localizacao: "São Paulo, SP"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      setFormData({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      });
    }, 2000);
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
              Vamos Trabalhar Juntos?
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
            Pronto para transformar suas ideias em realidade? 
            Entre em contato e vamos criar algo incrível juntos!
          </motion.p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl font-bold text-blue-300 mb-6"
              variants={itemVariants}
            >
              Entre em Contato
            </motion.h3>

            {/* Email */}
            <motion.div
              className="flex items-center gap-4 p-6 bg-blue-900/30 backdrop-blur-md border border-blue-700/30 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
              itemProp="email"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="flex-shrink-0"
              >
                <Mail className="w-6 h-6 text-blue-400" />
              </motion.div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email Profissional</h4>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-200 hover:text-cyan-300 transition-colors"
                  aria-label="Enviar email para Guilherme Porto"
                  title="Enviar email para contato@guilhermeporto.dev"
                >
                  {contactInfo.email}
                </a>
                <p className="text-blue-300 text-sm mt-1">
                  Respondo em até 24 horas
                </p>
              </div>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              className="flex items-center gap-4 p-6 bg-blue-900/30 backdrop-blur-md border border-blue-700/30 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="flex-shrink-0"
              >
                <Linkedin className="w-6 h-6 text-blue-500" />
              </motion.div>
              <div>
                <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                <a 
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-cyan-300 transition-colors"
                  aria-label="Visitar perfil do LinkedIn de Guilherme Porto"
                  title="Conectar no LinkedIn"
                  itemProp="sameAs"
                >
                  /in/guilhermeporto
                </a>
                <p className="text-blue-300 text-sm mt-1">
                  Vamos nos conectar profissionalmente
                </p>
              </div>
            </motion.div>

            {/* GitHub */}
            <motion.div
              className="flex items-center gap-4 p-6 bg-blue-900/30 backdrop-blur-md border border-blue-700/30 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="flex-shrink-0"
              >
                <Github className="w-6 h-6 text-gray-400" />
              </motion.div>
              <div>
                <h4 className="text-white font-semibold mb-1">GitHub</h4>
                <a 
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-cyan-300 transition-colors"
                  aria-label="Visitar perfil do GitHub de Guilherme Porto"
                  title="Ver projetos no GitHub"
                  itemProp="sameAs"
                >
                  /guilhermeporto
                </a>
                <p className="text-blue-300 text-sm mt-1">
                  Veja meus projetos e contribuições
                </p>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              className="flex items-center gap-4 p-6 bg-green-900/20 backdrop-blur-md border border-green-700/30 rounded-xl hover:border-green-500/50 transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
              itemProp="telephone"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="flex-shrink-0"
              >
                <MessageCircle className="w-6 h-6 text-green-400" />
              </motion.div>
              <div>
                <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                <a 
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-200 hover:text-green-300 transition-colors"
                  aria-label="Enviar mensagem no WhatsApp para Guilherme Porto"
                  title="Conversar no WhatsApp"
                >
                  +55 (11) 99999-9999
                </a>
                <p className="text-green-300 text-sm mt-1">
                  Resposta rápida para conversas diretas
                </p>
              </div>
            </motion.div>

            {/* Localização */}
            <motion.div
              className="flex items-center gap-4 p-6 bg-cyan-900/20 backdrop-blur-md border border-cyan-700/30 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="flex-shrink-0"
              >
                <MapPin className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <div>
                <h4 className="text-white font-semibold mb-1">Localização</h4>
                <p className="text-cyan-200" itemProp="addressLocality">
                  {contactInfo.localizacao}
                </p>
                <p className="text-cyan-300 text-sm mt-1">
                  Disponível para projetos remotos e presenciais
                </p>
                <meta itemProp="addressRegion" content="SP" />
                <meta itemProp="addressCountry" content="BR" />
              </div>
            </motion.div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            variants={containerVariants}
          >
            <motion.div
              className="bg-slate-800/30 backdrop-blur-md border border-slate-700/30 rounded-xl p-8 shadow-xl"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Envie uma Mensagem
              </h3>
              <p className="text-blue-200 mb-6">
                Preencha o formulário abaixo e retornarei o mais breve possível
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-blue-200 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Como posso te chamar?"
                    aria-required="true"
                    aria-label="Seu nome completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Seu Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="seu@email.com"
                    aria-required="true"
                    aria-label="Seu endereço de email"
                  />
                </div>

                {/* Assunto */}
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-blue-200 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Qual o assunto da sua mensagem?"
                    aria-required="true"
                    aria-label="Assunto da mensagem"
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-blue-200 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    placeholder="Conte-me sobre seu projeto, ideia ou dúvida..."
                    aria-required="true"
                    aria-label="Sua mensagem"
                  />
                </div>

                {/* Botão de Envio */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>

                <p className="text-slate-400 text-sm text-center">
                  * Campos obrigatórios. Seus dados estão seguros conosco.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Conteúdo semântico oculto para SEO */}
        <div className="sr-only" aria-hidden="false">
          <h3>Informações de Contato - Guilherme Porto</h3>
          <p>
            Entre em contato com Guilherme Porto, Desenvolvedor Full Stack e Especialista em Automações. 
            Disponível para projetos de desenvolvimento web, automações inteligentes e consultoria técnica.
          </p>
          <h4>Canais de Contato:</h4>
          <ul>
            <li>Email: contato@guilhermeporto.dev - Resposta em até 24 horas</li>
            <li>LinkedIn: /in/guilhermeporto - Conexões profissionais</li>
            <li>GitHub: /guilhermeporto - Projetos e código aberto</li>
            <li>WhatsApp: +55 (11) 99999-9999 - Conversas rápidas</li>
            <li>Localização: São Paulo, SP - Disponível para projetos remotos e presenciais</li>
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