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
    icon: 'sports_gymnastics',
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
    fullWidth: true,
  },
];

export default function ServicesSection() {
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className={`group relative rounded-2xl bg-[#201f1f]/60 backdrop-blur-xl p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#2a2a2a]/80 hover:-translate-y-1 shadow-lg ${
              service.fullWidth ? 'lg:col-span-3 flex-col md:flex-row md:items-center' : ''
            }`}
          >
            <div className={service.fullWidth ? 'flex flex-col md:flex-row md:items-center gap-6' : ''}>
              <div className="w-12 h-12 rounded-full bg-[#244c55]/50 text-[#a5cdd7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
                <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
              </div>
              <div>
                <h3 className="font-['DM_Sans'] text-[22px] leading-[28px] font-bold text-white uppercase mb-1">
                  {service.title}
                </h3>
                <p className="font-['DM_Sans'] text-[14px] leading-5 text-[#cac8aa] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
            </div>
            <div className={`pt-4 flex items-center justify-between ${service.fullWidth ? 'shrink-0' : ''}`}>
              <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-wider text-[#323200] bg-[#e9ea00] px-3 py-1 rounded-full font-bold">
                {service.availability}
              </span>
              <span className="font-['DM_Sans'] text-[10px] leading-[14px] text-[#a5cdd7]">{service.track}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
