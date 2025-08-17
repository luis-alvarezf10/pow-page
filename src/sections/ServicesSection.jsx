import { useState, useEffect } from 'react';
import { Activity, BicepsFlexed, Dumbbell, Heart, Footprints, Waves, Utensils, Carrot} from 'lucide-react';
import Particles from '../components/Particles';
import ScrollFloat from '../components/ScrollFloatText';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);



  const nextSlide = () => {
    const increment = window.innerWidth < 768 ? 1 : 3;
    setCurrentIndex((prev) => (prev + increment >= services.length ? 0 : prev + increment));
  };

  const prevSlide = () => {
    const increment = window.innerWidth < 768 ? 1 : 3;
    setCurrentIndex((prev) => (prev - increment < 0 ? Math.max(0, services.length - increment) : prev - increment));
  };
  const services = [
    {
      title: 'CrossFit',
      description: 'Entrenamientos funcionales de alta intensidad que combinan cardio, fuerza y flexibilidad',
      icon: Heart,
      availability: 'Disponible solo en Sede Principal',
      image: 'https://eldiario.com/wp-content/uploads/2023/12/31-FitGames-2023-evento-de-Crossfit-en-el-Poliedro-de-Caracas-El-Diario-by-Jose-Daniel-Ramos-1200x800.jpg',
    },
    {
      title: 'Bodybuilding',
      description: 'Programas especializados en construcción muscular y definición corporal',
      icon: Dumbbell,
      availability: 'Disponible en ambas sedes',
      image: 'https://media.revistagq.com/photos/65b12cd1df908a3c3a4d7373/16:9/w_2560%2Cc_limit/fitness%2520portada.jpg',
    },
    {
      title: 'Entrenamiento Personalizado',
      description: 'Sesiones personalizadas uno a uno con entrenadores certificados',
      icon: BicepsFlexed,
      availability: 'Disponible en ambas sedes',
      image: 'https://leourbansport.com/wp-content/uploads/2020/10/que-es-el-entrenamiento-personal.jpg',
    },
    {
      title: 'Running',
      description: 'Plan de entrenamiento de running, sesiones cada 2 dias a la semana con la mejor planificación',
      icon: Footprints,
      availability: 'Gratuito',
      image: 'https://www.shape.com/thmb/XhaeY6hfYXOUEmpvxZKjOi_-H5A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/running-longer-or-faster-31e97070bda14ffc8afdea52094504c7.jpg',
    },
    {
      title: 'Swimming',
      description: 'Sesiones de nado, funcions básicas con profesores con años de experiencia',
      icon: Waves,
      availability: 'Disponible en Centro Gallego',
      image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1654602304.jpg?crop=0.6669811320754717xw:1xh;center,top&resize=640:*',
    },
    {
      title: 'Fisioterapia',
      description: 'Rehabilitación y reacondicionamiento de la mejor manera, y al mayor nivel',
      icon: Activity,
      availability: 'Disponible en ambas sedes',
      image: 'https://unicla.edu.mx/wp-content/uploads/2024/08/Portada_Blog_2024_22_Agosto-1920x960.webp',
    },
    {
      title: 'Nutrición',
      description: 'Plan de alimentación personalizado, basado en tus objetivos y preferencias',
      icon: Carrot,
      availability: 'Disponible en ambas sedes',
      image: 'https://d2lcsjo4hzzyvz.cloudfront.net/blog/wp-content/uploads/2022/04/12115018/Cua%CC%81ndo-y-por-que%CC%81-asistir-al-nutricionista.jpg',
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-[#0d0d0d] to-[#141414] pb-24 pt-10 relative z-1">
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <ScrollFloat
            animationDuration={2}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            textColor='#bce5ef'
          >
            Servicios
          </ScrollFloat>
          <p className="text-gray-400 text-lg w-full md:w-3/4">
            Ofrecemos una amplia gama de servicios diseñados para ayudarte a alcanzar tus objetivos fitness, sin importar tu nivel actual o tus metas específicas.
          </p>
        </div>
        {/* <div className="hidden lg:block absolute -left-90 top-1/2 -translate-y-1/2 
                w-[500px] h-[500px] 
                rounded-full 
                bg-[#819ca3] 
                opacity-40 blur-[120px] 
                shadow-[0_0_100px_40px_#c6e4ee]
                z-0">
        </div>
        <div className="hidden lg:block absolute -right-90 top-1/2 -translate-y-1/2 
                w-[500px] h-[500px] 
                rounded-full 
                bg-[#819ca3] 
                opacity-40 blur-[120px] 
                shadow-[0_0_100px_40px_#c6e4ee]
                z-0">
        </div> */}
        <div className="relative z-10">
          <div className="overflow-hidden overscroll-none touch-pan-y">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex / (window.innerWidth < 768 ? 1 : 3)) * 100}%)` }}
            >
              {[...services, ...services].map((service, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-black/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-[340px] relative ">
                    <div className="mt-6 flex items-center justify-center">
                      <div className="bg-[#819ca3] rounded-full p-5">
                        <service.icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="w-65 h-[1px] bg-white/30 my-4 mx-auto"></div>
                    <div className="px-8">
                      <h3 className="text-2xl font-bold text-white mb-3 text-center">{service.title}</h3>
                      <p className="text-gray-300 text-md leading-relaxed text-center">{service.description}</p>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 border border-[#fdff00]/40 rounded-full px-2 py-0.5 bg-[#fdff00]/10 w-65 text-center">
                      <span className="text-[#fdff00] text-sm font-semibold">{service.availability}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full transition-colors z-10 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full transition-colors z-10 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: Math.ceil(services.length / (window.innerWidth < 768 ? 1 : 3)) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * (window.innerWidth < 768 ? 1 : 3))}
                className={`w-12 h-2 rounded-full transition-colors duration-300 ${
                  Math.floor(currentIndex / (window.innerWidth < 768 ? 1 : 3)) === index 
                    ? 'bg-white shadow-lg shadow-white/50' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}