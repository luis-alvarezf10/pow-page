import { useState, useEffect } from 'react';
import { BicepsFlexed } from 'lucide-react';

const services = [
  {
    title: 'CrossFit',
    description: 'Entrenamientos funcionales de alta intensidad que combinan cardio, levantamiento de potencia, gimnasia y flexibilidad extrema.',
    icon: 'fitness_center',
    availability: 'Sede Principal',
    track: '01 // TRACK',
  },
  {
    title: 'Bodybuilding',
    description: 'Programas especializados en hipertrofia, construcción muscular focalizada, simetría y definición corporal milimétrica.',
    icon: 'muscle',
    availability: 'Ambas Sedes',
    track: '02 // HYPER',
  },
  {
    title: 'Entrenamiento Personalizado',
    description: 'Sesiones privadas uno a uno con entrenadores certificados adaptadas a tu biodinámica, biomecánica y objetivos específicos.',
    icon: 'vital_signs',
    availability: 'Ambas Sedes',
    track: '03 // PRO COACH',
  },
  {
    title: 'Running',
    description: 'Plan de entrenamiento de running con la mejor planificación por zonas cardiacas, cadencia de carrera y fondo de resistencia.',
    icon: 'directions_run',
    availability: 'Disponible',
    track: '04 // ENDURANCE',
  },
  {
    title: 'Swimming',
    description: 'Sesiones de nado técnico e intervalos acuáticos con profesores con años de experiencia en carril olímpico y aguas abiertas.',
    icon: 'pool',
    availability: 'Centro Gallego',
    track: '05 // AQUA',
  },
  {
    title: 'Fisioterapia',
    description: 'Rehabilitación, descarga muscular, punción seca y reacondicionamiento biomecánico al mayor nivel para mantenerte en la pista.',
    icon: 'healing',
    availability: 'Ambas Sedes',
    track: '06 // RECOVERY',
  },
  {
    title: 'Nutrición Deportiva y Clínica',
    description: 'Plan de alimentación personalizado según tus objetivos metabólicos, composición corporal y gasto calórico diario.',
    icon: 'restaurant',
    availability: 'Ambas Sedes',
    track: '07 // FUEL',
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive: 1 card on mobile, 3 on desktop. Listens to resize (fixes the
  // old bug that read window.innerWidth directly during render).
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalPages = Math.ceil(services.length / itemsPerView);
  const currentPage = Math.floor(currentIndex / itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + itemsPerView;
      return nextIndex >= services.length ? 0 : nextIndex;
    });
  };

  const prev = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev - itemsPerView;
      // Wrap around to the last page
      return nextIndex < 0 ? (totalPages - 1) * itemsPerView : nextIndex;
    });
  };

  const goToPage = (page) => {
    setCurrentIndex(page * itemsPerView);
  };

  return (
    <section id="servicios" className="w-full py-12 md:py-18 px-5 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-[0.2em] text-[#e9ea00] block mb-1 font-semibold">
            Rendimiento Integral
          </span>
          <h2 className="font-['Oswald'] text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] uppercase text-[#a5cdd7] tracking-tight font-semibold">
            Nuestros Servicios
          </h2>
        </div>
        <p className="font-['DM_Sans'] text-[14px] leading-5 text-[#cac8aa] max-w-md">
          Disciplinas estructuradas bajo métodos científicos de carga, periodización y recuperación activa para atletas de todos los niveles.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex / itemsPerView) * 100}%)` }}
          >
            {/* Duplicamos el array para el scroll infinito */}
            {[...services, ...services].map((service, i) => (
              <div key={i} className="w-full md:w-1/3 flex-shrink-0 px-3 flex">
                <div className="w-full bg-[#201f1f]/60 backdrop-blur-xl rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#2a2a2a]/80 hover:-translate-y-1 shadow-lg group">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#244c55]/50 text-[#a5cdd7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {service.icon === 'muscle' ? (
                        <BicepsFlexed className="w-6 h-6" />
                      ) : (
                        <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                      )}
                    </div>
                    <h3 className="font-['DM_Sans'] text-[22px] leading-[28px] font-bold text-white uppercase mb-1">
                      {service.title}
                    </h3>
                    <p className="font-['DM_Sans'] text-[14px] leading-5 text-[#cac8aa] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-wider text-[#323200] bg-[#e9ea00] px-3 py-1 rounded-full font-bold">
                      {service.availability}
                    </span>
                    <span className="font-['DM_Sans'] text-[10px] leading-[14px] text-[#a5cdd7]">{service.track}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls: flechas + dots */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Ver servicios anteriores"
            className="bg-[#2a2a2a]/80 border border-white/10 text-white p-3 rounded-full hover:bg-[#353534] hover:text-[#e9ea00] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">chevron_left</span>
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                aria-label={`Ir a la página ${page + 1}`}
                className={`w-8 md:w-12 h-2 rounded-full transition-colors cursor-pointer ${
                  currentPage === page ? 'bg-[#e9ea00] shadow-[0_0_10px_rgba(233,234,0,0.4)]' : 'bg-[#353534] hover:bg-[#484831]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Ver más servicios"
            className="bg-[#2a2a2a]/80 border border-white/10 text-white p-3 rounded-full hover:bg-[#353534] hover:text-[#e9ea00] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}