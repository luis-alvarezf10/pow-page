import { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'hero', name: 'Inicio' },
    { id: 'services', name: 'Servicios' },
    { id: 'staff', name: 'Equipo' },
    { id: 'pricing', name: 'Precios' },
    { id: 'location', name: 'Ubicación' },
    { id: 'testimonials', name: 'Testimonios' },
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
    <header className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 backdrop-blur-sm border-b border-white/10 transition-all duration-500 w-[90%] rounded-full ${
      isVisible ? 'bg-black/30 translate-y-3' : 'bg-gray-900/0 -translate-y-full'
    }`}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <img src="/assets/images/pow-white.png" alt="logo de pow en amarillo"  className="w-20 transition-transform duration-300 hover:scale-110 cursor-pointer "/>
          
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-md font-medium transition-colors cursor-pointer ${
                  activeSection === section.id 
                    ? 'text-[#c6e4ee]' 
                    : 'text-[#819ca3] hover:text-white'
                }`}
              >
                {section.name}
              </button>
            ))}
            <button className="bg-white py-2 px-5 font-semibold rounded-full text-[#354345] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">Contacto</button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className=" p-3 text-white cursor-pointer "
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-md border-t border-white/20 shadow-2xl">
          <div className="px-6 py-6 space-y-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  activeSection === section.id 
                    ? 'text-black bg-yellow-400 shadow-lg shadow-yellow-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'slideInFromRight 0.3s ease-out forwards'
                }}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Barra de progreso */}
      {/* <div className="h-1 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-[#819ca3] to-[#c6e4ee] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div> */}
    </header>
  );
}