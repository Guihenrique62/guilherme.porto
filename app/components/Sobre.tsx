// app/components/Sobre.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Target, Heart, Star, Book, GamepadIcon as GameController, Volleyball } from 'lucide-react';
import Image from 'next/image';

export default function Sobre() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotateY: -15
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.05,
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

  return (
    <section id="sobre" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Header da Seção */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da Foto e Personalidade */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            {/* Foto Profissional */}
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div
                className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl shadow-blue-500/30 flex items-center justify-center"
                variants={cardVariants}
              >
                
                <div className="w-60 h-60 bg-slate-800 rounded-xl flex items-center justify-center border-4 border-white/20 overflow-hidden">
                    <Image
                        src="/foto-profissional.jpg"
                        alt="Foto Profissional"
                        width={240} 
                        height={240} 
                        className="w-full h-full object-cover" 
                    />
                </div>
                
                {/* Elementos decorativos flutuantes */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Star className="w-4 h-4 text-yellow-800" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, 8, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Personalidade */}
            <motion.div
              className="bg-blue-900/30 backdrop-blur-md border border-blue-700/30 rounded-2xl p-6 shadow-xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(6, 182, 212, 0.5)'
              }}
            >
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Fora do Código
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Volleyball, label: 'Futebol', color: 'text-green-400' },
                  { icon: GameController, label: 'Videogames', color: 'text-purple-400' },
                  { icon: Book, label: 'Teologia', color: 'text-yellow-400' },
                  { icon: Book, label: 'Filosofia', color: 'text-orange-400' }
                ].map((hobby, index) => (
                  <motion.div
                    key={hobby.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-blue-800/20 hover:bg-blue-700/30 transition-colors"
                    whileHover={{ 
                      scale: 1.05,
                      x: 5
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <hobby.icon className={`w-5 h-5 ${hobby.color}`} />
                    </motion.div>
                    <span className="text-blue-200 text-sm">{hobby.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna do Texto */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            {/* Breve História */}
            <motion.div
              className="bg-gradient-to-br from-blue-900/40 to-cyan-900/20 backdrop-blur-md border border-blue-700/30 rounded-2xl p-6 shadow-xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.1)"
              }}
            >
              <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Minha Jornada
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Desde pequeno, sempre fui movido pela curiosidade de entender como as coisas funcionam. 
                Adorava <span className="text-cyan-300 font-semibold">desmontar brinquedos e eletrônicos</span> 
                {' '}só para descobrir a mágica por trás deles e montar tudo de volta - muitas vezes funcionando até melhor!
              </p>
              <p className="text-blue-100 leading-relaxed mt-4">
                Encontrei na programação a <span className="text-blue-300 font-semibold">solução perfeita</span> 
                {' '}para essa paixão por resolver problemas complexos. Cada linha de código é uma oportunidade 
                de criar algo incrível a partir do zero.
              </p>
            </motion.div>

            {/* Paixão por Tecnologia */}
            <motion.div
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/40 backdrop-blur-md border border-cyan-700/30 rounded-2xl p-6 shadow-xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
              }}
            >
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                O Que Me Motiva
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Sou movido pela <span className="text-cyan-300 font-semibold">transformação digital</span> - 
                a capacidade de pegar um problema real e criar uma solução elegante que simplifica vidas.
              </p>
              <p className="text-blue-100 leading-relaxed mt-4">
                A cada projeto, busco não apenas escrever código, mas <span className="text-blue-300 font-semibold">
                construir experiências memoráveis</span> que façam a diferença para as pessoas.
              </p>
            </motion.div>

            {/* Diferenciais */}
            <motion.div
              className="bg-gradient-to-br from-slate-800/40 to-blue-900/30 backdrop-blur-md border border-slate-700/30 rounded-2xl p-6 shadow-xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(59, 130, 246, 0.5)'
              }}
            >
              <h3 className="text-xl font-bold text-slate-300 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Meus Diferenciais
              </h3>
              <div className="space-y-3">
                {[
                  "Mentalidade técnica com foco em padrões de desenvolvimento clean code",
                  "Experiência em produto - entendo regras de negócio e necessidades do usuário",
                  "Visão estratégica para transformar problemas complexos em soluções simples",
                  "Paixão por automações que otimizam processos e aumentam eficiência"
                ].map((diferencial, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    <span className="text-blue-100 text-sm leading-relaxed">{diferencial}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Elementos flutuantes decorativos */}
        <motion.div
          className="absolute bottom-10 right-10 text-6xl opacity-10"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          💻
        </motion.div>
        
        <motion.div
          className="absolute top-20 left-5 text-4xl opacity-10"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚡
        </motion.div>
      </motion.div>
    </section>
  );
}