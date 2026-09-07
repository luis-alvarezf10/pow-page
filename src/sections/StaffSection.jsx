const staff = [
  {
    name: 'Jorman Sánchez',
    role: 'Head Coach',
    specialty: 'Running, Natación, Entrenamiento funcional & CrossFit — 5 años de trayectoria.',
    category: 'Coach',
    categoryColor: 'bg-[#e9ea00] text-[#323200]',
  },
  {
    name: 'Ricardo Lugo',
    role: 'Fisioterapeuta y Coach Personal',
    specialty: 'Fuerza & acondicionamiento biomecánico preventivo — 8 años de experiencia.',
    category: 'Fisioterapeuta',
    categoryColor: 'bg-[#244c55] text-[#c0e9f4]',
  },
  {
    name: 'Elimar Barrios',
    role: 'Coach Funcional',
    specialty: 'Natación de competición, CrossFit & HIIT metabólico — 6 años dirigiendo atletas.',
    category: 'Coach',
    categoryColor: 'bg-[#e9ea00] text-[#323200]',
  },
  {
    name: 'Mariangela Álvarez',
    role: 'Nutricionista',
    specialty: 'Nutrición clínica, cineantropometría ISAK y rendimiento deportivo — 10 años.',
    category: 'Nutricionista',
    categoryColor: 'bg-[#69db7c] text-[#003919]',
  },
];

export default function StaffSection() {
  return (
    <section id="equipo" className="w-full py-12 md:py-18 px-5 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-[0.2em] text-[#e9ea00] block mb-1 font-semibold">
            Liderazgo y Técnica
          </span>
          <h2 className="font-['Oswald'] text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] uppercase text-[#a5cdd7] tracking-tight font-semibold">
            Nuestro Equipo
          </h2>
        </div>
        <p className="font-['DM_Sans'] text-[14px] leading-5 text-[#cac8aa] max-w-md">
          Entrenadores y especialistas certificados con amplia experiencia competitiva y científica dedicados a tu evolución física.
        </p>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {staff.map((member, i) => (
          <div
            key={i}
            className="group relative h-[450px] rounded-2xl bg-[#201f1f]/70 backdrop-blur-xl overflow-hidden flex flex-col justify-end p-6 shadow-xl"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent" />

            {/* Content */}
            <div className="relative z-20">
              <div className="mb-2">
                <span className={`font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-wider px-2 py-1 rounded font-bold ${member.categoryColor}`}>
                  {member.category}
                </span>
              </div>
              <h3 className="font-['DM_Sans'] text-[22px] leading-[28px] text-white uppercase font-bold">{member.name}</h3>
              <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#a5cdd7] font-bold uppercase tracking-wider">{member.role}</p>
              <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa] mt-2">{member.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
