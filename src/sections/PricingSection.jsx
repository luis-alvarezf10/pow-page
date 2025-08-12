export default function PricingSection() {
  const plans = [
    {
      name: '3 Días',
      price: '$45',
      period: '/mes',
      features: ['3 días por semana', 'Acceso a todos los servicios', 'Horarios flexibles']
    },
    {
      name: '6 Días',
      price: '$60',
      period: '/mes',
      features: ['6 días por semana', 'Acceso completo', 'Clases grupales incluidas'],
      popular: true
    },
    {
      name: 'Plan Familiar',
      price: '$45',
      period: '/persona',
      features: ['2+ personas', 'Descuento por familia', 'Acceso completo'],
      subtitle: 'Cada persona adicional'
    },
    {
      name: 'Plan Anual',
      price: '$600',
      period: '/año',
      features: ['Acceso ilimitado', 'Ahorra $120 al año', 'Sin restricciones'],
      highlight: 'Ahorra $120',
      originalPrice: '$720'
    }
  ];

  return (
    <section id="pricing" className="relative bg-gray-900 py-24 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div 
          style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} 
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5d8d99] to-[#9addff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        ></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Nuestros Precios</h2>
          <p className="text-gray-400 text-lg">Elige el plan que mejor se adapte a ti</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white/5 backdrop-blur-md border rounded-xl p-6 relative ${
                plan.popular ? 'border-yellow-400 ring-2 ring-yellow-400/20' : 'border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {plan.highlight}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{plan.name}</h3>
                {plan.subtitle && (
                  <p className="text-gray-400 text-sm mb-2">{plan.subtitle}</p>
                )}
                <div className="flex items-baseline justify-center gap-2">
                  {plan.originalPrice && (
                    <span className="text-gray-500 line-through text-lg">{plan.originalPrice}</span>
                  )}
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-yellow-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 top-200 transform-gpu overflow-hidden blur-3xl sm:top-10 z-10">
        <div style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-yellow-400 to-orange-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  );
}