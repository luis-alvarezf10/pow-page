import { useState } from 'react';

const StaffSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const staff = [
    {
      name: "Jorman Sánchez",
      role: "Head Coach",
      specialty: "Entrenamiento funcional & CrossFit",
      experience: "5 años",
      image: "/assets/images/jorman.PNG",
      category: "coach"
    },
    {
      name: "Ricardo Lugo", 
      role: "Fisioterapeuta y Coach",
      specialty: "Fuerza y acondicionamiento",
      experience: "8 años",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQG6hbKaa0FjQg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695070949748?e=2147483647&v=beta&t=iLNX2Pn9kInFP3MIeD8zo_2bx3QI__fC1ul0I8oHpWY",
      category: "fisio"
    },
    {
      name: "Elimar Barrios",
      role: "exnadadora profesional y coach funcional ", 
      specialty: "Natacion, CrossFit y HIIT",
      experience: "6 años",
      image: "/assets/images/elimar.PNG",
      category: "coach"
    },
    {
      name: "Dra. Mariangela Álvarez",
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
    <section id="staff" className="bg-gray-800 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Nuestro Equipo</h2>
          <p className="text-gray-400 text-lg">
            Profesionales especializados y certificados para acompañarte en tu transformación
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex / (window.innerWidth < 768 ? 1 : 3)) * 100}%)` }}
            >
              {[...staff, ...staff].map((member, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl h-[480px] relative group">
                    <div className="relative h-64 flex-shrink-0 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-700 hidden items-center justify-center text-gray-400">
                        <span className="text-4xl">👤</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          member.category === 'coach' ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/40' :
                          member.category === 'fisio' ? 'bg-blue-400/20 text-blue-400 border border-blue-400/40' :
                          'bg-green-400/20 text-green-400 border border-green-400/40'
                        }`}>
                          {member.category === 'coach' ? 'Coach' : member.category === 'fisio' ? 'Fisio' : 'Nutrición'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 pb-16">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-yellow-400 font-semibold text-sm mb-2">{member.role}</p>
                      <p className="text-gray-300 text-sm mb-4">{member.specialty}</p>
                    </div>
                    
                    <div className="absolute bottom-4 left-6">
                      <span className="text-gray-400 text-xs">{member.experience} de experiencia</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full hover:bg-white/20 transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full hover:bg-white/20 transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: Math.ceil(staff.length / (window.innerWidth < 768 ? 1 : 3)) }).map((_, index) => (
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
};

export default StaffSection;