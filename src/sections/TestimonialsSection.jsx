const testimonials = [
  {
    name: 'María González',
    text: 'Pow cambió por completo mi relación con el entrenamiento. Los coaches corrigen cada postura y el ambiente de las 6:00 AM es inigualable en Lechería.',
    discipline: 'CrossFit',
    time: '2 Años',
  },
  {
    name: 'Carlos Ruiz',
    text: 'La integración de WodUp es fantástica. Puedo ver mi progresión de cargas semana a semana y competir sanamente con mis compañeros de box.',
    discipline: 'Bodybuilding',
    time: '1 Año',
  },
  {
    name: 'Ana López',
    text: 'El acompañamiento de fisioterapia y nutrición bajo el mismo techo hace que no pierdas tiempo. Bajé 8% de grasa corporal y superé una lesión lumbar.',
    discipline: 'Personalizado',
    time: '8 Meses',
  },
  {
    name: 'Diego Martín',
    text: 'El box de la Sede Smash cuenta con máquinas pesadas de primer nivel. No hay otro centro deportivo en Anzoátegui con este estándar.',
    discipline: 'Atleta Hyrox',
    time: '3 Años',
  },
];

const StarRating = () => (
  <div className="flex items-center gap-0.5 text-[#e9ea00] mb-4">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="material-symbols-outlined text-[18px]">star</span>
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="w-full py-12 md:py-18 px-5 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-[0.2em] text-[#e9ea00] block mb-1 font-semibold">
            Comunidad y Resultados
          </span>
          <h2 className="font-['Oswald'] text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] uppercase text-[#a5cdd7] tracking-tight font-semibold">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="flex items-center gap-1 text-[#e9ea00]">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="material-symbols-outlined text-[24px]">star</span>
          ))}
          <span className="font-['DM_Sans'] text-[12px] leading-[16px] text-white ml-2 font-bold">4.9 / 5.0 en Google Reviews</span>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-2xl bg-[#201f1f]/60 backdrop-blur-xl p-8 flex flex-col justify-between shadow-lg">
            <div>
              <StarRating />
              <p className="font-['DM_Sans'] text-[14px] leading-5 text-[#cac8aa] italic mb-6">
                "{t.text}"
              </p>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <div>
                <h3 className="font-['DM_Sans'] text-[18px] leading-[24px] text-white font-bold">{t.name}</h3>
                <span className="font-['DM_Sans'] text-[10px] leading-[14px] text-[#a5cdd7] uppercase font-semibold">{t.discipline} • {t.time}</span>
              </div>
              <span className="material-symbols-outlined text-[#e9ea00] text-[20px]">verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
