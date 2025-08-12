import { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'hero', name: 'Inicio' },
    { id: 'services', name: 'Servicios' },
    { id: 'pricing', name: 'Precios' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setScrollProgress(progress);

      // Mostrar/ocultar navbar
      setIsVisible(scrolled > 0);

      // Detectar sección activa
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10 transition-all duration-500 ${
      isVisible ? 'bg-gray-900/80 translate-y-0' : 'bg-gray-900/0 -translate-y-full'
    }`}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-permanent-marker text-yellow-400">Pow</span>
            <span className="text-xl font-semibold text-white">Fitness</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section.id 
                    ? 'text-yellow-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Barra de progreso */}
      <div className="h-1 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}