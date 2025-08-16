import { useState } from 'react';

const StaffSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const staff = [
    {
      name: "Jorman Sánchez",
      role: "Head Coach",
      specialty: "Running, Natación, Entrenamiento funcional & CrossFit",
      experience: "5 años",
      image: "/assets/images/jorman.PNG",
      category: "coach"
    },
    {
      name: "Ricardo Lugo", 
      role: "Fisioterapeuta y Coach Personal",
      specialty: "Fuerza & acondicionamiento",
      experience: "8 años",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQG6hbKaa0FjQg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695070949748?e=2147483647&v=beta&t=iLNX2Pn9kInFP3MIeD8zo_2bx3QI__fC1ul0I8oHpWY",
      category: "fisio"
    },
    {
      name: "Elimar Barrios",
      role: "Coach funcional ", 
      specialty: "Natacion, CrossFit & HIIT",
      experience: "6 años",
      image: "/assets/images/elimar.PNG",
      category: "coach"
    },
    {
      name: "Mariangela Álvarez",
      role: "Nutricionista",
      specialty: "Nutrición", 
      experience: "10 años",
      image: "/assets/images/mariangela.PNG",
      category: "nutri"
    },
  ];

  const nextSlide = () => {
    const increment = window.innerWidth < 768 ? 1 : 3;
    setCurrentIndex((prev) => (prev + increment >= staff.length ? 0 : prev + increment));
  };

  const prevSlide = () => {
    const increment = window.innerWidth < 768 ? 1 : 3;
    setCurrentIndex((prev) => (prev - increment < 0 ? Math.max(0, staff.length - increment) : prev - increment));
  };

  return (
    <section id="staff" className="bg-gradient-to-t from-[#080808] to-[#0d0d0d] py-10 relative" style={{backgroundImage: 'url(/assets/images/cemento.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col justify-center items-center text-center mb-10">
          <span className='text-white text-md font-semibold'>Conoce a nuestro</span>
          <span className='text-[#c6e4ee] font-bold text-6xl'>Staff</span>
          <p className="text-white text-lg my-5">
            Profesionales especializados y certificados para acompañarte en tu transformación
          </p>
          
          {/* Botones de navegación solo en desktop */}
          <div className='hidden md:flex w-full items-end justify-end gap-3 relative right-10'>
            <button 
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white p-2 rounded-full hover:bg-white/20 transition-colors z-10 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white p-2 rounded-full hover:bg-white/20 transition-colors z-10 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
          
        <div className="relative">
          {/* Desktop: Carousel con flechas */}
          <div className="hidden md:block overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex / 3) * 100}%)` }}
            >
              {[...staff, ...staff].map((member, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl h-[450px] relative group">
                    <div className="relative h-60 flex-shrink-0 overflow-hidden mx-5 mt-5 rounded-lg border border-white/10">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-100 h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-700 hidden items-center justify-center text-gray-400">
                        <span className="text-4xl">👤</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          member.category === 'coach' ? 'bg-yellow-400/50 text-white border border-yellow-400/40' :
                          member.category === 'fisio' ? 'bg-blue-400/50 text-white border border-blue-400/40' :
                          'bg-green-400/50 text-white border border-green-400/40'
                        }`}>
                          {member.category === 'coach' ? 'Coach' : member.category === 'fisio' ? 'Fisioterapeuta' : 'Nutricionista'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 pb-16">
                      <h3 className="text-2xl font-bold text-white mb-1 text-center">{member.name}</h3>
                      <div className="w-65 h-[1px] bg-white/30 my-4 mx-auto"></div>
                      <p className="text-gray-200 font-semibold text-md mb-2">{member.role}</p>
                      <p className="text-gray-200 text-sm mb-4">{member.specialty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile: Scroll horizontal */}
          <div className="md:hidden overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-6">
              {staff.map((member, index) => (
                <div key={index} className="w-80 flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl h-[450px] relative group">
                    <div className="relative h-60 flex-shrink-0 overflow-hidden mx-5 mt-5 rounded-lg border border-white/10">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-100 h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-700 hidden items-center justify-center text-gray-400">
                        <span className="text-4xl">👤 Not available</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          member.category === 'coach' ? 'bg-yellow-400/50 text-white border border-yellow-400/40' :
                          member.category === 'fisio' ? 'bg-blue-400/50 text-white border border-blue-400/40' :
                          'bg-green-400/50 text-white border border-green-400/40'
                        }`}>
                          {member.category === 'coach' ? 'Coach' : member.category === 'fisio' ? 'Fisioterapeuta' : 'Nutricionista'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 pb-16">
                      <h3 className="text-2xl font-bold text-white mb-1 text-center">{member.name}</h3>
                      <div className="w-65 h-[1px] bg-white/30 my-4 mx-auto"></div>
                      <p className="text-gray-300 font-semibold text-md mb-2">{member.role}</p>
                      <p className="text-gray-300 text-sm">{member.specialty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicadores solo en desktop */}
          <div className="hidden md:flex justify-center mt-12 gap-3">
            {Array.from({ length: Math.ceil(staff.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-12 h-2 rounded-full transition-colors duration-300 ${
                  Math.floor(currentIndex / 3) === index 
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
};

export default StaffSection;