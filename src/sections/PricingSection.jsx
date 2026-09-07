const WHATSAPP_BASE = 'https://wa.me/584127563518?text=';

const plans = [
  {
    name: 'Básico',
    subtitle: 'Plan Inicio',
    price: '$45',
    period: '/ mes',
    features: ['3 días por semana', 'Horario fijo convenido', 'Acceso total a vestuarios y lockers'],
    waText: 'Quiero%20inscribirme%20en%20el%20Plan%20Básico',
    popular: false,
  },
  {
    name: 'Completo',
    subtitle: 'Alto Rendimiento',
    price: '$60',
    period: '/ mes',
    features: ['6 días por semana', 'Horario fijo asignado', 'Plan de nutrición gratis cada 3 meses', 'Acceso completo a WodUp App'],
    waText: 'Quiero%20inscribirme%20en%20el%20Plan%20Completo',
    popular: true,
  },
  {
    name: 'Familiar',
    subtitle: 'Comunidad / Dúo',
    price: '$45',
    period: '/ pers / mes',
    features: ['Válido desde 2+ personas', 'Horario fijo convenido', 'Plan nutricional individual'],
    waText: 'Quiero%20información%20del%20Plan%20Familiar',
    popular: false,
  },
  {
    name: 'Premium',
    subtitle: 'Ilimitado & VIP',
    price: '$120',
    period: '/ mes',
    features: ['Horario 100% flexible', 'Rutina 100% personalizada', 'Nutrición completa incluida', 'Descuentos en Fisioterapia'],
    waText: 'Quiero%20el%20Plan%20Premium%20VIP',
    popular: false,
  },
];

export default function PricingSection() {
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
        <p className="font-['DM_Sans'] text-[14px] leading-5 text-[#cac8aa] mt-2">
          Transparencia total. Sin cuotas de inscripción ocultas. Escala tu potencial con el esquema que mejor responda a tu rutina.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {plans.map((plan, i) => (
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

      {/* Annual Plan Banner */}
      <div className="w-full rounded-2xl bg-gradient-to-r from-[#2a2a2a] via-[#201f1f] to-[#2a2a2a] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <span className="bg-[#e9ea00] text-[#323200] px-2 py-1 rounded font-['DM_Sans'] text-[10px] leading-[14px] font-bold uppercase">Ahorra hasta un 16.67%</span>
            <span className="text-[#a5cdd7] font-['DM_Sans'] text-[10px] leading-[14px] uppercase font-semibold">¡Ahorra $120 al año!</span>
          </div>
          <h3 className="font-['Oswald'] text-[28px] leading-[34px] uppercase text-white font-semibold">Membresía Anual Todo Incluido</h3>
          <p className="font-['DM_Sans'] text-[14px] leading-5 text-[#cac8aa] max-w-2xl">
            Incluye acceso ilimitado a todas las clases, evaluación física semestral por escaneo y 2 consultas nutricionales gratuitas con Mariangela Álvarez.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
          <div className="text-center sm:text-right">
            <span className="line-through text-[#cac8aa] font-['Oswald'] text-[20px] leading-[26px] mr-2">$720</span>
            <span className="font-['Oswald'] text-[40px] leading-[44px] md:text-[64px] md:leading-[68px] text-white font-bold">$600</span>
            <span className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#a5cdd7] block uppercase font-semibold">/ Año Completo</span>
          </div>
          <a
            href={`${WHATSAPP_BASE}Hola,%20deseo%20activar%20el%20Plan%20Anual%20de%20$600`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e9ea00] text-[#323200] font-['DM_Sans'] text-[14px] leading-[18px] font-bold px-8 py-3 rounded-full uppercase tracking-wider transition-transform hover:scale-105 shadow-md"
          >
            Aprovechar Plan Anual
          </a>
        </div>
      </div>
    </section>
  );
}
