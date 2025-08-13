import StartButton from "../components/StartButton";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-gray-900 min-h-screen">
      <div className="relative isolate px-6 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#5d8d99] to-[#9addff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
        </div>
        
        <div className="mx-auto max-w-2xl py-20 sm:py-25 lg:py-30">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Nuestra historia e inicios <a href="#" className="font-semibold text-yellow-400"><span aria-hidden="true" className="absolute inset-0"></span>Leer más <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex items-end justify-center gap-2">
              <h1 className="text-5xl font-permanent-marker tracking-tight text-balance text-yellow-400 sm:text-9xl">Pow </h1>
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Fitness</h1>
            </div>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Potenciamos tu vida en 60 minutos</p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <StartButton />
              <button onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm/6 font-semibold text-white hover:text-yellow-400 transition-colors">Nuestras sedes <span aria-hidden="true">→</span></button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 p-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg sm:w-1/2">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Sede Principal</h3>
                <span className="text-white/80 text-sm">
                  Lechería, a 2 cuadras de Av. Principal de Lechería
                </span>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg sm:w-1/2">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Sede Smash</h3>
                <span className="text-white/80 text-sm">
                  Lechería, Av. Intercomunal, Atras de Inversan
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#5d8d99] to-[#9addff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
        </div>
      </div>
    </section>
  );
}