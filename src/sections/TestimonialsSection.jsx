import { Quote } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ScrollFloat from '../components/ScrollFloatText';
import Particles from '../components/Particles';
import SpotlightCard from '../components/SpotLigthCard';

const TestimonialsSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: "María González",
      text: "En solo 60 minutos sentí una energía increíble. El mejor entrenamiento de mi vida."
    },
    {
      name: "Carlos Ruiz",
      text: "Resultados visibles desde la primera sesión. Totalmente recomendado."
    },
    {
      name: "Ana López",
      text: "El equipo es excepcional y el ambiente motivador. No puedo estar más feliz."
    },
    {
      name: "Diego Martín",
      text: "Nunca pensé que podría lograr tanto en tan poco tiempo. Increíble experiencia."
    }
  ];

  // Auto scroll
  useEffect(() => {
    const startAutoScroll = () => {
      if (!isDragging && !isHovered && containerRef.current) {
        intervalRef.current = setInterval(() => {
          const container = containerRef.current;
          if (container) {
            container.scrollLeft += 1;
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
              container.scrollLeft = 0;
            }
          }
        }, 30);
      }
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    if (!isDragging && !isHovered) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return stopAutoScroll;
  }, [isDragging, isHovered]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseleave', handleMouseUp);
      return () => container.removeEventListener('mouseleave', handleMouseUp);
    }
  }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden" style={{backgroundImage: 'url(/assets/images/cemento.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="bg-gradient-to-b from-[#141414] via-[#141414]/90 to-transparent pb-20">
        {/* <div aria-hidden="true" className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
          <div 
            style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} 
            className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5d8d99] to-[#9addff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          ></div>
        </div> */}
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 mb-16 relative z-20">
          <div className="text-center">
            <ScrollFloat
              animationDuration={2}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              textColor='#bce5ef'
            >
              Clientes
            </ScrollFloat>
            <p className="text-gray-300 text-lg">Testimonios reales de personas que transformaron su vida</p>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab select-none px-6"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="w-96 flex-shrink-0">
              <SpotlightCard className="h-80 flex flex-col justify-center text-center">
                <Quote className="w-12 h-12 text-gray-300/10  mb-6" />
                <p className="text-white mb-6 text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gray-400 text-lg">{testimonial.name}</div>
              </SpotlightCard>
            </div>
          ))}
        </div>
{/*         
        <div aria-hidden="true" className="absolute inset-x-0 top-300 transform-gpu overflow-hidden blur-3xl sm:top-40 z-10 pointer-events-none">
          <div style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#5d8d99] to-[#9addff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;