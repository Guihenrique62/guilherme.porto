// app/components/BackgroundAnimation.tsx
'use client';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Bolhas azuis flutuantes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full glow-animation float-animation"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-blue-600 rounded-full glow-animation float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-cyan-500 rounded-full glow-animation float-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-5 h-5 bg-sky-500 rounded-full glow-animation float-animation" style={{animationDelay: '1s'}}></div>
        
        {/* Código flutuante */}
        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-blue-900/30 backdrop-blur-md border border-blue-700/30 p-4 rounded-lg shadow-2xl">
            <pre className="text-xs text-blue-200">
              <code>
{`function desenvolvedor() {
  return {
    stack: "Full Stack",
    foco: "Automações",
    tecnologias: ["React", "Node.js", "Python"]
  };
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      
      {/* Overlay para melhor contraste */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}