import { Zap, Users, Target, Crown, Rocket, Flame, Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Básico',
      price: '$45',
      period: '/mes',
      icon: Zap,
      features: ['3 días/semana','Elije tus días de entrenamiento', 'Horario fijo (según disponibilidad)']
    },
    {
      name: 'Completo',
      price: '$60',
      period: '/mes',
      icon: Flame,
      features: ['6 días/semana', 'Horario fijo (según disponibilidad)', 'Plan de nutrición gratis cada 3 meses'],
      popular: true
    },
    {
      name: 'Familiar',
      price: '$45',
      period: '/persona/mes',
      icon: Users,
      features: ['2+ personas', 'Horario fijo (según disponibilidad)', 'Plan de nutrición gratis cada 3 meses'],
    },
    {
      name: 'Premium',
      price: '$120',
      period: '/mes',
      icon: Rocket,
      features: ['Horario totalmente flexible', 'Rutina personalizada', 'Plan de nutrición incluido', 'Descuento en fisioterapia'],
    }
  ];

  return (
    <section id="pricing" className="relative bg-[#0d0d0d] py-24 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
        <div 
          style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} 
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5d8d99] to-[#9addff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        ></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#bce5ef] mb-4">Nuestros Precios</h2>
          <p className="text-gray-400 text-lg">Elige el plan que mejor se adapte a ti. Todos nuestros planes incluyen acceso a ambas sedes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`backdrop-blur-md border rounded-xl p-6 relative border-white/20 ${
                plan.popular ? 'bg-white/10 h-120' : 'bg-white/5 h-110'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#fdff00] text-black px-5 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="bg-white/5 w-16 h-16 flex justify-center items-center rounded-full mx-auto mb-3">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#fdff00] mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors cursor-pointer ${
                plan.popular 
                  ? 'bg-[#fdff00] text-black hover:bg-yellow-300 shadow-[0_0_10px_rgba(250,204,21,0.4)]' 
                  : 'bg-transparent bg-white/5 text-white hover:bg-white/10'
              }`}>
                Selecionar Plan
              </button>
              
              <ul className="space-y-3 mt-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm">
                    <Check className="text-[#fdff00] mr-2 w-4 h-4 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6">
        <div className="flex flex-col md:flex-row bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 gap-6 w-full md:w-200 mx-auto my-10 px-10 z-20">
          {/* Precio */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#fdff00]/20 to-transparent rounded-xl p-4 min-w-[120px]">
            <span className="text-xl text-gray-400 line-through">$720</span>
            <span className="text-5xl font-bold text-white">$600</span>
            <span className="text-sm text-gray-300">por año completo</span>
          </div>

          {/* Descripción */}
          <div className="flex-1 ">
            <h3 className="text-4xl font-bold text-[#fdff00] mb-1 text-center">Plan Anual</h3>
            <span className="block text-md text-gray-300 mb-4 text-center">
              Ahorra hasta un 16.67% con nuestro plan anual!
            </span>
            <ul className="space-y-2 text-white/90 list-disc list-inside list-none text-md">
              <li className="flex items-center"><Check className="text-[#fdff00] mr-2 w-4 h-4 flex-shrink-0" />Todas las clases incluidas</li>
              <li className="flex items-center"><Check className="text-[#fdff00] mr-2 w-4 h-4 flex-shrink-0" />Evaluación Física Semestral</li>
              <li className="flex items-center"><Check className="text-[#fdff00] mr-2 w-4 h-4 flex-shrink-0" />2 consultas nutricionales gratis</li>
            </ul>
          </div>

          {/* Acción */}
          <div className="flex flex-col items-center justify-center gap-2">
            <button className="bg-[#fdff00] w-full hover:bg-yellow-300 text-black font-semibold py-3 px-10 rounded-lg shadow-[0_0_12px_rgba(250,204,21,0.4)] transition cursor-pointer relative z-10">
              ¡Ahorra $120!
            </button>
            <span className="text-xs text-gray-400">Garantía de satisfacción 100%</span>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 top-300 transform-gpu overflow-hidden blur-3xl sm:top-40 z-10 pointer-events-none">
        <div style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#5d8d99] to-[#9addff] opacity-30  sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  );
}