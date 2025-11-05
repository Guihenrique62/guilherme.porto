// app/page.tsx
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BackgroundAnimation from './components/BackgroundAnimation';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';


export default function Home() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Guilherme Porto",
            "jobTitle": "Desenvolvedor Full Stack & Especialista em Automações",
            "description": "Desenvolvedor Full Stack especializado em React, Next.js, Node.js e automações inteligentes. Transformo ideias em soluções digitais escaláveis.",
            "url": "https://guilhermeporto.dev",
            "sameAs": [
              "https://github.com/guilhermeporto",
              "https://linkedin.com/in/guilhermeporto",
              "https://twitter.com/guilhermeporto"
            ],
            "knowsAbout": [
              "React",
              "Next.js",
              "Node.js",
              "TypeScript",
              "Python",
              "Automações",
              "Desenvolvimento Web",
              "Sistemas Automatizados"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Desenvolvedor Full Stack",
              "description": "Desenvolvimento de aplicações web modernas e sistemas de automação"
            }
          })
        }}
      />
      
      <main className="relative min-h-screen text-white">
        <BackgroundAnimation />
        <Navigation />
        
        {/* Conteúdo principal com estrutura semântica */}
        <article itemScope itemType="https://schema.org/Person">
          <Hero />
          <Sobre />
          <Habilidades />
          <Projetos />
          
          
          {/* Espaço para próximas seções */}
          <section className="min-h-screen"></section>
        </article>
      </main>
    </>
  );
}