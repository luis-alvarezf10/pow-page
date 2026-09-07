import { useState, useEffect } from 'react';
import powWhite from '../assets/images/pow-white.png';

const sections = [
  { id: 'hero', name: 'Inicio' },
  { id: 'servicios', name: 'Servicios' },
  { id: 'app-wodup', name: 'Rutina' },
  { id: 'equipo', name: 'Equipo' },
  { id: 'planes', name: 'Planes' },
  { id: 'sedes', name: 'Sedes' },
  { id: 'testimonios', name: 'Testimonios' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 pt-2 px-5 lg:px-10 pointer-events-none transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto flex items-center justify-between pointer-events-auto bg-[#1c1b1b]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.7)] rounded-full px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={powWhite} alt="Pow Fitness Logo" className="h-8 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] px-3 py-2 rounded-full transition-colors cursor-pointer ${
                activeSection === s.id
                  ? 'text-[#e5e2e1] bg-[#2a2a2a]'
                  : 'text-[#cac8aa] hover:text-[#e5e2e1]'
              }`}
            >
              {s.name}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/584127563518?text=Hola%20Pow%20Fitness!%20Quiero%20agendar%20mi%20clase%20gratis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e9ea00] text-[#323200] font-['DM_Sans'] text-[14px] font-bold px-5 py-2 rounded-lg uppercase tracking-wider transition-transform hover:scale-105 active:scale-95"
          >
            Clase gratis
          </a>
          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#323200] text-[18px]">
              {isMobileMenuOpen ? 'close' : 'person'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden mt-2 max-w-7xl mx-auto bg-[#1c1b1b]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-4 space-y-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-['DM_Sans'] text-[14px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSection === s.id
                    ? 'text-[#323200] bg-[#e9ea00]'
                    : 'text-[#cac8aa] hover:text-white hover:bg-white/5'
                }`}
              >
                {s.name}
              </button>
            ))}
            <a
              href="https://wa.me/584127563518?text=Hola%20Pow%20Fitness!%20Quiero%20agendar%20mi%20clase%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-3 bg-[#e9ea00] text-[#323200] font-bold py-3 rounded-xl uppercase tracking-wider"
            >
              Clase gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
