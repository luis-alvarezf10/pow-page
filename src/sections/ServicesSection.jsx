import { useState, useEffect } from 'react';

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
      image: 'https://eldiario.com/wp-content/uploads/2023/12/31-FitGames-2023-evento-de-Crossfit-en-el-Poliedro-de-Caracas-El-Diario-by-Jose-Daniel-Ramos-1200x800.jpg',
      availability: 'Disponible solo en Sede Principal'
    },
    {
      title: 'Bodybuilding',
      description: 'Programas especializados en construcción muscular y definición corporal',
      image: 'https://media.revistagq.com/photos/65b12cd1df908a3c3a4d7373/16:9/w_2560%2Cc_limit/fitness%2520portada.jpg',
      availability: 'Disponible en ambas sedes'
    },
    {
      title: 'Entrenamiento Personal',
      description: 'Sesiones personalizadas uno a uno con entrenadores certificados',
      image: 'https://leourbansport.com/wp-content/uploads/2020/10/que-es-el-entrenamiento-personal.jpg',
      availability: 'Disponible en ambas sedes'
    },
    {
      title: 'Running',
      description: 'Plan de entrenamiento de running, sesiones cada 2 dias a la semana con la mejor planificación',
      image: 'https://www.feda.net/wp-content/uploads/2017/08/entrenamiento-fuerza-corredores.jpg',
      availability: 'Gratuito'
    },
    {
      title: 'Swimming',
      description: 'Sesiones de nado, funcions básicas con profesores con años de experiencia',
      image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1654602304.jpg?crop=0.6669811320754717xw:1xh;center,top&resize=640:*',
      availability: 'Disponible en Centro Gallego'
    },
    {
      title: 'Fisioterapia',
      description: 'Rehabilitación y reacondicionamiento de la mejor manera, y al mayor nivel',
      image: 'https://unicla.edu.mx/wp-content/uploads/2024/08/Portada_Blog_2024_22_Agosto-1920x960.webp',
      availability: 'Disponible en ambas sedes'
    },
    {
      title: 'Nutrición',
      description: 'Plan de alimentación personalizado, basado en tus objetivos y preferencias',
      image: 'https://d2lcsjo4hzzyvz.cloudfront.net/blog/wp-content/uploads/2022/04/12115018/Cua%CC%81ndo-y-por-que%CC%81-asistir-al-nutricionista.jpg',
      availability: 'Disponible en ambas sedes'
    },
  ];

  return (
    <section id="services" className="bg-gray-800 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <h2 className="text-6xl font-bold text-yellow-400 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 text-lg mx-auto">
            Ofrecemos una amplia gama de servicios diseñados para ayudarte a alcanzar tus objetivos fitness, sin importar tu nivel actual o tus metas específicas.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex / (window.innerWidth < 768 ? 1 : 3)) * 100}%)` }}
            >
              {[...services, ...services].map((service, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl h-[420px] relative">
                    <div className="relative h-56 flex-shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-700 hidden items-center justify-center text-gray-400">
                        <span className="text-4xl">📷</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6 pb-16">
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 ">{service.description}</p>
                    </div>
                    <div className="absolute bottom-4 left-6 border border-yellow-400/40 rounded-full px-2 py-0.5 bg-yellow-400/10">
                      <span className="text-yellow-400 text-xs font-semibold">{service.availability}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full transition-colors z-10"
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
                    ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' 
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