const WHATSAPP_BASE = 'https://wa.me/584127563518?text=';

const plans = [
  {
    name: 'Pase de 1 Día',
    subtitle: 'Entrenamiento único',
    price: '€10',
    period: '/ clase',
    features: ['Acceso una sola vez a una de nuestras sedes', 'Entrenamiento de 60 minutos'],
    waText: 'Quiero%20inscribirme%20en%20el%20Pase%20de%201%20D%C3%ADa',
    popular: false,
  },
  {
    name: 'Plan Full',
    subtitle: 'Mensual',
    price: '€80',
    period: '/ mes',
    priceNote: 'o $60 en divisas',
    features: ['6 días a la semana', 'Asistencia de entrenador', 'Acceso a una sede de Pow', 'Entrenamiento de 60 minutos'],
    waText: 'Quiero%20inscribirme%20en%20el%20Plan%20Full',
    popular: true,
  },
  {
    name: 'Plan 3 Días',
    subtitle: 'Mensual',
    price: '€60',
    period: '/ mes',
    priceNote: 'o $45 en divisas',
    features: ['3 días a la semana', 'Asistencia de entrenador', 'Acceso a una sede de Pow', 'Entrenamiento de 60 minutos'],
    waText: 'Quiero%20inscribirme%20en%20el%20Plan%203%20D%C3%ADas',
    popular: false,
  },
  {
    name: 'Plan Trimestral',
    subtitle: 'Solo divisas',
    price: '$150',
    period: '/ trimestre',
    features: ['6 días a la semana', 'Asistencia de entrenador', 'Acceso a una sede de Pow', 'Entrenamiento de 60 minutos'],
    waText: 'Quiero%20inscribirme%20en%20el%20Plan%20Trimestral',
    popular: false,
  },
  {
    name: 'Plan Amor',
    subtitle: 'Solo divisas',
    price: '$100',
    period: '',
    features: ['6 días a la semana', 'Asistencia de entrenador', 'Cada uno elige su acceso a una sede de Pow', 'Entrenamiento de 60 minutos'],
    waText: 'Quiero%20inscribirme%20en%20el%20Plan%20Amor',
    popular: false,
  },
  {
    name: 'Plan Familiar',
    subtitle: 'Solo divisas',
    price: '$45',
    period: '/ persona',
    features: ['6 días a la semana', 'Asistencia de entrenador', 'Cada uno elige su acceso a una sede de Pow', 'Válido para 3 o más familiares de vínculo directo', 'Entrenamiento de 60 minutos'],
    waText: 'Quiero%20informaci%C3%B3n%20del%20Plan%20Familiar',
    popular: false,
  },
  {
    name: 'Plan Confort',
    subtitle: 'Solo divisas',
    price: '$80',
    period: '/ mes',
    features: ['6 días a la semana', 'Asistencia de entrenador', 'Acceso a una sede de Pow', 'Sin límite de horario', 'Uso ilimitado de nuestras instalaciones'],
    waText: 'Quiero%20inscribirme%20en%20el%20Plan%20Confort',
    popular: false,
    tier: 'elite',
  },
  {
    name: 'Plan Premium',
    subtitle: 'VIP · Ambas sedes',
    price: '$120',
    period: '/ mes',
    priceNote: 'o $100 en divisas',
    features: ['6 días a la semana', 'Asistencia de entrenador', 'Acceso a ambas sedes de Pow', 'Sin límite de horario', 'Uso ilimitado de nuestras instalaciones'],
    waText: 'Quiero%20inscribirme%20en%20el%20Plan%20Premium',
    popular: false,
    tier: 'elite',
  },
];

export default function PricingSection() {
  const standardPlans = plans.filter((p) => p.tier !== 'elite');
  const elitePlans = plans.filter((p) => p.tier === 'elite');

  return (
    <section id="planes" className="w-full py-12 md:py-18 px-5 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-[0.2em] text-[#e9ea00] block mb-1 font-semibold">
          Membresías Flexibles
        </span>
        <h2 className="font-['Oswald'] text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] uppercase text-white tracking-tight font-semibold">
          Elige tu plan
        </h2>
        <p className="font-['DM_Sans'] text-[14px] leading-5 text-[#cac8aa] mt-2 uppercase tracking-[0.08em] font-semibold">
          Potenciamos tu día en 60 minutos.
        </p>
      </div>

      {/* Standard Plans Grid (3 cols × 2 rows) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {standardPlans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-2xl p-8 flex flex-col justify-between shadow-lg ${
              plan.popular
                ? 'bg-[#2a2a2a]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(233,234,0,0.15)] relative scale-105 z-10'
                : 'bg-[#201f1f]/70 backdrop-blur-xl'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e9ea00] text-[#323200] font-['DM_Sans'] text-[10px] leading-[14px] uppercase font-bold tracking-widest px-4 py-1 rounded-full shadow-md">
                MÁS POPULAR
              </div>
            )}
            <div>
              <span className={`font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-widest block ${plan.popular ? 'text-[#e9ea00] pt-2' : 'text-[#cac8aa]'}`}>
                {plan.subtitle}
              </span>
              <h3 className="font-['Oswald'] text-[20px] leading-[26px] uppercase text-white mt-1 font-medium">{plan.name}</h3>
              <div className="my-6">
                <span className="font-['Oswald'] text-[40px] leading-[44px] md:text-[64px] md:leading-[68px] text-white font-bold">{plan.price}</span>
                <span className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa]">{plan.period}</span>
                {plan.priceNote && (
                  <span className="block font-['DM_Sans'] text-[12px] leading-4 text-[#a5cdd7] mt-1 font-semibold uppercase tracking-wider">{plan.priceNote}</span>
                )}
              </div>
              <ul className="flex flex-col gap-3 text-[14px] leading-5 font-['DM_Sans'] text-[#e5e2e1] mb-8">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2">
                    <span className={`material-symbols-outlined text-[18px] ${plan.popular ? 'text-[#e9ea00]' : 'text-[#a5cdd7]'}`}>check</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={`${WHATSAPP_BASE}${plan.waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center py-3 rounded-xl font-['DM_Sans'] text-[12px] leading-[16px] font-bold uppercase tracking-wider transition-all ${
                plan.popular
                  ? 'bg-[#e9ea00] text-[#323200] hover:scale-105'
                  : 'bg-[#353534] text-white hover:bg-[#393939]'
              }`}
            >
              Seleccionar
            </a>
          </div>
        ))}
      </div>

      {/* Elite Plans Grid (expanded, below) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {elitePlans.map((plan, i) => (
          <div
            key={i}
            className="relative rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 transition-transform duration-300 hover:-translate-y-1"
            style={{
              border: '1px solid transparent',
              background:
                'linear-gradient(#262626, #1e1d1d) padding-box, linear-gradient(135deg, rgba(233,234,0,0.9), rgba(165,205,215,0.55)) border-box',
              boxShadow: '0 25px 60px -15px rgba(233,234,0,0.18)',
            }}
          >
            {/* Ambient glows */}
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-[#e9ea00]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-[#a5cdd7]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute -top-3 left-8 bg-gradient-to-r from-[#e9ea00] to-[#a5cdd7] text-[#131313] font-['DM_Sans'] text-[10px] leading-[14px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_24px_rgba(233,234,0,0.45)]">
              ★ Elite
            </div>

            {/* Left: identity + price + CTA */}
            <div className="lg:w-[300px] lg:shrink-0">
              <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-widest block text-[#a5cdd7] pt-2 font-bold">{plan.subtitle}</span>
              <h3 className="font-['Oswald'] text-[30px] leading-[36px] uppercase text-white mt-1.5 font-semibold tracking-tight">{plan.name}</h3>
              <div className="my-6">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-['Oswald'] text-[56px] leading-[60px] lg:text-[64px] lg:leading-[68px] text-white font-bold">{plan.price}</span>
                  <span className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa]">{plan.period}</span>
                  {plan.priceNote && (
                    <span className="bg-[#e9ea00]/90 text-[#131313] rounded-full px-2.5 py-0.5 font-['DM_Sans'] text-[10px] leading-[14px] font-bold uppercase tracking-wider">
                      {plan.priceNote}
                    </span>
                  )}
                </div>
              </div>
              <a
                href={`${WHATSAPP_BASE}${plan.waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e9ea00] to-[#a5cdd7] text-[#131313] rounded-full px-6 py-2.5 font-['DM_Sans'] text-[11px] leading-[14px] font-bold uppercase tracking-wider transition-all hover:scale-[1.03] shadow-[0_8px_20px_rgba(233,234,0,0.22)]"
              >
                Seleccionar
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            {/* Right: features */}
            <div className="flex-1">
              <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-[0.18em] text-[#e9ea00] block mb-3 font-bold">
                Qué incluye
              </span>
              <ul className="flex flex-col gap-3">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 bg-[#201f1f]/80 rounded-lg px-4 py-2.5">
                    <span className="material-symbols-outlined text-[18px] text-[#e9ea00] mt-[1px]">check</span>
                    <span className="font-['DM_Sans'] text-[13px] leading-5 text-[#e5e2e1]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
