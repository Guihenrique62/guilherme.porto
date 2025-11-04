// app/components/Navigation.tsx
'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-blue-900/30 border-b border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              &lt;Guilherme /&gt;
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#sobre" className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sobre
              </a>
              <a href="#projetos" className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projetos
              </a>
              <a href="#contato" className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-200 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900/90 backdrop-blur-md rounded-lg mt-2">
              <a href="#home" className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#sobre" className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Sobre
              </a>
              <a href="#projetos" className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Projetos
              </a>
              <a href="#contato" className="text-blue-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}