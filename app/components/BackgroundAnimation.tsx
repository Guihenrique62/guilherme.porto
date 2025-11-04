// app/components/BackgroundAnimation.tsx
'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        
        {/* Partículas flutuantes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-sky-300 rounded-full"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Linhas conectadas animadas */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <motion.path
            d="M100,100 Q250,50 400,100 T700,100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M50,300 Q200,250 350,300 T650,300"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Código flutuante interativo - POSICIONADO MAIS ACIMA E ESCONDIDO NO MOBILE */}
        <motion.div
          className="absolute top-20 left-10 hidden lg:block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="bg-blue-900/40 backdrop-blur-md border border-blue-500/30 p-4 rounded-lg shadow-2xl">
            <pre className="text-xs text-blue-200 font-mono">
              <code>
{`function criarMagia() {
  return {
    código: "limpo & eficiente",
    inovação: "sem limites",
    resultado: "✨ impressionante"
  };
}`}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Segundo bloco de código no lado direito */}
        <motion.div
          className="absolute top-40 right-10 hidden xl:block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-cyan-900/30 backdrop-blur-md border border-cyan-500/30 p-4 rounded-lg shadow-2xl">
            <pre className="text-xs text-cyan-200 font-mono">
              <code>
{`const automacoes = {
  eficiencia: "90%+",
  tempoSalvo: "horas/dia",
  complexidade: "simplificada"
};`}
              </code>
            </pre>
          </div>
        </motion.div>

      </div>
      
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
}