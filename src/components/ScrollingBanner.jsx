import { Zap } from 'lucide-react';

const ScrollingBanner = () => {
  const text = "Potenciamos tu vida en 60 minutos";
  
  return (
    <div className="bg-[#c6e4ee] py-1 overflow-hidden relative">
      <div className="flex animate-scroll-smooth">
        {/* Duplicamos el contenido para scroll infinito suave */}
        <div className="flex items-center whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-semibold text-lg mx-8 flex items-center gap-2">
              <Zap className="w-5 h-5" /> {text}
              <Zap className="w-5 h-5" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;