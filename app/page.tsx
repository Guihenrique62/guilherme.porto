// app/page.tsx
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BackgroundAnimation from './components/BackgroundAnimation';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <BackgroundAnimation />
      <Navigation />
      <Hero />
      
      {/* Espaço para próximas seções */}
      <section className="min-h-screen"></section>
    </main>
  );
}