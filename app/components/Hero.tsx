// app/components/Hero.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Desenvolvedor Full Stack & Especialista em Automações';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center z-10">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30">
            <span className="text-2xl font-bold text-white">{'</>'}</span>
          </div>
        </div>

        {/* Main Text */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block">Olá, eu sou</span>
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
            Guilherme Porto
          </span>
        </h1>

        {/* Typing Text */}
        <div className="h-20 mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-200 font-mono">
            {displayedText}
            <span className="ml-1 animate-pulse">|</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transformo ideias em realidade digital através de código limpo, 
          arquiteturas escaláveis e sistemas automatizados que simplificam processos complexos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projetos"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="border border-blue-600 hover:border-cyan-400 text-blue-200 hover:text-cyan-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm hover:bg-blue-900/30"
          >
            Vamos Conversar
          </a>
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <p className="text-blue-300 mb-4">Tecnologias que trabalho:</p>
          <div className="flex flex-wrap justify-center gap-6 text-blue-200">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              React/Next.js
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              Node.js
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
              Python
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Automações
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}